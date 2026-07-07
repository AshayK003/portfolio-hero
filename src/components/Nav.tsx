"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import gsap from "gsap"
import { site } from "@/config"

export function Nav() {
  const ref = useRef<HTMLElement>(null)
  const lastScroll = useRef(0)
  const progressRef = useRef<HTMLDivElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const navHeight = 80
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
    )
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const handleScroll = () => {
      const current = window.scrollY
      const direction = current > lastScroll.current ? "down" : "up"
      const nav = ref.current

      if (!nav) return

      if (current < 100) {
        gsap.to(nav, { y: 0, duration: 0.3, ease: "power2.out" })
      } else if (direction === "down") {
        gsap.to(nav, { y: -100, duration: 0.3, ease: "power2.in" })
      } else {
        gsap.to(nav, { y: 0, duration: 0.3, ease: "power2.out" })
      }

      lastScroll.current = current

      if (progressRef.current && !prefersReducedMotion) {
        const scrollTop = current
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        progressRef.current.style.width = `${progress}%`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav
        ref={ref}
        className="nav"
        style={{ opacity: 0 }}
        aria-label="Main navigation"
      >
        <div className="nav-left">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="nav-wordmark"
            aria-label="Ashay Kushwaha — Home"
          >
            {site.name}
          </button>
        </div>

        <div className="nav-links" role="list">
          {site.nav.map((item) => {
            const id = item.toLowerCase()
            const isContact = id === "contact"
            return (
              <button
                key={item}
                onClick={() => scrollTo(id)}
                className={`nav-link${activeSection === id ? " active" : ""}${isContact ? " nav-link-cta" : ""}`}
                role="listitem"
                aria-current={activeSection === id ? "true" : undefined}
              >
                {item}
                {isContact && <ArrowRight size={12} />}
              </button>
            )
          })}
        </div>

        <div className="nav-right">
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={18} />
          </button>
        </div>

        <div ref={progressRef} className="nav-progress" style={{ width: "0%" }} aria-hidden="true" />
      </nav>

      <div
        className={`mobile-overlay${mobileOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#f3f3f3",
            }}
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        {site.nav.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="mobile-nav-link"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  )
}
