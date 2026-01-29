import Link from 'next/link';

export const metadata = {
  title: 'SmartEscrow: Atomic Closings - HOST Example',
  description: 'How HOST enables atomic real estate closings. When funds hit escrow, documents release and title records simultaneously.',
};

export default function SmartEscrowPage() {
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
                <span className="badge bg-secondary">Legal</span>
                <span className="badge bg-secondary">Real Estate</span>
              </div>
              <h1 className="display-4 fw-bold text-white mb-4">
                SmartEscrow: Atomic Closings
              </h1>
              <p className="lead text-muted-light mb-4" style={{ fontSize: '1.35rem' }}>
                Real estate closing automation. When the buyer's funds hit the escrow contract, HOST triggers
                document vault release AND county recorder API simultaneously. Payment and title transfer become
                a single atomic operation.
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
                  <h2 className="text-white mb-3">The Closing Day Chaos</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Real estate closings involve wire transfers, document signings, title recordings, and key
                    handovers—all supposedly happening "simultaneously" but actually staggered across hours or
                    days. Buyers wire funds hoping the deed will record. Sellers sign documents hoping the wire
                    will clear. Everyone trusts the escrow agent to coordinate, but mistakes and fraud happen.
                  </p>
                </div>
              </div>

              <div className="card card-dark p-4 rounded-3 mb-0">
                <h5 className="text-white mb-3">Traditional Closing Risks</h5>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Wire Fraud</strong>
                        <p className="text-muted-light small mb-0">$350M+ lost annually to closing wire scams</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Recording Gaps</strong>
                        <p className="text-muted-light small mb-0">Deed recording can lag funding by days</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Document Access</strong>
                        <p className="text-muted-light small mb-0">Buyers wait weeks for final documents</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-white mb-3">True Atomic Closing</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    SmartEscrow is a smart contract that holds the buyer's USDC. When funding is confirmed,
                    HOST triggers three simultaneous actions: release funds to seller, unlock document vault
                    for buyer, and submit e-recording to the county. All three happen in the same transaction—
                    or none of them do.
                  </p>
                </div>
              </div>

              <div className="alert mb-0" style={{ backgroundColor: 'rgba(161, 255, 117, 0.1)', border: '1px solid var(--vtru-green)', borderRadius: '12px', padding: '1.5rem' }}>
                <div className="d-flex align-items-center gap-3">
                  <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div>
                    <strong className="text-vtru-green">Cryptographic Escrow</strong>
                    <p className="text-muted-light mb-0 small">
                      Funds are locked in a smart contract, not a bank account. Release conditions are code,
                      not a human decision. The escrow agent becomes a facilitator, not a gatekeeper.
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
              <p className="text-muted-light text-center mb-5">Fund Escrow → HOST → Documents + Recording + Payment</p>

              {/* Flow Diagram - SVG */}
              <div className="mb-5" style={{ overflowX: 'auto' }}>
                <svg viewBox="0 0 900 180" style={{ width: '100%', minWidth: '600px', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
                  {/* Step 1: Fund Escrow */}
                  <g>
                    <rect x="0" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="0" y="20" width="180" height="3" fill="#3b82f6"/>
                    <rect x="15" y="8" width="50" height="20" rx="4" fill="#3b82f6"/>
                    <text x="40" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 1</text>
                    <circle cx="90" cy="70" r="24" fill="rgba(59, 130, 246, 0.15)"/>
                    <text x="90" y="78" fill="#3b82f6" fontSize="16" textAnchor="middle">💰</text>
                    <text x="90" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Fund Escrow</text>
                    <text x="90" y="130" fill="#999" fontSize="10" textAnchor="middle">Buyer deposits USDC</text>
                    <text x="90" y="145" fill="#999" fontSize="10" textAnchor="middle">to escrow contract</text>
                  </g>

                  {/* Arrow 1 */}
                  <g>
                    <path d="M190 100 L220 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M215 95 L220 100 L215 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 2: Conditions Met */}
                  <g>
                    <rect x="230" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="230" y="20" width="180" height="3" fill="#8b5cf6"/>
                    <rect x="245" y="8" width="50" height="20" rx="4" fill="#8b5cf6"/>
                    <text x="270" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 2</text>
                    <circle cx="320" cy="70" r="24" fill="rgba(139, 92, 246, 0.15)"/>
                    <text x="320" y="78" fill="#8b5cf6" fontSize="16" textAnchor="middle">✓</text>
                    <text x="320" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Execute Close</text>
                    <text x="320" y="130" fill="#999" fontSize="10" textAnchor="middle">All conditions verified</text>
                    <text x="320" y="145" fill="#999" fontSize="10" textAnchor="middle">on-chain</text>
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
                    <text x="530" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Triple Trigger</text>
                    <text x="530" y="130" fill="#999" fontSize="10" textAnchor="middle">3 parallel webhooks</text>
                    <text x="530" y="145" fill="#999" fontSize="10" textAnchor="middle">in one transaction</text>
                  </g>

                  {/* Arrow 3 - branching */}
                  <g>
                    <path d="M610 100 L640 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M635 95 L640 100 L635 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 4: Multi-target */}
                  <g>
                    <rect x="650" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="650" y="20" width="180" height="3" fill="#10b981"/>
                    <rect x="665" y="8" width="50" height="20" rx="4" fill="#10b981"/>
                    <text x="690" y="22" fill="#000" fontSize="10" fontWeight="600" textAnchor="middle">Step 4</text>
                    <text x="740" y="65" fill="#10b981" fontSize="11" textAnchor="middle">📄 Docs Released</text>
                    <text x="740" y="90" fill="#f59e0b" fontSize="11" textAnchor="middle">🏛️ Title Recorded</text>
                    <text x="740" y="115" fill="#3b82f6" fontSize="11" textAnchor="middle">💵 Seller Paid</text>
                    <text x="740" y="145" fill="#fff" fontSize="12" fontWeight="600" textAnchor="middle">Simultaneously</text>
                    <text x="740" y="165" fill="#999" fontSize="10" textAnchor="middle">Atomic operation</text>
                  </g>
                </svg>
              </div>

              {/* Payload Example */}
              <div className="card card-dark p-4 rounded-3">
                <h5 className="text-vtru-green mb-3">HOST Payloads (Parallel)</h5>
                <pre className="mb-0 p-3 rounded text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)', fontSize: '0.85rem' }}>
{`// To Document Vault (DocuSign, Dropbox Sign, etc.)
{
  "action": "RELEASE_TO_BUYER",
  "transactionId": "ESC-2026-00123",
  "buyerEmail": "buyer@email.com",
  "documents": ["deed.pdf", "title_insurance.pdf", "closing_statement.pdf"]
}

// To County e-Recording API
{
  "action": "RECORD_DEED",
  "county": "santa-clara-ca",
  "documentHash": "0x123...abc",
  "grantee": "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD21"
}

// Funds released on-chain automatically`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-5">Benefits for All Parties</h2>

              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(59, 130, 246, 0.15)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🏠</span>
                      </div>
                      <h5 className="text-white mb-0">Buyers</h5>
                    </div>
                    <ul className="text-muted-light small mb-0">
                      <li className="mb-2">Wire fraud protection—funds only release to verified seller</li>
                      <li className="mb-2">Instant document access upon funding</li>
                      <li>Cryptographic proof of ownership</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.15)' }}>
                        <span style={{ fontSize: '1.5rem' }}>💵</span>
                      </div>
                      <h5 className="text-white mb-0">Sellers</h5>
                    </div>
                    <ul className="text-muted-light small mb-0">
                      <li className="mb-2">Guaranteed payment upon closing</li>
                      <li className="mb-2">No waiting for wire confirmation</li>
                      <li>Immutable transaction record</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(245, 158, 11, 0.15)' }}>
                        <span style={{ fontSize: '1.5rem' }}>⚖️</span>
                      </div>
                      <h5 className="text-white mb-0">Title Companies</h5>
                    </div>
                    <ul className="text-muted-light small mb-0">
                      <li className="mb-2">Reduced liability and E&O exposure</li>
                      <li className="mb-2">Automated compliance audit trail</li>
                      <li>Faster closings, happier clients</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="text-white mb-3">Ready to Modernize Closings?</h3>
              <p className="text-muted-light mb-4">
                HOST enables true atomic transactions across Web2 and Web3.
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
      <section className="section-dark-2 py-4">
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
