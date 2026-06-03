"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: "800px" }} className="fade-up">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`faq-item${isOpen ? " open" : ""}`}
            onClick={() => setOpenIndex(isOpen ? null : i)}
          >
            <div className="faq-q">
              <span>{item.q}</span>
              <div className="faq-toggle">+</div>
            </div>
            <div className="faq-a">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
