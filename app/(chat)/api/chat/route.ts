import { geolocation } from "@vercel/functions";
import {
  convertToModelMessages,
  createUIMessageStream,
  JsonToSseTransformStream,
  smoothStream,
  stepCountIs,
  streamText,
} from "ai";
import { unstable_cache as cache } from "next/cache";
import type { ModelCatalog } from "tokenlens/core";
import { fetchModels } from "tokenlens/fetch";
import { getUsage } from "tokenlens/helpers";
import { experimental_createMCPClient as createMCPClient } from "@ai-sdk/mcp";
import type { ChatModel } from "@/lib/ai/models";
import { type RequestHints, systemPrompt } from "@/lib/ai/prompts";
import { myProvider } from "@/lib/ai/providers";
import { createDocument } from "@/lib/ai/tools/create-document";
import { requestSuggestions } from "@/lib/ai/tools/request-suggestions";
import { updateDocument } from "@/lib/ai/tools/update-document";
import { isProductionEnvironment } from "@/lib/constants";
import { ChatSDKError } from "@/lib/errors";
import type { ChatMessage } from "@/lib/types";
import type { AppUsage } from "@/lib/usage";
import { generateUUID } from "@/lib/utils";
import { type PostRequestBody, postRequestBodySchema } from "./schema";

export const maxDuration = 60;

// Fix MCP tool schemas for Gemini compatibility
// Gemini requires array types to have an `items` field
function fixToolSchemas(tools: Record<string, any>): Record<string, any> {
  const fixed: Record<string, any> = {};

  for (const [name, tool] of Object.entries(tools)) {
    if (tool.inputSchema?.jsonSchema) {
      fixed[name] = {
        ...tool,
        inputSchema: {
          ...tool.inputSchema,
          jsonSchema: fixSchema(tool.inputSchema.jsonSchema),
        },
      };
    } else {
      fixed[name] = tool;
    }
  }

  return fixed;
}

function fixSchema(schema: any): any {
  if (!schema || typeof schema !== 'object') return schema;

  const result = { ...schema };

  // Fix array types missing items
  if (result.type === 'array' && !result.items) {
    result.items = { type: 'string' };
  }

  // Recursively fix properties
  if (result.properties) {
    result.properties = {};
    for (const [key, value] of Object.entries(schema.properties)) {
      result.properties[key] = fixSchema(value);
    }
  }

  // Recursively fix items
  if (result.items && typeof result.items === 'object') {
    result.items = fixSchema(result.items);
  }

  return result;
}

const getTokenlensCatalog = cache(
  async (): Promise<ModelCatalog | undefined> => {
    try {
      return await fetchModels();
    } catch (err) {
      console.warn(
        "TokenLens: catalog fetch failed, using default catalog",
        err
      );
      return;
    }
  },
  ["tokenlens-catalog"],
  { revalidate: 24 * 60 * 60 }
);

export async function POST(request: Request) {
  let requestBody: PostRequestBody;

  try {
    const json = await request.json();
    requestBody = postRequestBodySchema.parse(json);
  } catch (_) {
    return new ChatSDKError("bad_request:api").toResponse();
  }

  try {
    const {
      id,
      message,
      selectedChatModel,
      messages: existingMessages = [],
    }: {
      id: string;
      message: ChatMessage;
      selectedChatModel: ChatModel["id"];
      messages?: ChatMessage[];
    } = requestBody;

    const uiMessages = [...existingMessages.slice(-10), message];

    const { longitude, latitude, city, country } = geolocation(request);

    const requestHints: RequestHints = {
      longitude,
      latitude,
      city,
      country,
    };

    const host = request.headers.get("host") || "localhost:3000";
    const protocol = host.includes("localhost") ? "http" : "https";
    const mcpUrl = `${protocol}://${host}/mcp`;

    const mcpClient = await createMCPClient({
      transport: {
        type: "http",
        url: mcpUrl,
      },
    });
    const rawVitruveo = await mcpClient.tools();
    const vitruveo = fixToolSchemas(rawVitruveo);

    let finalMergedUsage: AppUsage | undefined;

    const stream = createUIMessageStream({
      execute: async ({ writer: dataStream }) => {
        const result = streamText({
          model: myProvider.languageModel(selectedChatModel),
          system: systemPrompt({ selectedChatModel, requestHints }),
          messages: await convertToModelMessages(uiMessages),
          stopWhen: stepCountIs(5),
          experimental_transform: smoothStream({ chunking: "word" }),
          tools: {
            ...vitruveo,
            createDocument: createDocument({ session: null, dataStream }),
            updateDocument: updateDocument({ session: null, dataStream }),
            requestSuggestions: requestSuggestions({
              session: null,
              dataStream,
            }),
          },
          experimental_telemetry: {
            isEnabled: isProductionEnvironment,
            functionId: "stream-text",
          },
          onFinish: async ({ usage }) => {
            try {
              await mcpClient.close();
              const providers = await getTokenlensCatalog();
              const modelId =
                myProvider.languageModel(selectedChatModel).modelId;
              if (!modelId) {
                finalMergedUsage = usage;
                dataStream.write({
                  type: "data-usage",
                  data: finalMergedUsage,
                });
                return;
              }

              if (!providers) {
                finalMergedUsage = usage;
                dataStream.write({
                  type: "data-usage",
                  data: finalMergedUsage,
                });
                return;
              }

              const summary = getUsage({ modelId, usage, providers });
              finalMergedUsage = { ...usage, ...summary, modelId } as AppUsage;
              dataStream.write({ type: "data-usage", data: finalMergedUsage });
            } catch (err) {
              console.warn("TokenLens enrichment failed", err);
              finalMergedUsage = usage;
              dataStream.write({ type: "data-usage", data: finalMergedUsage });
            }
          },
        });

        result.consumeStream();

        dataStream.merge(
          result.toUIMessageStream({
            sendReasoning: true,
          })
        );
      },
      generateId: generateUUID,
      onError: () => {
        return "Oops, an error occurred!";
      },
    });

    return new Response(stream.pipeThrough(new JsonToSseTransformStream()));
  } catch (error) {
    const vercelId = request.headers.get("x-vercel-id");

    if (error instanceof ChatSDKError) {
      return error.toResponse();
    }

    if (
      error instanceof Error &&
      error.message?.includes(
        "AI Gateway requires a valid credit card on file to service requests"
      )
    ) {
      return new ChatSDKError("bad_request:activate_gateway").toResponse();
    }

    console.error("Unhandled error in chat API:", error, { vercelId });
    return new ChatSDKError("offline:chat").toResponse();
  }
}
