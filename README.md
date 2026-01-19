# Vitruveo Website & AI Chat

## Project Overview

This is the official Vitruveo website with an integrated AI chat assistant. The site showcases Vitruveo as "The First Active Blockchain" - an EVM-compatible chain with 12 Protocol Smart Contracts (PSCs/precompiles) that give smart contracts capabilities no standard EVM offers.

**Live URL:** Deployed on Vercel

## Project Goals

### Primary Goals
1. **Marketing Website** - Clean, modern site explaining Vitruveo's value proposition
2. **AI Chat Assistant** - Gemini-powered chat that answers questions about Vitruveo, PSCs, and building on-chain
3. **Developer Documentation** - Interactive documentation for all 12 Protocol Smart Contracts
4. **Vitruveo Starter Kit** - The `/vitruveo` folder is designed to be extracted as a standalone, dependency-free starter kit for developers

### The Vitruveo Folder (Starter Kit)

The `/vitruveo` folder is **intentionally kept dependency-free** from the rest of the project. It contains:

```
vitruveo/
├── index.js                    # Main exports
├── lib/
│   ├── index.js
│   └── psc-constants.js        # All PSC addresses and gas costs
└── components/
    ├── index.js
    ├── rng/
    │   ├── index.js
    │   ├── rng-info.jsx        # Documentation/explanation
    │   └── rng-example.jsx     # Code examples + Try It section
    ├── shuffle/
    ├── host/
    ├── trend/
    ├── compound-interest/
    ├── passkey/
    ├── merkle-proof/
    ├── ibc/
    ├── batch-balance/
    ├── batch-balance-native/
    ├── batch-send-erc20/
    └── batch-send-native/
```

**Each PSC component has:**
- `*-info.jsx` - What it does, why it matters, interface documentation
- `*-example.jsx` - Solidity code examples and a "Try It" section

**IMPORTANT:** All imports in `/vitruveo` use relative paths (`../../lib/psc-constants`) to stay self-contained. Do NOT add imports from `@/` or other project paths.

---

## What Has Been Achieved

### Site Pages (Complete)
- **Home** (`/`) - Hero with video, feature highlights, ecosystem preview
- **About** (`/about`) - Detailed explanation of Vitruveo's technology
- **Ecosystem** (`/ecosystem`) - Featured apps (Xibit, Yieldable, Pretrend, AppVinci) and infrastructure
- **Developers** (`/developers`) - PSC overview, MCP documentation, quick start guide
- **PSC Detail Pages** (`/developers/psc/[slug]`) - Individual pages for each of 12 PSCs
- **HOST Primer** (`/host-primer`) - Deep-dive documentation for HOST protocol
- **Chat** (`/chat`) - AI assistant powered by Gemini

### AI Chat Features
- Gemini model integration via Vercel AI SDK
- MCP (Model Context Protocol) server at `/mcp` with 17 blockchain tools
- System prompt auto-generated from site content (`scripts/generate-prompt-context.ts`)
- Chat history persisted to localStorage
- Footer chat input on site pages that navigates to `/chat?q=` and auto-submits
- Purple-pink gradient user message bubbles
- Clear chat button in input toolbar

