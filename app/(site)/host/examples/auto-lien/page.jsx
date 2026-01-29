import Link from 'next/link';

export const metadata = {
  title: 'AutoLien: Self-Filing Debt - HOST Example',
  description: 'How HOST enables automatic UCC lien filings when DeFi loan payments are missed. On-chain debt becomes legally enforceable.',
};

export default function AutoLienPage() {
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
                <span className="badge bg-secondary">DeFi</span>
              </div>
              <h1 className="display-4 fw-bold text-white mb-4">
                AutoLien: Self-Filing Debt
              </h1>
              <p className="lead text-muted-light mb-4" style={{ fontSize: '1.35rem' }}>
                When DeFi loan payments are missed, HOST triggers automatic UCC lien filings via state
                e-filing APIs. On-chain debt becomes legally enforceable. No lawyers. No delays.
                Just cryptographic certainty meeting legal infrastructure.
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
                  <h2 className="text-white mb-3">DeFi's Enforcement Gap</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    DeFi lending has exploded, but it's entirely on-chain. When borrowers default on
                    under-collateralized loans, lenders have no recourse. The debt exists only in smart
                    contract state—invisible to courts, credit bureaus, and collection agencies. This
                    limits DeFi to over-collateralized lending, excluding billions in potential credit.
                  </p>
                </div>
              </div>

              <div className="card card-dark p-4 rounded-3 mb-0">
                <h5 className="text-white mb-3">Why DeFi Loans Stay Over-Collateralized</h5>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">No Legal Standing</strong>
                        <p className="text-muted-light small mb-0">On-chain debt isn't recognized by courts</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">No Credit Impact</strong>
                        <p className="text-muted-light small mb-0">Defaults don't affect borrower's credit score</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">No Asset Claims</strong>
                        <p className="text-muted-light small mb-0">Can't place liens on real-world assets</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-white mb-3">Bridge to Legal Enforcement</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    AutoLien monitors loan repayment on-chain. When a payment is missed beyond the grace
                    period, HOST triggers an API call to state UCC e-filing systems. A lien is automatically
                    filed against the borrower's assets. The on-chain default becomes a matter of public
                    legal record—enforceable in any court.
                  </p>
                </div>
              </div>

              <div className="alert mb-0" style={{ backgroundColor: 'rgba(161, 255, 117, 0.1)', border: '1px solid var(--vtru-green)', borderRadius: '12px', padding: '1.5rem' }}>
                <div className="d-flex align-items-center gap-3">
                  <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <strong className="text-vtru-green">UCC-1 Financing Statements</strong>
                    <p className="text-muted-light mb-0 small">
                      UCC liens are the standard mechanism for secured lending in the US. They're filed
                      electronically with state Secretaries of State and give creditors priority claims
                      on assets. AutoLien automates what previously required lawyers and paperwork.
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
              <p className="text-muted-light text-center mb-5">Missed Payment → Grace Period → HOST → Lien Filed</p>

              {/* Flow Diagram - SVG */}
              <div className="mb-5" style={{ overflowX: 'auto' }}>
                <svg viewBox="0 0 900 180" style={{ width: '100%', minWidth: '600px', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
                  {/* Step 1: Payment Due */}
                  <g>
                    <rect x="0" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="0" y="20" width="180" height="3" fill="#f59e0b"/>
                    <rect x="15" y="8" width="50" height="20" rx="4" fill="#f59e0b"/>
                    <text x="40" y="22" fill="#000" fontSize="10" fontWeight="600" textAnchor="middle">Step 1</text>
                    <circle cx="90" cy="70" r="24" fill="rgba(245, 158, 11, 0.15)"/>
                    <text x="90" y="78" fill="#f59e0b" fontSize="16" textAnchor="middle">📅</text>
                    <text x="90" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Payment Due</text>
                    <text x="90" y="130" fill="#999" fontSize="10" textAnchor="middle">Borrower misses</text>
                    <text x="90" y="145" fill="#999" fontSize="10" textAnchor="middle">scheduled payment</text>
                  </g>

                  {/* Arrow 1 */}
                  <g>
                    <path d="M190 100 L220 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M215 95 L220 100 L215 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 2: Grace Period */}
                  <g>
                    <rect x="230" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="230" y="20" width="180" height="3" fill="#ef4444"/>
                    <rect x="245" y="8" width="50" height="20" rx="4" fill="#ef4444"/>
                    <text x="270" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 2</text>
                    <circle cx="320" cy="70" r="24" fill="rgba(239, 68, 68, 0.15)"/>
                    <text x="320" y="78" fill="#ef4444" fontSize="16" textAnchor="middle">⏰</text>
                    <text x="320" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Grace Expires</text>
                    <text x="320" y="130" fill="#999" fontSize="10" textAnchor="middle">30-day grace period</text>
                    <text x="320" y="145" fill="#999" fontSize="10" textAnchor="middle">passes with no payment</text>
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
                    <text x="530" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">File Lien</text>
                    <text x="530" y="130" fill="#999" fontSize="10" textAnchor="middle">API call to state</text>
                    <text x="530" y="145" fill="#999" fontSize="10" textAnchor="middle">e-filing system</text>
                  </g>

                  {/* Arrow 3 */}
                  <g>
                    <path d="M610 100 L640 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M635 95 L640 100 L635 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 4: Lien Recorded */}
                  <g>
                    <rect x="650" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="650" y="20" width="180" height="3" fill="#3b82f6"/>
                    <rect x="665" y="8" width="50" height="20" rx="4" fill="#3b82f6"/>
                    <text x="690" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 4</text>
                    <circle cx="740" cy="70" r="24" fill="rgba(59, 130, 246, 0.15)"/>
                    <text x="740" y="78" fill="#3b82f6" fontSize="16" textAnchor="middle">🏛️</text>
                    <text x="740" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Lien Recorded</text>
                    <text x="740" y="130" fill="#999" fontSize="10" textAnchor="middle">UCC-1 filed with</text>
                    <text x="740" y="145" fill="#999" fontSize="10" textAnchor="middle">Secretary of State</text>
                  </g>
                </svg>
              </div>

              {/* Payload Example */}
              <div className="card card-dark p-4 rounded-3">
                <h5 className="text-vtru-green mb-3">HOST Payload to State E-Filing API</h5>
                <pre className="mb-0 p-3 rounded text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>
{`{
  "filingType": "UCC1",
  "jurisdiction": "delaware",
  "securedParty": {
    "name": "DeFi Lending Protocol DAO",
    "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f2bD21"
  },
  "debtor": {
    "name": "John Smith",  // From KYC on loan origination
    "ssn_hash": "0xABC...DEF",
    "address": "123 Main St, Wilmington, DE"
  },
  "collateral": "All assets, accounts, and proceeds",
  "debtAmount": 50000,
  "loanId": "LOAN-2026-00456",
  "blockchainProof": "0x123...789"
}`}
                </pre>
                <p className="text-muted-light small mt-3 mb-0">
                  The filing includes cryptographic proof of the on-chain default, making it easy to
                  verify in any legal proceeding. The lien attaches to all debtor assets until satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Enables */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-5">What This Enables</h2>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                    <h5 className="text-white mb-3">Under-Collateralized DeFi Loans</h5>
                    <p className="text-muted-light mb-0">
                      With legal enforcement as a backstop, lenders can offer loans at 50% or even 0%
                      collateralization. Borrowers who complete KYC and agree to lien terms access
                      capital efficiency impossible in pure DeFi.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                    <h5 className="text-white mb-3">Institutional DeFi Participation</h5>
                    <p className="text-muted-light mb-0">
                      Banks and credit unions can participate in DeFi lending knowing their loans have
                      the same legal protections as traditional lending. The UCC filing is the bridge
                      their compliance teams need.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                    <h5 className="text-white mb-3">Credit Bureau Integration</h5>
                    <p className="text-muted-light mb-0">
                      The same HOST trigger can notify credit bureaus. Defaults affect credit scores,
                      creating real consequences that encourage repayment. DeFi loans become "real" loans.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                    <h5 className="text-white mb-3">Automated Collections</h5>
                    <p className="text-muted-light mb-0">
                      Once a lien is filed, HOST can trigger collection agency APIs. The entire default
                      → lien → collection → recovery process happens without human intervention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Note */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card card-dark p-4 rounded-3" style={{ borderLeft: '4px solid #f59e0b' }}>
                <h5 className="text-white mb-3">
                  <svg width="20" height="20" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" className="me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Legal Considerations
                </h5>
                <p className="text-muted-light mb-0">
                  UCC filings require proper debtor identification and compliant security agreements.
                  AutoLien works best when borrowers complete KYC at loan origination and sign digital
                  security agreements (which can themselves be stored on-chain). The blockchain proof
                  provides irrefutable evidence of the debt and default, but the underlying loan agreement
                  must still meet state law requirements.
                </p>
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
              <h3 className="text-white mb-3">Ready to Bridge DeFi and Legal Systems?</h3>
              <p className="text-muted-light mb-4">
                HOST connects smart contracts to real-world legal infrastructure.
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
