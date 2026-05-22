import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Framework — Heart, Mind & Technology",
  description:
    "Heart for human truth. Mind for strategic clarity. Technology for sovereign execution. The integrated framework that governs every TheTAG engagement.",
};

export default function FrameworkPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pg" style={{ gridTemplateColumns: "1fr" }}>
        <div className="hero-bg-fw" />
        <div className="hero-grid-bg" />
        <div className="hero-left" style={{ maxWidth: "880px" }}>
          <div className="hero-eyebrow">The Framework</div>
          <h1 className="hero-headline">
            Heart for human truth.
            <br />
            Mind for strategic clarity.
            <br />
            <em>Technology for sovereign execution.</em>
          </h1>
          <p className="hero-sub" style={{ maxWidth: "680px" }}>
            Three principles. Applied in this order on every engagement. Each is necessary. None is
            sufficient alone. The framework is what makes the work coherent across three practices,
            three founders, and a hundred small decisions per project.
          </p>
          <div className="hero-actions">
            <a className="btn-g" href="#heart">
              Read the framework ↓
            </a>
          </div>
        </div>
        <div className="scroll-hint">Scroll to explore</div>
      </section>

      {/* HEART */}
      <section className="pillar pillar-h" id="heart">
        <div className="pillar-grid">
          <div className="pillar-meta fade-up">
            <div className="pillar-num pillar-num-h">01</div>
            <div className="pillar-lbl">Heart</div>
            <h2 className="pillar-name">Human Truth.</h2>
            <div className="pillar-tag">Empathy · Ethics · Wellbeing</div>
          </div>
          <div className="pillar-body fade-up">
            <p>
              Every technology decision is a human decision first. Before we look at a single system
              diagram, vendor contract, or technical specification, we spend time understanding the
              people who will live inside what we build — their pressures, ambitions, constraints,
              and the unspoken concerns they have not yet named.
            </p>
            <p>
              This is not soft work. It is the most difficult engineering discipline in the firm.{" "}
              <em>No amount of technical sophistication compensates for a misunderstood human
              problem.</em>{" "}
              Most transformation projects fail not at the architecture layer but at the empathy
              layer — the people who must adopt what was built were never genuinely understood, and
              the system that ships does not survive contact with the actual organization.
            </p>
            <p>
              Heart-first means: stakeholder interviews and journey mapping before vendor
              evaluation. It means treating change management not as a launch-phase activity but as
              an architectural input from week one. It means designing for the user who hesitates,
              not just the user who clicks. And it means refusing to ship work that we know will be
              quietly resented by the people forced to live with it.
            </p>
            <div className="decision-block">
              <div className="decision-lbl">How Heart changes a decision</div>
              <p className="decision-text">
                When a vendor offers the most technically elegant solution but requires your team to
                abandon a workflow they have built ownership around over years, Heart says: the
                second-best architecture, integrated with the workflow they already trust, will
                outperform the first-best architecture that asks them to start over. Empathy is not
                a soft skill — it is the most reliable predictor of adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MIND */}
      <section className="pillar pillar-m" id="mind">
        <div className="pillar-grid">
          <div className="pillar-meta fade-up">
            <div className="pillar-num pillar-num-m">02</div>
            <div className="pillar-lbl">Mind</div>
            <h2 className="pillar-name">Strategic Clarity.</h2>
            <div className="pillar-tag">Intelligence · Discipline · Trade-offs</div>
          </div>
          <div className="pillar-body fade-up">
            <p>
              Discovery findings become a written plan. Not a slide deck — a document with defined
              outcomes, investment levels, explicit trade-offs, and decision criteria that both
              sides have agreed on in plain language. Nothing is built until this document is signed.
            </p>
            <p>
              The discipline of Mind is naming what you are <em>not</em> building. Most strategic
              plans fail not because they include the wrong things but because they refuse to
              exclude. They become wish lists, and the wish list becomes the scope, and the scope
              becomes the timeline, and the timeline becomes the budget. We work the opposite
              direction: the harder we are on what stays out, the more reliably the rest ships.
            </p>
            <p>
              Mind also means board-ready language from week four onward. Strategy that cannot be
              defended in plain English to a non-technical executive is strategy that has not been
              thought through. We test the plan against that audience before we propose it.
            </p>
            <div className="decision-block">
              <div className="decision-lbl">How Mind changes a decision</div>
              <p className="decision-text">
                When a roadmap proposes five strategic initiatives running in parallel, Mind says:
                pick the two whose failure would set us back furthest, defund the others, and revisit
                them in twelve months from a position of operational stability. A clear plan with two
                committed bets beats a comprehensive plan with five hedged ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="pillar pillar-t" id="technology">
        <div className="pillar-grid">
          <div className="pillar-meta fade-up">
            <div className="pillar-num pillar-num-t">03</div>
            <div className="pillar-lbl">Technology</div>
            <h2 className="pillar-name">Sovereign Execution.</h2>
            <div className="pillar-tag">Architecture · Independence · Handoff</div>
          </div>
          <div className="pillar-body fade-up">
            <p>
              Architecture and build are designed for your independence. Designed to run without us,
              documented for your team, free of vendor traps that cost you optionality later. This is
              the principle we hold ourselves to most strictly — because most consulting engagements
              end with the client more dependent on something than when they started, and we believe
              that outcome is a failure regardless of what shipped.
            </p>
            <p>
              Sovereign execution means treating data residency, exit clauses, and vendor
              concentration as architectural decisions, not commercial ones. It means evaluating
              vendors against the question <em>what does a clean exit look like in three years</em>{" "}
              with the same rigour as <em>what does day-one feature parity look like</em>. It means
              writing documentation that your team can actually use after we leave — not deliverable
              theatre dressed up as knowledge transfer.
            </p>
            <p>
              And it means measuring our own success against the no-dependency standard. The
              engagement closes when your team can run what we built without us — not when our
              retainer renews.
            </p>
            <div className="decision-block">
              <div className="decision-lbl">How Technology changes a decision</div>
              <p className="decision-text">
                When a managed platform offers fifty percent faster time-to-value than building on
                open standards, Technology asks: what does year-three look like if this vendor
                doubles pricing, gets acquired, or sunsets the product? If the answer is &quot;we are
                trapped,&quot; the platform fails the test regardless of how good the demo was.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: "var(--ash)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 70% at 50% 50%,rgba(196,169,103,.04) 0%,transparent 65%)", pointerEvents: "none" }}
        />
        <div className="section-label center fade-up">Apply the Framework</div>
        <h2 className="fade-up" style={{ maxWidth: "580px", margin: "1rem auto 1.3rem" }}>
          Ready to put the
          <br />
          <em>framework to work?</em>
        </h2>
        <p
          className="fade-up"
          style={{ maxWidth: "480px", margin: "0 auto 2.5rem", fontSize: ".94rem", fontWeight: 300, color: "rgba(237,232,223,.55)", lineHeight: 1.85, position: "relative" }}
        >
          Most engagements begin with a 2–4 week diagnostic. Scoped, fixed-fee, no long-term
          commitment.
        </p>
        <div className="cta-row fade-up">
          <Link className="cr-card" href="/contact">
            <div className="cr-lbl">Free · 30 Minutes</div>
            <div className="cr-t">Discovery Call</div>
            <p className="cr-d">An honest read on which practice fits your moment.</p>
            <div className="cr-a">Book a call →</div>
          </Link>
          <Link className="cr-card" href="/how-we-work">
            <div className="cr-lbl">Operational Detail</div>
            <div className="cr-t">How We Work</div>
            <p className="cr-d">The four-phase methodology and engagement models.</p>
            <div className="cr-a">Read the methodology →</div>
          </Link>
          <Link className="cr-card" href="/#services">
            <div className="cr-lbl">By Practice</div>
            <div className="cr-t">Three Practices</div>
            <p className="cr-d">Technology Advisory, Strategic Ventures, Design Studio.</p>
            <div className="cr-a">See the services →</div>
          </Link>
        </div>
      </section>
    </>
  );
}
