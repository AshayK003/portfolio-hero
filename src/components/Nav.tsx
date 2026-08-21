"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { site } from "@/config"

export function Nav() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("")

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const pct = (window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (progressRef.current) progressRef.current.style.width = `${pct}%`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav className="nav" aria-label="Main navigation">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="nav-wordmark">
          {site.name}
        </button>

        <div className="nav-links" role="list">
          {site.nav.map((item) => {
            const id = item.toLowerCase()
            return (
              <button
                key={item}
                onClick={() => scrollTo(id)}
                className={`nav-link${active === id ? " active" : ""}`}
                role="listitem"
                aria-current={active === id ? "true" : undefined}
              >
                {item}
              </button>
            )
          })}
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={16} />
        </button>

        <div ref={progressRef} className="nav-progress" style={{ width: "0%" }} aria-hidden="true" />
      </nav>

      <div className={`mobile-overlay${mobileOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button
          onClick={() => setMobileOpen(false)}
          style={{ position: "absolute", top: 20, right: 20, width: 40, height: 40, display: "grid", placeItems: "center", border: "1px solid var(--color-ink-faint)", borderRadius: 8 }}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
        {site.nav.map((item) => (
          <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="mobile-nav-link">
            {item}
          </button>
        ))}
      </div>
    </>
  )
}
