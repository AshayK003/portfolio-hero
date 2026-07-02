"use client"

import { useEffect, useRef } from "react"
import { ArrowUp } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { site } from "@/config"

gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 95%" } }
      )
    })

    return () => ctx.revert()
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={ref} className="footer" style={{ opacity: 0 }} aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-name">{site.name}</span>

        </div>

        <div className="footer-links" role="list" aria-label="Social links">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              role="listitem"
              aria-label={`Visit Ashay on ${social.label}`}
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="footer-right">
          <span className="footer-copy">&copy; {new Date().getFullYear()} {site.name.toUpperCase()}</span>
          <button
            onClick={handleBackToTop}
            className="back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
