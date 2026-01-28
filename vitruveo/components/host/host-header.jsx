'use client';

import Link from 'next/link';
import { PSC_ADDRESSES, PSC_GAS } from '../../lib/psc-constants';

export function HostHeader() {
  return (
    <div className="mb-4">
      <h1 className="display-5 fw-bold text-white mb-2">HTTP Outbound Service Trigger</h1>
      <p className="text-muted-light mb-3">
        Smart contracts that speak HTTP — webhooks for Web3
        <span className="ms-3 small">
          <code className="text-vtru-green">{PSC_ADDRESSES.HOST}</code>
          <span className="text-white-50 ms-2">~{PSC_GAS.HOST.base.toLocaleString()}+ gas</span>
        </span>
      </p>
      <Link href="/host-primer" className="btn btn-host-primer">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="me-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        HOST Primer
      </Link>
    </div>
  );
}
