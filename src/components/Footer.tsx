"use client"
import { ArrowUp } from "lucide-react"
import { site } from "@/config"

export function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>{site.name}</div>
      <div className="footer-links">
        {site.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-muted)" }}>© {new Date().getFullYear()} {site.name.toUpperCase()}</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="back-to-top" aria-label="Back to top">
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}
