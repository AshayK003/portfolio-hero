"use client"

import { useEffect, useRef } from "react"
import { TrendingUp, Map, Shield, BarChart3, Globe, Sparkles, ArrowRight, LineChart } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { site } from "@/config"

gsap.registerPlugin(ScrollTrigger)

const projectIcons: Record<string, React.ReactNode> = {
  "NSE Sentiment": <TrendingUp size={18} />,
  KarmaMap: <Map size={18} />,
  BreachAlpha: <Shield size={18} />,
  CausalLens: <BarChart3 size={18} />,
  DeltaGrid: <Globe size={18} />,
  PACE: <Sparkles size={18} />,
  "NSE Risk Scanner": <LineChart size={18} />,
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".project-card")
      if (!cards?.length) return

      gsap.set(cards, {
        y: 60,
        opacity: 0,
      })

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="section" ref={ref} aria-label="Selected works">
      <div className="section-header">
        <div className="section-label">
          <span className="section-label-line" aria-hidden="true" />
          <span className="section-label-text">Projects</span>
          <span className="section-label-line" aria-hidden="true" />
        </div>
        <h2 className="section-title">Systems that solve real problems.</h2>
        <p className="section-subtitle">
          Open-source, MIT-licensed, built to solve real problems. Each project ships as a
          complete, production-ready tool.
        </p>
      </div>

      <div ref={gridRef} className="projects-grid">
        {site.projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card${project.featured ? " featured" : ""}`}
            aria-label={`View ${project.name} on GitHub — ${project.tagline}`}
          >
            <div className="project-card-gradient" style={{ background: project.gradient?.replace("/20", "/10") || "transparent" }} />
            <div className="project-icon" aria-hidden="true">
              {projectIcons[project.name] || <Sparkles size={18} />}
            </div>
            <div className="project-body">
              <div className="project-title">{project.name}</div>
              <div className="project-tagline">{project.tagline}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-footer">
                <span className="project-link">
                  View on GitHub
                  <ArrowRight size={13} className="project-link-arrow" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
