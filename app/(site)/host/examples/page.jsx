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
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  // Future examples can be added here
  // {
  //   slug: 'ai-oracle',
  //   title: 'AI Oracle: On-Chain Intelligence',
  //   description: 'Smart contracts that trigger AI inference and receive decisions back on-chain.',
  //   tags: ['AI', 'Oracle', 'DeFi'],
  //   icon: (...)
  // },
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
                  <div className="card card-dark p-4 rounded-3 h-100 hover-lift" style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle d-flex align-items-center justify-content-center text-vtru-green" style={{ width: '56px', height: '56px', background: 'rgba(161, 255, 117, 0.15)' }}>
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

            {/* Coming Soon Placeholder */}
            <div className="col-md-6 col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100" style={{ opacity: 0.6 }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center text-muted-light" style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.05)' }}>
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-white mb-2">More Examples Coming</h4>
                <p className="text-muted-light small mb-0">
                  We're documenting more real-world HOST applications. Check back soon for AI oracles,
                  DeFi automation, and more.
                </p>
              </div>
            </div>
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
