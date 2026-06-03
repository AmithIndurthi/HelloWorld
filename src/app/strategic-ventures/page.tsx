import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "Strategic Ventures & Partnerships",
  description:
    "Operator-side partnership for scaling ventures — operations, supply chain, vendor relationships, and the unglamorous middle of growth. Led by a founder with senior operations background.",
};

const faqs = [
  {
    q: "Do you invest capital?",
    a: "No. This is operator-side partnership, not venture investment. We do not lead rounds, we do not co-invest, we do not take equity in lieu of fees. Our incentive is the operating outcome, full stop.",
  },
  {
    q: "What does the operating sprint look like?",
    a: "A founding principal works inside the venture — typically 20–30 hours per month — on the specific operating problem scoped in the sprint brief. Actual operating work, not advisory calls. 90 days minimum.",
  },
  {
    q: "How many ventures do you work with at once?",
    a: "A small number — deliberately. The operating-sprint model requires genuine operating depth, and you cannot provide that across a large portfolio. If we are at capacity, we will tell you honestly.",
  },
  {
    q: "Can you help a corporation building internal venture capability?",
    a: "Yes — we design and operate Venture Portfolio governance, run accelerator sprint programs for internal ventures, and act as operating partners for external deal flow.",
  },
];

export default function StrategicVenturesPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pg">
        <div className="hero-bg-svc-sv" />
        <div className="hero-grid-bg" />
        <div className="hero-left">
          <div className="hero-eyebrow">Strategic Ventures &amp; Partnerships · All-Pillars Practice</div>
          <h1 className="hero-headline">
            Operator depth
            <br />
            <em>for scaling ventures.</em>
          </h1>
          <p className="hero-sub">
            Hands-on partnership for the unglamorous middle of growth — operations design, vendor and
            supply-chain coordination, partnership structuring, and the discipline of delivering
            against committed service levels at volume.
          </p>
          <div className="led-by">
            <span className="led-by-dot" />
            Led by Kiran Kommana · Co-Founder &amp; CEO
          </div>
          <div
            style={{ borderLeft: "2px solid rgba(201,168,76,.3)", padding: ".7rem 1.1rem", background: "rgba(201,168,76,.03)", marginBottom: "2rem", maxWidth: "520px" }}
          >
            <span
              style={{ fontFamily: "var(--mono)", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gold-dim)", display: "block", marginBottom: ".25rem" }}
            >
              What This Is — and Is Not
            </span>
            <p style={{ fontSize: ".84rem", fontWeight: 300, color: "rgba(244,241,236,.57)", lineHeight: 1.6 }}>
              This is not a venture-capital fund and we do not lead investment rounds. This is
              operator-side partnership: a founding principal alongside your team, working the
              operations and partnership decisions that scaling ventures get wrong because they do
              not feel like the glamorous problems.
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
              <div className="hsp-label">Founding principal leads every engagement — Kiran Kommana</div>
              <div className="hsp-sub">Always Senior</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">Ops</div>
              <div className="hsp-label">Senior warehouse / operations management background</div>
              <div className="hsp-sub">Real Experience</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">0</div>
              <div className="hsp-label">Capital invested — operator-side partnership, not VC</div>
              <div className="hsp-sub">No Capital Conflicts</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">90d</div>
              <div className="hsp-label">Operating sprint with named principal inside your team</div>
              <div className="hsp-sub">Hands-On</div>
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
            <span className="sc-tag t-a">2–4 weeks · Fixed fee</span>
            <div className="sc-title">Venture Operations Diagnostic</div>
            <p className="sc-desc">
              Scoped operational assessment of one area — capacity, process, vendor concentration, or
              partnership effectiveness. Honest report, prioritized recommendations, no upsell.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-m">8–12 weeks · Milestone-based</span>
            <div className="sc-title">Operations Scaling Sprint</div>
            <p className="sc-desc">
              Hands-on engagement to design and stand up the operational systems behind growth —
              process, capacity planning, vendor structures, escalation paths. We stay through the
              first volume cycle.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-a">90 days · Embedded</span>
            <div className="sc-title">Founder-Led Venture Advisory</div>
            <p className="sc-desc">
              A founding principal inside your venture for 90 days on a defined operational problem.
              Actual operating work — not advisory calls, not weekly check-ins. The model is operator
              partnership.
            </p>
            <span className="sc-link">Discuss this engagement →</span>
          </Link>
          <Link className="sc" href="/contact">
            <span className="sc-tag t-t">Ongoing · Monthly retainer</span>
            <div className="sc-title">Fractional COO</div>
            <p className="sc-desc">
              Named operating leadership on a fractional basis — 20–30 hours per month — for ventures
              scaling without yet justifying a full-time hire. Six-month minimum, milestone-reviewed
              quarterly.
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
            <div className="arch-t">Operating capacity is the bottleneck, not demand</div>
            <p className="arch-b">
              A venture with strong demand but operating systems that buckle under the load. We
              design the operational lift — process, vendors, staffing rhythm — and stay through the
              first volume cycle.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Operating Sprint → Fractional COO</span>
            </div>
          </div>
          <div className="arch fade-up">
            <div className="arch-n">Archetype 02</div>
            <div className="arch-t">A partnership is signed but not yet operational</div>
            <p className="arch-b">
              A strategic partnership in place but no operating clarity between teams. We structure
              the joint operating cadence, decision rights, and escalation paths so the partnership
              actually produces.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Strategic Sprint → Engagement</span>
            </div>
          </div>
          <div className="arch fade-up">
            <div className="arch-n">Archetype 03</div>
            <div className="arch-t">Operating diligence on a target acquisition</div>
            <p className="arch-b">
              An investor or acquirer with a target whose financials look strong but operating
              reality is unclear. We assess the operating substance, model the integration risk, and
              report honestly on what we find.
            </p>
            <div className="arch-meta">
              <span className="arch-meta-lbl">Engagement shape</span>
              <span className="arch-meta-val">Rapid Diagnostic · Fixed Fee</span>
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
          <em>scaling your venture?</em>
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
