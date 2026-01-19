import { createWalletClient, createPublicClient, http, getAddress } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

const SHUFFLE_ADDRESS = getAddress('0x00000000000000000000000000000000000000AB');
const RPC_URL = 'https://rpc.vitruveo.ai';
const CHAIN_ID = 1490;

const vitruveoChain = {
  id: CHAIN_ID,
  name: 'Vitruveo',
  nativeCurrency: { name: 'VTRU', symbol: 'VTRU', decimals: 18 },
  rpcUrls: { default: { http: [RPC_URL] } }
};

// Parse 104-byte hex response into array of 52 card codes
function parseShuffleResponse(hexData) {
  const hex = hexData.startsWith('0x') ? hexData.slice(2) : hexData;
  const cards = [];
  for (let i = 0; i < hex.length; i += 4) {
    const suit = String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
    const rank = String.fromCharCode(parseInt(hex.slice(i + 2, i + 4), 16));
    cards.push(`${suit}${rank}`);
  }
  return cards;
}

export async function POST(request) {
  try {
    const privateKey = process.env.PSC_DEMO_PRIVATE_KEY;

    if (!privateKey) {
      return Response.json(
        { error: 'PSC_DEMO_PRIVATE_KEY not configured' },
        { status: 500 }
      );
    }

    // Parse optional salt from request body
    let salt = '0x';
    try {
      const body = await request.json();
      if (body.salt) {
        salt = body.salt.startsWith('0x') ? body.salt : '0x' + body.salt;
      }
    } catch {
      // No body or invalid JSON, use empty salt
    }

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
      to: SHUFFLE_ADDRESS,
      data: salt
    });

    // Send transaction
    const hash = await walletClient.sendTransaction({
      to: SHUFFLE_ADDRESS,
      data: salt,
      gas: gasEstimate + 10000n,
      nonce
    });

    // Wait for receipt
    const receipt = await publicClient.waitForTransactionReceipt({ hash });

    if (receipt.status !== 'success') {
      return Response.json(
        { error: 'Transaction failed' },
        { status: 500 }
      );
    }

    // Now call to get the result (the tx advanced the nonce)
    const result = await publicClient.call({
      account: account.address,
      to: SHUFFLE_ADDRESS,
      data: salt
    });

    if (!result.data) {
      return Response.json(
        { error: 'Shuffle call returned no data' },
        { status: 500 }
      );
    }

    const cards = parseShuffleResponse(result.data);

    return Response.json({
      success: true,
      txHash: hash,
      cards,
      gasUsed: receipt.gasUsed.toString(),
      blockNumber: receipt.blockNumber.toString()
    });

  } catch (error) {
    console.error('Shuffle API error:', error);
    return Response.json(
      { error: error.message || 'Shuffle failed' },
      { status: 500 }
    );
  }
}
