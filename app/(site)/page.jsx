import Link from 'next/link';
import { HeroChat } from '@/components/site/hero-chat';
import { PSCDemos } from '@/components/site/psc-demos';

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
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/developers/psc" className="btn btn-primary btn-lg">
                  Start Building
                </Link>
                <Link href="/about" className="btn btn-outline-light btn-lg">
                  Learn More
                </Link>
              </div>
              <HeroChat />
            </div>
          </div>
        </div>
      </section>

      {/* Try Protocol Smart Contract Demos */}
      <PSCDemos title="Try Protocol Smart Contract Demos" />

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
                  that extend the capabilities of the standard EVM.
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
              <h2 className="text-white mb-4">Smart Contracts That Trigger AI Agents</h2>
              <p className="lead text-muted-light mb-4">
                HOST lets smart contracts invoke AI agents and agentic workflows
                during transaction execution. On-chain events become autonomous
                decisions—no polling, no indexers, no middleware.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href="/host-primer" className="btn btn-host-primer">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  HOST Primer
                </Link>
                <Link href="/host" className="btn btn-outline-light">
                  Quick Reference
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-dark p-4 rounded-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-4">
                  <div className="text-center">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '60px', height: '60px', background: 'rgba(161, 255, 117, 0.1)', border: '2px solid var(--vtru-green)' }}>
                      <svg width="28" height="28" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    </div>
                    <div className="text-white fw-semibold small">Smart Contract</div>
                  </div>
                  <svg width="40" height="20" className="text-vtru-green flex-shrink-0">
                    <path d="M5 10 L30 10 M25 5 L30 10 L25 15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div className="text-center">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '60px', height: '60px', background: 'var(--vtru-green)' }}>
                      <span className="fw-bold text-dark">HOST</span>
                    </div>
                    <div className="text-white fw-semibold small">Precompile</div>
                  </div>
                  <svg width="40" height="20" className="text-vtru-green flex-shrink-0">
                    <path d="M5 10 L30 10 M25 5 L30 10 L25 15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div className="text-center">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '60px', height: '60px', background: 'rgba(161, 255, 117, 0.1)', border: '2px solid var(--vtru-green)' }}>
                      <svg width="28" height="28" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-white fw-semibold small">AI Agent</div>
                  </div>
                </div>
                <p className="text-muted-light text-center small mt-4 mb-0">
                  Agentic workflows triggered during transaction execution
                </p>
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
                  ['HOST', 'Trigger AI agents'],
                  ['Trend', 'Statistical analysis'],
                  ['RNG', 'Random number generation'],
                  ['Shuffle', 'Cryptographic card shuffle'],
                  ['CompoundInterest', 'High-precision DeFi calculations'],
                ].map(([name, desc]) => (
                  <div key={name} className="col-12">
                    <div className="card card-dark p-3 rounded-2">
                      <div className="d-flex align-items-center gap-3">
                        <code className="text-vtru-green fw-semibold" style={{ minWidth: '130px' }}>{name}</code>
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
