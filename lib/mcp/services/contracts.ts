import { 
  type Address, 
  type Hash, 
  type Hex,
  type ReadContractParameters,
  type GetLogsParameters,
  type Log
} from 'viem';
import { getPublicClient, getWalletClient } from './clients.ts';
import { resolveAddress } from './ens.ts';

/**
 * Read from a contract for a specific network
 */
export async function readContract(params: ReadContractParameters) {
  const client = getPublicClient();
  return await client.readContract(params);
}

/**
 * Write to a contract for a specific network
 */
export async function writeContract(
  privateKey: Hex, 
  params: Record<string, any>
): Promise<Hash> {
  const client = getWalletClient(privateKey);
  return await client.writeContract(params as any);
}

/**
 * Get logs for a specific network
 */
export async function getLogs(params: GetLogsParameters): Promise<Log[]> {
  const client = getPublicClient();
  return await client.getLogs(params);
}

/**
 * Check if an address is a contract
 * @param addressOrEns Address or ENS name to check
 * @returns True if the address is a contract, false if it's an EOA
 */
export async function isContract(addressOrEns: string): Promise<boolean> {
  // Resolve ENS name to address if needed
  const address = await resolveAddress(addressOrEns);
  
  const client = getPublicClient();
  const code = await client.getBytecode({ address });
  return code !== undefined && code !== '0x';
} 