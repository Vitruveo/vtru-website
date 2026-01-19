import Link from 'next/link';
import { AddToMetaMaskButton } from '@/components/site/add-metamask-button';

export const metadata = {
  title: 'Developers - Vitruveo',
  description: 'Familiar EVM. Unfamiliar Power. Build on Vitruveo with 12 protocol-level capabilities.',
};

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
            <Link href="/developers/psc" className="btn btn-primary">
              Protocol Smart Contracts
            </Link>
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

      {/* What's Different */}
      <section className="section-dark py-5">
        <div className="container">
          <h2 className="text-white mb-3">What's Different</h2>
          <p className="lead text-muted-light mb-4">Standard EVM plus:</p>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              {[
                ['HOST', 'Trigger AI agents'],
                ['Trend', 'Statistical analysis'],
                ['RNG', 'Generate randomness'],
                ['Shuffle', 'Cryptographic card shuffle'],
                ['CompoundInterest', 'DeFi math'],
                ['Passkey', 'Verify WebAuthn signatures'],
              ].map(([name, desc]) => (
                <div key={name} className="card card-dark p-3 rounded-2 mb-2">
                  <div className="d-flex align-items-center gap-3">
                    <code className="text-vtru-green fw-semibold" style={{ minWidth: '140px' }}>{name}</code>
                    <span className="text-muted-light small">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              {[
                ['MerkleProof', 'Proof verification'],
                ['IBC', 'Cosmos interoperability'],
                ['BatchBalance', 'Query multiple balances'],
                ['BatchBalanceNative', 'Native + ERC20 balances'],
                ['BatchSendERC20', 'Multi-recipient tokens'],
                ['BatchSendNative', 'Multi-recipient VTRU'],
              ].map(([name, desc]) => (
                <div key={name} className="card card-dark p-3 rounded-2 mb-2">
                  <div className="d-flex align-items-center gap-3">
                    <code className="text-vtru-green fw-semibold" style={{ minWidth: '140px' }}>{name}</code>
                    <span className="text-muted-light small">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href="/developers/psc" className="btn btn-primary">
            Full PSC Reference →
          </Link>
        </div>
      </section>

      {/* Resources */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <h2 className="text-white mb-4">Resources</h2>
          <div className="row g-4">
            {[
              ['GitHub', 'github.com/vitruveo', 'https://github.com/vitruveo'],
              ['Explorer', 'explorer.vitruveo.ai', 'https://explorer.vitruveo.ai'],
              ['Bridge', 'bridge.vitruveo.ai', 'https://bridge.vitruveo.ai'],
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
