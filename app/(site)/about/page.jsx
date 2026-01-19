export const metadata = {
  title: 'About - Vitruveo',
  description: 'Building the Active Blockchain. Learn about Vitruveo\'s approach to extending the EVM.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
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
          <h2 className="text-white mb-4">Technology</h2>
          <div className="row g-4">
            {[
              ['EVM Compatible', 'Your Solidity skills transfer directly'],
              ['Protocol Extensions', 'Capabilities built into the node, not bolted on'],
              ['Decentralized Validators', 'No central authority for HOST requests'],
            ].map(([title, desc]) => (
              <div key={title} className="col-md-4">
                <div className="card card-dark p-4 rounded-3 h-100">
                  <h5 className="text-vtru-green mb-2">{title}</h5>
                  <p className="text-muted-light mb-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <h2 className="text-white mb-2">Real-World Scenarios</h2>
          <p className="text-muted-light mb-5">Concrete examples of what Protocol Smart Contracts enable</p>
          <div className="row g-4">
            {/* HOST - AI Agent */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">HOST</code>
                </div>
                <h6 className="text-white mb-2">DAO → AI Agent Execution</h6>
                <p className="text-muted-light small mb-0">Governance vote passes, HOST triggers Claude to analyze treasury and execute approved rebalancing strategy.</p>
              </div>
            </div>

            {/* HOST - Commerce */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">HOST</code>
                </div>
                <h6 className="text-white mb-2">NFT → Physical Fulfillment</h6>
                <p className="text-muted-light small mb-0">Collector buys art NFT, HOST calls Shopify API with shipping address, physical print ships automatically.</p>
              </div>
            </div>

            {/* HOST - IoT */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">HOST</code>
                </div>
                <h6 className="text-white mb-2">Payment → Smart Lock Access</h6>
                <p className="text-muted-light small mb-0">Rental deposit confirmed on-chain, HOST triggers August API, guest's phone can unlock the door.</p>
              </div>
            </div>

            {/* Passkey */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">Passkey</code>
                </div>
                <h6 className="text-white mb-2">Face ID Transaction Signing</h6>
                <p className="text-muted-light small mb-0">User approves swap with fingerprint. No seed phrase, no extension popup—just biometric confirmation via WebAuthn.</p>
              </div>
            </div>

            {/* RNG - Gaming */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">RNG</code>
                </div>
                <h6 className="text-white mb-2">Provably Fair Loot Drops</h6>
                <p className="text-muted-light small mb-0">Player defeats boss, RNG determines drop rarity. Result is verifiable on-chain—no rigged odds, no trust required.</p>
              </div>
            </div>

            {/* RNG - Lottery */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">RNG</code>
                </div>
                <h6 className="text-white mb-2">On-Chain Raffle Selection</h6>
                <p className="text-muted-light small mb-0">10,000 entries, one winner. RNG picks index 7,429. Anyone can verify the selection was random and untampered.</p>
              </div>
            </div>

            {/* CompoundInterest */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">CompoundInterest</code>
                </div>
                <h6 className="text-white mb-2">Precise DeFi Yield Calculation</h6>
                <p className="text-muted-light small mb-0">Staking contract calculates exact APY to 18 decimals. No rounding errors, no approximations—mathematically correct interest.</p>
              </div>
            </div>

            {/* Merkle - Airdrop */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">MerkleProof</code>
                </div>
                <h6 className="text-white mb-2">Gas-Efficient Airdrop Claims</h6>
                <p className="text-muted-light small mb-0">50,000 eligible addresses, but only a 32-byte root stored on-chain. Users prove eligibility with their Merkle path.</p>
              </div>
            </div>

            {/* Merkle - Whitelist */}
            <div className="col-md-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(161, 255, 117, 0.15)' }}>
                    <svg width="24" height="24" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <code className="text-vtru-green small">MerkleProof</code>
                </div>
                <h6 className="text-white mb-2">NFT Mint Whitelist</h6>
                <p className="text-muted-light small mb-0">Exclusive mint for 2,000 early supporters. Contract verifies membership in one cheap operation instead of checking a massive list.</p>
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
