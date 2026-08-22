"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-stage">
        <div className="hero-portrait-wrapper">
          <Image
            src="/hero-portrait.png"
            alt="Ashay Kushwaha — Systems Builder"
            width={1376}
            height={768}
            priority
            sizes="(max-width: 899px) 96vw, 1320px"
            className="hero-portrait"
          />
        </div>

        <div className="hero-glass hero-glass--pillars">
          SYSTEMS<br />RESEARCH<br />OPEN<br />IMPACT
        </div>

        <div className="hero-glass hero-glass--headline">
          <div className="hero-label">Ashay Kushwaha — Systems Builder</div>
          <h1 className="hero-title">
            I build <strong>systems</strong><br />
            that make complexity usable.
          </h1>
        </div>

        <div className="hero-glass hero-glass--identity">
          <div className="hero-korean" lang="ko">나는 센티넬 사이퍼다.</div>
          <div className="hero-meta">
            A CURIOUS MIND<br />
            WITH THE DISCIPLINE<br />
            TO TURN IDEAS<br />
            INTO REALITY.
          </div>
        </div>

        <div className="hero-glass hero-glass--links">
          <div className="hero-links-title">Project Links</div>
          <a href="https://github.com/AshayK003/nse-sentiment-analyzer" target="_blank" rel="noopener noreferrer" className="hero-link">
            NSE Sentiment — live price + news NLP <ArrowRight size={12} />
          </a>
          <a href="https://github.com/AshayK003/KarmaMap" target="_blank" rel="noopener noreferrer" className="hero-link">
            KarmaMap — NGO-volunteer matching platform <ArrowRight size={12} />
          </a>
          <a href="https://github.com/AshayK003/nse-portfolio-risk-scanner" target="_blank" rel="noopener noreferrer" className="hero-link">
            NSE Risk Scanner — VaR / Monte Carlo <ArrowRight size={12} />
          </a>
          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">See My Work <ArrowRight size={14} /></a>
            <a href="#about" className="btn-ghost">About Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}