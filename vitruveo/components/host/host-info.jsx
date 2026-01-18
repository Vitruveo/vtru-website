'use client';

import { PSC_ADDRESSES, PSC_GAS, HOST_REGISTRY_ADDRESS } from '../../lib/psc-constants';

export function HostInfo() {
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="psc-badge">
          <span className="label">Address</span>
          <code>{PSC_ADDRESSES.HOST}</code>
        </div>
        <div className="psc-badge">
          <span className="label">Gas</span>
          <code>{PSC_GAS.HOST.base.toLocaleString()}+</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">HOST</h1>
      <p className="lead text-muted-light mb-5">HTTP Outbound Service Trigger</p>

      <div className="row g-5">
        <div className="col-lg-8">
          <section className="mb-5">
            <h3 className="text-vtru-green mb-3">What It Does</h3>
            <p className="text-muted-light">
              HOST enables smart contracts to trigger HTTP POST requests to external webhooks
              during transaction execution. Your contract pushes requests directly to existing
              webhooks—no indexers, no polling, no infrastructure.
            </p>
          </section>

          <section className="mb-5">
            <h3 className="text-vtru-green mb-3">Why It Matters</h3>
            <p className="text-muted-light">
              Traditional blockchains emit events and wait. HOST inverts this—contracts actively
              command off-chain actions. Your existing webhook infrastructure (Stripe, Shopify,
              Twilio, n8n, Zapier) receives standard POST requests. The blockchain becomes invisible.
            </p>
          </section>

          <section className="mb-5">
            <h3 className="text-vtru-green mb-3">Architecture</h3>
            <ul className="text-muted-light">
              <li className="mb-2"><strong className="text-white">Decentralized Validators:</strong> Any validator can service HOST requests independently</li>
              <li className="mb-2"><strong className="text-white">5-Second Finality:</strong> AI agents can execute tasks and report results in under 15 seconds</li>
              <li className="mb-2"><strong className="text-white">Redundancy Pattern:</strong> Address multiple validators; endpoints dedupe by request ID</li>
            </ul>
          </section>

          <section className="mb-5">
            <h3 className="text-vtru-green mb-3">Registry Contract</h3>
            <div className="code-block">
              <code>{HOST_REGISTRY_ADDRESS}</code>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-vtru-green mb-3">Interface</h3>
            <div className="code-block">
              <pre>{`createRequest(
    address validator,    // Who executes the request
    string url,           // Target webhook URL
    string payload,       // JSON body
    string headers        // HTTP headers
) → uint256 requestId`}</pre>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-vtru-green mb-3">Security: Secure Proxy Pattern</h3>
            <p className="text-muted-light">
              All on-chain data is public. Never store secrets in contract payloads. Point HOST
              at your proxy server that authenticates requests and injects API keys before forwarding.
            </p>
          </section>
        </div>

        <div className="col-lg-4">
          <div className="card card-dark p-4 rounded-3 sticky-top" style={{ top: '100px' }}>
            <h4 className="text-white mb-4">Use Cases</h4>
            <div className="mb-4">
              <h6 className="text-vtru-green mb-2">AI Agents & Oracles</h6>
              <p className="text-muted-light small mb-0">Contracts trigger AI inference, receive predictions, and execute decisions autonomously</p>
            </div>
            <div className="mb-4">
              <h6 className="text-vtru-green mb-2">Generative AI</h6>
              <p className="text-muted-light small mb-0">NFT mints trigger image/music generation, player actions spawn NPC dialogue and dynamic content</p>
            </div>
            <div className="mb-4">
              <h6 className="text-vtru-green mb-2">AI-Powered DeFi</h6>
              <p className="text-muted-light small mb-0">ML models predict liquidations, AI optimizes yield strategies, smart rebalancing on market signals</p>
            </div>
            <div className="mb-4">
              <h6 className="text-vtru-green mb-2">Autonomous Finance</h6>
              <p className="text-muted-light small mb-0">Trigger arbitrage bots on price anomalies, liquidation engines on health-factor drops</p>
            </div>
            <div className="mb-4">
              <h6 className="text-vtru-green mb-2">Real-World Assets</h6>
              <p className="text-muted-light small mb-0">Smart lock APIs unlock on rental payment, supply chain activates on escrow release</p>
            </div>
            <div>
              <h6 className="text-vtru-green mb-2">Commerce & Fulfillment</h6>
              <p className="text-muted-light small mb-0">NFT purchases trigger shipping, print-on-demand receives artwork and addresses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
