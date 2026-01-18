'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function BatchSendErc20Info() {
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="psc-badge">
          <span className="label">Address</span>
          <code>{PSC_ADDRESSES.BATCH_SEND_ERC20}</code>
        </div>
        <div className="psc-badge">
          <span className="label">Gas</span>
          <code>{PSC_GAS.BATCH_SEND_ERC20.base} + {(PSC_GAS.BATCH_SEND_ERC20.perTransfer / 1000)}K/transfer</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">BatchSendERC20</h1>
      <p className="lead text-muted-light mb-5">Multi-Recipient Token Transfer</p>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">What It Does</h3>
        <p className="text-muted-light">
          Send ERC20 tokens to multiple recipients in one transaction.
          Native airdrop/distribution without custom contracts.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          Airdrops, payroll, reward distribution—all in one tx.
          <strong className="text-white"> Protocol Privilege:</strong> Impersonates the sender to call transfer(),
          skipping allowance requirements.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Interface</h3>
        <div className="code-block"><pre>{`Input:  token(20) | recipient1(20) | amount1(32) | recipient2(20) | amount2(32) | ...
Output: uint256 (number of successful transfers)`}</pre></div>
      </section>
    </div>
  );
}
