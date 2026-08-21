"use client"
import { ArrowRight, GitBranch, ExternalLink, Briefcase, BookOpen } from "lucide-react"
import { site } from "@/config"

const icons: Record<string, React.ReactNode> = {
  GitHub: <GitBranch size={15} />,
  X: <ExternalLink size={15} />,
  LinkedIn: <Briefcase size={15} />,
  Medium: <BookOpen size={15} />,
}

export function Contact() {
  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="section-header">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Let&apos;s build something together.</h2>
        <p className="section-subtitle">Open to collaborations, research partnerships, and conversations at the intersection of data, security, and social impact.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Find me <span style={{ color: "var(--color-crimson)" }}>online.</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(10,10,10,0.65)", marginTop: 8 }}>All my work is open-source and MIT-licensed. I&apos;m most active on GitHub and LinkedIn.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
            {site.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>{icons[s.label]}</span>
                <span style={{ fontWeight: 500, fontSize: 13 }}>{s.label}</span>
                <ArrowRight size={13} style={{ marginLeft: "auto" }} />
              </a>
            ))}
          </div>
        </div>

        <div className="contact-card" style={{ background: "var(--color-ink)", color: "var(--color-paper)", borderColor: "transparent" }}>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Let&apos;s talk.</div>
          <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.7, marginTop: 8 }}>Interesting project, research collab, or just want to geek out about causal inference? I&apos;m here for it.</p>
          <a href={site.socials.find((s) => s.label === "LinkedIn")?.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16, background: "var(--color-paper)", color: "var(--color-ink)" }}>
            Connect on LinkedIn <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
