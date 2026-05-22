import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "Design Studio",
  description:
    "Brand, product, and experience design — done with quality-engineering discipline. Built to be extended by your team, not hoarded. Led by a founder with senior QA background.",
};

const faqs = [
  {
    q: "Do you work on brand, digital, or both?",
    a: "Both — we think the separation is largely artificial and harmful to quality. The best digital product design is grounded in clear brand strategy, and vice versa. Most engagements touch both.",
  },
  {
    q: 'What does "design with quality-engineering discipline" actually mean?',
    a: "It means agreeing on the outcome the design must serve before we start, validating decisions against real users early, building deliverables as systems your team can extend, and treating documentation and handover as core craft — not afterthoughts.",
  },
  {
    q: "Do you build websites or just design them?",
    a: "We design and produce implementation-ready specs. We work alongside your engineering team or with engineering partners we trust. We do not typically build production code ourselves.",
  },
  {
    q: "What do you hand over at the end of an engagement?",
    a: "Complete Figma files with component libraries and design tokens, brand guidelines in an editable format, decision documentation, team training, and 90 days of post-handover availability.",
  },
];

export default function DesignStudioPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pg">
        <div className="hero-bg-svc-ds" />
        <div className="hero-grid-bg" />
        <div className="hero-left">
          <div className="hero-eyebrow">Design Studio · Mind-Led Practice</div>
          <h1 className="hero-headline">
            Design done with
            <br />
            <em>quality-engineering discipline.</em>
          </h1>
          <p className="hero-sub">
            Brand identity, product design, design systems, and experience research — built with the
            systems-thinking and quality-first discipline of someone whose career was catching what
            does not work before users do.
          </p>
          <div className="led-by">
            <span className="led-by-dot" />
            Led by Manasa Kommana · Co-Founder &amp; Co-CEO
          </div>
          <div
            style={{ borderLeft: "2px solid rgba(201,168,76,.3)", padding: ".7rem 1.1rem", background: "rgba(201,168,76,.03)", marginBottom: "2rem", maxWidth: "520px" }}
          >
            <span
              style={{ fontFamily: "var(--mono)", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gold-dim)", display: "block", marginBottom: ".25rem" }}
            >
              What This Practice Brings
            </span>
            <p style={{ fontSize: ".84rem", fontWeight: 300, color: "rgba(244,241,236,.57)", lineHeight: 1.6 }}>
              Most design practices come from a creative-direction background. This one comes from a
              quality-engineering background. That changes how we work: design decisions agreed
              against business outcomes before craft begins, validated against real users early and
              often, and handed over as systems your team can actually extend.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="btn-p" href="/contact">
              Start a Conversation
            </Link>
            <a className="btn-g" href="#services">
              Explore Services ↓
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-stat-panel">
            <div className="hsp-item">
              <div className="hsp-num">1</div>
              <div className="hsp-label">Founding principal leads every engagement — Manasa Kommana</div>
              <div className="hsp-sub">Always Senior</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">QA</div>
              <div className="hsp-label">Quality engineering background — systems thinking applied to design</div>
              <div className="hsp-sub">Real Experience</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">100%</div>
              <div className="hsp-label">Design decisions agreed against outcomes before craft begins</div>
              <div className="hsp-sub">Outcome-First</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">4</div>
              <div className="hsp-label">Phases applied to every design engagement</div>
              <div className="hsp-sub">Methodology</div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll to explore</div>
      </section>

      {/* SERVICES */}
      <section className="sec" style={{ background: "var(--ink)" }} id="services">
        <div className="fade-up" style={{ maxWidth: "620px", marginBottom: "3.5rem" }}>
          <div className="section-label">Engagements</div>
          <h2>
            Named offers,
            <br />
            <em>scoped from the start.</em>
          </h2>
          <p style={{ marginTop: "1rem", fontSize: ".92rem", fontWeight: 300, color: "rgba(237,232,223,.55)", lineHeight: 1.85 }}>
            Four ways to engage this practice — each scoped, each fixed in shape from the first
            conversation. Most partners start with a diagnostic, but any of the four can be the first
            engagement.
          </p>
        </div>
        <div className="svc-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-m">4–6 weeks · Fixed fee</span>
            <div className="sc-title">Brand &amp; Experience Design Sprint</div>
            <p className="sc-desc">
              From positioning through visual identity and brand guidelines — for organizations
              refreshing brand, launching a new product line, or aligning experience with strategy.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-a">8–12 weeks · Milestone-based</span>
            <div className="sc-title">Product Design Engagement</div>
            <p className="sc-desc">
              End-to-end product design — research, journey mapping, information architecture, UI, and
              validation with real users. Implementation-ready handover to your engineering team.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-t">6–8 weeks · Fixed fee</span>
            <div className="sc-title">Design System Build</div>
            <p className="sc-desc">
              Token architecture, component libraries, governance models, and documentation that
              makes adoption real. Reduces design-engineering friction across teams.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-m">2–4 weeks · Fixed fee</span>
            <div className="sc-title">Design Quality Audit</div>
            <p className="sc-desc">
              Independent assessment of design and UX quality across a digital product — applying the
              same systems-level discipline as software QA. Prioritized remediation paths included.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
        </div>
      </section>

      {/* ENGAGEMENT ARCHETYPES */}
      <section className="sec" style={{ background: "var(--ash)", borderTop: "1px solid rgba(201,168,76,.1)" }}>
        <div className="fade-up" style={{ maxWidth: "620px", marginBottom: "1rem" }}>
          <div className="section-label">Engagement Archetypes</div>
          <h2>
            The shapes of work
            <br />
            <em>we are built to do.</em>
          </h2>
          <p style={{ marginTop: ".9rem", fontSize: ".88rem", fontWeight: 300, color: "rgba(244,241,236,.5)", lineHeight: 1.7 }}>
            These are problem shapes, not claims of past work. As a new firm, we believe it is more
            honest to describe the engagements we are designed to take on than to publish fictional
            case studies. References from our founding partners will appear as engagements close.
          </p>
        </div>
        <div className="arch-grid">
          <div className="arch fade-up">
            <div className="arch-n">Archetype 01</div>
            <div className="arch-t">Brand mismatch is blocking growth</div>
            <p className="arch-b">
              An organization whose brand identity reads to one audience and alienates another — and
              every meeting includes a comment about it. We do perception research, brand strategy,
              and a design system that serves both audiences from one coherent visual language.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Strategic Sprint → Brand Engagement</span>
            </div>
          </div>
          <div className="arch fade-up">
            <div className="arch-n">Archetype 02</div>
            <div className="arch-t">UI inconsistency is slowing engineering</div>
            <p className="arch-b">
              A product organization whose engineers make ad-hoc design decisions because there is no
              component library. Every sprint includes design work that should have been a system
              decision. We design the system, document it, and train the team to extend it.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Design Systems Engagement</span>
            </div>
          </div>
          <div className="arch fade-up">
            <div className="arch-n">Archetype 03</div>
            <div className="arch-t">A product feels functionally complete but experientially cold</div>
            <p className="arch-b">
              A digital product where adoption is below benchmark despite feature parity. The gap is
              not features — it is experience design. We do UX research, journey redesign, and a UI
              that matches the emotional qualities the offering needs to convey.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Full Engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" style={{ background: "var(--ink)", borderTop: "1px solid rgba(201,168,76,.09)" }}>
        <div className="fade-up" style={{ maxWidth: "580px", marginBottom: "2.5rem" }}>
          <div className="section-label">Common Questions</div>
          <h2>
            What people
            <br />
            <em>ask first.</em>
          </h2>
        </div>
        <Faq items={faqs} />
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: "var(--ash)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 70% at 50% 50%,rgba(201,168,76,.04) 0%,transparent 65%)", pointerEvents: "none" }}
        />
        <div className="section-label center fade-up">Let&apos;s Work Together</div>
        <h2 className="fade-up" style={{ maxWidth: "580px", margin: ".8rem auto 1rem" }}>
          Ready to start
          <br />
          <em>your next design engagement?</em>
        </h2>
        <p
          className="fade-up"
          style={{ maxWidth: "460px", margin: "0 auto 2.2rem", fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.5)", lineHeight: 1.75, position: "relative" }}
        >
          No pitch decks. No long intake forms. A founding principal responds within 48 hours.
        </p>
        <div className="cta-row fade-up">
          <Link className="cr-card" href="/contact">
            <div className="cr-lbl">Free · 30 Minutes</div>
            <div className="cr-t">Discovery Call</div>
            <p className="cr-d">Honest read on fit, model, and timeline.</p>
            <div className="cr-a">Book a call →</div>
          </Link>
          <Link className="cr-card" href="/contact?topic=diagnostic">
            <div className="cr-lbl">2–4 Week Sprint</div>
            <div className="cr-t">Rapid Diagnostic</div>
            <p className="cr-d">Scoped assessment, fixed fee.</p>
            <div className="cr-a">Request a diagnostic →</div>
          </Link>
          <a className="cr-card" href="mailto:partners@th3tag.com">
            <div className="cr-lbl">Direct</div>
            <div className="cr-t">Email the Principals</div>
            <p className="cr-d">partners@th3tag.com — 48h response.</p>
            <div className="cr-a">partners@th3tag.com →</div>
          </a>
        </div>
      </section>
    </>
  );
}
