import { NextResponse } from 'next/server';
import { createWalletClient, createPublicClient, http, getAddress } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

const RNG_ADDRESS = getAddress('0x00000000000000000000000000000000000000FF');
const RPC_URL = 'https://rpc.vitruveo.ai';
const CHAIN_ID = 1490;

const vitruveoChain = {
  id: CHAIN_ID,
  name: 'Vitruveo',
  nativeCurrency: { name: 'VTRU', symbol: 'VTRU', decimals: 18 },
  rpcUrls: { default: { http: [RPC_URL] } }
};

// Decode ABI encoded uint256[] array
function decodeUint256Array(hexResult) {
  const hex = hexResult.startsWith('0x') ? hexResult.slice(2) : hexResult;
  if (hex.length < 128) {
    return [];
  }
  const length = parseInt(hex.slice(64, 128), 16);
  const values = [];
  for (let i = 0; i < length; i++) {
    const start = 128 + (i * 64);
    const end = start + 64;
    values.push('0x' + hex.slice(start, end));
  }
  return values;
}

export async function POST(request) {
  try {
    const privateKey = process.env.PSC_DEMO_PRIVATE_KEY;

    if (!privateKey) {
      return NextResponse.json(
        { error: 'PSC_DEMO_PRIVATE_KEY not configured' },
        { status: 500 }
      );
    }

    // Parse count from request body (default 1)
    let count = 1;
    try {
      const body = await request.json();
      if (body.count && body.count >= 1 && body.count <= 255) {
        count = body.count;
      }
    } catch {
      // No body or invalid JSON, use default
    }

    // Input is single byte for count
    const data = '0x' + count.toString(16).padStart(2, '0');

    const account = privateKeyToAccount(privateKey);

    const publicClient = createPublicClient({
      chain: vitruveoChain,
      transport: http(RPC_URL)
    });

    const walletClient = createWalletClient({
      account,
      chain: vitruveoChain,
      transport: http(RPC_URL)
    });

    // Get current nonce
    const nonce = await publicClient.getTransactionCount({ address: account.address });

    // Estimate gas
    const gasEstimate = await publicClient.estimateGas({
      account: account.address,
      to: RNG_ADDRESS,
      data
    });

    // Send transaction
    const hash = await walletClient.sendTransaction({
      to: RNG_ADDRESS,
      data,
      gas: gasEstimate + 10000n,
      nonce
    });

    // Wait for receipt
    const receipt = await publicClient.waitForTransactionReceipt({ hash });

    if (receipt.status !== 'success') {
      return NextResponse.json(
        { error: 'Transaction failed' },
        { status: 500 }
      );
    }

    // Now call to get the result (the tx advanced the nonce)
    const result = await publicClient.call({
      account: account.address,
      to: RNG_ADDRESS,
      data
    });

    if (!result.data || result.data === '0x') {
      return NextResponse.json(
        { error: 'RNG precompile returned no data' },
        { status: 500 }
      );
    }

    const randomValues = decodeUint256Array(result.data);

    return NextResponse.json({
      success: true,
      txHash: hash,
      values: randomValues,
      count,
      gasUsed: receipt.gasUsed.toString(),
      blockNumber: receipt.blockNumber.toString()
    });

  } catch (error) {
    console.error('RNG API error:', error);
    return NextResponse.json(
      { error: error?.message || 'RNG failed' },
      { status: 500 }
    );
  }
}
