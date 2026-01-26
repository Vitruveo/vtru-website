'use client';

import Link from 'next/link';

const HOST_DEMOS = [
  {
    slug: 'scout',
    title: 'AI Alpha Scout',
    description: 'Trigger an AI research agent from the blockchain to discover crypto projects matching your risk profile.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
        <path d="M8 14l4-6 4 6" />
      </svg>
    ),
    color: '#60a5fa',
    comingSoon: false,
  },
  {
    slug: 'sheets',
    title: 'AI Google Sheets Update',
    description: 'Log on-chain data directly to Google Sheets from your smart contract. Perfect for analytics and reporting.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
    color: '#34a853',
    comingSoon: false,
  },
  {
    slug: 'idea-scout',
    title: 'AI Idea Scout',
    description: 'Submit a business plan leveraging HOST. Our AI evaluates your concept and awards VTRU based on viability.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: '#fbbf24',
    comingSoon: true,
  },
  {
    slug: 'ntfy',
    title: 'Ntfy Alerts',
    description: 'Send push notifications to any device directly from your smart contract function.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    color: '#4ade80',
    comingSoon: false,
  },
  {
    slug: 'pass',
    title: 'Mobile Wallet Pass',
    description: 'Deliver digital passes to Apple Wallet or Google Wallet, triggered by on-chain transactions.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" />
      </svg>
    ),
    color: '#a78bfa',
    comingSoon: false,
  },
];

export default function HostLandingPage() {
  return (
    <section className="section-dark py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h1 className="text-white mb-3">HOST Interactive Demos</h1>
          <p className="text-muted-light lead mx-auto" style={{ maxWidth: '700px' }}>
            <strong>HTTP Onchain Secure Transport</strong> lets your smart contracts securely call any API,
            send notifications, trigger AI agents, and interact with the real world—all from on-chain function calls
            with encrypted payloads. No oracles. No bridges. Just direct, verifiable execution.
          </p>
          <p className="text-vtru-green display-6 fw-bold mt-4">Can your blockchain do that?</p>
        </div>

        <div className="row g-4 justify-content-center">
          {HOST_DEMOS.map((demo) => (
            <div key={demo.slug} className="col-sm-6 col-lg-4">
              {demo.comingSoon ? (
                <div className="demo-card demo-card-disabled">
                  <h4 className="demo-card-title">{demo.title}</h4>
                  <div className="demo-card-icon" style={{ color: demo.color }}>
                    {demo.icon}
                  </div>
                  <p className="demo-card-description">{demo.description}</p>
                  <div className="demo-card-button demo-card-button-disabled">
                    Coming Soon
                  </div>
                </div>
              ) : (
                <Link href={`/host/${demo.slug}`} className="text-decoration-none">
                  <div className="demo-card">
                    <h4 className="demo-card-title">{demo.title}</h4>
                    <div className="demo-card-icon" style={{ color: demo.color }}>
                      {demo.icon}
                    </div>
                    <p className="demo-card-description">{demo.description}</p>
                    <div className="demo-card-button" style={{ backgroundColor: demo.color }}>
                      Launch
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .demo-card {
          background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%);
          border-radius: 16px;
          padding: 1.75rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid #333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .demo-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: #444;
        }
        .demo-card-disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .demo-card-disabled:hover {
          transform: none;
          box-shadow: none;
          border-color: #333;
        }
        .demo-card-title {
          color: #fff;
          font-weight: 600;
          font-size: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .demo-card-icon {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .demo-card-description {
          color: #999;
          font-size: 0.9rem;
          line-height: 1.5;
          flex-grow: 1;
          margin-bottom: 1.5rem;
        }
        .demo-card-button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          color: #000;
          text-align: center;
        }
        .demo-card-button-disabled {
          background: #444;
          color: #888;
        }
      `}</style>
    </section>
  );
}
