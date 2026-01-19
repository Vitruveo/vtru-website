'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function ShuffleHeader() {
  return (
    <div className="mb-4">
      <h1 className="display-5 fw-bold text-white mb-2">Shuffle</h1>
      <p className="text-muted-light mb-3">
        Cryptographic card deck shuffle
        <span className="ms-3 small">
          <code className="text-vtru-green">{PSC_ADDRESSES.SHUFFLE}</code>
          <span className="text-white-50 ms-2">~{PSC_GAS.SHUFFLE.base.toLocaleString()} gas</span>
        </span>
      </p>
    </div>
  );
}
