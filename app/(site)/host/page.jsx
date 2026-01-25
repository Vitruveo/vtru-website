'use client';

import Link from 'next/link';

const HOST_DEMOS = [
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
    slug: 'n8n',
    title: 'n8n Workflow',
    description: 'Trigger automated workflows from smart contracts. Connect to 400+ apps and services through n8n\'s visual automation platform.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    color: '#ff6d5a',
    comingSoon: true,
  },
  {
    slug: 'sheets',
    title: 'Google Sheets',
    description: 'Write blockchain data directly to Google Sheets. Perfect for analytics dashboards and automated reporting.',
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
    slug: 'discord',
    title: 'Discord Bot',
    description: 'Post real-time blockchain updates to Discord channels. Keep your community informed automatically.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h.01M15 12h.01" />
        <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
        <path d="M7 16.5c3.5 1 6.5 1 10 0" />
        <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
        <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
      </svg>
    ),
    color: '#5865f2',
    comingSoon: true,
  },
  {
    slug: 'telegram',
    title: 'Telegram Alerts',
    description: 'Send instant Telegram messages when contracts execute. Monitor your dApps from anywhere.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
    color: '#0088cc',
    comingSoon: true,
  },
  {
    slug: 'webhook',
    title: 'Custom Webhook',
    description: 'Call any HTTP endpoint from your smart contracts. Build your own integrations with maximum flexibility.',
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    color: '#a1ff75',
    comingSoon: true,
  },
];

export default function HostLandingPage() {
  return (
    <section className="section-dark py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h1 className="text-white mb-3">HOST Interactive Demos</h1>
          <p className="text-muted-light lead mx-auto" style={{ maxWidth: '600px' }}>
            Explore how smart contracts can trigger real-world actions.
            Each demo shows a different HOST integration in action.
          </p>
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
