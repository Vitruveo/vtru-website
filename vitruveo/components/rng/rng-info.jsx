'use client';

export function RngInfo() {
  return (
    <div className="mb-5">
      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          On-chain randomness is hard. Traditional approaches (blockhash, chainlink VRF)
          are either exploitable or expensive. This precompile provides protocol-level
          randomness with 100 rounds of mixing to prevent off-chain grinding.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Entropy Sources</h3>
        <p className="text-muted-light mb-3">Protocol-generated seed (deterministic for node, unpredictable for user):</p>
        <ul className="text-muted-light mb-3">
          <li className="mb-2"><strong className="text-white">ParentHash:</strong> Previous block's hash (high entropy)</li>
          <li className="mb-2"><strong className="text-white">ChainID:</strong> Network identifier</li>
          <li className="mb-2"><strong className="text-white">BlockNumber:</strong> Current block number</li>
          <li className="mb-2"><strong className="text-white">Timestamp:</strong> Block timestamp</li>
        </ul>
        <p className="text-muted-light">Plus optional caller-provided <strong className="text-white">salt</strong> for additional entropy.</p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Interface</h3>
        <div className="code-block"><pre>{`Input:  bytes (optional salt)
Output: bytes32 (256-bit random value)

// Different salt = different outputs in same block
// Same salt in different blocks = different outputs`}</pre></div>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">When NOT to Use</h3>
        <p className="text-muted-light">
          Not for high-stakes randomness where validators could profit from manipulation.
          For lotteries with large prizes, use commit-reveal schemes or VRF.
          Perfect for: game mechanics, NFT trait selection, fair distribution.
        </p>
      </section>
    </div>
  );
}
