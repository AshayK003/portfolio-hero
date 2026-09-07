"use client"
import { site } from "@/config"
import { RevealGroup } from "./RevealGroup"

export function Stack() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="section-header">
        <div className="section-label">Stack</div>
        <h2 className="section-title">What I build with.</h2>
        <p className="section-subtitle">The instruments behind the systems — no percentages, just proof.</p>
      </div>

      <RevealGroup className="skills-grid">
        {site.stack.map((cat) => (
          <div key={cat.category} className="skill-card" data-reveal>
            <div className="skill-card-header">{cat.category}</div>
            {cat.items.map((item) => (
              <div key={item.name} className="skill-line">
                <div className="skill-line-name">{item.name}</div>
                <div className="skill-line-desc">{item.description}</div>
              </div>
            ))}
          </div>
        ))}
      </RevealGroup>
    </section>
  )
}
