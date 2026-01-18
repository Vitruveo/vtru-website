import { z } from "zod";

// More permissive schema to handle AI SDK message formats
const partSchema = z.object({
  type: z.string(),
  text: z.string().optional(),
}).passthrough();

const messageSchema = z.object({
  id: z.string(),
  role: z.enum(["system", "user", "assistant"]),
  parts: z.array(partSchema).optional(),
}).passthrough();

export const postRequestBodySchema = z.object({
  id: z.string(),
  message: messageSchema,
  messages: z.array(messageSchema).optional(),
  selectedChatModel: z.enum(["chat-model", "chat-model-reasoning"]),
  selectedVisibilityType: z.enum(["public", "private"]).optional(),
});

export type PostRequestBody = z.infer<typeof postRequestBodySchema>;
