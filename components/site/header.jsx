'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <img src="/images/vitruveo-logo-horizontal.svg" alt="Vitruveo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={mounted ? isOpen : false}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${mounted && isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/developers" className="nav-link" onClick={closeMenu}>Developers</Link>
            </li>
            <li className="nav-item">
              <Link href="/host" className="nav-link" onClick={closeMenu}>HOST Demos</Link>
            </li>
            <li className="nav-item">
              <Link href="/chat" className="nav-link" onClick={closeMenu}>AI Chat</Link>
            </li>
            <li className="nav-item">
              <Link href="/ecosystem" className="nav-link" onClick={closeMenu}>Ecosystem</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item ms-lg-3">
              <a
                href="https://explorer.vitruveo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Explorer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
