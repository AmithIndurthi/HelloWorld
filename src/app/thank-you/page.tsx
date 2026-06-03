import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your message has been received. A founding principal will respond within 48 hours.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <div className="ty-wrap">
      <div className="ty-bg" />
      <div className="ty-grid" />
      <div className="ty-inner">
        <div className="ty-mark">✓</div>
        <div className="ty-eyebrow">Message Received</div>
        <h1 className="ty-head">
          Thank you.
          <br />
          We will be
          <br />
          <em>in touch.</em>
        </h1>
        <p className="ty-sub">
          A founding principal will read your message personally and respond within 48 hours —
          often sooner.
        </p>
        <p className="ty-sub" style={{ fontSize: ".92rem", color: "rgba(244,241,236,.5)" }}>
          No assistant. No auto-reply. No intake sequence. Just a direct response from the person
          you would actually be working with.
        </p>
        <div className="ty-meta">Need to reach us sooner?</div>
        <p style={{ fontSize: ".95rem", fontWeight: 300, color: "rgba(244,241,236,.62)", lineHeight: 1.75, marginBottom: "2.2rem" }}>
          Email{" "}
          <a href={`mailto:${site.email}`} style={{ color: "var(--gold)", textDecoration: "none" }}>
            {site.email}
          </a>{" "}
          ·{" "}
          Call{" "}
          <a href={site.phoneHref} style={{ color: "var(--gold)", textDecoration: "none" }}>
            {site.phone}
          </a>
        </p>
        <div className="ty-actions">
          <Link className="btn-s" href="/how-we-work">
            Read how we work →
          </Link>
          <Link className="btn-g" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
