import Link from 'next/link';

export const metadata = {
  title: 'Access Control: NFT-Gated Spaces - HOST Example',
  description: 'How HOST enables physical door locks controlled by NFT ownership. Hold the token, open the door.',
};

export default function AccessControlPage() {
  return (
    <article className="host-example-article">
      {/* Hero */}
      <section className="hero-gradient py-5">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="badge bg-vtru-green text-dark">HOST Example</span>
                <span className="badge bg-secondary">Access</span>
                <span className="badge bg-secondary">NFT</span>
              </div>
              <h1 className="display-4 fw-bold text-white mb-4">
                Access Control: NFT-Gated Spaces
              </h1>
              <p className="lead text-muted-light mb-4" style={{ fontSize: '1.35rem' }}>
                Physical door locks controlled by NFT ownership. Hold the token, open the door.
                Sell the token, lose access instantly. No key cards. No access lists. Just cryptographic proof.
              </p>
              <div className="d-flex align-items-center gap-4 text-muted-light">
                <span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                  Vitruveo Team
                </span>
                <span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                  January 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex align-items-start gap-4 mb-5">
                <div className="flex-shrink-0">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px', background: 'rgba(239, 68, 68, 0.15)', border: '2px solid #ef4444' }}>
                    <svg width="32" height="32" fill="none" stroke="#ef4444" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-white mb-3">The Access Management Nightmare</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Co-working spaces, private clubs, gated communities—they all struggle with the same problem.
                    Key cards get lost. Access lists get stale. Former members keep access. New members wait days
                    for provisioning. And when memberships transfer, the manual overhead is enormous.
                  </p>
                </div>
              </div>

              <div className="card card-dark p-4 rounded-3 mb-0">
                <h5 className="text-white mb-3">Traditional Access Control Pain Points</h5>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Manual Provisioning</strong>
                        <p className="text-muted-light small mb-0">New members wait days for access cards</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Stale Permissions</strong>
                        <p className="text-muted-light small mb-0">Former members retain access until manually revoked</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">No Transferability</strong>
                        <p className="text-muted-light small mb-0">Can't easily transfer or sell membership access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex align-items-start gap-4 mb-5">
                <div className="flex-shrink-0">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '64px', height: '64px', background: 'rgba(161, 255, 117, 0.15)', border: '2px solid var(--vtru-green)' }}>
                    <svg width="32" height="32" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-white mb-3">NFT = Access Key</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Mint an NFT that represents membership. The smart contract uses HOST to notify access control
                    systems whenever ownership changes. Buy the NFT, get instant access. Sell it, lose access
                    immediately. The blockchain is the single source of truth.
                  </p>
                </div>
              </div>

              <div className="alert mb-0" style={{ backgroundColor: 'rgba(161, 255, 117, 0.1)', border: '1px solid var(--vtru-green)', borderRadius: '12px', padding: '1.5rem' }}>
                <div className="d-flex align-items-center gap-3">
                  <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <strong className="text-vtru-green">Instant Transfer</strong>
                    <p className="text-muted-light mb-0 small">
                      When an NFT changes hands on any marketplace, HOST triggers the access system within seconds.
                      No admin intervention. No waiting period. Cryptographic proof of ownership = access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Workflow */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-2">The Workflow</h2>
              <p className="text-muted-light text-center mb-5">NFT Transfer → HOST → Door Unlocks</p>

              {/* Flow Diagram - SVG */}
              <div className="mb-5" style={{ overflowX: 'auto' }}>
                <svg viewBox="0 0 900 180" style={{ width: '100%', minWidth: '600px', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
                  {/* Step 1: NFT Purchase */}
                  <g>
                    <rect x="0" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="0" y="20" width="180" height="3" fill="#8b5cf6"/>
                    <rect x="15" y="8" width="50" height="20" rx="4" fill="#8b5cf6"/>
                    <text x="40" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 1</text>
                    <circle cx="90" cy="70" r="24" fill="rgba(139, 92, 246, 0.15)"/>
                    <text x="90" y="78" fill="#8b5cf6" fontSize="18" textAnchor="middle">NFT</text>
                    <text x="90" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Buy/Receive NFT</text>
                    <text x="90" y="130" fill="#999" fontSize="10" textAnchor="middle">Membership token</text>
                    <text x="90" y="145" fill="#999" fontSize="10" textAnchor="middle">transfers to new owner</text>
                  </g>

                  {/* Arrow 1 */}
                  <g>
                    <path d="M190 100 L220 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M215 95 L220 100 L215 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 2: On-Chain Event */}
                  <g>
                    <rect x="230" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="230" y="20" width="180" height="3" fill="#3b82f6"/>
                    <rect x="245" y="8" width="50" height="20" rx="4" fill="#3b82f6"/>
                    <text x="270" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 2</text>
                    <circle cx="320" cy="70" r="24" fill="rgba(59, 130, 246, 0.15)"/>
                    <text x="320" y="78" fill="#3b82f6" fontSize="16" textAnchor="middle">ERC721</text>
                    <text x="320" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Transfer Event</text>
                    <text x="320" y="130" fill="#999" fontSize="10" textAnchor="middle">Contract emits transfer</text>
                    <text x="320" y="145" fill="#999" fontSize="10" textAnchor="middle">with new owner address</text>
                  </g>

                  {/* Arrow 2 */}
                  <g>
                    <path d="M420 100 L450 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M445 95 L450 100 L445 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 3: HOST */}
                  <g>
                    <rect x="460" y="20" width="140" height="160" rx="12" fill="rgba(161, 255, 117, 0.1)" stroke="#a1ff75" strokeWidth="1"/>
                    <rect x="460" y="20" width="140" height="3" fill="#a1ff75"/>
                    <rect x="475" y="8" width="45" height="20" rx="4" fill="#a1ff75"/>
                    <text x="497" y="22" fill="#000" fontSize="10" fontWeight="700" textAnchor="middle">HOST</text>
                    <circle cx="530" cy="70" r="24" fill="#a1ff75"/>
                    <text x="530" y="76" fill="#000" fontSize="11" fontWeight="700" textAnchor="middle">HOST</text>
                    <text x="530" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Notify Access</text>
                    <text x="530" y="130" fill="#999" fontSize="10" textAnchor="middle">Signed payload to</text>
                    <text x="530" y="145" fill="#999" fontSize="10" textAnchor="middle">access control API</text>
                  </g>

                  {/* Arrow 3 */}
                  <g>
                    <path d="M610 100 L640 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M635 95 L640 100 L635 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 4: Door Unlocks */}
                  <g>
                    <rect x="650" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="650" y="20" width="180" height="3" fill="#10b981"/>
                    <rect x="665" y="8" width="50" height="20" rx="4" fill="#10b981"/>
                    <text x="690" y="22" fill="#000" fontSize="10" fontWeight="600" textAnchor="middle">Step 4</text>
                    <circle cx="740" cy="70" r="24" fill="rgba(16, 185, 129, 0.15)"/>
                    <text x="740" y="78" fill="#10b981" fontSize="18" textAnchor="middle">🔓</text>
                    <text x="740" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Access Granted</text>
                    <text x="740" y="130" fill="#999" fontSize="10" textAnchor="middle">Door lock updated</text>
                    <text x="740" y="145" fill="#999" fontSize="10" textAnchor="middle">with new authorized wallet</text>
                  </g>
                </svg>
              </div>

              {/* Payload Example */}
              <div className="card card-dark p-4 rounded-3">
                <h5 className="text-vtru-green mb-3">HOST Payload to Access System</h5>
                <pre className="mb-0 p-3 rounded text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>
{`{
  "tokenId": 1234,
  "newOwner": "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD21",
  "facility": "cowork-sf-soma",
  "accessLevel": "premium",
  "validUntil": null,  // Permanent until transfer
  "proof": "0xABC...DEF"
}`}
                </pre>
                <p className="text-muted-light small mt-3 mb-0">
                  The access control system (Kisi, Brivo, Salto, etc.) verifies the validator signature and
                  immediately provisions access for the new wallet holder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-5">Real-World Applications</h2>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(139, 92, 246, 0.15)' }}>
                        <svg width="24" height="24" fill="none" stroke="#8b5cf6" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h5 className="text-white mb-0">Co-Working Spaces</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      Memberships as NFTs. Trade your desk on OpenSea. Sublease by transferring the token.
                      The space operator never touches an access list.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(245, 158, 11, 0.15)' }}>
                        <svg width="24" height="24" fill="none" stroke="#f59e0b" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <h5 className="text-white mb-0">Gated Communities</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      Property deed NFTs that control gate access. Sell your home, gate access transfers
                      automatically. HOA maintains zero access infrastructure.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(236, 72, 153, 0.15)' }}>
                        <svg width="24" height="24" fill="none" stroke="#ec4899" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                        </svg>
                      </div>
                      <h5 className="text-white mb-0">Event Venues</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      VIP access NFTs for concerts, conferences, lounges. Resell on secondary markets.
                      Access is instant and fraud-proof.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(6, 182, 212, 0.15)' }}>
                        <svg width="24" height="24" fill="none" stroke="#06b6d4" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                      </div>
                      <h5 className="text-white mb-0">Private Clubs</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      Limited membership NFTs with built-in scarcity. Transfer requires on-chain approval.
                      The club's prestige is preserved cryptographically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HOST */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-2">Why This Requires HOST</h2>
              <p className="text-muted-light text-center mb-5">Real-time access updates, not delayed polling</p>

              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderLeft: '4px solid #ef4444' }}>
                    <h5 className="text-white mb-3">
                      <svg width="20" height="20" fill="none" stroke="#ef4444" viewBox="0 0 24 24" className="me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Without HOST: Polling Delays
                    </h5>
                    <p className="text-muted-light mb-0">
                      Traditional integrations poll the blockchain every few minutes. A member could sell their
                      NFT and still access the space for 10+ minutes. Or worse, a new buyer waits in the lobby
                      while the system catches up.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                    <h5 className="text-white mb-3">
                      <svg width="20" height="20" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24" className="me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      With HOST: Instant Updates
                    </h5>
                    <p className="text-muted-light mb-0">
                      The moment the NFT transfer confirms, HOST fires. The access system is updated in the same
                      block. Old owner loses access, new owner gains access—simultaneously and atomically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="text-white mb-3">Ready to Tokenize Access?</h3>
              <p className="text-muted-light mb-4">
                HOST makes it possible for NFTs to control physical spaces.
                Explore the technical documentation and start building.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link href="/host-primer" className="btn btn-primary btn-lg">
                  HOST Primer
                </Link>
                <Link href="/host" className="btn btn-outline-light btn-lg">
                  Try HOST Demos
                </Link>
                <Link href="/host/examples" className="btn btn-outline-light btn-lg">
                  Read HOST Examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Examples */}
      <section className="section-dark py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <Link href="/host/examples" className="text-vtru-green text-decoration-none">
                ← Back to HOST Examples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
