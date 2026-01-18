'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function BatchSendNativeInfo() {
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="psc-badge">
          <span className="label">Address</span>
          <code>{PSC_ADDRESSES.BATCH_SEND_NATIVE}</code>
        </div>
        <div className="psc-badge">
          <span className="label">Gas</span>
          <code>{PSC_GAS.BATCH_SEND_NATIVE.base} + {(PSC_GAS.BATCH_SEND_NATIVE.perTransfer / 1000)}K/transfer</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">BatchSendNative</h1>
      <p className="lead text-muted-light mb-5">Multi-Recipient VTRU Transfer</p>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">What It Does</h3>
        <p className="text-muted-light">
          Send native VTRU to multiple recipients in one transaction.
          100 transfers = 1 transaction.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          Direct state transfers—no recipient fallback code executes.
          Efficient for payroll, rewards, and distributions.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Interface</h3>
        <div className="code-block"><pre>{`Input:  recipient1(20) | amount1(32) | recipient2(20) | amount2(32) | ...
Output: uint256 (number of successful transfers)

Note: msg.value must equal sum of all amounts`}</pre></div>
      </section>
    </div>
  );
}
