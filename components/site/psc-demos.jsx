'use client';

import Link from 'next/link';
import { PSC_ADDRESSES } from '@/vitruveo/lib/psc-constants';

// Shorten address: 0x00000000000000000000000000000000000000FF -> 0x00..FF
function shortenAddress(address) {
  if (!address) return '';
  const lastTwo = address.slice(-2);
  return `0x00..${lastTwo}`;
}

const pscList = [
  { name: 'HOST', slug: 'host', address: PSC_ADDRESSES.HOST, description: 'Trigger AI agents from contracts', category: 'Agentic', color: '#a1ff75', href: '/host' },
  { name: 'Trend', slug: 'trend', address: PSC_ADDRESSES.TREND, description: 'OLS regression + volatility analysis', category: 'Analysis', color: '#60a5fa' },
  { name: 'RNG', slug: 'rng', address: PSC_ADDRESSES.RNG, description: 'Protocol-level random numbers', category: 'Randomness', color: '#f472b6' },
  { name: 'Shuffle', slug: 'shuffle', address: PSC_ADDRESSES.SHUFFLE, description: 'Cryptographic card deck shuffle', category: 'Randomness', color: '#f472b6' },
  { name: 'Compound Interest', slug: 'compound-interest', address: PSC_ADDRESSES.COMPOUND_INTEREST, description: 'High-precision DeFi calculations', category: 'DeFi', color: '#fbbf24' },
  { name: 'Passkey', slug: 'passkey', address: PSC_ADDRESSES.PASSKEY, description: 'WebAuthn P-256 verification', category: 'Auth', color: '#c084fc' },
  { name: 'Merkle Proof', slug: 'merkle-proof', address: PSC_ADDRESSES.MERKLE_PROOF, description: 'Fast Merkle proof verification', category: 'Verification', color: '#34d399' },
  { name: 'IBC', slug: 'ibc', address: PSC_ADDRESSES.IBC, description: 'Cosmos light client bridge', category: 'Interop', color: '#fb923c' },
  { name: 'Batch Balance', slug: 'batch-balance', address: PSC_ADDRESSES.BATCH_BALANCE, description: 'Query multiple ERC20 balances', category: 'Batching', color: '#94a3b8' },
  { name: 'Batch Balance Native', slug: 'batch-balance-native', address: PSC_ADDRESSES.BATCH_BALANCE_NATIVE, description: 'Query native + ERC20 balances', category: 'Batching', color: '#94a3b8' },
  { name: 'Batch Send ERC20', slug: 'batch-send-erc20', address: PSC_ADDRESSES.BATCH_SEND_ERC20, description: 'Multi-recipient token transfer', category: 'Batching', color: '#94a3b8' },
  { name: 'Batch Send Native', slug: 'batch-send-native', address: PSC_ADDRESSES.BATCH_SEND_NATIVE, description: 'Multi-recipient VTRU transfer', category: 'Batching', color: '#94a3b8' },
];

// Icons for each PSC
const pscIcons = {
  host: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  trend: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  rng: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  shuffle: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  'compound-interest': <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  passkey: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>,
  'merkle-proof': <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  ibc: <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  'batch-balance': <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  'batch-balance-native': <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  'batch-send-erc20': <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  'batch-send-native': <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
};

export function PSCDemos({ title = "Protocol Smart Contracts" }) {
  return (
    <section id="psc-demos" className="section-dark-2 py-5">
      <div className="container">
        <h2 className="text-white mb-3">{title}</h2>
        <p className="text-muted-light mb-4">
          Every EVM has precompiles (ecrecover, sha256, etc.). Vitruveo adds 12 more
          that give contracts capabilities no standard EVM offers.
        </p>

        {/* PSC Tiles */}
        <div className="row g-3">
          {pscList.map((psc) => (
            <div key={psc.slug} className="col-md-6 col-lg-4">
              <Link href={psc.href || `/developers/psc/${psc.slug}`} className="text-decoration-none">
                <div className="card card-dark p-3 rounded-3 h-100 psc-tile" style={{ borderLeft: `3px solid ${psc.color}` }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="psc-icon" style={{ color: psc.color }}>
                      {pscIcons[psc.slug]}
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <h5 className="text-white mb-0">{psc.name}</h5>
                        <span className="psc-category-badge" style={{ backgroundColor: `${psc.color}20`, color: psc.color }}>
                          {psc.category}
                        </span>
                      </div>
                      <p className="text-muted-light small mb-2">{psc.description}</p>
                      <div className="psc-address">
                        <code className="text-vtru-green small">{shortenAddress(psc.address)}</code>
                        <button
                          className="psc-address-copy"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigator.clipboard.writeText(psc.address);
                          }}
                          title="Copy full address"
                        >
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
