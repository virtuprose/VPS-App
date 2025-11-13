'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleHash = () => setHash(window.location.hash);
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <header className="nav">
      <Link href="/" className="nav-logo" aria-label="VirtuProse home">
        <Image src="/assets/vpslogo.png" alt="VirtuProse logo" width={54} height={54} />
      </Link>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {navLinks.map((item) => {
          const isHashLink = item.href.includes("#");
          const targetHash = isHashLink ? `#${item.href.split("#")[1]}` : "";
          const isActive = (() => {
            if (item.href === "/") {
              return pathname === "/" && (!hash || hash === "#");
            }
            if (isHashLink) {
              return pathname === "/" && hash === targetHash;
            }
            return pathname.startsWith(item.href) && item.href !== "/";
          })();
          return (
            <Link
              key={item.label}
              href={item.href}
              className={isActive ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
              {item.icon ? (
                <span aria-hidden="true" className="nav-icon">
                  {item.icon}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
      <Link className="btn ghost nav-cta-desktop" href="/contact">
        Start Your Project
      </Link>
      <button
        className={`nav-toggle ${open ? "open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
