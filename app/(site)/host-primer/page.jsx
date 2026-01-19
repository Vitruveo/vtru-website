import Link from 'next/link';
import { PSC_ADDRESSES, HOST_REGISTRY_ADDRESS } from '@/vitruveo/lib/psc-constants';

export const metadata = {
  title: 'HOST Primer - Vitruveo',
  description: 'Deep dive into HOST Protocol: how smart contracts invoke AI agents and agentic workflows. Chain of Trust security model and workflow lifecycle.',
};

export default function HostPrimerPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="container py-5">
          <div className="d-flex flex-wrap gap-3 mb-4">
            <div className="psc-badge">
              <span className="label">Precompile</span>
              <code>{PSC_ADDRESSES.HOST}</code>
            </div>
            <div className="psc-badge">
              <span className="label">Registry</span>
              <code>{HOST_REGISTRY_ADDRESS}</code>
            </div>
          </div>
          <h1 className="display-4 fw-bold text-white mb-3">HOST Primer</h1>
          <p className="lead text-muted-light mb-4">
            HTTP Outbound Service Trigger — A comprehensive guide to the secure layered architecture
            that enables smart contracts to invoke AI agents and agentic workflows.
          </p>
          <Link href="/developers/psc/host" className="btn btn-outline-light">
            ← Back to HOST Reference
          </Link>
        </div>
      </section>

      {/* Vision */}
      <section className="section-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">The Vision: On-Chain Intelligence</h2>
              <p className="text-muted-light">
                Traditional blockchains are <strong className="text-white">passive</strong>. They emit events,
                log state changes, and wait for external systems to poll, index, and react. AI agents
                must constantly watch for changes instead of being commanded directly.
              </p>
              <p className="text-muted-light">
                HOST makes Vitruveo <strong className="text-white">active</strong>. Smart contracts don't
                just execute—they invoke. During transaction execution, contracts can directly trigger
                AI agents, spawn agentic workflows, and initiate autonomous decision-making processes.
              </p>
              <p className="text-muted-light">
                This is the bridge between on-chain logic and off-chain intelligence. Your Solidity code
                can trigger LLM inference, spawn multi-step agent workflows, request AI-driven analysis,
                and receive autonomous decisions—all within the transaction lifecycle. No indexers.
                No polling. No middleware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chain of Trust */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <h2 className="text-white mb-4">The Chain of Trust</h2>
          <p className="text-muted-light mb-5">
            HOST implements a strict security model to ensure that off-chain resources are accessed
            securely and only by authorized smart contracts. This prevents spam and ensures that
            Validator Nodes only expend resources on legitimate, approved requests.
          </p>
          <p className="text-muted-light mb-5">
            The security model consists of three distinct layers of authorization:
          </p>

          <div className="row g-4 mb-5">
            <div className="col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100 position-relative" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                <div className="position-absolute" style={{ top: '-15px', left: '20px', background: 'var(--vtru-green)', color: '#000', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.75rem' }}>
                  LAYER 1
                </div>
                <h4 className="text-white mt-3 mb-3">The Node</h4>
                <p className="text-muted-light mb-0">
                  The Validator who operates the physical infrastructure. Validators register their
                  nodes on-chain to signal availability for processing HOST requests. Each node is
                  identified by its unique address and linked to an owner address that manages approvals.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100 position-relative" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                <div className="position-absolute" style={{ top: '-15px', left: '20px', background: 'var(--vtru-green)', color: '#000', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.75rem' }}>
                  LAYER 2
                </div>
                <h4 className="text-white mt-3 mb-3">The Developer</h4>
                <p className="text-muted-light mb-0">
                  An authenticated User (EOA) vetted by the Validator. Developers must request and
                  receive approval from a Validator before they can use that node's services. This
                  creates accountability and prevents anonymous abuse of validator resources.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100 position-relative" style={{ borderLeft: '4px solid var(--vtru-green)' }}>
                <div className="position-absolute" style={{ top: '-15px', left: '20px', background: 'var(--vtru-green)', color: '#000', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.75rem' }}>
                  LAYER 3
                </div>
                <h4 className="text-white mt-3 mb-3">The Application</h4>
                <p className="text-muted-light mb-0">
                  A specific Smart Contract whitelisted by the Developer. Only contracts explicitly
                  registered by an approved Developer can create HOST requests. This ensures fine-grained
                  control over which code can trigger outbound HTTP calls.
                </p>
              </div>
            </div>
          </div>

          <div className="card card-dark p-4 rounded-3">
            <h5 className="text-vtru-green mb-3">Trust Flow</h5>
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 text-center">
              <div>
                <div className="text-white fw-bold">Validator Node</div>
                <div className="text-muted-light small">registers & approves</div>
              </div>
              <svg width="40" height="20" className="text-vtru-green">
                <path d="M5 10 L30 10 M25 5 L30 10 L25 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <div className="text-white fw-bold">Developer</div>
                <div className="text-muted-light small">whitelists contracts</div>
              </div>
              <svg width="40" height="20" className="text-vtru-green">
                <path d="M5 10 L30 10 M25 5 L30 10 L25 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <div className="text-white fw-bold">Smart Contract</div>
                <div className="text-muted-light small">invokes HOST</div>
              </div>
              <svg width="40" height="20" className="text-vtru-green">
                <path d="M5 10 L30 10 M25 5 L30 10 L25 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <div className="text-white fw-bold">AI Agent</div>
                <div className="text-muted-light small">executes workflow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Lifecycle */}
      <section className="section-dark py-5">
        <div className="container">
          <h2 className="text-white mb-5">Workflow Lifecycle</h2>

          {/* Step 1 */}
          <div className="row mb-5">
            <div className="col-lg-1">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-vtru-green text-dark fw-bold" style={{ width: '48px', height: '48px', fontSize: '1.25rem' }}>1</div>
            </div>
            <div className="col-lg-11">
              <h4 className="text-white mb-3">Validator Onboarding</h4>
              <p className="text-muted-light mb-3">
                A Validator Node signals its availability to process HOST requests by calling
                <code className="text-vtru-green ms-1">registerValidator(owner)</code> on the Registry.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card card-dark p-3 rounded-3">
                    <h6 className="text-vtru-green mb-2">Mechanism</h6>
                    <p className="text-muted-light small mb-0">
                      The Validator signs this transaction with their node key, proving ownership of the
                      infrastructure that will execute HOST requests.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-3 rounded-3">
                    <h6 className="text-vtru-green mb-2">Result</h6>
                    <p className="text-muted-light small mb-0">
                      The Registry maps the Node Address to an Owner Address (the administrative EOA
                      capable of approving users).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="row mb-5">
            <div className="col-lg-1">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-vtru-green text-dark fw-bold" style={{ width: '48px', height: '48px', fontSize: '1.25rem' }}>2</div>
            </div>
            <div className="col-lg-11">
              <h4 className="text-white mb-3">Developer Access Request</h4>
              <p className="text-muted-light mb-3">
                A Developer who wishes to utilize a specific Validator's node must request permission on-chain.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card card-dark p-3 rounded-3">
                    <h6 className="text-vtru-green mb-2">Action</h6>
                    <p className="text-muted-light small mb-0">
                      The User calls <code className="text-vtru-green">requestAccess(validatorNodeAddress)</code>
                      to formally request permission to use that validator's services.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-3 rounded-3">
                    <h6 className="text-vtru-green mb-2">Approval</h6>
                    <p className="text-muted-light small mb-0">
                      The Validator's Owner Address monitors these requests and submits an approval
                      transaction to whitelist the User's address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="row mb-5">
            <div className="col-lg-1">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-vtru-green text-dark fw-bold" style={{ width: '48px', height: '48px', fontSize: '1.25rem' }}>3</div>
            </div>
            <div className="col-lg-11">
              <h4 className="text-white mb-3">Contract Whitelisting</h4>
              <p className="text-muted-light mb-3">
                Once approved, the Developer can explicitly authorize their smart contracts to use the system.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card card-dark p-3 rounded-3">
                    <h6 className="text-vtru-green mb-2">Action</h6>
                    <p className="text-muted-light small mb-0">
                      The User calls <code className="text-vtru-green">registerContract(validatorNodeAddress, contractAddress)</code>
                      to whitelist their contract.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-3 rounded-3">
                    <h6 className="text-vtru-green mb-2">Result</h6>
                    <p className="text-muted-light small mb-0">
                      The Registry now recognizes that <code className="text-vtru-green">contractAddress</code> is
                      managed by a trusted User and allowed to create requests for that Validator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="row">
            <div className="col-lg-1">
              <div className="d-flex align-items-center justify-content-center rounded-circle bg-vtru-green text-dark fw-bold" style={{ width: '48px', height: '48px', fontSize: '1.25rem' }}>4</div>
            </div>
            <div className="col-lg-11">
              <h4 className="text-white mb-3">Request Execution</h4>
              <p className="text-muted-light mb-4">
                The authorized Smart Contract executes the request in a two-step atomic process:
              </p>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderTop: '3px solid var(--vtru-green)' }}>
                    <h5 className="text-vtru-green mb-3">Step A: Registration</h5>
                    <p className="text-muted-light mb-3">
                      The contract calls the HostRegistry function:
                    </p>
                    <div className="code-block mb-3">
                      <pre className="mb-0">{`addRequest(
  url,      // Target endpoint
  payload,  // JSON body
  headers,  // HTTP headers
  nodes     // Validator addresses
) → requestID`}</pre>
                    </div>
                    <ul className="text-muted-light small mb-0">
                      <li className="mb-2"><strong className="text-white">Validation:</strong> The Registry checks the Chain of Trust—Is this contract registered by a User? Is that User approved by the target Validator?</li>
                      <li><strong className="text-white">Output:</strong> If valid, returns a unique <code className="text-vtru-green">uint256 requestID</code>.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-dark p-4 rounded-3 h-100" style={{ borderTop: '3px solid var(--vtru-green)' }}>
                    <h5 className="text-vtru-green mb-3">Step B: Execution</h5>
                    <p className="text-muted-light mb-3">
                      The contract immediately invokes the HOST Precompile via static call:
                    </p>
                    <div className="code-block mb-3">
                      <pre className="mb-0">{`(HOST_PRECOMPILE).staticcall(
  requestID
)`}</pre>
                    </div>
                    <ul className="text-muted-light small mb-0">
                      <li className="mb-2"><strong className="text-white">Action:</strong> The Validator node detects the call, verifies the ID against the Registry.</li>
                      <li><strong className="text-white">Outcome:</strong> Performs the secure HTTP/S request off-chain to the specified endpoint.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Security: Secure Proxy Pattern</h2>
              <div className="alert" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', border: '1px solid #ffc107', borderRadius: '8px' }}>
                <div className="d-flex align-items-start gap-3">
                  <svg width="24" height="24" fill="#ffc107" viewBox="0 0 24 24" className="flex-shrink-0 mt-1">
                    <path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
                  </svg>
                  <div>
                    <h6 className="text-warning mb-2">Never Store Secrets On-Chain</h6>
                    <p className="text-muted-light mb-0">
                      All on-chain data is public. Contract payloads, headers, and URLs are visible to everyone.
                      Never include API keys, passwords, or sensitive credentials in HOST requests.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-muted-light mt-4">
                The recommended pattern is to point HOST at your own <strong className="text-white">secure proxy server</strong>:
              </p>
              <ol className="text-muted-light">
                <li className="mb-2">Your smart contract sends a HOST request to your proxy endpoint</li>
                <li className="mb-2">Your proxy authenticates the request (verify signature, check request ID on-chain)</li>
                <li className="mb-2">Your proxy injects API keys and forwards to the actual sensitive endpoint</li>
                <li>The response flows back through your proxy to your on-chain callback</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-dark py-5">
        <div className="container">
          <h2 className="text-white mb-5">Use Cases</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Autonomous Agents</h5>
                <p className="text-muted-light mb-0">
                  Smart contracts spawn AI agents that reason, plan, and execute multi-step tasks.
                  Build self-governing DAOs, autonomous trading systems, and intelligent automation.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Agentic Workflows</h5>
                <p className="text-muted-light mb-0">
                  Chain AI tools together—research, analyze, decide, execute. On-chain events trigger
                  complex multi-step workflows that operate autonomously.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">On-Chain Oracles</h5>
                <p className="text-muted-light mb-0">
                  AI models analyze real-world data, generate predictions, and feed intelligent
                  decisions back to contracts. Oracles that think, not just relay.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Generative Content</h5>
                <p className="text-muted-light mb-0">
                  NFT mints trigger AI image generation. Game actions spawn dynamic dialogue and
                  content. Create truly generative on-chain experiences.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">AI-Powered DeFi</h5>
                <p className="text-muted-light mb-0">
                  ML models predict liquidations, AI optimizes yield strategies, agents rebalance
                  portfolios on market signals. Finance that thinks for itself.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card card-dark p-4 rounded-3 h-100">
                <h5 className="text-vtru-green mb-3">Intelligent Automation</h5>
                <p className="text-muted-light mb-0">
                  AI agents monitor conditions, make decisions, and trigger actions. From supply
                  chain to customer service—autonomous systems driven by on-chain events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-dark-2 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="alert mb-0" style={{ backgroundColor: 'rgba(161, 255, 117, 0.1)', border: '1px solid var(--vtru-green)', borderRadius: '12px', padding: '2rem' }}>
                <svg width="48" height="48" fill="none" stroke="var(--vtru-green)" viewBox="0 0 24 24" className="mb-3">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <h4 className="text-vtru-green mb-3">Host Registry App Coming Soon</h4>
                <p className="text-muted-light mb-0" style={{ maxWidth: '500px', margin: '0 auto' }}>
                  A dedicated application for validators and developers to register nodes, request access,
                  and whitelist contracts is currently under development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-5">
        <div className="container text-center">
          <h3 className="text-white mb-4">Ready to Build?</h3>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/developers/psc/host" className="btn btn-primary btn-lg">
              HOST Reference
            </Link>
            <Link href="/developers/psc" className="btn btn-outline-light btn-lg">
              All Protocol Contracts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
