"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, servicePaths } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/#services") return servicePaths.includes(pathname);
    return pathname === href;
  }

  return (
    <>
      <nav>
        <Link className="nav-brand" href="/">
          TheTAG
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={isActive(link.href) ? "active" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="nav-cta" href="/contact">
          Start a Conversation
        </Link>
        <button
          className={`nav-hamburger${open ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`nav-mobile-menu${open ? " open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "active" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link className="mobile-cta" href="/contact" onClick={() => setOpen(false)}>
          Start a Conversation
        </Link>
      </div>
    </>
  );
}
