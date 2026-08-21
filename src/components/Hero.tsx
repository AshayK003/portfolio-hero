"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-stage">
        {/* Center portrait — contained, not full-bleed, so text has paper gutters */}
        <div className="hero-portrait-frame">
          <Image
            src="/hero-portrait.png"
            alt="Ashay Kushwaha — Systems Builder"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 620px"
            className="hero-portrait"
          />
        </div>

        {/* Text overlays — positioned in the paper gutters around the portrait */}
        <div className="hero-pillars">
          SYSTEMS
          <br />
          EVIDENCE
          <br />
          OPEN
          <br />
          IMPACT
        </div>

        <div className="hero-headline-wrap">
          <div className="hero-label">Welcome,</div>
          <h1 className="hero-title">
            I am a <strong>Passionate</strong>
            <br />
            Open Source Developer
          </h1>
        </div>

        <div className="hero-bottom-left">
          <div className="hero-korean" lang="ko">
            사랑, 자유, 관능
            <br />
            예술에 미치다
          </div>
          <div className="hero-meta">
            OPEN SOURCE
            <br />
            DEVELOPER /<br />
            PROJECT PORTFOLIO
          </div>
        </div>

        <div className="hero-bottom-right">
          <div className="hero-links">
            <div className="hero-links-title">Project Links</div>
            <a href="#projects">
              BreachAlpha — breach impact <ArrowRight size={12} />
            </a>
            <a href="#projects">
              NSE Risk Scanner — VaR / Monte Carlo <ArrowRight size={12} />
            </a>
            <a href="#projects">
              NSE Sentiment — live price + news NLP <ArrowRight size={12} />
            </a>
          </div>
          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">
              See My Work <ArrowRight size={14} />
            </a>
            <a href="#about" className="btn-ghost">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
