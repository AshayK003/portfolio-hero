"use client"

import { useEffect, useRef } from "react"
import { Send, ArrowRight, GitBranch, ExternalLink, Briefcase, BookOpen } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { site } from "@/config"

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        )
      }

      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <GitBranch size={15} />,
    X: <ExternalLink size={15} />,
    LinkedIn: <Briefcase size={15} />,
    Medium: <BookOpen size={15} />,
  }

  return (
    <section id="contact" className="section" ref={sectionRef} aria-label="Contact">
      <div className="section-header">
        <div className="section-label">
          <span className="section-label-line" aria-hidden="true" />
          <span className="section-label-text">Contact</span>
          <span className="section-label-line" aria-hidden="true" />
        </div>
        <h2 className="section-title">Let&apos;s build something together.</h2>
        <p className="section-subtitle">
          Open to collaborations, research partnerships, and conversations at the
          intersection of data, security, and social impact.
        </p>
      </div>

      <div className="contact-section">
        <div ref={leftRef} style={{ opacity: 0 }}>
          <h3 className="contact-heading">
            Find me&nbsp;
            <span style={{ color: "var(--color-accent)" }}>online</span>.
          </h3>
          <p className="contact-text">
            All my work is open-source and MIT-licensed. I&apos;m most active on
            GitHub and LinkedIn — pick your platform.
          </p>
          <div className="contact-links">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label={`Visit Ashay on ${social.label}`}
              >
                <span className="contact-link-icon" aria-hidden="true">
                  {socialIcons[social.label]}
                </span>
                <span className="contact-link-label">{social.label}</span>
                <ArrowRight size={14} className="contact-link-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div ref={rightRef} style={{ opacity: 0 }}>
          <div className="contact-action-card">
            <div className="contact-action-icon" aria-hidden="true">
              <Send size={22} />
            </div>
            <h3 className="contact-action-title">Let&apos;s talk.</h3>
            <p className="contact-action-text">
              Interesting project, research collaboration, or just want to geek out about
              causal inference? I&apos;m here for it.
            </p>
            <a
              href={site.socials.find((s) => s.label === "LinkedIn")?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Connect on LinkedIn"
            >
              Connect on LinkedIn
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
