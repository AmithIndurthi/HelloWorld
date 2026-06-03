import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="hero-pg">
        <div className="hero-bg-grad" />
        <div className="hero-grid-bg" />
        <div className="hero-left">
          <div className="hero-eyebrow">TheTAG Ventures &amp; Partners</div>
          <h1 className="hero-headline">
            Human-centered
            <br />
            transformation
            <br />
            for the{" "}
            <em>
              age of
              <br />
              intelligent systems.
            </em>
          </h1>
          <p className="hero-sub">
            TheTAG helps leaders modernize enterprise technology, shape AI strategy, and build
            systems people trust — through one integrated framework:{" "}
            <em style={{ color: "var(--paper)" }}>Heart</em> for human truth,{" "}
            <em style={{ color: "var(--paper)" }}>Mind</em> for strategic clarity, and{" "}
            <em style={{ color: "var(--paper)" }}>Technology</em> for sovereign execution.
          </p>
          <div className="hero-actions">
            <Link className="btn-p" href="/contact">
              Start a Conversation
            </Link>
            <Link className="btn-g" href="/framework">
              Read the framework →
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-stat-panel">
            <div className="hsp-item">
              <div className="hsp-num">3</div>
              <div className="hsp-label">Founder-led practice areas</div>
              <div className="hsp-sub">Focused</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">1</div>
              <div className="hsp-label">Integrated framework — Heart, Mind, Technology</div>
              <div className="hsp-sub">Methodology</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">16wk</div>
              <div className="hsp-label">Typical engagement arc, brief to handover</div>
              <div className="hsp-sub">Engagement Model</div>
            </div>
            <div className="hsp-item">
              <div className="hsp-num">48h</div>
              <div className="hsp-label">Response on every qualified inbound</div>
              <div className="hsp-sub">Standard</div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">Scroll to explore</div>
      </section>

      {/* 2. FRAMEWORK SUMMARY */}
      <section className="cv-section sec" style={{ background: "var(--ash)" }}>
        <div style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 3.5rem" }} className="fade-up">
          <div className="section-label center">The Framework</div>
          <h2>
            One integrated
            <br />
            <em>way of thinking.</em>
          </h2>
          <p style={{ marginTop: "1.1rem", fontSize: ".94rem", fontWeight: 300, color: "rgba(237,232,223,.58)", lineHeight: 1.85 }}>
            Applied in this order, every engagement, every practice. Each is necessary. None is
            sufficient alone.
          </p>
        </div>
        <div className="cv-grid">
          <div className="cv-card cv-h fade-up">
            <div className="cv-num">01</div>
            <div className="cv-n">01 — Heart</div>
            <div className="cv-title">Human Truth</div>
            <div className="cv-sub">Empathy · Ethics</div>
            <p className="cv-desc">
              Every system serves humans. We begin by understanding the people who will live inside
              what we build — their pressures, ambitions, and the failure modes we should design
              around.
            </p>
          </div>
          <div className="cv-card cv-m fade-up">
            <div className="cv-num">02</div>
            <div className="cv-n">02 — Mind</div>
            <div className="cv-title">Strategic Clarity</div>
            <div className="cv-sub">Intelligence · Discipline</div>
            <p className="cv-desc">
              Findings become a written plan with defined outcomes, investment levels, and explicit
              trade-offs. Nothing is built until both sides have signed the same document.
            </p>
          </div>
          <div className="cv-card cv-t fade-up">
            <div className="cv-num">03</div>
            <div className="cv-n">03 — Technology</div>
            <div className="cv-title">Sovereign Execution</div>
            <div className="cv-sub">Architecture · Independence</div>
            <p className="cv-desc">
              Architecture and build for your independence — designed to run without us, documented
              for your team, free of vendor traps that cost you optionality later.
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "3.5rem" }} className="fade-up">
          <Link className="btn-s" href="/framework">
            Read the full framework →
          </Link>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="sec" style={{ background: "var(--ink)" }} id="services">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "end", marginBottom: "3.5rem" }}
          className="fade-up"
        >
          <div>
            <div className="section-label">Three Practices</div>
            <h2>
              What we
              <br />
              <em>actually do.</em>
            </h2>
          </div>
          <p style={{ fontSize: ".93rem", fontWeight: 300, color: "rgba(237,232,223,.55)", lineHeight: 1.85 }}>
            Three deliberately focused practices, each led by a founding principal. One framework,
            three angles of approach, one engagement model.
          </p>
        </div>
        <div className="svc-grid">
          <Link className="sc" href="/technology-advisory">
            <span className="sc-tag t-t">Tech-Led · Amith</span>
            <div className="sc-title">Technology Advisory &amp; Consulting</div>
            <p className="sc-desc">
              Enterprise IT modernization, AI strategy and governance, cloud and vendor
              architecture, security and compliance.
            </p>
            <span className="sc-link">Explore the practice →</span>
          </Link>
          <Link className="sc" href="/strategic-ventures">
            <span className="sc-tag t-a">All Pillars · Kiran</span>
            <div className="sc-title">Strategic Ventures &amp; Partnerships</div>
            <p className="sc-desc">
              Operator-side partnership for scaling ventures — operations design, supply chain,
              partnership structuring, fractional COO.
            </p>
            <span className="sc-link">Explore the practice →</span>
          </Link>
          <Link className="sc" href="/design-studio">
            <span className="sc-tag t-m">Mind-Led · Manasa</span>
            <div className="sc-title">Design Studio</div>
            <p className="sc-desc">
              Brand, product, and experience design — with the systems-thinking and
              quality-engineering discipline most studios lack.
            </p>
            <span className="sc-link">Explore the practice →</span>
          </Link>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section className="sec" style={{ background: "var(--ash)", borderTop: "1px solid rgba(196,169,103,.05)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr", gap: "5rem", alignItems: "start" }} className="fade-up">
          <div>
            <div className="section-label">The Process</div>
            <h2>
              How we
              <br />
              <em>work.</em>
            </h2>
            <p style={{ fontSize: ".9rem", fontWeight: 300, color: "rgba(237,232,223,.5)", lineHeight: 1.85, marginTop: "1.1rem" }}>
              Four phases. The work changes by practice. The order does not.
            </p>
            <Link className="btn-g" href="/how-we-work" style={{ marginTop: "1.6rem", display: "inline-flex" }}>
              Full methodology →
            </Link>
          </div>
          <div>
            <div className="proc4">
              <div className="p4s">
                <div className="p4d">01</div>
                <div className="p4stg">Heart · Wks 1–2</div>
                <div className="p4t">Discovery</div>
                <p className="p4b">
                  Listening first — understanding people and pressures before looking at a single
                  system.
                </p>
              </div>
              <div className="p4s">
                <div className="p4d">02</div>
                <div className="p4stg">Mind · Wks 3–4</div>
                <div className="p4t">Strategy</div>
                <p className="p4b">
                  A written plan with defined outcomes and explicit trade-offs. Both sides sign
                  before anything is built.
                </p>
              </div>
              <div className="p4s">
                <div className="p4d">03</div>
                <div className="p4stg">Tech · Wks 5–12</div>
                <div className="p4t">Build</div>
                <p className="p4b">
                  Architecture and hands-on build with your team. Working demos, weekly updates, no
                  surprises.
                </p>
              </div>
              <div className="p4s">
                <div className="p4d">04</div>
                <div className="p4stg">All · Wks 13–16</div>
                <div className="p4t">Handoff</div>
                <p className="p4b">
                  Complete documentation, training, and a free post-close window. Your team runs
                  what we built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPANION */}
      <section className="sec" style={{ background: "var(--ink)", borderTop: "1px solid rgba(196,169,103,.05)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "5rem", alignItems: "center" }} className="fade-up">
          <div>
            <div className="section-label">In-House Venture</div>
            <h2>
              Not just advisors.
              <br />
              <em>Builders too.</em>
            </h2>
            <p style={{ fontSize: ".94rem", fontWeight: 300, color: "rgba(237,232,223,.6)", lineHeight: 1.85, marginTop: "1.2rem" }}>
              The Well-being First AI Companion is our own venture — built around the principle that
              emotional support technology should serve the human, not the metric. We apply the same
              framework to our own hardest problem, and the lessons compound back into how we work
              with partners.
            </p>
            <Link className="btn-s" href="/contact?topic=companion-notify" style={{ marginTop: "1.8rem" }}>
              Notify me when ready →
            </Link>
          </div>
          <div>
            <div className="ai-card">
              <div className="ai-hdr">
                <span
                  style={{ fontFamily: "var(--mono)", fontSize: ".53rem", letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(184,84,84,.6)", display: "block", marginBottom: ".6rem" }}
                >
                  TheTAG In-House Venture
                </span>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.55rem", fontWeight: 400, color: "var(--paper)", lineHeight: 1.2 }}>
                  Well-being First{" "}
                  <em style={{ color: "#d97070", fontStyle: "italic", fontWeight: 400 }}>AI Companion</em>
                </h3>
              </div>
              <div className="ai-bdy">
                <div className="ai-meta">
                  <div className="ai-mi">
                    <span className="ai-ml">Stage</span>
                    <span className="ai-mv">Blueprint refinement · Initial design · MVP in development</span>
                  </div>
                  <div className="ai-mi">
                    <span className="ai-ml">Availability</span>
                    <span className="ai-mv">
                      Not yet — we will notify you when there is a working artifact to demonstrate
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact?topic=companion-notify"
                  style={{ fontFamily: "var(--mono)", fontSize: ".65rem", fontWeight: 500, letterSpacing: ".14em", textTransform: "uppercase", color: "#d97070", textDecoration: "none", borderBottom: "1px solid rgba(184,84,84,.3)", paddingBottom: "2px" }}
                >
                  Get notified when ready →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="sec" style={{ background: "var(--ash)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 70% at 50% 50%,rgba(196,169,103,.04) 0%,transparent 65%)", pointerEvents: "none" }}
        />
        <div className="section-label center fade-up">Start the Conversation</div>
        <h2 className="fade-up" style={{ maxWidth: "560px", margin: "1rem auto 1.3rem" }}>
          Three founders.
          <br />
          One <em>conversation.</em>
        </h2>
        <p
          className="fade-up"
          style={{ maxWidth: "480px", margin: "0 auto 2.5rem", fontSize: ".94rem", fontWeight: 300, color: "rgba(237,232,223,.55)", lineHeight: 1.85, position: "relative" }}
        >
          A founding principal reads every qualified inbound and responds within 48 hours. No
          assistant, no auto-reply, no intake sequence.
        </p>
        <div className="cta-row fade-up">
          <Link className="cr-card" href="/contact">
            <div className="cr-lbl">Free · 30 Minutes</div>
            <div className="cr-t">Discovery Call</div>
            <p className="cr-d">An honest read on fit, model, and timeline. No pitch — from either side.</p>
            <div className="cr-a">Book a call →</div>
          </Link>
          <Link className="cr-card" href="/contact?topic=diagnostic">
            <div className="cr-lbl">2–4 Week Sprint · Fixed Fee</div>
            <div className="cr-t">Diagnostic Engagement</div>
            <p className="cr-d">A scoped assessment of one domain. Findings and prioritized recommendations.</p>
            <div className="cr-a">Request a diagnostic →</div>
          </Link>
          <a className="cr-card" href="mailto:partners@th3tag.com">
            <div className="cr-lbl">Direct</div>
            <div className="cr-t">Email the Principals</div>
            <p className="cr-d">partners@th3tag.com — read by a founder, replied to personally.</p>
            <div className="cr-a">partners@th3tag.com →</div>
          </a>
        </div>
        <p className="honest-note fade-up">
          TheTAG is a new firm. Our first three engagements are at{" "}
          <Link href="/contact?topic=founding-partner">founding-partner pricing</Link> in exchange
          for naming permission after twelve months. References will appear here as those
          engagements close.
        </p>
      </section>
    </>
  );
}
