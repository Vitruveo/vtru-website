'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function CompoundInterestHeader() {
  return (
    <div className="mb-4">
      <h1 className="display-5 fw-bold text-white mb-2">Compound Interest</h1>
      <p className="text-muted-light mb-3">
        Fixed-point compound interest calculation
        <span className="ms-3 small">
          <code className="text-vtru-green">{PSC_ADDRESSES.COMPOUND_INTEREST}</code>
          <span className="text-white-50 ms-2">~{PSC_GAS.COMPOUND_INTEREST.base}+ gas</span>
        </span>
      </p>
    </div>
  );
}
