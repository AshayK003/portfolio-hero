"use client"
import { site } from "@/config"

export function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <div className="section-header">
        <div className="section-label">About</div>
        <h2 className="section-title">
          Data meets <span style={{ color: "var(--color-crimson)" }}>impact.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div>
          <p className="about-summary">{site.about.summary}</p>
          <div className="stats-row">
            {site.stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="philosophy">
            <div className="philosophy-title">{site.about.philosophy.title}</div>
            <p className="philosophy-text">{site.about.philosophy.body}</p>
            <p className="philosophy-text" style={{ marginTop: 8 }}>
              {site.about.philosophy.body2}
            </p>
          </div>
        </div>

        <div>
          <div style={{ marginBottom: 14, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-muted)" }}>
            What I bring
          </div>
          <div>
            {site.about.strengths.map((s) => (
              <span key={s} className="strength-chip">
                {s}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 18, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-ink-muted)", marginBottom: 8 }}>
            Interests
          </div>
          <div>
            {site.about.interests.map((i) => (
              <span key={i} className="interest-chip">
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
