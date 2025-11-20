import { 
  type Hash,
  type Block
} from 'viem';
import { getPublicClient } from './clients.ts';

/**
 * Get the current block number for a specific network
 */
export async function getBlockNumber(): Promise<bigint> {
  const client = getPublicClient();
  return await client.getBlockNumber();
}

/**
 * Get a block by number for a specific network
 */
export async function getBlockByNumber(
  blockNumber: number
): Promise<Block> {
  const client = getPublicClient();
  return await client.getBlock({ blockNumber: BigInt(blockNumber) });
}

/**
 * Get a block by hash for a specific network
 */
export async function getBlockByHash(
  blockHash: Hash
): Promise<Block> {
  const client = getPublicClient();
  return await client.getBlock({ blockHash });
}

/**
 * Get the latest block for a specific network
 */
export async function getLatestBlock(): Promise<Block> {
  const client = getPublicClient();
  return await client.getBlock();
} 