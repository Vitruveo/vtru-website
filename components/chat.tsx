"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useState } from "react";
import { ChatHeader } from "@/components/chat-header";
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
}: {
  isReadonly: boolean;
  initialLastContext?: AppUsage;
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
  saveMessages,
  clearChat,
}: {
  chatId: string;
  initialMessages: ChatMessage[];
  isReadonly: boolean;
  initialLastContext?: AppUsage;
  saveMessages: (messages: ChatMessage[]) => void;
  clearChat: () => string;
}) {
  const { setDataStream } = useDataStream();

  const [input, setInput] = useState<string>("");
  const [usage, setUsage] = useState<AppUsage | undefined>(initialLastContext);
  const [showCreditCardAlert, setShowCreditCardAlert] = useState(false);

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

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages, saveMessages]);

  const isArtifactVisible = useArtifactSelector((state) => state.isVisible);

  return (
    <>
      <div className="overscroll-behavior-contain flex h-dvh min-w-0 touch-pan-y flex-col bg-background">
        <ChatHeader chatId={chatId} onNewChat={() => {
          clearChat();
          setMessages([]);
        }} />

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

        <div className="sticky bottom-0 z-1 mx-auto flex w-full max-w-4xl gap-2 border-t-0 bg-background px-2 pb-3 md:px-4 md:pb-4">
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
            />
          )}
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
