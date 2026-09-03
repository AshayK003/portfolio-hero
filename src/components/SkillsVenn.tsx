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

            {/* Portrait in center */}
            <div className="venn-portrait">
              {/* Use Next Image if available, fallback to img */}
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
