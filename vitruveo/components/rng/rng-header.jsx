'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function RngHeader() {
  return (
    <div className="mb-4">
      <h1 className="display-5 fw-bold text-white mb-2">Random Number Generator</h1>
      <p className="text-muted-light mb-3">
        Protocol-level entropy for games, mints, and selection
        <span className="ms-3 small">
          <code className="text-vtru-green">{PSC_ADDRESSES.RNG}</code>
          <span className="text-white-50 ms-2">~{PSC_GAS.RNG.base.toLocaleString()} gas</span>
        </span>
      </p>
    </div>
  );
}
