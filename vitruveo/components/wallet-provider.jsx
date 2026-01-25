'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config, vitruveo } from '../lib/wagmi-config';

import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

export function WalletProvider({ children }) {
  return (
    <WagmiProvider config={config}>
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
