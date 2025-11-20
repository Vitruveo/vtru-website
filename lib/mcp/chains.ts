import { type Chain } from 'viem';

// Default configuration values
export const DEFAULT_RPC_URL = 'https://rpc.vitruveo.xyz';
export const DEFAULT_CHAIN_ID = 1490;
export const DEFAULT_NETWORK = 'vitruveo';
export const DEFAULT_NETWORK_NAME = 'Vitruveo';


const vitruveo = {
  id: 1490,
  name: DEFAULT_NETWORK_NAME,
  network: DEFAULT_NETWORK,
  iconUrl: 'https://irp.cdn-website.com/a01407ef/dms3rep/multi/fav-vit-857c1762.png',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: DEFAULT_NETWORK_NAME,
    symbol: 'VTRU',
  },
  rpcUrls: {
    public: { http: [DEFAULT_RPC_URL] },
    default: { http: [DEFAULT_RPC_URL] },
  },
  blockExplorers: {
    default: { name: `${DEFAULT_NETWORK_NAME} Explorer`, url: 'https://explorer.vitruveo.net' },
  },
  testnet: false,
};

export const DEFAULT_CHAIN = vitruveo;

// Map chain IDs to chains
export const chainMap: Record<number, Chain> = {
  1490: DEFAULT_CHAIN,
};

export const rpcUrlMap: Record<number, string> = { 
  1490: DEFAULT_RPC_URL,
};

/**
 * Resolves a chain identifier (number or string) to a chain ID
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The resolved chain ID
 */
export function resolveChainId(chainIdentifier: number | string): number {
  return DEFAULT_CHAIN_ID;
}

/**
 * Returns the chain configuration for the specified chain ID or network name
 * @returns The chain configuration
 * @throws Error if the network is not supported (when string is provided)
 */
export function getChain(): Chain {
  return DEFAULT_CHAIN;
}

/**
 * Gets the appropriate RPC URL for the specified chain ID or network name
 * @returns The RPC URL for the specified chain
 */
export function getRpcUrl(): string {
  return DEFAULT_RPC_URL;
}

/**
 * Get a list of supported networks
 * @returns Array of supported network names (excluding short aliases)
 */
export function getSupportedNetworks(): string[] {
  return [DEFAULT_NETWORK];
} 
