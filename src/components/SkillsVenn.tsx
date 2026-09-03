"use client"

import { site } from "@/config"

type SkillsVennProps = {
  profileImage?: string
  skills?: { top: string; left: string; right: string; bottom: string }
  className?: string
  children?: React.ReactNode
}

const DEFAULT_IMAGE = "/hero-portrait.png"

export function SkillsVenn({
  profileImage = DEFAULT_IMAGE,
  skills = {
    top: "Full-Stack Engineering",
    left: "Data & AI",
    right: "Open Source",
    bottom: "Applied Impact",
  },
  className,
  children,
}: SkillsVennProps) {
  return (
    <div>
      <section
        aria-label="Areas of focus"
        className={`section ${className || ""}`}
      >
        <div
          className="venn-container"
          style={{
            position: "relative",
            margin: "0 auto",
            width: "100%",
            maxWidth: 380,
          }}
        >
          <div style={{ position: "relative", aspectRatio: "1 / 1", width: "100%" }}>
            {/* Four circles */}
            <div aria-hidden className="venn-circle venn-top" />
            <div aria-hidden className="venn-circle venn-left" />
            <div aria-hidden className="venn-circle venn-right" />
            <div aria-hidden className="venn-circle venn-bottom" />

            {/* Labels */}
            <span className="venn-label vnn-top">{skills.top}</span>
            <span className="venn-label vnn-left">{skills.left}</span>
            <span className="venn-label vnn-right">{skills.right}</span>
            <span className="venn-label vnn-bottom">{skills.bottom}</span>

            {/* Portrait in center — shifted right slightly */}
            <div
              className="venn-portrait"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 64,
                height: 64,
                transform: "translate(-40%, -50%)",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid var(--color-paper)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src={profileImage}
                alt={site.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        {children}
      </section>
    </div>
  )
}
