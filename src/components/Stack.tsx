"use client"
import { site } from "@/config"

export function Stack() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="section-header">
        <div className="section-label">Stack</div>
        <h2 className="section-title">Tools of the trade.</h2>
        <p className="section-subtitle">The instruments behind the systems — no percentages, just proof.</p>
      </div>

      <div className="skills-grid">
        {site.stack.map((cat) => (
          <div key={cat.category} className="skill-card">
            <div className="skill-card-header">{cat.category}</div>
            {cat.items.map((item) => (
              <div key={item.name} className="skill-item">
                <div className="skill-item-name">{item.name}</div>
                <div className="skill-item-desc">{item.description}</div>
                <div className="skill-pills">
                  <span className="skill-pill">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
