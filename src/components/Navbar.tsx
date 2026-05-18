"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OFFICIAL_SITE_URL } from "@/constants/site";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { href: "/cricket", label: "Cricket" },
  { href: "/affiliate", label: "Affiliate" },
  { href: "/download", label: "Download App" },
  { href: "/login", label: "Login" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={styles.root} aria-label="Main">
        <div className={styles.brand}>
          <Link href="/" className={`gradient-text ${styles.brandLink}`}>
            <span className={styles.brandIcon} aria-hidden>
              ⚡
            </span>
            BIGWIN959
          </Link>
        </div>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
          <div className={styles.ctaWrap}>
            <a
              href={OFFICIAL_SITE_URL}
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem" }}
              rel="noopener noreferrer"
              target="_blank"
            >
              Play now
            </a>
          </div>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <button
        type="button"
        className={`${styles.drawerBackdrop} ${menuOpen ? styles.open : ""}`}
        aria-label="Close menu"
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="mobile-nav-drawer"
        className={`${styles.drawer} ${menuOpen ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.drawerLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={OFFICIAL_SITE_URL}
          className={`btn btn-primary ${styles.drawerCta}`}
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => setMenuOpen(false)}
        >
          Play now
        </a>
      </div>
    </>
  );
}
