'use client';

import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useSwitchChain } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { vitruveo, HYDRATE_THRESHOLD } from '../../lib/wagmi-config';

export function HostConnectButton() {
  const { address, isConnected, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const { data: balance } = useBalance({ address, chainId: vitruveo.id });
  const [hydrating, setHydrating] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Auto-switch to Vitruveo when connected to wrong chain
  useEffect(() => {
    if (isConnected && chainId !== vitruveo.id) {
      switchChain?.({ chainId: vitruveo.id });
    }
  }, [isConnected, chainId, switchChain]);

  // Auto-hydrate when balance is low
  useEffect(() => {
    async function checkAndHydrate() {
      if (!isConnected || !address || !balance || hydrating || hydrated) return;

      const balanceInVtru = parseFloat(formatEther(balance.value));

      if (balanceInVtru < HYDRATE_THRESHOLD) {
        setHydrating(true);
        try {
          const response = await fetch('/api/hydrate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address }),
          });

          if (response.ok) {
            setHydrated(true);
          }
        } catch (error) {
          console.error('Hydration failed:', error);
        } finally {
          setHydrating(false);
        }
      }
    }

    checkAndHydrate();
  }, [isConnected, address, balance, hydrating, hydrated]);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="host-connect-btn"
                  >
                    Connect
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="host-connect-btn host-connect-btn-error"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <button
                  onClick={openAccountModal}
                  className="host-connect-btn host-connect-btn-connected"
                >
                  {hydrating ? (
                    'Hydrating...'
                  ) : (
                    <>
                      {account.displayName}
                      {account.displayBalance && ` (${account.displayBalance})`}
                    </>
                  )}
                </button>
              );
            })()}

            <style jsx>{`
              .host-connect-btn {
                background-color: #111;
                color: #a1ff75;
                border: 1px solid #a1ff75;
                padding: 0.4rem 0.75rem;
                border-radius: 4px;
                font-size: 0.9rem;
                cursor: pointer;
                white-space: nowrap;
              }
              .host-connect-btn:hover {
                background-color: rgba(161, 255, 117, 0.1);
              }
              .host-connect-btn-connected {
                color: #fff;
                border-color: #444;
              }
              .host-connect-btn-connected:hover {
                border-color: #a1ff75;
                background-color: rgba(161, 255, 117, 0.1);
              }
              .host-connect-btn-error {
                color: #ff6b6b;
                border-color: #ff6b6b;
              }
            `}</style>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
