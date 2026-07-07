"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { site } from "@/config"
import { useScrollManager, useMousePosition } from "@/three/ScrollManager"

gsap.registerPlugin(ScrollTrigger)

const Scene = dynamic(() => import("@/three/Scene").then((m) => m.Scene), {
  ssr: false,
  loading: () => null,
})

function Headline({ text, delay, highlights }: { text: string; delay: number; highlights?: Record<string, string> }) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const lines = el.querySelectorAll(".headline-line-child")
    gsap.set(lines, { opacity: 0, y: 30 })
    gsap.to(lines, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.2,
      delay,
    })
  }, [text, delay])

  const lines = text.split("\n")

  const renderLine = (line: string) => {
    if (!highlights) return line
    const words = line.split(/(\s+)/)
    return words.map((word, i) => {
      const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase()
      const color = highlights[clean]
      return color ? (
        <span key={i} style={{ color }}>{word}</span>
      ) : (
        word
      )
    })
  }

  return (
    <h1 ref={ref} className="hero-headline" aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, i) => (
        <span key={i} className="headline-line" style={{ display: "block", overflow: "hidden" }}>
          <span className="headline-line-child" style={{ display: "block" }}>
            {renderLine(line)}
          </span>
        </span>
      ))}
    </h1>
  )
}

export function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const scrollProgress = useScrollManager()
  const mouse = useMousePosition()
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)")
    const check = () => setCanRender(mql.matches && !rm.matches)
    check()
    mql.addEventListener("change", check)
    rm.addEventListener("change", check)
    return () => {
      mql.removeEventListener("change", check)
      rm.removeEventListener("change", check)
    }
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      ;[badgeRef, subRef, ctaRef, scrollRef].forEach((r) => {
        if (r.current) r.current.style.opacity = "1"
      })
      return
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(
      badgeRef.current,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.2 }
    )

    if (subRef.current) {
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.2"
      )
    }

    tl.fromTo(
      ctaRef.current,
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.6"
    )

    tl.fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.2"
    )

    if (contentRef.current && sectionRef.current) {
      gsap.to(contentRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      })
    }

    // Fade hero out on scroll — less aggressive (particles stay ambient)
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        opacity: 0.5,
        scale: 0.98,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero" aria-label="Introduction">
      {/* Three.js scene — dynamically loaded, gated on desktop + motion preference */}
      {canRender && <Scene mouse={mouse} scrollProgress={scrollProgress} />}

      <div ref={contentRef} className="hero-content">
        <div ref={badgeRef} className="hero-badge" style={{ opacity: 0 }}>
          <span className="hero-badge-dot" />
          <span className="hero-badge-text">{site.availability}</span>
        </div>

        <Headline text={site.headline} delay={0.4} highlights={{ systems: "#38bdf8", problems: "#d4d4d4" }} />

        <p ref={subRef} className="hero-subheading" style={{ opacity: 0 }}>
          {site.subheading}
        </p>

        <div ref={ctaRef} className="hero-cta" style={{ opacity: 0 }}>
          <MagneticElement strength={0.3}>
            <a href="#projects" className="btn-primary" aria-label="View selected works">
              {site.cta.primary}
              <ArrowRight size={14} />
            </a>
          </MagneticElement>
          <MagneticElement strength={0.3}>
            <a href="#about" className="btn-outlined" aria-label="Learn about me">
              {site.cta.secondary}
            </a>
          </MagneticElement>
        </div>
      </div>

      <div ref={scrollRef} className="hero-scroll" style={{ opacity: 0 }} aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}

function MagneticElement({
  children,
  strength = 0.3,
}: {
  children: React.ReactNode
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return
    if ("ontouchstart" in window) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY

      gsap.to(el, {
        x: deltaX * strength,
        y: deltaY * strength,
        duration: 0.4,
        ease: "power3.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      })
    }

    el.addEventListener("mousemove", handleMouseMove)
    el.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      el.removeEventListener("mousemove", handleMouseMove)
      el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  return <div ref={ref} style={{ display: "inline-flex" }}>{children}</div>
}
