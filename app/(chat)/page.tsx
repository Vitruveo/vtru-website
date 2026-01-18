import { Chat } from "@/components/chat";
import { DataStreamHandler } from "@/components/data-stream-handler";

export default function Page() {
  return (
    <>
      <Chat isReadonly={false} />
      <DataStreamHandler />
    </>
  );
}
