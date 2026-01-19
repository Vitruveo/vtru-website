'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function ShuffleInfo() {
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="psc-badge">
          <span className="label">Address</span>
          <code>{PSC_ADDRESSES.SHUFFLE}</code>
        </div>
        <div className="psc-badge">
          <span className="label">Gas</span>
          <code>{PSC_GAS.SHUFFLE.base.toLocaleString()}</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">Shuffle</h1>
      <p className="lead text-muted-light mb-5">Cryptographic Card Deck Shuffle</p>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">What It Does</h3>
        <p className="text-muted-light">
          Returns a cryptographically shuffled 52-card deck using Fisher-Yates algorithm.
          Provably fair card games in a single call.
        </p>
      </section>

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
