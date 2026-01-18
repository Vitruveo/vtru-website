'use client';

import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function PasskeyInfo() {
  return (
    <div className="mb-5">
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="psc-badge">
          <span className="label">Address</span>
          <code>{PSC_ADDRESSES.PASSKEY}</code>
        </div>
        <div className="psc-badge">
          <span className="label">Gas</span>
          <code>{PSC_GAS.PASSKEY.base.toLocaleString()}</code>
        </div>
      </div>

      <h1 className="display-5 fw-bold text-white mb-2">Passkey</h1>
      <p className="lead text-muted-light mb-5">WebAuthn / P-256 Signature Verification</p>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">What It Does</h3>
        <p className="text-muted-light">
          Verifies P-256 (secp256r1) ECDSA signatures used by WebAuthn, FIDO2,
          Apple Secure Enclave, and Android Keystore.
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Why It Matters</h3>
        <p className="text-muted-light">
          Standard EVM only supports secp256k1. Verifying passkeys in Solidity: ~300,000 gas.
          This precompile: ~3,000 gas. <strong className="text-white">100x cheaper.</strong>
        </p>
      </section>

      <section className="mb-5">
        <h3 className="text-vtru-green mb-3">Interface</h3>
        <div className="code-block"><pre>{`Input:  hash(32) | r(32) | s(32) | x(32) | y(32) = 160 bytes
Output: bool (1 = valid, 0 = invalid)`}</pre></div>
      </section>
    </div>
  );
}
