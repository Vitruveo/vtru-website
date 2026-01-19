'use client';

import { PSC_ADDRESSES } from '../../lib/psc-constants';

export function IbcHeader() {
  return (
    <div className="mb-4">
      <h1 className="display-5 fw-bold text-white mb-2">Inter-Blockchain Communication</h1>
      <p className="text-muted-light mb-3">
        Cosmos light client verification
        <span className="ms-3 small">
          <code className="text-vtru-green">{PSC_ADDRESSES.IBC}</code>
          <span className="text-white-50 ms-2">3K-200K+ gas</span>
        </span>
      </p>
    </div>
  );
}
