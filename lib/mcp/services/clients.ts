import { 
  createPublicClient, 
  createWalletClient, 
  http, 
  type PublicClient,
  type WalletClient,
  type Hex,
  type Address
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { getChain, getRpcUrl } from "../chains.ts";

const network = "vitruveo";

// Cache for clients to avoid recreating them for each request
const clientCache = new Map<string, PublicClient>();

/**
 * Get a public client for a specific network
 */
export function getPublicClient(): PublicClient {
  const cacheKey = String(network);
  
  // Return cached client if available
  if (clientCache.has(cacheKey)) {
    return clientCache.get(cacheKey)!;
  }
  
  // Create a new client
  const chain = getChain();
  const rpcUrl = getRpcUrl();
  
  const client = createPublicClient({
    chain,
    transport: http(rpcUrl)
  });
  
  // Cache the client
  clientCache.set(cacheKey, client);
  
  return client;
}

/**
 * Create a wallet client for a specific network and private key
 */
export function getWalletClient(privateKey: Hex): WalletClient {
  const chain = getChain();
  const rpcUrl = getRpcUrl();
  const account = privateKeyToAccount(privateKey);
  
  return createWalletClient({
    account,
    chain,
    transport: http(rpcUrl)
  });
}

/**
 * Get a Vitruveo address from a private key
 * @param privateKey The private key in hex format (with or without 0x prefix)
 * @returns The Vitruveo address derived from the private key
 */
export function getAddressFromPrivateKey(privateKey: Hex): Address {
  const account = privateKeyToAccount(privateKey);
  return account.address;
} 