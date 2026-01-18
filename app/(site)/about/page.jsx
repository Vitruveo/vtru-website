export const metadata = {
  title: 'About - Vitruveo',
  description: 'Building the Active Blockchain. Learn about Vitruveo\'s approach to extending the EVM.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark-2 py-5">
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-white mb-4">Building the Active Blockchain</h1>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">The Problem</h2>
              <p className="lead text-muted-light">
                Blockchains are isolated. To make something happen off-chain requires
                indexers, keepers, and oracles. Every integration needs infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Our Approach</h2>
              <p className="lead text-muted-light">
                Vitruveo introduces "push" architecture at the protocol level. Contracts
                trigger external services directly. Your existing webhooks work unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Technology</h2>
              <div className="row g-3">
                {[
                  ['EVM Compatible', 'Your Solidity skills transfer directly'],
                  ['Protocol Extensions', 'Capabilities built into the node, not bolted on'],
                  ['Decentralized Validators', 'No central authority for HOST requests'],
                ].map(([title, desc]) => (
                  <div key={title} className="col-md-12">
                    <div className="card card-dark p-4 rounded-3">
                      <h5 className="text-vtru-green mb-2">{title}</h5>
                      <p className="text-muted-light mb-0">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <h2 className="text-white mb-4">Frequently Asked Questions</h2>
          <div className="row g-4">
            {[
              ['What is Vitruveo?', 'A Layer 1 EVM blockchain with protocol-level extensions that let smart contracts trigger external services, verify passkeys, generate randomness, and more.'],
              ['How is it different from Ethereum?', 'Vitruveo is 100% EVM compatible—your Solidity works unchanged. The difference is 12 additional Protocol Smart Contracts that extend what\'s possible.'],
              ['What are Protocol Smart Contracts?', 'Precompiled contracts built into Vitruveo\'s node software at fixed addresses. They provide capabilities too expensive or impossible to implement in Solidity.'],
              ['What is HOST?', 'HOST (HTTP Outbound Service Trigger) lets smart contracts push HTTP requests to external webhooks during transaction execution.'],
              ['Is it secure?', 'HOST uses a decentralized validator model—no single point of failure. Validators independently choose which requests to service.'],
              ['What\'s the gas cost?', '4 gwei base price with 5-second blocks. PSC operations range from 500 gas (RNG) to 200,000+ gas (IBC light client updates).'],
            ].map(([question, answer]) => (
              <div key={question} className="col-md-6">
                <div className="card card-dark p-4 rounded-3 h-100">
                  <h5 className="text-white mb-3">{question}</h5>
                  <p className="text-muted-light mb-0 small">{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
