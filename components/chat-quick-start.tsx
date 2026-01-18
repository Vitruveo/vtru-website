"use client";

import type { UseChatHelpers } from "@ai-sdk/react";
import { useEffect, useState } from "react";
import type { ChatMessage } from "@/lib/types";

interface QuickStartProps {
  sendMessage: UseChatHelpers<ChatMessage>["sendMessage"];
}

const categories = [
  {
    title: "Vitruveo Blockchain",
    questions: [
      "What is the current block number?",
      "What are the Vitruveo core contracts?",
      "How do I add Vitruveo to MetaMask?",
      "What is the VTRU token?",
      "What are Protocol Smart Contracts (PSCs)?",
      "How does the HOST protocol work?",
    ],
  },
  {
    title: "Vitruveo Website",
    questions: [
      "What is Vitruveo?",
      "What makes Vitruveo an 'Active Blockchain'?",
      "How can I explore the ecosystem?",
      "What developer tools are available?",
      "How do I use the RNG precompile?",
      "What is the Passkey precompile for?",
    ],
  },
];

export function ChatQuickStart({ sendMessage }: QuickStartProps) {
  const [mcpUrl, setMcpUrl] = useState("");

  useEffect(() => {
    setMcpUrl(`${window.location.origin}/mcp`);
  }, []);

  const handleClick = (question: string) => {
    sendMessage({
      role: "user",
      parts: [{ type: "text", text: question }],
    });
  };

  return (
    <div className="quick-start-panel">
      <div className="quick-start-header">
        <h2>Ask Vitruveo AI</h2>
        <p className="quick-start-description">
          Vitruveo is an AI-enabled blockchain powered by the Model Context Protocol (MCP).
          Query live blockchain data or ask any question about this website.
        </p>
        <p className="quick-start-mcp">
          <span className="mcp-label">MCP Endpoint:</span>
          <code className="mcp-url">{mcpUrl}</code>
        </p>
      </div>

      {categories.map((category) => (
        <div key={category.title} className="quick-start-category">
          <h3>{category.title}</h3>
          <div className="quick-start-questions">
            {category.questions.map((question) => (
              <button
                key={question}
                onClick={() => handleClick(question)}
                className="quick-start-bubble"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
