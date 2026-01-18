import Link from 'next/link';

export const metadata = {
  title: 'Vitruveo - The First Active Blockchain',
  description: 'Smart contracts that don\'t just execute—they act. Vitruveo extends the EVM with protocol-level capabilities.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="hero-video d-flex align-items-center" style={{ marginTop: '-72px' }}>
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/videos/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold text-white mb-4">
                The First <span className="text-vtru-green">Active</span> Blockchain
              </h1>
              <p className="lead text-white-50 mb-4">
                Smart contracts that don't just execute—they act. Vitruveo extends the EVM
                with protocol-level capabilities that trigger AI agents, Web2 services,
                and real-world automation.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href="/developers" className="btn btn-primary btn-lg">
                  Start Building
                </Link>
                <Link href="/about" className="btn btn-outline-light btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vitruveo */}
      <section className="section-dark-2 py-5">
        <div className="container py-4">
          <h2 className="text-center text-white mb-5">Why Vitruveo?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-dark h-100 p-4 rounded-3">
                <div className="mb-3">
                  <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-vtru-green">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-white">Active, Not Passive</h4>
                <p className="text-muted-light mb-0">
                  Smart contracts that trigger webhooks, call AI agents, and initiate
                  real-world actions—no indexers or polling required.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-dark h-100 p-4 rounded-3">
                <div className="mb-3">
                  <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-vtru-green">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-white">Familiar + Extended</h4>
                <p className="text-muted-light mb-0">
                  100% Solidity compatible, plus 12 protocol-level capabilities
                  impossible in standard EVM.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-dark h-100 p-4 rounded-3">
                <div className="mb-3">
                  <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-vtru-green">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-white">Built for Speed</h4>
                <p className="text-muted-light mb-0">
                  5-second blocks. 4 gwei gas. Fast enough for interactive AI workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOST Protocol Feature */}
      <section className="section-dark py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="text-white mb-4">Smart Contracts That Trigger the Real World</h2>
              <p className="lead text-muted-light mb-4">
                HOST lets smart contracts push HTTP requests to external services
                during execution. Your existing webhook receives a POST—no blockchain
                expertise required on the receiving end.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href="/developers/psc/host" className="btn btn-primary">
                  Explore HOST
                </Link>
                <a
                  href="https://kalyani.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  Read Whitepaper
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="code-block">
                <pre>{`// Trigger an AI agent from Solidity
HOST.send(
  "https://api.your-ai.com/webhook",
  abi.encode(tokenId, buyer, price)
);`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Smart Contracts */}
      <section className="section-dark-2 py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <h2 className="text-white mb-4">12 Built-In Capabilities</h2>
              <p className="lead text-muted-light mb-4">
                Webhooks, passkeys, randomness, batching, Merkle proofs, trend analysis,
                and more—built directly into the protocol.
              </p>
              <Link href="/developers/psc" className="btn btn-primary">
                Explore PSCs
              </Link>
            </div>
            <div className="col-lg-7">
              <div className="row g-2">
                {[
                  ['HOST', 'Trigger external webhooks'],
                  ['Passkey', 'WebAuthn verification'],
                  ['RNG', 'Random number generation'],
                  ['Trend', 'Statistical analysis'],
                  ['IBC', 'Cosmos interoperability'],
                ].map(([name, desc]) => (
                  <div key={name} className="col-12">
                    <div className="card card-dark p-3 rounded-2">
                      <div className="d-flex align-items-center gap-3">
                        <code className="text-vtru-green fw-semibold" style={{ minWidth: '100px' }}>{name}</code>
                        <span className="text-muted-light small">{desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-12">
                  <Link href="/developers/psc" className="text-vtru-green text-center d-block py-2">
                    + 7 more...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="section-dark-3 py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-vtru-green mb-2">1490</h2>
              <p className="text-muted-light mb-0">Chain ID</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-vtru-green mb-2">5s</h2>
              <p className="text-muted-light mb-0">Block Time</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-vtru-green mb-2">4</h2>
              <p className="text-muted-light mb-0">Gwei Gas</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="display-5 fw-bold text-vtru-green mb-2">EVM</h2>
              <p className="text-muted-light mb-0">Compatible</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
