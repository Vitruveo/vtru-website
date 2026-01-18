'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function IbcInfo() {
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="psc-badge">
          <span className="label">Address</span>
          <code>{PSC_ADDRESSES.IBC}</code>
        </div>
        <div className="psc-badge">
          <span className="label">Gas</span>
          <code>3K-200K+</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">IBC</h1>
      <p className="lead text-muted-light mb-5">Cosmos Light Client Verification</p>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">What It Does</h3>
        <p className="text-muted-light">
          Full IBC (Inter-Blockchain Communication) light client for trustless
          verification of 50+ Cosmos chains directly from Vitruveo.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          Bridge assets and verify state from Cosmos Hub, Osmosis, Celestia, and
          any Tendermint-based chain without trusted intermediaries.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Methods</h3>
        <div className="code-block"><pre>{`createClient(clientId, clientState, consensusState) → bool     // 100K gas
updateClient(clientId, trustedHeader, trustedVals,
             untrustedHeader, untrustedVals) → bytes32           // 200K+ gas
getClientState(clientId) → bytes                                 // 3K gas
getConsensusState(clientId, height) → bytes                      // 3K gas
verifyMembership(clientId, height, proof, path, value) → bool    // 50K+ gas
verifyNonMembership(clientId, height, proof, path) → bool        // 50K+ gas`}</pre></div>
      </section>
    </div>
  );
}
