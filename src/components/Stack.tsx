"use client"

import { useEffect, useRef } from "react"
import { Code2, Layout, Brain, Server } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { site } from "@/config"

gsap.registerPlugin(ScrollTrigger)

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 size={14} />,
  Frameworks: <Layout size={14} />,
  "Data & AI": <Brain size={14} />,
  Infrastructure: <Server size={14} />,
}

export function Stack() {
  const ref = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".skill-card")
      const bars = gridRef.current?.querySelectorAll(".skill-bar-fill")
      if (!cards?.length) return

      gsap.set(cards, { opacity: 0, y: 30 })
      if (bars?.length) gsap.set(bars, { width: "0%" })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      })

      tl.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      })

      if (bars?.length) {
        tl.to(bars, {
          width: (i, el) => el.getAttribute("data-width") || "0%",
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.04,
        }, "-=0.4")
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="section" ref={ref} aria-label="Skills and technologies">
      <div className="section-header">
        <div className="section-label">
          <span className="section-label-line" aria-hidden="true" />
          <span className="section-label-text">Skills</span>
          <span className="section-label-line" aria-hidden="true" />
        </div>
        <h2 className="section-title">Tools of the trade.</h2>
        <p className="section-subtitle">
          Technologies I use daily. Hover any card for details.
        </p>
      </div>

      <div ref={gridRef} className="skills-grid">
        {site.stack.map((cat) => (
          <div key={cat.category} className="skill-card" style={{ opacity: 0 }}>
            <div className="skill-card-header">
              <span className="skill-card-icon" aria-hidden="true">
                {categoryIcons[cat.category]}
              </span>
              <span className="skill-card-category">{cat.category}</span>
            </div>
            <div className="skill-items">
              {cat.items.map((item) => (
                <div key={item.name} className="skill-item">
                  <div className="skill-item-header">
                    <span className="skill-item-name">{item.name}</span>
                    <span className="skill-item-level">{item.level}%</span>
                  </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        data-width={`${item.level}%`}
                        style={{ width: "0%" }}
                      />
                    </div>
                  <span className="skill-item-desc">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
