import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "TheTAG Ventures & Partners is our first founder team. Three principals across three practices, transitioning from operator roles to build a firm we wish we had worked with.",
};

export default function WhoWeArePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pg">
        <div className="hero-bg-wwa" />
        <div className="hero-grid-bg" />
        <div className="hero-left">
          <div className="hero-eyebrow">Who We Are</div>
          <h1 className="hero-headline">
            Operators
            <br />
            building <em>our<br />first firm.</em>
          </h1>
          <p className="hero-sub">
            TheTAG Ventures &amp; Partners is our first venture as founders. Three principals, three
            operator backgrounds, three practices — built around the conviction that the firm we
            would have wanted to work with did not yet exist.
          </p>
          <div
            style={{ borderLeft: "2px solid rgba(201,168,76,.3)", padding: ".7rem 1.1rem", background: "rgba(201,168,76,.03)", marginBottom: "2rem", maxWidth: "520px" }}
          >
            <span
              style={{ fontFamily: "var(--mono)", fontSize: ".6rem", letterSpacing: ".15em", textTransform: "uppercase", color: "var(--gold-dim)", display: "block", marginBottom: ".25rem" }}
            >
              Plainly Stated
            </span>
            <p style={{ fontSize: ".84rem", fontWeight: 300, color: "rgba(244,241,236,.6)", lineHeight: 1.6 }}>
              We are not ex-McKinsey, ex-Bain, or ex-venture-firm. We are three operators who spent
              years inside large organizations and decided to build a firm that does the work
              differently. The site tells you what that looks like in practice.
            </p>
          </div>
          <div className="hero-actions">
            <a className="btn-p" href="#founders">
              Meet the Founders
            </a>
            <a className="btn-g" href="#origin">
              Why we started ↓
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-stat-panel">
            <div className="hsp-item">
              <div className="hsp-num">3</div>
              <div className="hsp-label">Founding principals on every engagement</div>
              <div className="hsp-sub">Always Senior</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">3</div>
              <div className="hsp-label">Practice areas, each led by a founder</div>
              <div className="hsp-sub">Focused</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">1st</div>
              <div className="hsp-label">Founder venture for all three of us — by design</div>
              <div className="hsp-sub">New Firm</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">0</div>
              <div className="hsp-label">Engagements we will take without a genuine fit</div>
              <div className="hsp-sub">Honest Always</div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll to explore</div>
      </section>

      {/* METRIC BAR */}
      <div className="metric-bar">
        <div className="metric-bar-inner">
          <div className="metric-item">
            <div className="metric-num">3</div>
            <div className="metric-desc">Founders leading from the front — three practices</div>
            <div className="metric-context">Founding Team</div>
          </div>
          <div className="metric-item">
            <div className="metric-num">3</div>
            <div className="metric-desc">Three founder-led practice areas</div>
            <div className="metric-context">Focused Scope</div>
          </div>
          <div className="metric-item">
            <div className="metric-num">48h</div>
            <div className="metric-desc">Response on every qualified inbound</div>
            <div className="metric-context">Response Commitment</div>
          </div>
          <div className="metric-item">
            <div className="metric-num">16wk</div>
            <div className="metric-desc">Typical engagement arc, brief to handover</div>
            <div className="metric-context">Engagement Arc</div>
          </div>
          <div className="metric-item">
            <div className="metric-num">1</div>
            <div className="metric-desc">One methodology — Heart, Mind, Technology</div>
            <div className="metric-context">Framework</div>
          </div>
        </div>
      </div>

      {/* FOUNDERS */}
      <section className="sec" style={{ background: "var(--ink)" }} id="founders">
        <div className="fade-up" style={{ maxWidth: "600px", marginBottom: "3rem" }}>
          <div className="section-label">The Founding Team</div>
          <h2>
            Three founders.
            <br />
            <em>Three operator backgrounds.</em>
          </h2>
          <p style={{ marginTop: ".9rem", fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.55)" }}>
            Each of us spent years inside large organizations. Each of us watched the same gaps
            repeat. Each of us leads the practice closest to the work we know.
          </p>
        </div>
        <div className="founders-grid">
          <div className="fc fade-up">
            <div className="fc-top">
              <div className="fc-avatar av-a">A</div>
              <div className="fc-name">Amith Indurthi</div>
              <div className="fc-role">Founder &amp; Chief Technology Officer</div>
              <div className="fc-bg">Background: Senior IT Manager · Public Sector</div>
              <p className="fc-bio">
                Amith spent his career as a Senior IT Manager in the public sector, where he led
                enterprise technology operations, vendor consolidation, and the security and
                compliance disciplines that regulated environments demand. TheTAG is his first
                venture as a founder. He leads the Technology Advisory &amp; Consulting practice and
                the Well-being Companion build.
              </p>
            </div>
            <div className="fc-bottom">
              <div className="fc-focus">Areas of focus</div>
              <div className="fc-tags">
                <span className="fc-tag">Enterprise IT</span>
                <span className="fc-tag">AI Strategy</span>
                <span className="fc-tag">Cloud Architecture</span>
                <span className="fc-tag">Vendor Consolidation</span>
                <span className="fc-tag">Security &amp; Compliance</span>
              </div>
              <div className="fc-links">
                <Link className="fc-link" href="/contact">
                  Schedule a conversation →
                </Link>
              </div>
            </div>
          </div>
          <div className="fc fade-up">
            <div className="fc-top">
              <div className="fc-avatar av-k">K</div>
              <div className="fc-name">Kiran Kommana</div>
              <div className="fc-role">Co-Founder &amp; Chief Executive Officer</div>
              <div className="fc-bg">Background: Senior Warehouse Manager · Operations</div>
              <p className="fc-bio">
                Kiran spent his career as a Senior Warehouse Manager, running scaled operational
                systems, multi-vendor coordination, and the day-to-day discipline of meeting
                commitments at volume. TheTAG is his first venture as a founder. He leads the
                Strategic Ventures &amp; Partnerships practice — operator-side experience for
                founders scaling through the unglamorous middle of growth.
              </p>
            </div>
            <div className="fc-bottom">
              <div className="fc-focus">Areas of focus</div>
              <div className="fc-tags">
                <span className="fc-tag">Operations Scaling</span>
                <span className="fc-tag">Vendor Management</span>
                <span className="fc-tag">Supply Chain</span>
                <span className="fc-tag">Partnership Structure</span>
                <span className="fc-tag">Growth Discipline</span>
              </div>
              <div className="fc-links">
                <Link className="fc-link" href="/contact">
                  Schedule a conversation →
                </Link>
              </div>
            </div>
          </div>
          <div className="fc fade-up">
            <div className="fc-top">
              <div className="fc-avatar av-m">M</div>
              <div className="fc-name">Manasa Kommana</div>
              <div className="fc-role">Co-Founder &amp; Co-Chief Executive Officer</div>
              <div className="fc-bg">Background: QA Lead · Software Quality</div>
              <p className="fc-bio">
                Manasa worked as a QA Lead, focused on software quality, user-experience validation,
                and the systems-thinking discipline of catching what does not work before users do.
                TheTAG is her first venture as a founder. She leads the Design Studio practice —
                applying quality-first principles to brand, product, and the experience design that
                holds them together.
              </p>
            </div>
            <div className="fc-bottom">
              <div className="fc-focus">Areas of focus</div>
              <div className="fc-tags">
                <span className="fc-tag">Product Design</span>
                <span className="fc-tag">Quality Engineering</span>
                <span className="fc-tag">UX Research</span>
                <span className="fc-tag">Design Systems</span>
                <span className="fc-tag">Brand Identity</span>
              </div>
              <div className="fc-links">
                <Link className="fc-link" href="/contact">
                  Schedule a conversation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="sec" style={{ background: "var(--ash)", borderTop: "1px solid rgba(201,168,76,.1)" }} id="origin">
        <div className="origin-grid fade-up">
          <div>
            <div className="section-label">Why We Started</div>
            <h2>
              We saw the same
              <br />
              failures repeat.
              <br />
              <em>From three angles.</em>
            </h2>
            <p style={{ fontSize: ".93rem", fontWeight: 300, color: "rgba(244,241,236,.62)", lineHeight: 1.8, marginTop: "1.1rem" }}>
              Amith watched smart enterprise IT strategy decisions die inside vendor relationships
              that could not be exited cleanly. Kiran watched operational excellence get crushed by
              software that was not built for the people running it. Manasa caught the gap, over and
              over, between what was promised and what shipped.
            </p>
            <p style={{ fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.53)", lineHeight: 1.8, marginTop: ".8rem" }}>
              Three different operator vantage points. Three different domains. One repeating
              pattern: technology was being built and sold without the human-centered work that
              determines whether it actually lands. We started TheTAG to do that work differently —
              and to build the firm we would have wanted to hire.
            </p>
            <p style={{ fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.53)", lineHeight: 1.8, marginTop: ".8rem" }}>
              We are also building. The Well-being First AI Companion — TheTAG&apos;s own venture,
              currently in strategic blueprint refinement and initial MVP development — is our proof
              of work. We apply the same Heart · Mind · Technology framework to our own hardest
              problem.
            </p>
          </div>
          <div>
            <div className="conviction-cards">
              <div className="cv-card2">
                <div className="cv-num2">The Conviction</div>
                <div className="cv-title2">Technology must serve the human</div>
                <p className="cv-body2">
                  Not the vendor relationship, not the architecture preference, not the consulting
                  retainer.
                </p>
              </div>
              <div className="cv-card2">
                <div className="cv-num2">The Structure</div>
                <div className="cv-title2">Small, founder-led, by design</div>
                <p className="cv-body2">
                  Three practices. Three founders. Reduced-rate first engagements with naming
                  permission.
                </p>
              </div>
              <div className="cv-card2">
                <div className="cv-num2">The Proof</div>
                <div className="cv-title2">We apply the methodology to ourselves</div>
                <p className="cv-body2">
                  The Well-being Companion: a venture we are building, using our own framework, on a
                  problem we believe matters.
                </p>
              </div>
              <div className="cv-card2">
                <div className="cv-num2">The Standard</div>
                <div className="cv-title2">Honest counsel, even when uncomfortable</div>
                <p className="cv-body2">
                  Including when we are not the right fit, an idea is not ready, or an engagement
                  should end early.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ background: "var(--ink)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 65% at 50% 50%,rgba(43,92,138,.05) 0%,transparent 60%)", pointerEvents: "none" }}
        />
        <div className="section-label center fade-up">Start the Conversation</div>
        <h2 className="fade-up" style={{ maxWidth: "560px", margin: ".8rem auto 1rem" }}>
          Ready to work
          <br />
          <em>with the founders?</em>
        </h2>
        <p
          className="fade-up"
          style={{ maxWidth: "460px", margin: "0 auto 2.2rem", fontSize: ".9rem", fontWeight: 300, color: "rgba(244,241,236,.5)", lineHeight: 1.75, position: "relative" }}
        >
          A founding principal reads every inbound. We respond within 48 hours with an honest read
          on fit — including when we are not the right choice.
        </p>
        <div className="cta-row fade-up">
          <Link className="cr-card" href="/contact">
            <div className="cr-lbl">Free · 30 Minutes</div>
            <div className="cr-t">Discovery Call</div>
            <p className="cr-d">Honest read on fit, model, and timeline. No pitch.</p>
            <div className="cr-a">Book a call →</div>
          </Link>
          <Link className="cr-card" href="/how-we-work">
            <div className="cr-lbl">Read First</div>
            <div className="cr-t">How We Work</div>
            <p className="cr-d">Our methodology, process, and what to expect.</p>
            <div className="cr-a">Read the methodology →</div>
          </Link>
          <a className="cr-card" href="mailto:partners@th3tag.com">
            <div className="cr-lbl">Direct</div>
            <div className="cr-t">Email the Principals</div>
            <p className="cr-d">partners@th3tag.com — read personally.</p>
            <div className="cr-a">partners@th3tag.com →</div>
          </a>
        </div>
      </section>
    </>
  );
}
