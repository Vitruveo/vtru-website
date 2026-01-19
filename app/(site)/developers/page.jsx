import Link from 'next/link';
import { AddToMetaMaskButton } from '@/components/site/add-metamask-button';
import { MCPSection } from '@/components/site/mcp-section';
import { PSCTable } from '@/components/site/psc-table';
import { PSC_ADDRESSES } from '@/vitruveo/lib/psc-constants';

export const metadata = {
  title: 'Developers - Vitruveo',
  description: 'Familiar EVM. Unfamiliar Power. Build on Vitruveo with 12 protocol-level capabilities.',
};

const pscList = [
  { name: 'HOST', slug: 'host', address: PSC_ADDRESSES.HOST, gas: '25K+', category: 'Agentic', description: 'Trigger AI agents' },
  { name: 'Trend', slug: 'trend', address: PSC_ADDRESSES.TREND, gas: '20/byte', category: 'Analysis', description: 'OLS regression + volatility' },
  { name: 'RNG', slug: 'rng', address: PSC_ADDRESSES.RNG, gas: '500', category: 'Randomness', description: 'Random number generation' },
  { name: 'Shuffle', slug: 'shuffle', address: PSC_ADDRESSES.SHUFFLE, gas: '5K', category: 'Randomness', description: 'Cryptographic card shuffle' },
  { name: 'CompoundInterest', slug: 'compound-interest', address: PSC_ADDRESSES.COMPOUND_INTEREST, gas: '500+', category: 'Math', description: 'Calculate compound interest' },
  { name: 'Passkey', slug: 'passkey', address: PSC_ADDRESSES.PASSKEY, gas: '3.4K', category: 'Authentication', description: 'WebAuthn/P-256 verification' },
  { name: 'MerkleProof', slug: 'merkle-proof', address: PSC_ADDRESSES.MERKLE_PROOF, gas: '1K+50/hash', category: 'Verification', description: 'Verify Merkle proofs' },
  { name: 'IBC', slug: 'ibc', address: PSC_ADDRESSES.IBC, gas: '3K-200K+', category: 'Interoperability', description: 'Cosmos light client' },
  { name: 'BatchBalance', slug: 'batch-balance', address: PSC_ADDRESSES.BATCH_BALANCE, gas: '100+30K/token', category: 'Batching', description: 'Query ERC20 balances' },
  { name: 'BatchBalanceNative', slug: 'batch-balance-native', address: PSC_ADDRESSES.BATCH_BALANCE_NATIVE, gas: '100+30K/token', category: 'Batching', description: 'Query native + ERC20 balances' },
  { name: 'BatchSendERC20', slug: 'batch-send-erc20', address: PSC_ADDRESSES.BATCH_SEND_ERC20, gas: '200+50K/tx', category: 'Batching', description: 'Multi-recipient token transfer' },
  { name: 'BatchSendNative', slug: 'batch-send-native', address: PSC_ADDRESSES.BATCH_SEND_NATIVE, gas: '200+50K/tx', category: 'Batching', description: 'Multi-recipient VTRU transfer' },
];

