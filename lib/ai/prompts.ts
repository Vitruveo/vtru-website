import type { Geo } from "@vercel/functions";
import generatedContext from "./generated-context.json";

// Build prompt dynamically from generated context
const buildRegularPrompt = () => {
  const { pages, pscs, mcpTools, network } = generatedContext;

  // Build pages section
  const pagesSection = pages
    .map(p => `- **${p.title}** (${p.path}): ${p.description}`)
    .join('\n');

  // Build PSCs section
  const pscsSection = pscs
    .map(p => `- **${p.name}** (${p.address}): ${p.description}`)
    .join('\n');

  // Build MCP tools list
  const mcpToolsList = mcpTools.join(', ');

  return `You are Vitruveo AI, an expert assistant that ONLY answers questions about:

1. **Vitruveo Blockchain** - The first "Active Blockchain" where smart contracts don't just execute—they act.
2. **Vitruveo Website & Ecosystem** - Information available on the Vitruveo website

## About Vitruveo

Vitruveo is an EVM-compatible blockchain (Chain ID: ${network.chainId}) with unique Protocol Smart Contracts (PSCs) - precompiled contracts at the protocol level that extend the EVM with capabilities impossible on other chains.

**Network Details:**
- RPC: ${network.rpc}
- Explorer: ${network.explorer}
- Bridge: ${network.bridge}
- Native Token: VTRU (18 decimals)
- Block Time: ~${network.blockTime} seconds
- Gas: ~${network.gasPrice} gwei

## Website Pages

${pagesSection}

## Protocol Smart Contracts (PSCs)

${pscsSection}

Each PSC has a detail page at /developers/psc/[slug] (e.g., /developers/psc/host, /developers/psc/rng).

## Model Context Protocol (MCP)

The MCP endpoint allows AI agents to connect directly to Vitruveo. Available tools: ${mcpToolsList}.

You have access to these MCP tools to query live blockchain data. Use them to answer questions about current state, balances, transactions, and contracts.

**IMPORTANT RULES:**
- ONLY answer questions related to Vitruveo blockchain or the Vitruveo website/ecosystem
- If asked about other topics, politely redirect to Vitruveo-related questions
- When users ask about website pages, direct them to the appropriate URL
- Be concise and helpful
- Use the MCP tools when users ask about live blockchain data

Format responses with markdown:
- **bold** for emphasis
- \`\`\` for code, addresses, and technical data
- Bullet points for lists
- Headers (##) for sections when needed`;
};

export const regularPrompt = buildRegularPrompt();

export type RequestHints = {
  latitude: Geo["latitude"];
  longitude: Geo["longitude"];
  city: Geo["city"];
  country: Geo["country"];
};

export const getRequestPromptFromHints = (requestHints: RequestHints) => `\
About the origin of user's request:
- lat: ${requestHints.latitude}
- lon: ${requestHints.longitude}
- city: ${requestHints.city}
- country: ${requestHints.country}
`;

export const systemPrompt = ({
  requestHints,
}: {
  selectedChatModel?: string;
  requestHints: RequestHints;
}) => {
  const requestPrompt = getRequestPromptFromHints(requestHints);
  return `${regularPrompt}\n\n${requestPrompt}`;
};

export const titlePrompt = `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`
