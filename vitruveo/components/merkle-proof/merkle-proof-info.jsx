'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function MerkleProofInfo() {
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="psc-badge">
          <span className="label">Address</span>
          <code>{PSC_ADDRESSES.MERKLE_PROOF}</code>
        </div>
        <div className="psc-badge">
          <span className="label">Gas</span>
          <code>{PSC_GAS.MERKLE_PROOF.base} + {PSC_GAS.MERKLE_PROOF.perHash}/hash</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">MerkleProof</h1>
      <p className="lead text-muted-light mb-5">Merkle Tree Membership Verification</p>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">What It Does</h3>
        <p className="text-muted-light">
          Verifies Merkle tree membership proofs. Compatible with OpenZeppelin's
          sorted-pair hashing (smaller hash first).
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          Whitelists, airdrops, and state proofs all use Merkle trees. This precompile
          is faster and cheaper than the Solidity implementation.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Interface</h3>
        <div className="code-block"><pre>{`Input:  root(32) | leaf(32) | proof[0](32) | proof[1](32) | ...
Output: bool (1 = valid proof)`}</pre></div>
      </section>
    </div>
  );
}
