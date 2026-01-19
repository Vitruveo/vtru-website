'use client';

import { SiteHeader } from './header';
import { SiteFooter } from './footer';

export function SiteLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: '72px' }}>{children}</main>
      <SiteFooter />
    </>
  );
}
