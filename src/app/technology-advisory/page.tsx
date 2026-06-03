import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "Technology Advisory & Consulting",
  description:
    "Enterprise IT modernization, AI strategy, vendor consolidation, and security/compliance — led by a founder with public-sector IT background.",
};

const faqs = [
  {
    q: "Do you work with non-technical leadership teams?",
    a: "Yes — and often this is where we are most useful. We translate technology decisions into business language and business decisions into technology constraints. The Heart · Mind · Technology framework was built for exactly this translation.",
  },
  {
    q: "What does a typical first engagement look like?",
    a: "Most first engagements are a 2–4 week Rapid Diagnostic — a scoped assessment of one domain (technology spend, vendor concentration, AI readiness) producing findings and prioritized recommendations. Fixed fee. No long-term commitment.",
  },
  {
    q: "How do you handle vendor relationships?",
    a: "We are entirely vendor-agnostic. No commercial relationships with any technology vendor. Our only incentive is your outcome. We will recommend against any vendor that does not meet the sovereignty and ethics bar.",
  },
  {
    q: "Can you work alongside an existing technology team?",
    a: "Yes — and this is often the most effective model. We work with your team, not beside it. Knowledge transfer is planned from day one. By close, your team runs everything we built together.",
  },
];

export default function TechnologyAdvisoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pg">
        <div className="hero-bg-svc-tech" />
        <div className="hero-grid-bg" />
        <div className="hero-left">
          <div className="hero-eyebrow">Technology Advisory &amp; Consulting · Tech-Led Practice</div>
          <h1 className="hero-headline">
            Enterprise technology,
            <br />
            <em>built for your independence.</em>
          </h1>
          <p className="hero-sub">
            Modernize enterprise IT, shape AI strategy, eliminate vendor over-dependency, and harden
            security and compliance — with one principal in the conversation from first call to
            handover.
          </p>
          <div className="led-by">
            <span className="led-by-dot" />
            Led by Amith Indurthi · Founder &amp; CTO
          </div>
          <div
            style={{ borderLeft: "2px solid rgba(201,168,76,.3)", padding: ".7rem 1.1rem", background: "rgba(201,168,76,.03)", marginBottom: "2rem", maxWidth: "520px" }}
          >
            <span
              style={{ fontFamily: "var(--mono)", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gold-dim)", display: "block", marginBottom: ".25rem" }}
            >
              Why &quot;Sovereign Execution&quot;
            </span>
            <p style={{ fontSize: ".84rem", fontWeight: 300, color: "rgba(244,241,236,.57)", lineHeight: 1.6 }}>
              Most enterprise technology engagements end with the client more dependent on a vendor
              than when they started. We design every engagement to leave you independent — of
              vendors, of contractors, and of us. That is the standard.
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
              <div className="hsp-label">Founding principal leads every engagement — Amith Indurthi</div>
              <div className="hsp-sub">Always Senior</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">IT</div>
              <div className="hsp-label">Public-sector enterprise IT background — regulated environments</div>
              <div className="hsp-sub">Real Experience</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">0</div>
              <div className="hsp-label">Vendor commercial relationships — fully agnostic counsel</div>
              <div className="hsp-sub">No Conflicts</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">4</div>
              <div className="hsp-label">Phases applied to every technology engagement</div>
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
            <span className="sc-tag t-t">2–4 weeks · Fixed fee</span>
            <div className="sc-title">Enterprise Technology Diagnostic</div>
            <p className="sc-desc">
              A scoped assessment of one domain — technology spend, vendor concentration, AI
              readiness, or security posture. Findings and prioritized recommendations in writing.
              The most common first engagement.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-a">6–8 weeks · Fixed fee</span>
            <div className="sc-title">AI Readiness &amp; Governance Sprint</div>
            <p className="sc-desc">
              Strategy and governance framework for organizations ready to deploy AI but blocked by
              compliance, risk, or sovereignty concerns. Includes vendor evaluation criteria and a
              deployment roadmap.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-t">12–16 weeks · Milestone-based</span>
            <div className="sc-title">Intelligent Systems Modernization</div>
            <p className="sc-desc">
              The full four-phase engagement — discovery, strategy, build, handoff. For organizations
              modernizing enterprise IT, eliminating vendor dependency, or executing a defined
              transformation roadmap.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-m">Ongoing · Monthly retainer</span>
            <div className="sc-title">Fractional CTO</div>
            <p className="sc-desc">
              A named TheTAG principal embedded on a fractional basis — 20–30 hours per month — for
              organizations scaling through a technology transition too important to leave to chance.
              Six-month minimum.
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
            <div className="arch-t">Technology debt is consuming engineering capacity</div>
            <p className="arch-b">
              A growing organization spending more engineering time on infrastructure maintenance
              than product. We assess the debt, prioritize the paydown, and structure a portfolio
              approach that frees capacity without forcing a rewrite.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Rapid Diagnostic → Full Engagement</span>
            </div>
          </div>
          <div className="arch fade-up">
            <div className="arch-n">Archetype 02</div>
            <div className="arch-t">AI deployment is stalled by governance uncertainty</div>
            <p className="arch-b">
              A team wanting to deploy AI but blocked by compliance, risk, or sovereignty concerns.
              We design the governance framework, evaluate vendors against explicit criteria, and
              structure deployments that meet the bar.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Strategic Sprint → Implementation</span>
            </div>
          </div>
          <div className="arch fade-up">
            <div className="arch-n">Archetype 03</div>
            <div className="arch-t">Vendor concentration is a single point of failure</div>
            <p className="arch-b">
              An organization too dependent on one or two strategic vendors, with exit costs they
              have not quantified. We map the dependency, model the exit, and build a diversification
              roadmap that reduces risk without disruption.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Rapid Diagnostic → Strategic Sprint</span>
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
          <em>your transformation?</em>
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