export default function DevelopersPage() {
  return (
    <>
      {/* Hero with Video */}
      <section className="page-hero d-flex align-items-center" style={{ marginTop: '-72px' }}>
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/videos/developers.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-white mb-4">
            Familiar EVM. <span className="text-vtru-green">Unfamiliar Power.</span>
          </h1>
          <p className="lead text-white-50 mb-4" style={{ maxWidth: '600px' }}>
            Your Solidity works. Your tools work. Plus 12 protocol-level capabilities
            you can't get anywhere else.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a href="#psc" className="btn btn-primary">
              Protocol Smart Contracts
            </a>
            <Link href="/chat" className="btn btn-outline-light">
              Ask AI
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <h2 className="text-white mb-4">Quick Start</h2>
          <div className="code-block mb-4">
            <pre>{`Chain ID: 1490
RPC: https://rpc.vitruveo.ai
Explorer: https://explorer.vitruveo.ai`}</pre>
          </div>
          <AddToMetaMaskButton />
        </div>
      </section>

      {/* HOST Feature Callout */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="card p-4 p-lg-5 rounded-4" style={{ background: 'linear-gradient(135deg, rgba(161, 255, 117, 0.1) 0%, rgba(74, 222, 128, 0.05) 100%)', border: '1px solid rgba(161, 255, 117, 0.3)' }}>
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h3 className="text-white mb-3">HOST — Trigger AI Agents from Smart Contracts</h3>
                <p className="text-muted-light mb-0">
                  HTTP Outbound Service Trigger enables smart contracts to invoke AI agents and agentic
                  workflows during transaction execution. On-chain events become autonomous decisions.
                  The deep-dive primer covers the Chain of Trust security model and workflow lifecycle.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link href="/host-primer" className="btn btn-host-primer btn-lg">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  HOST Primer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Smart Contracts */}
      <section id="psc" className="section-dark-2 py-5">
        <div className="container">
          <h2 className="text-white mb-3">Protocol Smart Contracts</h2>
          <p className="text-muted-light mb-5">
            Every EVM has precompiles (ecrecover, sha256, etc.). Vitruveo adds 12 more
            that give contracts capabilities no standard EVM offers.
          </p>

          {/* How to Call */}
          <h4 className="text-white mb-3">How to Call</h4>
          <div className="code-block mb-5">
            <pre>{`// Solidity
(bool success, bytes memory result) = address(0xFF).staticcall(abi.encode(input));

// JavaScript (ethers.js)
const result = await provider.call({
  to: "0x00000000000000000000000000000000000000FF",
  data: encodedInput
});`}</pre>
          </div>

          {/* Complete Reference Table */}
          <h4 className="text-white mb-3">Complete Reference</h4>
          <PSCTable pscList={pscList} />

          {/* By Category */}
          <h4 className="text-white mb-4">By Category</h4>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Agentic</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link href="/developers/psc/host" className="text-muted-light">HOST</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Analysis</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link href="/developers/psc/trend" className="text-muted-light">Trend</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Randomness</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link href="/developers/psc/rng" className="text-muted-light">RNG</Link></li>
                  <li><Link href="/developers/psc/shuffle" className="text-muted-light">Shuffle</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Math & Verification</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link href="/developers/psc/compound-interest" className="text-muted-light">CompoundInterest</Link></li>
                  <li><Link href="/developers/psc/passkey" className="text-muted-light">Passkey</Link></li>
                  <li><Link href="/developers/psc/merkle-proof" className="text-muted-light">MerkleProof</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Interoperability</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link href="/developers/psc/ibc" className="text-muted-light">IBC</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Batching</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link href="/developers/psc/batch-balance" className="text-muted-light">BatchBalance</Link></li>
                  <li><Link href="/developers/psc/batch-balance-native" className="text-muted-light">BatchBalanceNative</Link></li>
                  <li><Link href="/developers/psc/batch-send-erc20" className="text-muted-light">BatchSendERC20</Link></li>
                  <li><Link href="/developers/psc/batch-send-native" className="text-muted-light">BatchSendNative</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MCPSection />

      {/* Resources */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <h2 className="text-white mb-4">Resources</h2>
          <div className="row g-4">
            {[
              ['GitHub', 'github.com/vitruveo', 'https://github.com/vitruveo'],
              ['Explorer', 'explorer.vitruveo.ai', 'https://explorer.vitruveo.ai'],
              ['AI Chat', 'Ask Vitruveo AI', '/chat'],
            ].map(([title, text, href]) => (
              <div key={title} className="col-sm-6 col-lg-3">
                <div className="card card-dark p-4 rounded-3 h-100">
                  <h5 className="text-white mb-2">{title}</h5>
                  {href.startsWith('/') ? (
                    <Link href={href} className="text-vtru-green small">
                      {text} →
                    </Link>
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-vtru-green small">
                      {text} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
