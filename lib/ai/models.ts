export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "Gemini Flash Lite",
    description: "Designed for high-volume, low-latency, and cost-sensitive tasks",
  },
];
