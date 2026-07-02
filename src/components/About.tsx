"use client"

import { useEffect, useRef } from "react"
import { Zap, Link2, Globe, Target } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { site } from "@/config"

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const strengthsRef = useRef<HTMLDivElement>(null)
  const philosophyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.querySelectorAll(".reveal-up"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        )
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll(".stat-card"),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          }
        )
      }

      if (strengthsRef.current) {
        gsap.fromTo(
          strengthsRef.current.querySelectorAll(".strength-chip"),
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: strengthsRef.current, start: "top 80%" },
          }
        )
      }

      if (philosophyRef.current) {
        gsap.fromTo(
          philosophyRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: philosophyRef.current, start: "top 80%" },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="section" ref={sectionRef} aria-label="About me">
      <div className="section-header">
        <div className="section-label">
          <span className="section-label-line" aria-hidden="true" />
          <span className="section-label-text">About</span>
          <span className="section-label-line" aria-hidden="true" />
        </div>
        <h2 className="section-title">
          Data meets&nbsp;
          <span style={{ color: "#38bdf8" }}>impact</span>.
        </h2>
      </div>

      <div className="about-grid">
        <div ref={contentRef}>
          <p className="about-summary reveal-up">{site.about.summary}</p>

          <div ref={statsRef} className="stats-row">
            {site.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div ref={strengthsRef} className="strengths-section">
            <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--color-smoke)", marginBottom: 16, letterSpacing: "-0.01em" }}>
              What I bring
            </h3>
            <div className="strengths-grid">
              {site.about.strengths.map((strength, i) => (
                <div key={strength} className="strength-chip" style={{ opacity: 0 }}>
                  <span className="strength-icon" aria-hidden="true">
                    {i === 0 && <Zap size={14} />}
                    {i === 1 && <Link2 size={14} />}
                    {i === 2 && <Globe size={14} />}
                    {i === 3 && <Target size={14} />}
                  </span>
                  {strength}
                </div>
              ))}
            </div>
          </div>

          <div ref={philosophyRef} className="about-philosophy" style={{ opacity: 0 }}>
            <h3 className="philosophy-title">{site.about.philosophy.title}</h3>
            <p className="philosophy-text">{site.about.philosophy.body}</p>
            <p className="philosophy-text" style={{ marginTop: 12 }}>{site.about.philosophy.body2}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