### UI/UX Completed
- Dark theme with Vitruveo green (#a1ff75) accents
- Video backgrounds on hero sections
- Responsive layout with Bootstrap
- PSC table with clickable rows
- Back navigation on PSC detail pages
- MetaMask "Add Network" button
- Chat input in footer (navigates to chat with auto-submit)

### Technical Infrastructure
- Next.js 15 with App Router
- Route groups: `(site)` for marketing pages, `(chat)` for AI chat
- Tailwind CSS + Bootstrap hybrid styling
- Pre-build script generates AI context from site content
- MCP server for AI agent blockchain interactions

---

## What Remains: The "Try It" Feature

### Current State
Each PSC's `*-example.jsx` file has a "Try It" section that currently shows:
- Input fields for parameters
- Solidity code examples
- Usage patterns

### What Needs to Be Built
The "Try It" sections need **actual blockchain interaction**:

1. **Wallet Connection** - Connect via MetaMask or WalletConnect
2. **Live Precompile Calls** - Actually call the PSC and show results
3. **Transaction Display** - Show the returned data, gas used, etc.

### PSCs That Need "Try It" Implementation

| PSC | Address | Try It Status |
|-----|---------|---------------|
| RNG | 0x...FF | Needs: input seed, call, show random bytes32 |
| Shuffle | 0x...FE | Needs: input salt, call, show 52-card deck |
| Trend | 0x...0100 | Needs: input price array, call, show regression results |
| CompoundInterest | 0x...0101 | Needs: principal/rate/periods, show result |
| Passkey | 0x...0102 | Needs: signature verification demo |
| MerkleProof | 0x...0103 | Needs: proof/root/leaf inputs, verify |
| IBC | 0x...0104 | Complex - may skip or simplify |
| BatchBalance | 0x...0105 | Needs: token/wallet arrays, show balances |
| BatchBalanceNative | 0x...0106 | Needs: wallet array, show native + token balances |
| BatchSendERC20 | 0x...0107 | Needs: recipients/amounts (careful - sends real tokens) |
| BatchSendNative | 0x...0108 | Needs: recipients/amounts (careful - sends real VTRU) |
| HOST | 0x...FD | Complex - triggers off-chain agents |

### Suggested Approach
1. Create a shared wallet connection hook in `/vitruveo/lib/use-wallet.js`
2. Create a shared PSC call utility in `/vitruveo/lib/psc-client.js`
3. Update each `*-example.jsx` to use these utilities
4. Keep all new code within `/vitruveo` to maintain starter kit independence

### Technical Notes for Implementation
- Use `ethers.js` or `viem` for blockchain calls
- PSCs are called via `staticcall` for read operations (RNG, Shuffle, Trend, etc.)
- PSCs that send tokens require actual transactions (BatchSend*)
- Vitruveo RPC: `https://rpc.vitruveo.ai`
- Chain ID: `1490`

---

## Key Files Reference

### Site Structure
- `/app/(site)/` - Marketing pages
- `/app/(chat)/` - AI chat application
- `/components/site/` - Site-specific components (header, footer, etc.)
- `/components/` - Shared/chat components

### AI Chat
- `/app/(chat)/api/chat/route.ts` - Chat API endpoint
- `/lib/ai/prompts.ts` - System prompt (uses generated context)
- `/lib/ai/generated-context.json` - Auto-generated site content for AI
- `/scripts/generate-prompt-context.ts` - Prebuild script for AI context
- `/app/mcp/route.js` - MCP server endpoint
- `/lib/mcp/tools.ts` - MCP tool definitions

### Vitruveo Starter Kit
- `/vitruveo/lib/psc-constants.js` - All PSC addresses and gas costs
- `/vitruveo/components/*/` - Each PSC's info and example components

### Styling
- `/app/(site)/site.css` - Site-specific styles
- `/app/(chat)/chat-layout.css` - Chat-specific styles
- `/app/globals.css` - Global styles and CSS variables

---

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build (runs generate-context automatically)
pnpm build
```

### Environment Variables
```
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_key
```

---

## Recent Session Changes (January 2025)

1. **Ecosystem Page** - Added Pretrend, AppVinci; removed Bridge, Hashdle; added logos
2. **Footer** - Removed Network/Developers columns; added chat input that auto-submits to /chat
3. **Chat** - Fixed auto-send from URL params; added clear button to toolbar; fixed message/input alignment
4. **User Messages** - Changed from blue to purple-pink gradient
5. **RNG/Shuffle Docs** - Fixed terminology (seed vs salt, entropy sources)
6. **PSC Table** - Made rows clickable; added back link on detail pages

---

## Notes for Next Session

When starting fresh, read this README first. The main remaining work is:

1. **Implement "Try It" for each PSC** in `/vitruveo/components/*/`
2. Keep all code within `/vitruveo` folder (no `@/` imports)
3. Consider creating shared utilities: `use-wallet.js`, `psc-client.js`
4. Test on Vitruveo mainnet (Chain ID: 1490, RPC: https://rpc.vitruveo.ai)
5. Be careful with BatchSend* - those send real tokens/VTRU
