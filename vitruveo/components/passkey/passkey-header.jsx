'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function PasskeyHeader() {
  return (
    <div className="mb-4">
      <h1 className="display-5 fw-bold text-white mb-2">Passkey</h1>
      <p className="text-muted-light mb-3">
        WebAuthn P-256 signature verification
        <span className="ms-3 small">
          <code className="text-vtru-green">{PSC_ADDRESSES.PASSKEY}</code>
          <span className="text-white-50 ms-2">~{PSC_GAS.PASSKEY.base.toLocaleString()} gas</span>
        </span>
      </p>
    </div>
  );
}
