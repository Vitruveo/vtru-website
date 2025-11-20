import { createMcpHandler } from "mcp-handler";
import { google } from "@ai-sdk/google"; // Gemini provider

import { registerEVMResources } from "../../lib/mcp/resources.ts";
import { registerEVMTools } from "../../lib/mcp/tools.ts";
import { registerEVMPrompts } from "../../lib/mcp/prompts.ts";

// Use Node.js runtime (not edge) for viem and Node APIs
export const runtime = "nodejs";

// Initialize MCP handler
const handler = createMcpHandler(
  (server) => {
    registerEVMResources(server);
    registerEVMTools(server);
    registerEVMPrompts(server);

    console.error("Vitruveo MCP Server initialized (Next.js + mcp-handler)");
  },
  {},
  {
    // Handler options
    provider: google("gemini-2.5-flash-lite"),
    basePath: "",
    verboseLogs: true,
  }
);


export { handler as GET, handler as POST, handler as DELETE };
