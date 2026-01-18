import Script from "next/script";
import { DataStreamProvider } from "@/components/data-stream-provider";
import { SiteHeader } from "@/components/site/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../(site)/site.css";
import "./chat-layout.css";

export const experimental_ppr = true;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <SiteHeader />
      <main className="chat-main">
        <DataStreamProvider>
          {children}
        </DataStreamProvider>
      </main>
    </>
  );
}
