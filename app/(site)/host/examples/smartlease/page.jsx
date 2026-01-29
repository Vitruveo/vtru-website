import Link from 'next/link';

export const metadata = {
  title: 'SmartLease: Self-Enforcing Assets - HOST Example',
  description: 'How HOST enables pay-as-you-go industrial machinery financing. Smart contracts that control physical assets.',
};

export default function SmartLeasePage() {
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
                <span className="badge bg-secondary">RWA / DePIN</span>
              </div>
              <h1 className="display-4 fw-bold text-white mb-4">
                SmartLease: The Self-Enforcing Asset
              </h1>
              <p className="lead text-muted-light mb-4" style={{ fontSize: '1.35rem' }}>
                A pay-as-you-go protocol for high-value industrial machinery. When payment stops, the machine stops.
                No credit checks. No repossession risk. Just cryptographic certainty.
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
                  <h2 className="text-white mb-3">The $2.5 Trillion Problem</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Financing heavy equipment—construction excavators, MRI machines, industrial generators—in
                    high-risk or cross-border markets is nearly impossible. Lenders fear non-payment and the
                    inability to repossess assets in remote locations. The result? A massive financing gap
                    that leaves businesses unable to access the equipment they need.
                  </p>
                </div>
              </div>

              <div className="card card-dark p-4 rounded-3 mb-0">
                <h5 className="text-white mb-3">Traditional Equipment Financing Challenges</h5>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Credit Risk</strong>
                        <p className="text-muted-light small mb-0">No reliable credit history in emerging markets</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Repossession</strong>
                        <p className="text-muted-light small mb-0">Asset recovery in remote locations is costly or impossible</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Jurisdiction</strong>
                        <p className="text-muted-light small mb-0">Cross-border legal enforcement is complex</p>
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
                  <h2 className="text-white mb-3">The SmartLease Solution</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    SmartLease uses HOST to turn machinery into a <strong className="text-white">"Smart Asset"</strong> that
                    only operates when the blockchain confirms it has been paid for. The machine becomes its own
                    enforcement mechanism. No credit check needed—if payment stops, the machine stops.
                  </p>
                </div>
              </div>

              {/* Key Innovation Callout */}
              <div className="alert mb-0" style={{ backgroundColor: 'rgba(161, 255, 117, 0.1)', border: '1px solid var(--vtru-green)', borderRadius: '12px', padding: '1.5rem' }}>
                <div className="d-flex align-items-center gap-3">
                  <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <strong className="text-vtru-green">The Paradigm Shift</strong>
                    <p className="text-muted-light mb-0 small">
                      This moves HOST from "logging" to <strong className="text-white">controlling</strong>—demonstrating
                      how smart contracts can enforce physical contracts in the real world.
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
              <p className="text-muted-light text-center mb-5">Web3 → HOST → Web2 → Physical World</p>

              {/* Flow Diagram - SVG for unified scaling */}
              <div className="mb-5" style={{ overflowX: 'auto' }}>
                <svg viewBox="0 0 900 180" style={{ width: '100%', minWidth: '600px', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
                  {/* Step 1: Payment */}
                  <g>
                    <rect x="0" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="0" y="20" width="180" height="3" fill="#3b82f6"/>
                    <rect x="15" y="8" width="50" height="20" rx="4" fill="#3b82f6"/>
                    <text x="40" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 1</text>
                    <circle cx="90" cy="70" r="24" fill="rgba(59, 130, 246, 0.15)"/>
                    <text x="90" y="76" fill="#3b82f6" fontSize="20" textAnchor="middle">$</text>
                    <text x="90" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Payment</text>
                    <text x="90" y="130" fill="#999" fontSize="10" textAnchor="middle">Company pays 1,000 USDC</text>
                    <text x="90" y="145" fill="#999" fontSize="10" textAnchor="middle">for 30 days of usage</text>
                  </g>

                  {/* Arrow 1 */}
                  <g>
                    <path d="M190 100 L220 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M215 95 L220 100 L215 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 2: On-Chain Record */}
                  <g>
                    <rect x="230" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="230" y="20" width="180" height="3" fill="#8b5cf6"/>
                    <rect x="245" y="8" width="50" height="20" rx="4" fill="#8b5cf6"/>
                    <text x="270" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 2</text>
                    <circle cx="320" cy="70" r="24" fill="rgba(139, 92, 246, 0.15)"/>
                    <text x="320" y="78" fill="#8b5cf6" fontSize="18" textAnchor="middle">⚗</text>
                    <text x="320" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">On-Chain Record</text>
                    <text x="320" y="130" fill="#999" fontSize="10" textAnchor="middle">Contract saves DeviceID,</text>
                    <text x="320" y="145" fill="#999" fontSize="10" textAnchor="middle">LeaseEndTimestamp, UsageTier</text>
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
                    <text x="530" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Trigger</text>
                    <text x="530" y="130" fill="#999" fontSize="10" textAnchor="middle">Signed payload sent</text>
                    <text x="530" y="145" fill="#999" fontSize="10" textAnchor="middle">to IoT Cloud</text>
                  </g>

                  {/* Arrow 3 */}
                  <g>
                    <path d="M610 100 L640 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M635 95 L640 100 L635 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 4: Machine Unlocked */}
                  <g>
                    <rect x="650" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="650" y="20" width="180" height="3" fill="#f59e0b"/>
                    <rect x="665" y="8" width="50" height="20" rx="4" fill="#f59e0b"/>
                    <text x="690" y="22" fill="#000" fontSize="10" fontWeight="600" textAnchor="middle">Step 4</text>
                    <circle cx="740" cy="70" r="24" fill="rgba(245, 158, 11, 0.15)"/>
                    <text x="740" y="78" fill="#f59e0b" fontSize="18" textAnchor="middle">⚙</text>
                    <text x="740" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Machine Unlocked</text>
                    <text x="740" y="130" fill="#999" fontSize="10" textAnchor="middle">OTA update enables</text>
                    <text x="740" y="145" fill="#999" fontSize="10" textAnchor="middle">ignition for 30 days</text>
                  </g>
                </svg>
              </div>

              {/* Payload Example */}
              <div className="card card-dark p-4 rounded-3">
                <h5 className="text-vtru-green mb-3">HOST Payload to IoT Cloud</h5>
                <pre className="mb-0 p-3 rounded text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>
{`{
  "VIN": "EXC-9988",
  "Command": "EXTEND_ACCESS",
  "ValidUntil": 175910234,
  "Proof": "0xABC...DEF"  // Validator signature
}`}
                </pre>
                <p className="text-muted-light small mt-3 mb-0">
                  The IoT Cloud (Cat Connect, John Deere JDLink, Particle, etc.) verifies the request came from
                  the Vitruveo blockchain and pushes an Over-the-Air update to the excavator's onboard computer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HOST is Essential */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-2">Why This Requires HOST</h2>
              <p className="text-muted-light text-center mb-5">The critical security that makes SmartLease possible</p>

              <div className="row g-4">
                {/* The Risk */}
                <div className="col-lg-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderLeft: '4px solid #ef4444' }}>
                    <h5 className="text-white mb-3">
                      <svg width="20" height="20" fill="none" stroke="#ef4444" viewBox="0 0 24 24" className="me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Without HOST: Man-in-the-Middle Risk
                    </h5>
                    <p className="text-muted-light mb-3">
                      Traditional approach: A centralized server watches the blockchain and sends "unlock" signals to machines.
                    </p>
                    <ul className="text-muted-light small mb-0">
                      <li className="mb-2"><strong className="text-white">Corrupt Admin Attack:</strong> An insider could manually send "Unlock" signals to friends' machines without payment</li>
                      <li className="mb-2"><strong className="text-white">Server Downtime:</strong> If the server fails, paying customers get locked out—massive liability</li>
                      <li><strong className="text-white">Single Point of Failure:</strong> The server becomes a honeypot for hackers</li>
                    </ul>
                  </div>
                </div>

                {/* The Fix */}
                <div className="col-lg-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                    <h5 className="text-white mb-3">
                      <svg width="20" height="20" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24" className="me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      With HOST: Atomic Payment-to-Unlock
                    </h5>
                    <p className="text-muted-light mb-3">
                      The "Unlock" command is atomically linked to the payment transaction. No human intermediary.
                    </p>
                    <ul className="text-muted-light small mb-0">
                      <li className="mb-2"><strong className="text-vtru-green">Cryptographic Proof:</strong> IoT Cloud only accepts commands signed by HOST validators</li>
                      <li className="mb-2"><strong className="text-vtru-green">Blockchain as Admin:</strong> The smart contract is the only authority that can unlock machines</li>
                      <li><strong className="text-vtru-green">Trustless:</strong> No corrupt employee, no server downtime, no single point of failure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meaningful Data */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white mb-4">Meaningful Data Dependency</h2>
              <p className="text-muted-light mb-4" style={{ fontSize: '1.1rem' }}>
                The Web2 action relies entirely on specific data saved in the Web3 transaction:
              </p>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                        <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h5 className="text-white mb-0">Time-Based Access</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      The specific amount paid determines the exact <code className="text-vtru-green">LeaseEndTimestamp</code> sent
                      in the payload. Pay for 30 days, get exactly 30 days. Pay for 90 days, get 90 days.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                        <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h5 className="text-white mb-0">Performance Tiers</h5>
                    </div>
                    <p className="text-muted-light mb-0">
                      Pay extra for "High Output Mode" and the contract saves <code className="text-vtru-green">Mode: Turbo</code>.
                      HOST triggers the IoT Cloud to unlock higher horsepower settings on the engine ECU.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center">
                <h2 className="text-white mb-4">The Holy Grail of RWA Financing</h2>
                <p className="text-muted-light mb-4" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                  SmartLease creates <strong className="text-vtru-green">"Repo-proof" assets</strong>. Manufacturers can lease
                  expensive equipment to anyone in the world without credit checks, knowing that if the crypto
                  payment stops, the machine stops.
                </p>

                <div className="row g-4 mt-4 justify-content-center">
                  <div className="col-auto">
                    <div className="text-center px-4">
                      <div className="display-5 fw-bold text-vtru-green mb-1">$2.5T</div>
                      <div className="text-muted-light small">Equipment Financing Gap</div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-center px-4">
                      <div className="display-5 fw-bold text-vtru-green mb-1">0</div>
                      <div className="text-muted-light small">Credit Checks Required</div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-center px-4">
                      <div className="display-5 fw-bold text-vtru-green mb-1">100%</div>
                      <div className="text-muted-light small">Payment Enforcement</div>
                    </div>
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
              <h3 className="text-white mb-3">Ready to Build Self-Enforcing Assets?</h3>
              <p className="text-muted-light mb-4">
                HOST makes it possible for smart contracts to control physical infrastructure.
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
