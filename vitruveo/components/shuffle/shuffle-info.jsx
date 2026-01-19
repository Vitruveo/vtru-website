'use client';

export function ShuffleInfo() {
  return (
    <div className="mb-5">
      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          On-chain card games need verifiable shuffles. This precompile provides
          casino-grade randomness with rejection sampling to eliminate modulo bias.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Interface</h3>
        <div className="code-block"><pre>{`Input:  bytes (optional salt)
Output: 104 bytes (52 cards x 2 chars)
Format: SuitRank (e.g., "SA" = Ace of Spades, "CQ" = Queen of Clubs)

Suits: S(pades), H(earts), D(iamonds), C(lubs)
Ranks: A, 2-9, T(en), J, Q, K`}</pre></div>
      </section>
    </div>
  );
}
