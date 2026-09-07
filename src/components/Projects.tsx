"use client"
import { useState } from "react"
import { ArrowRight, TrendingUp, Map, Shield, BarChart3, Globe, Database, FileText, Search, Lightbulb, Code2 } from "lucide-react"
import { site } from "@/config"
import { RevealGroup } from "./RevealGroup"

const projectIcons: Record<string, React.ReactNode> = {
  "NSE Sentiment Analyzer": <TrendingUp size={18} />,
  KarmaMap: <Map size={18} />,
  CausalLens: <BarChart3 size={18} />,
  DeltaGrid: <Globe size={18} />,
  DataSmith: <Database size={18} />,
  "NSE Portfolio Risk Scanner": <BarChart3 size={18} />,
  "pdf-studio": <FileText size={18} />,
  PriceSentinel: <Search size={18} />,
  "Hackathon Problems": <Lightbulb size={18} />,
  "FII/DII Dashboard": <TrendingUp size={18} />,
}

export function Projects() {
  const featured = site.projects.filter((p) => p.featured)
  const rest = site.projects.filter((p) => !p.featured)
  const [showAll, setShowAll] = useState(false)
  const hero = featured[0]
  const rows: (typeof site.projects)[number][] = [...featured.slice(1), ...rest.slice(0, 3)]

  return (
    <section id="projects" className="section" aria-label="Selected works">
      <div className="section-header">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">Shipped, tested, open-source.</h2>
        <p className="section-subtitle">
          Open-source, MIT-licensed. Each project ships as a complete, production-ready tool — not a demo.
        </p>
      </div>

      {hero && (
        <a
          href={hero.url}
          target="_blank"
          rel="noopener noreferrer"
          className="projects-feature"
          aria-label={`${hero.name} — ${hero.tagline}`}
        >
          <div className="feature-content">
            <div className="section-label" style={{ marginBottom: 8 }}>
              Featured — {hero.tags.slice(0, 2).join(" · ")}
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 2 }}>{hero.name}</h3>
            <p style={{ fontSize: 15, color: "rgba(10,10,10,0.6)", marginTop: 4 }}>{hero.tagline}</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 12, color: "rgba(10,10,10,0.72)" }}>{hero.description}</p>
            <div className="feature-metrics" style={{ marginTop: 16 }}>
              {hero.tags.map((t) => (
                <span key={t} className="metric-pill">
                  {t}
                </span>
              ))}
            </div>
            <div className="feature-cta" style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-crimson)", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>
              View on GitHub <ArrowRight size={14} />
            </div>
          </div>
          <div className="feature-preview feature-poster" aria-hidden="true">
            <div className="feature-poster-icon">{projectIcons[hero.name] || <Code2 size={28} />}</div>
            <div className="feature-poster-name">{hero.name}</div>
            <div className="feature-poster-tag">{hero.tagline}</div>
            <div className="feature-poster-tags">
              {hero.tags.map((t) => (
                <span key={t} className="metric-pill">{t}</span>
              ))}
            </div>
          </div>
        </a>
      )}

      <RevealGroup className="repo-list">
        {rows.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-row"
            data-reveal
            aria-label={`View ${project.name} on GitHub`}
          >
            <span className="repo-icon" aria-hidden="true">
              {projectIcons[project.name] || <Code2 size={18} />}
            </span>
            <span className="repo-main">
              <span className="repo-name-row">
                <span className="repo-name">{project.name}</span>
                <span className="repo-tagline">{project.tagline}</span>
              </span>
              <span className="repo-desc">{project.description}</span>
              <span className="repo-meta">
                <span className="repo-lang">
                  <span className="lang-dot" style={{ background: project.langColor }} />
                  {project.lang}
                </span>
                {project.tests && <span>{project.tests}</span>}
                {project.license && <span>{project.license}</span>}
              </span>
            </span>
            <ArrowRight size={15} className="repo-arrow" aria-hidden="true" />
          </a>
        ))}
      </RevealGroup>

      {!showAll ? (
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button onClick={() => setShowAll(true)} className="btn-ghost">
            View all {site.projects.length} systems on GitHub <ArrowRight size={14} />
          </button>
        </div>
      ) : (
        <RevealGroup className="repo-list" style={{ marginTop: 16 }}>
          {rest.slice(3).map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-row"
              data-reveal
              aria-label={`View ${project.name} on GitHub`}
            >
              <span className="repo-icon" aria-hidden="true">
                {projectIcons[project.name] || <Code2 size={18} />}
              </span>
              <span className="repo-main">
                <span className="repo-name-row">
                  <span className="repo-name">{project.name}</span>
                  <span className="repo-tagline">{project.tagline}</span>
                </span>
                <span className="repo-desc">{project.description}</span>
                <span className="repo-meta">
                  <span className="repo-lang">
                    <span className="lang-dot" style={{ background: project.langColor }} />
                    {project.lang}
                  </span>
                  {project.tests && <span>{project.tests}</span>}
                  {project.license && <span>{project.license}</span>}
                </span>
              </span>
              <ArrowRight size={15} className="repo-arrow" aria-hidden="true" />
            </a>
          ))}
        </RevealGroup>
      )}
    </section>
  )
}