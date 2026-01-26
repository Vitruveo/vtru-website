'use client';

import { http } from 'wagmi';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// Re-export chain constants for client components
export { vitruveo, HYDRATE_THRESHOLD, HYDRATE_AMOUNT } from './chain';
import { vitruveo } from './chain';

// Lazy initialization to avoid SSR issues with WalletConnect's indexedDB
let _config = null;

export function getConfig() {
  if (!_config) {
    _config = getDefaultConfig({
      appName: 'Vitruveo PSC Demo',
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo',
      chains: [vitruveo],
      transports: {
        [vitruveo.id]: http('https://rpc.vitruveo.xyz'),
      },
      ssr: true,
    });
  }
  return _config;
}

// Keep for backwards compatibility but will be undefined on server
export const config = typeof window !== 'undefined' ? getConfig() : null;
