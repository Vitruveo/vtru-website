'use client';

import { Chat } from "@/components/chat";
import { DataStreamHandler } from "@/components/data-stream-handler";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ChatWithParams() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || undefined;

  return (
    <>
      <Chat isReadonly={false} initialInput={initialQuery} />
      <DataStreamHandler />
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="flex h-dvh items-center justify-center bg-background"><div className="text-muted-foreground">Loading...</div></div>}>
      <ChatWithParams />
    </Suspense>
  );
}
