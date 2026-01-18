'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function CompoundInterestInfo() {
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="psc-badge">
          <span className="label">Address</span>
          <code>{PSC_ADDRESSES.COMPOUND_INTEREST}</code>
        </div>
        <div className="psc-badge">
          <span className="label">Gas</span>
          <code>{PSC_GAS.COMPOUND_INTEREST.base}+</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">CompoundInterest</h1>
      <p className="lead text-muted-light mb-5">High-Precision Interest Calculation</p>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">What It Does</h3>
        <p className="text-muted-light">
          Calculates compound interest with 18-decimal precision using binary
          exponentiation. Exact DeFi calculations without expensive Solidity math.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          Solidity lacks native exponentiation. Libraries like ABDKMath are gas-heavy.
          This precompile performs A = P x (1 + r)^n efficiently in Go.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Interface</h3>
        <div className="code-block"><pre>{`Input:  principal(32) | rate(32) | periods(32) = 96 bytes
Output: finalAmount(32)

// Rate is scaled by 1e18
// 5% = 0.05 x 1e18 = 50000000000000000`}</pre></div>
      </section>
    </div>
  );
}
