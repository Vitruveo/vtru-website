import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Ecosystem - Vitruveo',
  description: 'Explore apps and infrastructure building on Vitruveo.',
};

export default function EcosystemPage() {
  return (
    <>
      {/* Hero with Video */}
      <section className="page-hero d-flex align-items-center" style={{ marginTop: '-72px' }}>
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/videos/ecosystem.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-white mb-4">Building on Vitruveo</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-dark py-5">
        <div className="container">
          <p className="text-muted-light mb-0" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
            Vitruveo has evolved from its genesis in arts and entertainment into a premier destination for building AI-centric applications. Unlike standard Web3 models that force rigid workflows, our HTTP Outbound Service Trigger (HOST) enables protocol smart contracts to interact seamlessly with existing Web2 hooks. This developer-first ecosystem includes a Model Context Protocol (MCP) server and an integrated AI chat to make blockchain information accessible and effortless.
          </p>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <h2 className="text-white mb-4">Featured Apps</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="mb-3" style={{ height: '36px' }}>
                  <Image src="/images/xibit.webp" alt="Xibit" width={100} height={36} style={{ objectFit: 'contain' }} />
                </div>
                <p className="text-muted-light small mb-3"><strong className="text-white">Xibit:</strong> AI infrastructure for global art economy</p>
                <a href="https://xibit.app" target="_blank" rel="noopener noreferrer" className="text-vtru-green">
                  Visit xibit.app →
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="mb-3" style={{ height: '36px' }}>
                  <Image src="/images/yieldable.svg" alt="Yieldable" width={140} height={44} style={{ objectFit: 'contain' }} />
                </div>
                <p className="text-muted-light small mb-3"><strong className="text-white">Yieldable:</strong> Smart contract-powered income platform</p>
                <a href="https://yieldable.finance" target="_blank" rel="noopener noreferrer" className="text-vtru-green">
                  Visit yieldable.finance →
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="mb-3" style={{ height: '36px' }}>
                  <Image src="/images/pretrend.png" alt="Pretrend" width={36} height={36} style={{ objectFit: 'contain' }} />
                </div>
                <p className="text-muted-light small mb-3"><strong className="text-white">Pretrend:</strong> Prediction marketplace for trends</p>
                <span className="badge bg-secondary">Coming Soon</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="mb-3" style={{ height: '36px' }}>
                  <Image src="/images/appvinci-white.png" alt="AppVinci" width={36} height={36} style={{ objectFit: 'contain' }} />
                </div>
                <p className="text-muted-light small mb-3"><strong className="text-white">AppVinci:</strong> Multi-application hub for Vitruveo</p>
                <span className="badge bg-secondary">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-dark py-5">
        <div className="container">
          <h2 className="text-white mb-4">Infrastructure</h2>
          <div className="row g-4">
            {[
              ['Scope', 'The focal point for your Vitruveo assets', 'https://scope.vitruveo.ai'],
              ['Explorer', 'Block explorer', 'https://explorer.vitruveo.ai'],
              ['AI Chat', 'Ask Vitruveo AI', '/chat'],
            ].map(([title, desc, href]) => (
              <div key={title} className="col-sm-6 col-lg-4">
                <div className="card card-dark p-4 rounded-3 h-100 text-center">
                  <h4 className="text-white mb-2">{title}</h4>
                  <p className="text-muted-light small mb-3">{desc}</p>
                  {href.startsWith('/') ? (
                    <Link href={href} className="btn btn-primary btn-sm">
                      Open →
                    </Link>
                  ) : (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Open →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
