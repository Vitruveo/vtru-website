'use client';

import { useEffect, useState } from 'react';

const mcpTools = [
  { name: 'get_chain_info', description: 'Get Vitruveo network information (chain ID, block number, RPC)' },
  { name: 'get_core_contracts', description: 'Get addresses for CoreStake, VTRU, VUSD, wVTRU, and other core contracts' },
  { name: 'get_balance', description: 'Get VTRU balance for an address' },
  { name: 'get_erc20_balance', description: 'Get ERC20 token balance for an address' },
  { name: 'get_token_info', description: 'Get ERC20 token metadata (name, symbol, decimals, total supply)' },
  { name: 'get_latest_block', description: 'Get the latest block from the chain' },
  { name: 'get_block_by_number', description: 'Get a specific block by number' },
  { name: 'get_transaction', description: 'Get transaction details by hash' },
  { name: 'get_transaction_receipt', description: 'Get transaction receipt with logs and status' },
  { name: 'estimate_gas', description: 'Estimate gas for a transaction' },
  { name: 'read_contract', description: 'Call a read-only contract function' },
  { name: 'is_contract', description: 'Check if an address is a contract or EOA' },
  { name: 'get_nft_info', description: 'Get ERC721 NFT metadata and owner' },
  { name: 'get_nft_balance', description: 'Get NFT collection balance for an address' },
  { name: 'check_nft_ownership', description: 'Verify if an address owns a specific NFT' },
  { name: 'get_erc1155_balance', description: 'Get ERC1155 token balance' },
  { name: 'get_erc1155_token_uri', description: 'Get ERC1155 token metadata URI' },
];

export function MCPSection() {
  const [mcpUrl, setMcpUrl] = useState('');

  useEffect(() => {
    setMcpUrl(`${window.location.origin}/mcp`);
  }, []);

  return (
    <section id="mcp" className="section-dark py-5">
      <div className="container">
        <h2 className="text-white mb-3">Model Context Protocol</h2>
        <p className="text-muted-light mb-4">
          Connect AI agents directly to Vitruveo using the Model Context Protocol (MCP).
          Query balances, transactions, tokens, and NFTs with a standardized interface.
        </p>

        {/* MCP Endpoint */}
        <h4 className="text-white mb-3">Endpoint</h4>
        <div className="code-block mb-5">
          <pre>{mcpUrl || 'Loading...'}</pre>
        </div>

        {/* Available Tools */}
        <h4 className="text-white mb-3">Available Tools</h4>
        <div className="table-responsive mb-5">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {mcpTools.map((tool) => (
                <tr key={tool.name}>
                  <td><code className="text-vtru-green">{tool.name}</code></td>
                  <td className="text-muted-light">{tool.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Usage Example */}
        <h4 className="text-white mb-3">Claude Desktop Configuration</h4>
        <div className="code-block mb-4">
          <pre>{mcpUrl ? `{
  "mcpServers": {
    "vitruveo": {
      "command": "npx",
      "args": ["mcp-remote", "${mcpUrl}"]
    }
  }
}` : 'Loading...'}</pre>
        </div>
      </div>
    </section>
  );
}
