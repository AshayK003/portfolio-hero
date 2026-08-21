# Architecture — portfolio-hero Reimagine

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROBLEM STATEMENT: Replace generic AI portfolio (dark, Three.js, GSAP-everywhere, equal-weight cards) with an editorial brutalist system that makes Ashay's actual moat memorable in 10s.

REQUIREMENTS:
  Functional: Hero from PNGs (B&W portrait + crimson band positions), featured projects with GitHub links, About/Stack/Contact, responsive, a11y WCAG AA, static export.
  Non-functional: LCP <1.5s, no layout shift, no GPU canvas, deterministic visuals, 2 fonts max, single accent, build <30s.

CONSTRAINTS: Solo dev, free tier only (Netlify static), no backend, no paid deps. Keep config.ts as single source.

ARCHITECTURE OPTIONS:
  Option A — Keep current (Next 16 + Three + GSAP) and "reskin": swap colors only.
  Option B — Minimal static (Next 16 + Tailwind + motion lightly, delete Three/GSAP, CSS-only hero): paper theme, bento projects.
  Option C — Full design-system (Style Dictionary + DTCG + Dembrandt extracted tokens): overengineered for one portfolio.

COMPARISON MATRIX:
| Dimension | A: Keep 3D | B: Minimal Static (RECOMMENDED) | C: Full DS |
|---|---|---|---|
| Description | Retain Three/GSAP, repaint |
| Advantages | Zero rewrite | -380kb, deterministic, gallery airy | Portable tokens to Figma/iOS |
| Disadvantages | Keeps slop fingerprint, non-deterministic, GPU | Need to rewrite Hero/Projects | Weeks, abstraction for one site |
| Eng Cost | Low | Medium (4-5h focused) | High |
| Business Cost | Brand stays generic = low conversion | Distinct, memorable = higher callbacks | No extra conversion for solo site |
| Operational | Heavy JS, Netlify slow TTFB | Static out/ ultra-fast | CI token drift monitoring overhead |
| Migration | None | Delete src/three, trim globals.css 1252->280 | + DESIGN.md, sd.config, tokens.json |
| Risk | AI tell remains | Regression only in hero | Over-abstraction, lock-in |
| Maintainability | Harder (GSAP context everywhere) | Easiest (CSS + React, flat list) | Heavier |

RECOMMENDED: B — Minimal Static
  Rationale: Solves all 3 bottlenecks with deletion, not addition (Ponytail). Delivers editorial psychology (Von Restorff crimson, paper trust) without DS bureaucracy. One accent, 2 fonts, CSS parallax beats canvas.

COMPONENT DIAGRAM:
  app/layout.tsx (next/font: Geist + JetBrains Mono) 
  -> Landing.tsx (shell: Nav + Hero + About + Projects (bento) + Stack (pills) + Contact + Footer)
  -> Hero.tsx (NEW: 12-col grid, left pillars, center portrait <Image priority>, crimson band div, right headline, bottom project links)
  -> Projects.tsx (NEW: 1 hero feature + 2x2 bento + disclosure)
  -> Nav.tsx (trim: single line, 64px, 4 links)
  config.ts (unchanged shape, reprioritize featured flags)
  public/hero.png (from D:/Personal projects/landing hero.png, optimized)

DATA FLOW: config.site -> Hero (headline/handle) + Projects (featured first) + Nav. No fetch, static generation.

API DESIGN: None (static). External links only (GitHub hrefs with rel noopener).

DATA MODEL: Same site object. Mark 3 featured: BreachAlpha, NSE Risk Scanner, NSE Sentiment Analyzer. Others under fold.

RISKS:
  1. Portrait PNG 1.5M is heavy -> optimize to webp <300kb, use next/image priority, blur placeholder
  2. Color inversion breaks existing external OG preview -> keep metadataBase, update themeColor to #F5F3EE
  3. Removing GSAP may feel less "alive" -> compensate with one intentional crimson band slide (0.9s) + arrow micro-interaction (4px)

TRADEOFFS:
  Accepted: No canvas "wow" effect; lose floating shape novelty (gain credibility)
  Deferred: Token pipeline (Style Dictionary) — add only if brand scales to second product (Cypher Labs)

IMPLEMENTATION ROADMAP:
  Phase 1: Tokens + Hero (globals.css reset, layout fonts, Hero.tsx from PNG)
  Phase 2: Projects bento + Nav trim + About/Stack simplification
  Phase 3: Asset optimize, remove deps, verify build

APPROVAL REQUIRED: No (personal portfolio, reversible via git). Proceed.
