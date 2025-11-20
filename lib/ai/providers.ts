import { gateway } from "@ai-sdk/gateway";
//import { google } from "@ai-sdk/google";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";
import { isTestEnvironment } from "../constants";

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        artifactModel,
        chatModel,
        reasoningModel,
        titleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "chat-model-reasoning": reasoningModel,
          "title-model": titleModel,
          "artifact-model": artifactModel,
        },
      });
    })()
  : 
    // customProvider({
    //   languageModels: {
    //     "chat-model": gateway.languageModel("xai/grok-2-vision-1212"),
    //     "chat-model-reasoning": wrapLanguageModel({
    //       model: gateway.languageModel("xai/grok-3-mini"),
    //       middleware: extractReasoningMiddleware({ tagName: "think" }),
    //     }),
    //     "title-model": gateway.languageModel("xai/grok-2-1212"),
    //     "artifact-model": gateway.languageModel("xai/grok-2-1212"),
    //   },
    // });
    customProvider({
      languageModels: {
        "chat-model": gateway.languageModel("anthropic/claude-sonnet-4"),
        "chat-model-reasoning": wrapLanguageModel({
          model: gateway.languageModel("anthropic/claude-sonnet-4"),
          middleware: extractReasoningMiddleware({ tagName: "think" }),
        }),
        "title-model": gateway.languageModel("anthropic/claude-sonnet-4"),
        "artifact-model": gateway.languageModel("anthropic/claude-sonnet-4"),
      },
    // customProvider({
    //   languageModels: {
    //   // *** Use the cost-effective model and define the tool ***
    //   "chat-model": google("gemini-2.5-anthropic/claude-sonnet-4-lite"), // Use the Lite model for cost-saving
    //   "chat-model-reasoning": wrapLanguageModel({
    //     model: google("gemini-2.5-flash-lite"), // Use same model for simple reasoning
    //     middleware: extractReasoningMiddleware({ tagName: "think" }),
    //   }),
    //   "title-model": google("gemini-2.5-flash-lite"),
    //   "artifact-model": google("gemini-2.5-flash-lite"),
    // },
  });