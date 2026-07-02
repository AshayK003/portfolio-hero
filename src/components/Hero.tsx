"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { site } from "@/config"

gsap.registerPlugin(ScrollTrigger)

function VantaNet() {
  const containerRef = useRef<HTMLDivElement>(null)
  const loadedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || loadedRef.current) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    loadedRef.current = true

    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 2000))
    let mounted = true

    const isMobile = window.innerWidth < 768

    idleCallback(() => {
      import("three")
        .then((THREE) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(window as any).THREE = THREE
          return import("vanta/dist/vanta.net.min")
        })
        .then((mod) => {
          if (!mounted || !containerRef.current) return
          const VantaNet = mod.default
          VantaNet({
            el: containerRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3fbdff,
            spacing: isMobile ? 40.0 : 20.0,
            backgroundColor: 0x0a0a0a,
          })
          if (containerRef.current) {
            containerRef.current.style.opacity = "1"
          }
        })
    })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0, transition: "opacity 0.8s ease" }}
      aria-hidden="true"
    />
  )
}

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
  const vantaRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

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

    if (vantaRef.current && sectionRef.current) {
      gsap.to(vantaRef.current, {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="hero" aria-label="Introduction">
      <VantaNet />

      <div ref={vantaRef} className="hero-content">
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
