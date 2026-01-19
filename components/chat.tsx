"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { ChatQuickStart } from "@/components/chat-quick-start";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useArtifactSelector } from "@/hooks/use-artifact";
import { useChatStorage } from "@/hooks/use-chat-storage";
import { ChatSDKError } from "@/lib/errors";
import type { ChatMessage } from "@/lib/types";
import type { AppUsage } from "@/lib/usage";
import { fetchWithErrorHandlers, generateUUID } from "@/lib/utils";
import { Artifact } from "./artifact";
import { useDataStream } from "./data-stream-provider";
import { Messages } from "./messages";
import { MultimodalInput } from "./multimodal-input";
import { toast } from "./toast";

const DEFAULT_MODEL = "chat-model";

export function Chat({
  isReadonly,
  initialLastContext,
  initialInput,
}: {
  isReadonly: boolean;
  initialLastContext?: AppUsage;
  initialInput?: string;
}) {
  const { isLoaded, chatId, storedMessages, saveMessages, clearChat } = useChatStorage();

  // Show loading state while localStorage is being read
  if (!isLoaded || !chatId) {
    return (
      <div className="flex h-dvh items-center justify-center bg-background">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <ChatInner
      chatId={chatId}
      initialMessages={storedMessages}
      isReadonly={isReadonly}
      initialLastContext={initialLastContext}
      initialInput={initialInput}
      saveMessages={saveMessages}
      clearChat={clearChat}
    />
  );
}

function ChatInner({
  chatId,
  initialMessages,
  isReadonly,
  initialLastContext,
  initialInput,
  saveMessages,
  clearChat,
}: {
  chatId: string;
  initialMessages: ChatMessage[];
  isReadonly: boolean;
  initialLastContext?: AppUsage;
  initialInput?: string;
  saveMessages: (messages: ChatMessage[]) => void;
  clearChat: () => string;
}) {
  const { setDataStream } = useDataStream();

  const [input, setInput] = useState<string>(initialInput || "");
  const [usage, setUsage] = useState<AppUsage | undefined>(initialLastContext);
  const [showCreditCardAlert, setShowCreditCardAlert] = useState(false);
  const hasAutoSentRef = useRef(false);

  const {
    messages,
    setMessages,
    sendMessage,
    status,
    stop,
    regenerate,
  } = useChat<ChatMessage>({
    id: chatId,
    messages: initialMessages,
    experimental_throttle: 100,
    generateId: generateUUID,
    transport: new DefaultChatTransport({
      api: "/api/chat",
      fetch: fetchWithErrorHandlers,
      prepareSendMessagesRequest(request) {
        return {
          body: {
            id: request.id,
            message: request.messages.at(-1),
            messages: request.messages.slice(0, -1),
            selectedChatModel: DEFAULT_MODEL,
            ...request.body,
          },
        };
      },
    }),
    onData: (data) => {
      // Handle custom data events like usage
      if (data && typeof data === 'object' && 'type' in data) {
        const event = data as { type: string; data: unknown };
        if (event.type === 'data-usage') {
          setUsage(event.data as AppUsage);
        }
      }
    },
    onError: (error) => {
      if (error instanceof ChatSDKError) {
        if (
          error.message?.includes("AI Gateway requires a valid credit card")
        ) {
          setShowCreditCardAlert(true);
        } else {
          toast({
            type: "error",
            description: error.message,
          });
        }
      }
    },
  });

  // Auto-send initial input from URL params (only if no existing messages)
  useEffect(() => {
    if (initialInput && !hasAutoSentRef.current && status === 'ready' && messages.length === 0) {
      hasAutoSentRef.current = true;
      sendMessage({
        role: 'user',
        parts: [{ type: 'text', text: initialInput }],
      });
      setInput('');
    }
  }, [initialInput, status, messages.length, sendMessage]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages, saveMessages]);

  const isArtifactVisible = useArtifactSelector((state) => state.isVisible);

  const handleClearChat = () => {
    clearChat();
    setMessages([]);
  };

  return (
    <>
      <div className="chat-layout">
        {/* Quick Start Panel - Desktop Only */}
        <aside className="chat-sidebar">
          <ChatQuickStart sendMessage={sendMessage} />
          <button
            onClick={handleClearChat}
            className="clear-chat-btn"
            title="Clear chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
            </svg>
          </button>
        </aside>

        {/* Chat Area */}
        <div className="chat-area">
          <div className="overscroll-behavior-contain flex h-full min-w-0 touch-pan-y flex-col bg-background">
            <Messages
              chatId={chatId}
              isArtifactVisible={isArtifactVisible}
              isReadonly={isReadonly}
              messages={messages}
              regenerate={regenerate}
              selectedModelId={DEFAULT_MODEL}
              setMessages={setMessages}
              status={status}
              votes={undefined}
            />

            <div className="chat-input-container">
              {!isReadonly && (
                <MultimodalInput
                  chatId={chatId}
                  input={input}
                  messages={messages}
                  selectedVisibilityType="private"
                  sendMessage={sendMessage}
                  setInput={setInput}
                  setMessages={setMessages}
                  status={status}
                  stop={stop}
                  usage={usage}
                  onClearChat={handleClearChat}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Artifact
        chatId={chatId}
        input={input}
        isReadonly={isReadonly}
        messages={messages}
        regenerate={regenerate}
        selectedModelId={DEFAULT_MODEL}
        selectedVisibilityType="private"
        sendMessage={sendMessage}
        setInput={setInput}
        setMessages={setMessages}
        status={status}
        stop={stop}
        votes={undefined}
      />

      <AlertDialog
        onOpenChange={setShowCreditCardAlert}
        open={showCreditCardAlert}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Activate AI Gateway</AlertDialogTitle>
            <AlertDialogDescription>
              This application requires{" "}
              {process.env.NODE_ENV === "production" ? "the owner" : "you"} to
              activate Vercel AI Gateway.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                window.open(
                  "https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%3Fmodal%3Dadd-credit-card",
                  "_blank"
                );
                window.location.href = "/";
              }}
            >
              Activate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
