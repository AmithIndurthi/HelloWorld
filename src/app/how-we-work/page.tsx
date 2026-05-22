import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Heart first. Then Mind. Then Technology. Four phases, written commitments, and the no-dependency standard on every engagement.",
};

export default function HowWeWorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pg">
        <div className="hero-bg-hww" />
        <div className="hero-grid-bg" />
        <div className="hero-left">
          <div className="hero-eyebrow">How We Work</div>
          <h1 className="hero-headline">
            Heart first.
            <br />
            Then Mind.
            <br />
            <em>Then Technology.</em>
          </h1>
          <p className="hero-sub">
            Our methodology is the same whether we are modernizing an enterprise IT stack, partnering
            with a scaling venture, or designing a product experience. The work changes by practice.
            The order does not.
          </p>
          <div
            style={{ borderLeft: "2px solid rgba(201,168,76,.3)", padding: ".7rem 1.1rem", background: "rgba(201,168,76,.03)", marginBottom: "2rem", maxWidth: "520px" }}
          >
            <span
              style={{ fontFamily: "var(--mono)", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gold-dim)", display: "block", marginBottom: ".25rem" }}
            >
              Three Written Commitments
            </span>
            <p style={{ fontSize: ".84rem", fontWeight: 300, color: "rgba(244,241,236,.6)", lineHeight: 1.6 }}>
              Clarity in writing from week four onward, a team that can run the work without us by
              close, and honest counsel — including when an idea is not yet ready or an engagement
              should end early. These three appear in every engagement contract.
            </p>
          </div>
          <div className="hero-actions">
            <a className="btn-p" href="#process">
              See the Process
            </a>
            <Link className="btn-s" href="/contact">
              Start a Conversation
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-stat-panel">
            <div className="hsp-item">
              <div className="hsp-num">4</div>
              <div className="hsp-label">Phases — every engagement, every practice</div>
              <div className="hsp-sub">Methodology</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">16wk</div>
              <div className="hsp-label">Typical arc, brief to handover</div>
              <div className="hsp-sub">Engagement Arc</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">2wk</div>
              <div className="hsp-label">Demo cadence — working artifact every fortnight</div>
              <div className="hsp-sub">Build Rhythm</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">90d</div>
              <div className="hsp-label">Post-close availability — included on every engagement</div>
              <div className="hsp-sub">Open Line</div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll to explore</div>
      </section>

      {/* METRIC BAR */}
      <div className="metric-bar">
        <div className="metric-bar-inner">
          <div className="metric-item">
            <div className="metric-num">4</div>
            <div className="metric-desc">Phases applied to every engagement</div>
            <div className="metric-context">Methodology</div>
          </div>
          <div className="metric-item">
            <div className="metric-num">16wk</div>
            <div className="metric-desc">Typical engagement arc, brief to handover</div>
            <div className="metric-context">Engagement Arc</div>
          </div>
          <div className="metric-item">
            <div className="metric-num">2wk</div>
            <div className="metric-desc">Working demo every fortnight</div>
            <div className="metric-context">Build Rhythm</div>
          </div>
          <div className="metric-item">
            <div className="metric-num">90d</div>
            <div className="metric-desc">Post-close availability, no charge</div>
            <div className="metric-context">Open Line</div>
          </div>
          <div className="metric-item">
            <div className="metric-num">5</div>
            <div className="metric-desc">Engagement models, from diagnostic to full build</div>
            <div className="metric-context">Models Available</div>
          </div>
        </div>
      </div>

      {/* VISION + MISSION */}
      <section className="sec" style={{ background: "var(--ash)" }}>
        <div className="fade-up" style={{ maxWidth: "580px", marginBottom: ".5rem" }}>
          <div className="section-label">Why We Exist</div>
          <h2>Vision &amp; Mission.</h2>
          <p style={{ marginTop: ".9rem", fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.55)", lineHeight: 1.7 }}>
            What we believe, why we built TheTAG, and the standard we hold the firm to.
          </p>
        </div>
        <div className="vm-grid fade-up">
          <div className="vm">
            <div className="vm-lbl">Vision</div>
            <div className="vm-head">
              A world where technology
              <br />
              serves human flourishing.
            </div>
            <p className="vm-body">
              We believe technology is most powerful when it amplifies what humans do best —
              creativity, judgment, empathy, community — rather than replacing or obscuring it. The
              organizations that will lead through the next decade are those that build accordingly.
              Our work is to help build those organizations.
            </p>
          </div>
          <div className="vm">
            <div className="vm-lbl">Mission</div>
            <div className="vm-head">
              Help organizations build
              <br />
              genuine independence.
            </div>
            <p className="vm-body">
              Not managed dependence. Not retainer-treadmill dependence. Genuine capability — where
              your team can run the strategy, maintain the systems, and make the decisions without
              us. Harder and slower than conventional consulting. It is the only model we find worth
              pursuing.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR PHASES */}
      <section className="sec" style={{ background: "var(--ink)" }} id="process">
        <div className="fade-up" style={{ maxWidth: "600px", marginBottom: ".5rem" }}>
          <div className="section-label">The Methodology</div>
          <h2>
            Four phases.
            <br />
            <em>Every engagement.</em>
          </h2>
          <p style={{ marginTop: ".9rem", fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.5)" }}>
            The sequence is not optional. Starting with technology is how projects fail. We start
            with people — every time.
          </p>
        </div>
        <div className="phases-grid">
          <div className="phase-card fade-up">
            <div className="phase-head">
              <div className="phase-dot">01</div>
              <div>
                <div className="phase-stage">Heart · Weeks 1–2</div>
                <div className="phase-title">Discovery &amp; Alignment</div>
              </div>
            </div>
            <p className="phase-body">
              We start by listening. Before looking at a single system diagram, vendor contract, or
              technical spec, we spend time understanding the people — their pressures, ambitions,
              constraints, and unspoken concerns. No amount of technical sophistication compensates
              for a misunderstood human problem.
            </p>
            <ul className="phase-list">
              <li>Stakeholder interviews and empathy mapping</li>
              <li>Current-state audit and constraint mapping</li>
              <li>Alignment workshop — outcomes, success criteria, scope boundaries</li>
              <li>Written discovery report shared before Phase 2</li>
            </ul>
          </div>
          <div className="phase-card fade-up">
            <div className="phase-head">
              <div className="phase-dot">02</div>
              <div>
                <div className="phase-stage">Mind · Weeks 3–4</div>
                <div className="phase-title">Strategy &amp; Roadmap</div>
              </div>
            </div>
            <p className="phase-body">
              Discovery findings become a clear written plan. Not a slide deck — a document with
              defined outcomes, investment levels, explicit trade-offs, and decision criteria both
              sides have agreed on. Nothing is built until this is signed.
            </p>
            <ul className="phase-list">
              <li>Written strategic roadmap with milestone definitions</li>
              <li>Investment levels and effort estimates by phase</li>
              <li>Trade-offs named — what we are not building and why</li>
              <li>Mutual sign-off before Phase 3</li>
            </ul>
          </div>
          <div className="phase-card fade-up">
            <div className="phase-head">
              <div className="phase-dot">03</div>
              <div>
                <div className="phase-stage">Technology · Weeks 5–12</div>
                <div className="phase-title">Design &amp; Implementation</div>
              </div>
            </div>
            <p className="phase-body">
              Architecture, vendor selection, and hands-on implementation — with your team, not
              beside it. Every two weeks, a working demo. Every week, a written update. We do not do
              big reveals. If something is not working, you know about it before we do.
            </p>
            <ul className="phase-list">
              <li>Architecture design and vendor evaluation against sovereign criteria</li>
              <li>Bi-weekly demos — working artifact, not slide update</li>
              <li>Weekly written status against milestones</li>
              <li>Decision log — every significant choice recorded</li>
            </ul>
          </div>
          <div className="phase-card fade-up">
            <div className="phase-head">
              <div className="phase-dot">04</div>
              <div>
                <div className="phase-stage">All Three · Weeks 13–16</div>
                <div className="phase-title">Handoff &amp; Open Line</div>
              </div>
            </div>
            <p className="phase-body">
              The No-Dependency Handover. Complete documentation, team training, and 90 days of
              post-close availability — included, no charge. By the time we close, your team can run
              everything we built without us. That is the success condition.
            </p>
            <ul className="phase-list">
              <li>Complete technical and operational documentation</li>
              <li>Team training and knowledge transfer sessions</li>
              <li>90-day post-close availability — no charge, no new scope</li>
              <li>Final report against original success criteria</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="sec" style={{ background: "var(--ash)", borderTop: "1px solid rgba(201,168,76,.1)" }}>
        <div className="fade-up" style={{ maxWidth: "600px", marginBottom: ".5rem" }}>
          <div className="section-label">Engagement Models</div>
          <h2>
            The right model
            <br />
            <em>for your moment.</em>
          </h2>
          <p style={{ marginTop: ".9rem", fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.5)" }}>
            Five ways to engage. Choose based on where you are, not where you want to be.
          </p>
        </div>
        <div className="models-grid">
          <div className="model fade-up">
            <div className="model-lbl">Model 01</div>
            <div className="model-name">Rapid Diagnostic</div>
            <div className="model-arc">2–4 weeks · Fixed fee</div>
            <p className="model-desc">
              A scoped assessment of one domain — technology, venture readiness, or design. Findings
              and prioritized recommendations. First engagement option for most partners.
            </p>
          </div>
          <div className="model fade-up">
            <div className="model-lbl">Model 02</div>
            <div className="model-name">Strategic Sprint</div>
            <div className="model-arc">6–8 weeks · Fixed fee</div>
            <p className="model-desc">
              Discovery through strategy — phases 1 and 2 of the methodology. A clear written roadmap
              with defined outcomes. For organizations ready to plan but not yet ready to build.
            </p>
          </div>
          <div className="model fade-up">
            <div className="model-lbl">Model 03</div>
            <div className="model-name">Full Engagement</div>
            <div className="model-arc">12–16 weeks · Milestone-based</div>
            <p className="model-desc">
              The complete four-phase methodology — discovery through implementation and handover.
              Milestone-based payment tied to specific deliverables.
            </p>
          </div>
          <div className="model fade-up">
            <div className="model-lbl">Model 04</div>
            <div className="model-name">Fractional Principal</div>
            <div className="model-arc">Ongoing · Monthly retainer</div>
            <p className="model-desc">
              A named TheTAG principal inside your organization on a fractional basis — 20–30 hours
              per month. Hands-on operating help, not advisory calls. Six-month minimum.
            </p>
          </div>
          <div className="model fade-up">
            <div className="model-lbl">Model 05</div>
            <div className="model-name">Founding Partner</div>
            <div className="model-arc">Reduced rate · Naming permission</div>
            <p className="model-desc">
              For our first three founding partners. Reduced first-engagement pricing in exchange for
              the right to name those partners publicly after twelve months. Limited spots.
            </p>
          </div>
          <div
            className="model fade-up"
            style={{ border: "1px solid rgba(201,168,76,.1)", background: "transparent", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "180px" }}
          >
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", fontWeight: 400, marginBottom: ".5rem" }}>
              Not sure which fits?
            </div>
            <p style={{ fontSize: ".78rem", fontWeight: 300, color: "rgba(244,241,236,.38)", lineHeight: 1.55, marginBottom: "1.1rem", maxWidth: "200px" }}>
              Tell us where you are. We will recommend the right starting point.
            </p>
            <Link href="/contact" style={{ fontSize: ".7rem", fontWeight: 500, color: "var(--gold)", letterSpacing: ".08em", textDecoration: "none" }}>
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="sec" style={{ background: "var(--ink)", borderTop: "1px solid rgba(201,168,76,.07)" }}>
        <div className="fade-up" style={{ maxWidth: "600px", marginBottom: ".5rem" }}>
          <div className="section-label">The Standards</div>
          <h2>
            Non-negotiable on
            <br />
            <em>every engagement.</em>
          </h2>
        </div>
        <div className="standards-grid">
          <div className="std fade-up">
            <div className="std-n">01 — Written always</div>
            <div className="std-t">No verbal commitments after week four</div>
            <p className="std-b">
              Every decision, scope change, and milestone lives in a shared decision log. Clear
              record, zero ambiguity, full accountability.
            </p>
          </div>
          <div className="std fade-up">
            <div className="std-n">02 — Zero new dependencies</div>
            <div className="std-t">Our goal is to become unnecessary</div>
            <p className="std-b">
              We architect for total independence. Full knowledge transfer is planned from day one.
              By close, your team runs what we built — intentionally without us.
            </p>
          </div>
          <div className="std fade-up">
            <div className="std-n">03 — Founders always</div>
            <div className="std-t">The person in the conversation does the work</div>
            <p className="std-b">
              No bait-and-switch. No junior team after sign-off. The three founders who design your
              engagement are the three executing it.
            </p>
          </div>
          <div className="std fade-up">
            <div className="std-n">04 — Honest counsel</div>
            <div className="std-t">Including when it is uncomfortable</div>
            <p className="std-b">
              We will tell you when an idea is not ready, a vendor is wrong for you, or an engagement
              should end early. Committed in writing on every contract.
            </p>
          </div>
          <div className="std fade-up">
            <div className="std-n">05 — Milestone accountability</div>
            <div className="std-t">Payment tied to outcomes, not time</div>
            <p className="std-b">
              Milestone-based payment structures wherever possible. We do not continue engagements
              that are not producing results. We say so and stop billing.
            </p>
          </div>
          <div className="std fade-up">
            <div className="std-n">06 — Ethical architecture</div>
            <div className="std-t">Privacy and safety as constraints</div>
            <p className="std-b">
              Privacy, bias mitigation, and safety are non-negotiable architectural constraints from
              the first conversation — not a post-script compliance layer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: "var(--ash)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 65% at 50% 50%,rgba(30,107,90,.04) 0%,transparent 60%)", pointerEvents: "none" }}
        />
        <div className="section-label center fade-up">Ready to Begin</div>
        <h2 className="fade-up" style={{ maxWidth: "540px", margin: ".8rem auto 1rem" }}>
          Let&apos;s apply
          <br />
          <em>the methodology.</em>
        </h2>
        <p
          className="fade-up"
          style={{ maxWidth: "440px", margin: "0 auto 2.2rem", fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.5)", lineHeight: 1.75, position: "relative" }}
        >
          Most first engagements start with a Rapid Diagnostic — 2–4 weeks, fixed fee, no long-term
          commitment.
        </p>
        <div className="cta-row fade-up">
          <Link className="cr-card" href="/contact">
            <div className="cr-lbl">Free · 30 Minutes</div>
            <div className="cr-t">Discovery Call</div>
            <p className="cr-d">Honest read on which model fits your moment.</p>
            <div className="cr-a">Book a call →</div>
          </Link>
          <Link className="cr-card" href="/contact?topic=diagnostic">
            <div className="cr-lbl">2–4 Week Sprint</div>
            <div className="cr-t">Rapid Diagnostic</div>
            <p className="cr-d">Scoped assessment of one domain. Fixed fee.</p>
            <div className="cr-a">Request a diagnostic →</div>
          </Link>
          <a className="cr-card" href="mailto:partners@th3tag.com">
            <div className="cr-lbl">Direct</div>
            <div className="cr-t">Email the Principals</div>
            <p className="cr-d">partners@th3tag.com — read by a founder.</p>
            <div className="cr-a">partners@th3tag.com →</div>
          </a>
        </div>
      </section>
    </>
  );
}
