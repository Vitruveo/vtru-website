'use client';

export function IbcInfo() {
  return (
    <div className="mb-5">
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
