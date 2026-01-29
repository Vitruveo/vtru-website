import Link from 'next/link';

export const metadata = {
  title: 'HOST Real-World Examples',
  description: 'Explore real-world applications of HOST Protocol. See how smart contracts control physical infrastructure, trigger AI agents, and automate business processes.',
};

const EXAMPLES = [
  {
    slug: 'smartlease',
    title: 'SmartLease: Self-Enforcing Assets',
    description: 'Pay-as-you-go protocol for high-value industrial machinery. When payment stops, the machine stops. The holy grail of RWA financing.',
    tags: ['RWA', 'DePIN', 'IoT'],
    color: '#f59e0b',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    slug: 'access-control',
    title: 'Access Control: NFT-Gated Spaces',
    description: 'Physical door locks controlled by NFT ownership. Hold the token, open the door. Sell the token, lose access instantly.',
    tags: ['Access', 'NFT', 'IoT'],
    color: '#8b5cf6',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain: Authenticated IoT Data',
    description: 'Sensor readings from shipping containers logged on-chain via HOST. Tamper-proof provenance from factory to consumer.',
    tags: ['Supply Chain', 'IoT', 'Provenance'],
    color: '#06b6d4',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    slug: 'smart-escrow',
    title: 'SmartEscrow: Atomic Closings',
    description: 'Real estate closing automation. When funds hit escrow, HOST triggers document release and title recording simultaneously.',
    tags: ['Legal', 'Real Estate', 'Escrow'],
    color: '#3b82f6',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    slug: 'auto-lien',
    title: 'AutoLien: Self-Filing Debt',
    description: 'Missed DeFi payments trigger automatic UCC lien filings via state e-filing APIs. On-chain debt becomes legally enforceable.',
    tags: ['Legal', 'DeFi', 'Compliance'],
    color: '#ef4444',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    slug: 'credit-bridge',
    title: 'Credit Bridge: DeFi Builds Credit',
    description: 'On-chain loan performance triggers HOST to report to traditional credit bureaus. Your DeFi history becomes your credit score.',
    tags: ['DeFi', 'Credit', 'TradFi'],
    color: '#10b981',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function HostExamplesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-5">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white mb-3">HOST Real-World Examples</h1>
          <p className="lead text-muted-light mb-0" style={{ maxWidth: '700px' }}>
            Explore how HOST enables smart contracts to control physical infrastructure,
            trigger AI agents, and automate business processes in the real world.
          </p>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row g-4">
            {EXAMPLES.map((example) => (
              <div key={example.slug} className="col-md-6 col-lg-4">
                <Link href={`/host/examples/${example.slug}`} className="text-decoration-none">
                  <div className="card card-dark p-4 rounded-3 h-100 hover-lift" style={{ transition: 'transform 0.2s, box-shadow 0.2s', borderTop: `3px solid ${example.color}` }}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px', background: `${example.color}20`, color: example.color }}>
                        {example.icon}
                      </div>
                    </div>
                    <h4 className="text-white mb-2">{example.title}</h4>
                    <p className="text-muted-light small mb-3">{example.description}</p>
                    <div className="d-flex flex-wrap gap-2 mt-auto">
                      {example.tags.map((tag) => (
                        <span key={tag} className="badge bg-secondary">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark-2 py-5">
        <div className="container text-center">
          <h3 className="text-white mb-3">Have a Use Case in Mind?</h3>
          <p className="text-muted-light mb-4">
            HOST enables entirely new categories of applications. If you're building something innovative,
            we'd love to hear about it.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/host-primer" className="btn btn-primary btn-lg">
              Read the HOST Primer
            </Link>
            <Link href="/host" className="btn btn-outline-light btn-lg">
              Try Interactive Demos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
