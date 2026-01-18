'use client';

import { SiteHeader } from './header';
import { SiteFooter } from './footer';
import { ChatWidget } from './chat-widget';

export function SiteLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: '72px' }}>{children}</main>
      <ChatWidget />
      <SiteFooter />
    </>
  );
}
