'use client';

import Link from 'next/link';
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
        <div className="psc-badge">
          <span className="label">Registry</span>
          <code>{HOST_REGISTRY_ADDRESS}</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">HOST</h1>
      <p className="lead text-muted-light mb-4">HTTP Outbound Service Trigger</p>

      {/* HOST Primer CTA */}
      <div className="mb-5">
        <Link href="/host-primer" className="btn btn-host-primer btn-lg">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="me-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          HOST Primer — Deep Dive Into the Architecture
        </Link>
      </div>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">What It Does</h3>
        <p className="text-muted-light">
          HOST enables smart contracts to invoke AI agents and trigger agentic workflows
          during transaction execution. On-chain events directly initiate off-chain
          intelligence—no indexers, no polling, no middleware.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          Traditional blockchains emit events and wait. HOST inverts this—contracts actively
          command AI agents to reason, decide, and act. Your inference endpoints receive
          requests the moment transactions execute.
        </p>
        <p className="text-muted-light">
          This is the bridge between on-chain logic and off-chain intelligence. Smart contracts
          can trigger LLM inference, spawn autonomous agents, initiate multi-step workflows,
          and receive AI-driven decisions—all within the transaction lifecycle.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Architecture</h3>
        <ul className="text-muted-light">
          <li className="mb-2"><strong className="text-white">Chain of Trust:</strong> Three-layer security model (Node → Developer → Application) ensures only authorized contracts can make requests</li>
          <li className="mb-2"><strong className="text-white">Decentralized Validators:</strong> Any validator can service HOST requests independently</li>
          <li className="mb-2"><strong className="text-white">5-Second Finality:</strong> AI agents can execute tasks and report results in under 15 seconds</li>
          <li className="mb-2"><strong className="text-white">Redundancy Pattern:</strong> Address multiple validators; endpoints dedupe by request ID</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Registry Contract</h3>
        <p className="text-muted-light mb-3">
          All HOST requests are validated through the on-chain registry before execution:
        </p>
        <div className="code-block">
          <code>{HOST_REGISTRY_ADDRESS}</code>
        </div>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Interface</h3>
        <div className="code-block">
          <pre>{`// Register a request with the Registry
addRequest(
    string url,           // Target webhook URL
    string payload,       // JSON body
    string headers,       // HTTP headers
    address[] nodes       // Validator nodes to execute
) → uint256 requestId

// Execute via precompile
(HOST_PRECOMPILE).staticcall(requestId)`}</pre>
        </div>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Security: Secure Proxy Pattern</h3>
        <p className="text-muted-light">
          All on-chain data is public. Never store secrets in contract payloads. Point HOST
          at your proxy server that authenticates requests and injects API keys before forwarding.
        </p>
      </section>

      {/* Use Cases */}
      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Use Cases</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card card-dark p-3 rounded-3 h-100">
              <h6 className="text-white mb-2">Autonomous Agents</h6>
              <p className="text-muted-light small mb-0">Contracts spawn AI agents that reason, plan, and execute multi-step tasks autonomously</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-dark p-3 rounded-3 h-100">
              <h6 className="text-white mb-2">On-Chain Oracles</h6>
              <p className="text-muted-light small mb-0">AI models analyze data, generate predictions, and feed decisions back to contracts</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-dark p-3 rounded-3 h-100">
              <h6 className="text-white mb-2">Generative Content</h6>
              <p className="text-muted-light small mb-0">NFT mints trigger image generation, game actions spawn dynamic AI-driven content</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-dark p-3 rounded-3 h-100">
              <h6 className="text-white mb-2">Agentic Workflows</h6>
              <p className="text-muted-light small mb-0">Chain AI tools together—research, analyze, decide, execute—triggered by on-chain events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primer CTA again at bottom */}
      <div className="text-center">
        <Link href="/host-primer" className="btn btn-host-primer btn-lg">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="me-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Read the HOST Primer
        </Link>
      </div>
    </div>
  );
}
