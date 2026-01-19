'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function MerkleProofHeader() {
  return (
    <div className="mb-4">
      <h1 className="display-5 fw-bold text-white mb-2">Merkle Proof</h1>
      <p className="text-muted-light mb-3">
        Verify Merkle inclusion proofs
        <span className="ms-3 small">
          <code className="text-vtru-green">{PSC_ADDRESSES.MERKLE_PROOF}</code>
          <span className="text-white-50 ms-2">~{PSC_GAS.MERKLE_PROOF.base}+{PSC_GAS.MERKLE_PROOF.perHash}/hash gas</span>
        </span>
      </p>
    </div>
  );
}
