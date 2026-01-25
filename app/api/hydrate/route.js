import { NextResponse } from 'next/server';
import { createWalletClient, createPublicClient, http, parseEther, formatEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { vitruveo, HYDRATE_THRESHOLD, HYDRATE_AMOUNT } from '@/vitruveo/lib/chain';

const RPC_URL = 'https://rpc.vitruveo.ai';

export async function POST(request) {
  try {
    const { address } = await request.json();

    if (!address || !/^0x[a-fA-F0-9]{40}$/.test(address)) {
      return NextResponse.json({ error: 'Invalid address' }, { status: 400 });
    }

    const privateKey = process.env.PSC_DEMO_PRIVATE_KEY;
    if (!privateKey) {
      return NextResponse.json({ error: 'Hydration not configured' }, { status: 500 });
    }

    // Create clients
    const publicClient = createPublicClient({
      chain: vitruveo,
      transport: http(RPC_URL),
    });

    const account = privateKeyToAccount(privateKey);
    const walletClient = createWalletClient({
      account,
      chain: vitruveo,
      transport: http(RPC_URL),
    });

    // Check current balance
    const balance = await publicClient.getBalance({ address });
    const balanceInVtru = parseFloat(formatEther(balance));

    if (balanceInVtru >= HYDRATE_THRESHOLD) {
      return NextResponse.json({
        success: true,
        message: 'Balance sufficient',
        balance: balanceInVtru
      });
    }

    // Calculate amount to send (top up to HYDRATE_AMOUNT)
    const amountToSend = HYDRATE_AMOUNT - balanceInVtru;

    if (amountToSend <= 0) {
      return NextResponse.json({
        success: true,
        message: 'Balance sufficient',
        balance: balanceInVtru
      });
    }

    // Send VTRU
    const hash = await walletClient.sendTransaction({
      to: address,
      value: parseEther(amountToSend.toFixed(18)),
    });

    // Wait for confirmation
    await publicClient.waitForTransactionReceipt({ hash });

    return NextResponse.json({
      success: true,
      message: 'Hydrated',
      txHash: hash,
      amount: amountToSend
    });

  } catch (error) {
    console.error('Hydration error:', error);
    return NextResponse.json({
      error: 'Hydration failed',
      details: error.message
    }, { status: 500 });
  }
}
