"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

import { audioTracks, navItems } from "@/lib/site";

import { AudioDock } from "./audio-dock";
import { MotionLayer } from "./motion-layer";

export function SiteShell({
  children,
  ctaHref = "/contact",
  ctaLabel = "Start the diagnostic"
}: {
  children: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <main className="flagship-shell multi-page-shell">
      <MotionLayer />

      <header className="site-nav" data-reveal>
        <Link className="brand-lockup" href="/">
          <span className="brand-orb" />
          <span className="brand-copy">
            <strong>Sharpe Systems</strong>
            <span>Built to move attention, trust, and follow-through</span>
          </span>
        </Link>

        <nav className="nav-links nav-links-wide nav-links-desktop">
          {navItems.map((item) => (
            <Link
              className={pathname === item.href ? "nav-link active" : "nav-link"}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-controls="site-menu"
          aria-expanded={menuOpen}
          className="menu-button"
          id="menu-button"
          onClick={() => setMenuOpen(true)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <Link className="nav-cta" href={ctaHref}>
          {ctaLabel}
        </Link>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={menuOpen ? "site-menu is-open" : "site-menu"}
        id="site-menu"
      >
        <div className="site-menu-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="site-menu-panel">
          <div className="site-menu-top">
            <div>
              <p className="eyebrow">Navigation</p>
              <h2>Move through the flagship.</h2>
            </div>
            <button
              aria-label="Close menu"
              className="menu-close"
              id="menu-close"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              <span />
              <span />
            </button>
          </div>
          <nav className="site-menu-links">
            {navItems.map((item, index) => (
              <Link
                className={pathname === item.href ? "site-menu-link active" : "site-menu-link"}
                href={item.href}
                key={item.href}
                style={{ "--index": index } as CSSProperties}
              >
                <span>{item.label}</span>
                <small>0{index + 1}</small>
              </Link>
            ))}
          </nav>
          <div className="site-menu-footer">
            <p>
              Premium surfaces built to tighten the read, raise the trust level, and guide the next
              move.
            </p>
            <Link className="primary-button" href={ctaHref}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      {children}

      <footer className="site-footer">
        <div className="footer-copy" data-reveal>
          <p className="eyebrow">Sharpe Systems</p>
          <h2>The front end should feel as serious as the operation behind it.</h2>
          <p>
            Strong businesses should not be undersold by weak narrative, thin proof, or generic
            digital surfaces.
          </p>
        </div>
        <div className="footer-actions" data-reveal>
          <Link className="primary-button" href="/contact">
            Enter the build queue
          </Link>
          <a className="ghost-button" href="mailto:franksharpe008@gmail.com">
            franksharpe008@gmail.com
          </a>
        </div>
      </footer>

      <AudioDock tracks={audioTracks} />
    </main>
  );
}
