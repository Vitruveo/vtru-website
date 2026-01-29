import Link from 'next/link';

export const metadata = {
  title: 'Credit Bridge: DeFi Builds Credit - HOST Example',
  description: 'How HOST enables on-chain loan performance to build traditional credit scores. Your DeFi history becomes your credit score.',
};

export default function CreditBridgePage() {
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
                <span className="badge bg-secondary">DeFi</span>
                <span className="badge bg-secondary">Credit</span>
              </div>
              <h1 className="display-4 fw-bold text-white mb-4">
                Credit Bridge: DeFi Builds Credit
              </h1>
              <p className="lead text-muted-light mb-4" style={{ fontSize: '1.35rem' }}>
                On-chain loan performance triggers HOST to report to traditional credit bureaus.
                Pay your DeFi loans on time, build your FICO score. Your blockchain history becomes
                your path to traditional financial services.
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
                  <h2 className="text-white mb-3">The Credit Invisibility Problem</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Millions of people are "credit invisible"—they have no traditional credit history.
                    Immigrants, young adults, and the unbanked can't get mortgages, car loans, or credit
                    cards because they have no FICO score. Meanwhile, they may have years of perfect
                    on-chain loan repayment that counts for nothing in the traditional system.
                  </p>
                </div>
              </div>

              <div className="row g-4 mb-0">
                <div className="col-md-4">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="display-4 text-danger mb-2">45M</div>
                    <p className="text-muted-light small mb-0">Americans are credit invisible or have unscorable files</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="display-4 text-danger mb-2">$0</div>
                    <p className="text-muted-light small mb-0">Value of on-chain payment history to traditional lenders</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="display-4 text-danger mb-2">∞</div>
                    <p className="text-muted-light small mb-0">The gap between DeFi reputation and TradFi access</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-white mb-3">On-Chain to Credit Score</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Credit Bridge monitors DeFi loan payments on-chain. Each on-time payment triggers HOST
                    to report to credit bureaus (Experian, Equifax, TransUnion) via their data furnisher APIs.
                    Over time, your blockchain payment history builds a traditional credit score—opening
                    doors to mortgages, auto loans, and mainstream financial services.
                  </p>
                </div>
              </div>

              <div className="alert mb-0" style={{ backgroundColor: 'rgba(161, 255, 117, 0.1)', border: '1px solid var(--vtru-green)', borderRadius: '12px', padding: '1.5rem' }}>
                <div className="d-flex align-items-center gap-3">
                  <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <strong className="text-vtru-green">Real Credit Impact</strong>
                    <p className="text-muted-light mb-0 small">
                      Credit bureaus accept data from any qualified "data furnisher." A DeFi protocol
                      can become a furnisher by meeting their requirements. Once registered, on-chain
                      payment data is treated the same as credit card or mortgage payments.
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
              <p className="text-muted-light text-center mb-5">Loan Payment → On-Chain Record → HOST → Credit Bureau</p>

              {/* Flow Diagram - SVG */}
              <div className="mb-5" style={{ overflowX: 'auto' }}>
                <svg viewBox="0 0 900 180" style={{ width: '100%', minWidth: '600px', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
                  {/* Step 1: Payment */}
                  <g>
                    <rect x="0" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="0" y="20" width="180" height="3" fill="#3b82f6"/>
                    <rect x="15" y="8" width="50" height="20" rx="4" fill="#3b82f6"/>
                    <text x="40" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 1</text>
                    <circle cx="90" cy="70" r="24" fill="rgba(59, 130, 246, 0.15)"/>
                    <text x="90" y="78" fill="#3b82f6" fontSize="16" textAnchor="middle">💳</text>
                    <text x="90" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Make Payment</text>
                    <text x="90" y="130" fill="#999" fontSize="10" textAnchor="middle">Borrower repays</text>
                    <text x="90" y="145" fill="#999" fontSize="10" textAnchor="middle">DeFi loan on-chain</text>
                  </g>

                  {/* Arrow 1 */}
                  <g>
                    <path d="M190 100 L220 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M215 95 L220 100 L215 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 2: Record */}
                  <g>
                    <rect x="230" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="230" y="20" width="180" height="3" fill="#8b5cf6"/>
                    <rect x="245" y="8" width="50" height="20" rx="4" fill="#8b5cf6"/>
                    <text x="270" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 2</text>
                    <circle cx="320" cy="70" r="24" fill="rgba(139, 92, 246, 0.15)"/>
                    <text x="320" y="78" fill="#8b5cf6" fontSize="14" textAnchor="middle">⛓️</text>
                    <text x="320" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">On-Chain Record</text>
                    <text x="320" y="130" fill="#999" fontSize="10" textAnchor="middle">Payment recorded with</text>
                    <text x="320" y="145" fill="#999" fontSize="10" textAnchor="middle">timestamp and amount</text>
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
                    <text x="530" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Report Payment</text>
                    <text x="530" y="130" fill="#999" fontSize="10" textAnchor="middle">Metro 2 format to</text>
                    <text x="530" y="145" fill="#999" fontSize="10" textAnchor="middle">credit bureau APIs</text>
                  </g>

                  {/* Arrow 3 */}
                  <g>
                    <path d="M610 100 L640 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M635 95 L640 100 L635 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 4: Credit Updated */}
                  <g>
                    <rect x="650" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="650" y="20" width="180" height="3" fill="#10b981"/>
                    <rect x="665" y="8" width="50" height="20" rx="4" fill="#10b981"/>
                    <text x="690" y="22" fill="#000" fontSize="10" fontWeight="600" textAnchor="middle">Step 4</text>
                    <circle cx="740" cy="70" r="24" fill="rgba(16, 185, 129, 0.15)"/>
                    <text x="740" y="78" fill="#10b981" fontSize="16" textAnchor="middle">📈</text>
                    <text x="740" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Credit Updated</text>
                    <text x="740" y="130" fill="#999" fontSize="10" textAnchor="middle">FICO score reflects</text>
                    <text x="740" y="145" fill="#999" fontSize="10" textAnchor="middle">on-chain payment history</text>
                  </g>
                </svg>
              </div>

              {/* Payload Example */}
              <div className="card card-dark p-4 rounded-3">
                <h5 className="text-vtru-green mb-3">HOST Payload (Metro 2 Format)</h5>
                <pre className="mb-0 p-3 rounded text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)', fontSize: '0.85rem' }}>
{`{
  "format": "metro2",
  "furnisherCode": "DEFI-LENDING-001",
  "consumer": {
    "ssn": "XXX-XX-1234",  // Hashed, from KYC
    "name": "SMITH, JOHN Q",
    "address": "123 MAIN ST, ANYTOWN, CA 90210"
  },
  "account": {
    "type": "I",  // Installment loan
    "accountNumber": "LOAN-2026-00789",
    "openDate": "2025-06-15",
    "creditLimit": 10000,
    "currentBalance": 7500,
    "paymentStatus": "00",  // Current
    "paymentAmount": 250,
    "paymentDate": "2026-01-15"
  },
  "blockchainProof": "0x123...789"
}`}
                </pre>
                <p className="text-muted-light small mt-3 mb-0">
                  Metro 2 is the standard format used by all major credit bureaus. The blockchain proof
                  provides an immutable audit trail that the payment actually occurred.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-5">The Credit Building Journey</h2>

              <div className="row g-4">
                <div className="col-md-3">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="text-muted-light mb-2">Month 1</div>
                    <div className="display-6 text-white mb-2">0</div>
                    <p className="text-muted-light small mb-0">No traditional credit history</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="text-muted-light mb-2">Month 6</div>
                    <div className="display-6 text-warning mb-2">580</div>
                    <p className="text-muted-light small mb-0">First scoreable file established</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="text-muted-light mb-2">Month 12</div>
                    <div className="display-6 text-info mb-2">650</div>
                    <p className="text-muted-light small mb-0">Qualifies for basic credit cards</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="text-muted-light mb-2">Month 24</div>
                    <div className="display-6 text-vtru-green mb-2">720+</div>
                    <p className="text-muted-light small mb-0">Prime credit, mortgage eligible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-5">Who Benefits</h2>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(59, 130, 246, 0.15)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🌍</span>
                      </div>
                      <h5 className="text-white mb-0">Immigrants</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      Arrive in a new country with no local credit history. Use DeFi loans to build
                      credit while navigating the traditional banking system.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(139, 92, 246, 0.15)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🎓</span>
                      </div>
                      <h5 className="text-white mb-0">Young Adults</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      Start building credit before getting a traditional credit card. DeFi loans
                      can be more accessible than bank products for first-time borrowers.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(245, 158, 11, 0.15)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🔄</span>
                      </div>
                      <h5 className="text-white mb-0">Credit Rebuilders</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      Recovering from bankruptcy or collections. DeFi loans reported to bureaus
                      provide a path back to good credit faster than secured cards alone.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.15)' }}>
                        <span style={{ fontSize: '1.5rem' }}>💼</span>
                      </div>
                      <h5 className="text-white mb-0">Gig Workers</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      Variable income makes traditional lending difficult. DeFi's flexible terms
                      combined with credit reporting creates new opportunities.
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
              <h3 className="text-white mb-3">Ready to Bridge DeFi and Credit?</h3>
              <p className="text-muted-light mb-4">
                HOST connects on-chain activity to real-world financial systems.
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
