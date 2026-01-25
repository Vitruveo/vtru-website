'use client';

import { http } from 'wagmi';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// Re-export chain constants for client components
export { vitruveo, HYDRATE_THRESHOLD, HYDRATE_AMOUNT } from './chain';
import { vitruveo } from './chain';

export const config = getDefaultConfig({
  appName: 'Vitruveo PSC Demo',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo',
  chains: [vitruveo],
  transports: {
    [vitruveo.id]: http('https://rpc.vitruveo.xyz'),
  },
  ssr: true,
});
