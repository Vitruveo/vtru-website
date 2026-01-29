import Link from 'next/link';

export const metadata = {
  title: 'Supply Chain: Authenticated IoT Data - HOST Example',
  description: 'How HOST enables tamper-proof supply chain tracking with IoT sensors and blockchain authentication.',
};

export default function SupplyChainPage() {
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
                <span className="badge bg-secondary">Supply Chain</span>
                <span className="badge bg-secondary">IoT</span>
              </div>
              <h1 className="display-4 fw-bold text-white mb-4">
                Supply Chain: Authenticated IoT Data
              </h1>
              <p className="lead text-muted-light mb-4" style={{ fontSize: '1.35rem' }}>
                Sensor readings from shipping containers logged on-chain via HOST. Temperature, humidity,
                location—all authenticated by validators and immutably recorded. Tamper-proof provenance
                from factory to consumer.
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
                  <h2 className="text-white mb-3">The $50B Counterfeit Problem</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Pharmaceuticals, luxury goods, organic produce—supply chain fraud costs the global economy
                    over $50 billion annually. IoT sensors can track conditions, but the data flows through
                    centralized databases that can be manipulated. If you can edit the database, you can
                    fake the provenance.
                  </p>
                </div>
              </div>

              <div className="card card-dark p-4 rounded-3 mb-0">
                <h5 className="text-white mb-3">Traditional Supply Chain Vulnerabilities</h5>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Mutable Records</strong>
                        <p className="text-muted-light small mb-0">Centralized databases can be altered retroactively</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">Trust Gaps</strong>
                        <p className="text-muted-light small mb-0">Each handoff requires trusting the next party's data</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="text-danger">✕</span>
                      <div>
                        <strong className="text-white">No Real-Time Alerts</strong>
                        <p className="text-muted-light small mb-0">Issues discovered after goods arrive, not during transit</p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-white mb-3">Blockchain-Verified Sensor Data</h2>
                  <p className="text-muted-light mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    IoT sensors log readings to a smart contract. HOST triggers webhooks to supply chain
                    management systems, insurance APIs, and compliance databases—all in real-time. Every
                    data point is validator-signed and immutable. The blockchain becomes the single source
                    of truth for the entire journey.
                  </p>
                </div>
              </div>

              <div className="alert mb-0" style={{ backgroundColor: 'rgba(161, 255, 117, 0.1)', border: '1px solid var(--vtru-green)', borderRadius: '12px', padding: '1.5rem' }}>
                <div className="d-flex align-items-center gap-3">
                  <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <strong className="text-vtru-green">Bidirectional Flow</strong>
                    <p className="text-muted-light mb-0 small">
                      IoT → Blockchain (immutable record) → HOST → Web2 systems (ERP, insurance, customs).
                      All parties see the same truth. No disputes about what happened during transit.
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
              <p className="text-muted-light text-center mb-5">Sensor → Blockchain → HOST → All Stakeholders</p>

              {/* Flow Diagram - SVG */}
              <div className="mb-5" style={{ overflowX: 'auto' }}>
                <svg viewBox="0 0 900 180" style={{ width: '100%', minWidth: '600px', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
                  {/* Step 1: IoT Sensor */}
                  <g>
                    <rect x="0" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="0" y="20" width="180" height="3" fill="#06b6d4"/>
                    <rect x="15" y="8" width="50" height="20" rx="4" fill="#06b6d4"/>
                    <text x="40" y="22" fill="#000" fontSize="10" fontWeight="600" textAnchor="middle">Step 1</text>
                    <circle cx="90" cy="70" r="24" fill="rgba(6, 182, 212, 0.15)"/>
                    <text x="90" y="78" fill="#06b6d4" fontSize="16" textAnchor="middle">📡</text>
                    <text x="90" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Sensor Reading</text>
                    <text x="90" y="130" fill="#999" fontSize="10" textAnchor="middle">Temp: 2°C, Humidity: 45%</text>
                    <text x="90" y="145" fill="#999" fontSize="10" textAnchor="middle">GPS: 37.7749, -122.4194</text>
                  </g>

                  {/* Arrow 1 */}
                  <g>
                    <path d="M190 100 L220 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M215 95 L220 100 L215 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 2: On-Chain */}
                  <g>
                    <rect x="230" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="230" y="20" width="180" height="3" fill="#8b5cf6"/>
                    <rect x="245" y="8" width="50" height="20" rx="4" fill="#8b5cf6"/>
                    <text x="270" y="22" fill="#fff" fontSize="10" fontWeight="600" textAnchor="middle">Step 2</text>
                    <circle cx="320" cy="70" r="24" fill="rgba(139, 92, 246, 0.15)"/>
                    <text x="320" y="78" fill="#8b5cf6" fontSize="14" textAnchor="middle">⛓️</text>
                    <text x="320" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">On-Chain Log</text>
                    <text x="320" y="130" fill="#999" fontSize="10" textAnchor="middle">Immutable record with</text>
                    <text x="320" y="145" fill="#999" fontSize="10" textAnchor="middle">shipment ID + timestamp</text>
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
                    <text x="530" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Multi-Notify</text>
                    <text x="530" y="130" fill="#999" fontSize="10" textAnchor="middle">Parallel webhooks to</text>
                    <text x="530" y="145" fill="#999" fontSize="10" textAnchor="middle">all stakeholders</text>
                  </g>

                  {/* Arrow 3 */}
                  <g>
                    <path d="M610 100 L640 100" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                    <path d="M635 95 L640 100 L635 105" stroke="#a1ff75" strokeWidth="2" fill="none"/>
                  </g>

                  {/* Step 4: Stakeholders */}
                  <g>
                    <rect x="650" y="20" width="180" height="160" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                    <rect x="650" y="20" width="180" height="3" fill="#10b981"/>
                    <rect x="665" y="8" width="50" height="20" rx="4" fill="#10b981"/>
                    <text x="690" y="22" fill="#000" fontSize="10" fontWeight="600" textAnchor="middle">Step 4</text>
                    <circle cx="740" cy="70" r="24" fill="rgba(16, 185, 129, 0.15)"/>
                    <text x="740" y="78" fill="#10b981" fontSize="16" textAnchor="middle">🌐</text>
                    <text x="740" y="110" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">All Systems</text>
                    <text x="740" y="130" fill="#999" fontSize="10" textAnchor="middle">ERP, Insurance, Customs,</text>
                    <text x="740" y="145" fill="#999" fontSize="10" textAnchor="middle">Customer Portal updated</text>
                  </g>
                </svg>
              </div>

              {/* Payload Example */}
              <div className="card card-dark p-4 rounded-3">
                <h5 className="text-vtru-green mb-3">HOST Payload Example</h5>
                <pre className="mb-0 p-3 rounded text-white" style={{ backgroundColor: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>
{`{
  "shipmentId": "PHARMA-2026-00892",
  "containerId": "MAEU-7234891",
  "timestamp": 1738095600,
  "readings": {
    "temperature": 2.3,
    "humidity": 45,
    "shock": false,
    "gps": { "lat": 37.7749, "lng": -122.4194 }
  },
  "alert": null,  // or "TEMP_BREACH" if violated
  "proof": "0xABC...DEF"
}`}
                </pre>
                <p className="text-muted-light small mt-3 mb-0">
                  The same authenticated payload goes to the shipper's ERP, the insurer's claims system,
                  customs pre-clearance APIs, and the end customer's tracking portal—simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Scenario */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-5">Real-Time Breach Detection</h2>

              <div className="card card-dark p-4 rounded-3" style={{ borderLeft: '4px solid #ef4444' }}>
                <h5 className="text-white mb-4">
                  <svg width="20" height="20" fill="none" stroke="#ef4444" viewBox="0 0 24 24" className="me-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Scenario: Cold Chain Breach
                </h5>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="display-6 text-danger mb-2">8.2°C</div>
                      <p className="text-muted-light small mb-0">Temperature reading exceeds 4°C threshold for vaccine shipment</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="display-6 text-vtru-green mb-2">&lt;5s</div>
                      <p className="text-muted-light small mb-0">HOST triggers alert to all parties within seconds</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="display-6 text-white mb-2">4</div>
                      <p className="text-muted-light small mb-0">Simultaneous notifications: Shipper, Insurer, Receiver, Regulator</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-light mt-4 mb-0">
                  Because the breach is logged on-chain first, there's no dispute about when it happened or who was
                  responsible. Insurance claims process automatically. Replacement shipments trigger immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="text-white text-center mb-5">Industry Applications</h2>

              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="text-info mb-3" style={{ fontSize: '2.5rem' }}>💊</div>
                    <h6 className="text-white mb-2">Pharmaceuticals</h6>
                    <p className="text-muted-light small mb-0">Cold chain compliance for vaccines and biologics</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="text-warning mb-3" style={{ fontSize: '2.5rem' }}>🍷</div>
                    <h6 className="text-white mb-2">Luxury Goods</h6>
                    <p className="text-muted-light small mb-0">Provenance tracking for wine, art, and collectibles</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="text-success mb-3" style={{ fontSize: '2.5rem' }}>🥬</div>
                    <h6 className="text-white mb-2">Food & Produce</h6>
                    <p className="text-muted-light small mb-0">Farm-to-table traceability for organic certification</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card card-dark p-4 rounded-3 h-100 text-center">
                    <div className="text-primary mb-3" style={{ fontSize: '2.5rem' }}>⚙️</div>
                    <h6 className="text-white mb-2">Industrial Parts</h6>
                    <p className="text-muted-light small mb-0">Authenticity verification for safety-critical components</p>
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
              <h3 className="text-white mb-3">Ready to Secure Your Supply Chain?</h3>
              <p className="text-muted-light mb-4">
                HOST creates an unbroken chain of custody from origin to destination.
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
