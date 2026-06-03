import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with TheTAG Ventures & Partners. 48-hour response on every qualified inbound. No pitch decks required.",
};

export default function ContactPage() {
  return (
    <>
      <div className="contact-wrap">
        <div className="contact-bg" />
        <div className="grid-bg" />
        <div className="contact-grid fade-up">
          <div>
            <div className="contact-eyebrow">Start a Conversation</div>
            <h1 className="contact-headline">
              Tell us what
              <br />
              you&apos;re <em>working on.</em>
            </h1>
            <p className="contact-sub">
              No pitch decks. No long intake sequence. A founding principal reads every message and
              responds within 48 hours with an honest read — including when we are not the right
              fit.
            </p>
            <div className="contact-ways">
              <div className="cw">
                <div className="cw-icon">@</div>
                <div>
                  <div className="cw-label">Email</div>
                  <div className="cw-value">
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </div>
              </div>
              <div className="cw">
                <div className="cw-icon">T</div>
                <div>
                  <div className="cw-label">Call</div>
                  <div className="cw-value">
                    <a href={site.phoneHref}>{site.phone}</a>
                  </div>
                </div>
              </div>
              <div className="cw">
                <div className="cw-icon">↗</div>
                <div>
                  <div className="cw-label">Address</div>
                  <div className="cw-value">{site.address}</div>
                </div>
              </div>
              <div className="cw">
                <div className="cw-icon">⏱</div>
                <div>
                  <div className="cw-label">Response Time</div>
                  <div className="cw-value">Within 48 hours on every qualified inbound</div>
                </div>
              </div>
            </div>
            <div style={{ padding: "1.2rem 1.4rem", background: "rgba(201,168,76,.04)", border: "1px solid rgba(201,168,76,.1)" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: ".57rem", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: ".4rem" }}>
                Founding-Partner Pricing
              </div>
              <p style={{ fontSize: ".85rem", fontWeight: 300, color: "rgba(244,241,236,.6)", lineHeight: 1.65 }}>
                TheTAG is a new firm. Our first three engagements are at reduced rates in exchange
                for the right to name those partners publicly after twelve months. If you want to be
                one of those three, mention it in your message.
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="contact-bottom">
        <div style={{ maxWidth: "560px", margin: "0 auto 2.5rem", textAlign: "center" }} className="fade-up">
          <div className="section-label center">Three Ways to Start</div>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
            Choose the path
            <br />
            <em>that fits where you are.</em>
          </h2>
        </div>
        <div className="cb-grid fade-up">
          <div className="cb-item">
            <div className="cb-lbl">Free · 30 Minutes</div>
            <div className="cb-title">Discovery Call</div>
            <p className="cb-desc">
              We listen to the actual problem and give an honest read on fit, model, and timeline.
              No pitch — from either side.
            </p>
            <Link className="cb-link" href="/contact">
              Book a call →
            </Link>
          </div>
          <div className="cb-item">
            <div className="cb-lbl">2–4 Week Sprint · Fixed Fee</div>
            <div className="cb-title">Rapid Diagnostic</div>
            <p className="cb-desc">
              A scoped assessment of one domain — technology, venture readiness, or design. Findings
              and prioritized recommendations.
            </p>
            <Link className="cb-link" href="/contact?topic=diagnostic">
              Request a diagnostic →
            </Link>
          </div>
          <div className="cb-item">
            <div className="cb-lbl">Direct Access</div>
            <div className="cb-title">Email the Principals</div>
            <p className="cb-desc">
              partners@th3tag.com. Read by a founding principal, responded to within 48 hours.
            </p>
            <a className="cb-link" href={`mailto:${site.email}`}>
              partners@th3tag.com →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
