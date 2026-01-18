"use client";

import { memo } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "./icons";

function PureChatHeader({
  chatId,
  onNewChat,
}: {
  chatId: string;
  onNewChat?: () => void;
}) {
  return (
    <header className="sticky top-0 flex items-center gap-2 bg-background px-2 py-1.5 md:px-2">
      <Button
        className="ml-auto h-8 px-2 md:h-fit md:px-2"
        onClick={onNewChat}
        variant="outline"
      >
        <PlusIcon />
        <span className="md:sr-only">New Chat</span>
      </Button>
    </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return prevProps.chatId === nextProps.chatId;
});
