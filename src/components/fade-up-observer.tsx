"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reveals elements with the `fade-up` class as they scroll into view.
// Re-runs on navigation so newly rendered pages animate too.
export function FadeUpObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-up:not(.visible)"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 },
    );

    els.forEach((el) => observer.observe(el));

    // Safety net: reveal everything after a delay even if the observer misses.
    const timer = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("visible"));
    }, 2200);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
