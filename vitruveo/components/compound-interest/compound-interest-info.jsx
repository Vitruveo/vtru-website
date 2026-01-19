'use client';

export function CompoundInterestInfo() {
  return (
    <div className="mb-5">
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
