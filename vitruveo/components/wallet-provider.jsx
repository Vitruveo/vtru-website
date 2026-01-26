'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { getConfig, vitruveo } from '../lib/wagmi-config';

import '@rainbow-me/rainbowkit/styles.css';

export function WalletProvider({ children }) {
  // Create QueryClient and config in state to avoid SSR issues
  const [queryClient] = useState(() => new QueryClient());
  const [wagmiConfig] = useState(() => getConfig());

  if (!wagmiConfig) return null;

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#a1ff75',
            accentColorForeground: '#000',
            borderRadius: 'medium',
          })}
          initialChain={vitruveo}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
