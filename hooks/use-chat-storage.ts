"use client";

import { useCallback, useEffect, useState } from "react";
import type { ChatMessage } from "@/lib/types";

const STORAGE_KEY = "vitruveo-chat";
const CHAT_ID_KEY = "vitruveo-chat-id";

interface StoredChat {
  id: string;
  messages: ChatMessage[];
  updatedAt: number;
}

export function useChatStorage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [chatId, setChatId] = useState<string>("");
  const [storedMessages, setStoredMessages] = useState<ChatMessage[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedId = localStorage.getItem(CHAT_ID_KEY);
      const storedData = localStorage.getItem(STORAGE_KEY);

      if (storedId && storedData) {
        const parsed: StoredChat = JSON.parse(storedData);
        if (parsed.id === storedId) {
          setChatId(storedId);
          setStoredMessages(parsed.messages);
        } else {
          // Mismatch, generate new ID
          const newId = crypto.randomUUID();
          setChatId(newId);
          localStorage.setItem(CHAT_ID_KEY, newId);
          localStorage.removeItem(STORAGE_KEY);
        }
      } else {
        // No stored data, generate new ID
        const newId = crypto.randomUUID();
        setChatId(newId);
        localStorage.setItem(CHAT_ID_KEY, newId);
      }
    } catch (error) {
      console.error("Failed to load chat from localStorage:", error);
      const newId = crypto.randomUUID();
      setChatId(newId);
    }
    setIsLoaded(true);
  }, []);

  // Save messages to localStorage
  const saveMessages = useCallback(
    (messages: ChatMessage[]) => {
      if (!chatId) return;

      try {
        const data: StoredChat = {
          id: chatId,
          messages,
          updatedAt: Date.now(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (error) {
        console.error("Failed to save chat to localStorage:", error);
      }
    },
    [chatId]
  );

  // Clear chat and start fresh
  const clearChat = useCallback(() => {
    const newId = crypto.randomUUID();
    setChatId(newId);
    setStoredMessages([]);
    localStorage.setItem(CHAT_ID_KEY, newId);
    localStorage.removeItem(STORAGE_KEY);
    return newId;
  }, []);

  return {
    isLoaded,
    chatId,
    storedMessages,
    saveMessages,
    clearChat,
  };
}
