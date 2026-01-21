'use client';

import { HostExamplesHeader } from './host-examples-header';

export function HostExamplesLayout({ children }) {
  return (
    <>
      <HostExamplesHeader />
      <div className="host-examples-content">
        {children}
      </div>

      <style jsx>{`
        .host-examples-content {
          padding-top: 60px;
        }
      `}</style>
    </>
  );
}
