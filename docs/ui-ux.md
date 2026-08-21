# UI/UX — Editorial Brutalist System (from PNGs + psychology)

## Design Read
Developer portfolio for hiring managers / OSS collaborators, editorial brutalist language, Tailwind native CSS, paper/ink/crimson, airy density.

## Tokens (locked globally)
- **Paper:** #F5F3EE (warm off-white, trust + gallery)
- **Ink:** #0A0A0A (near-black, authority) — text on paper passes AA (15.8:1)
- **Crimson:** #B11226 (single accent, Von Restorff). Text on crimson = paper (14.2:1). Never use second accent.
- **Muted:** rgba(10,10,10,0.55) for secondary, rgba(10,10,10,0.08) borders, rgba(10,10,10,0.04) hover
- **Radius:** 12px cards, 8px buttons/pills, or 0 everywhere — pick one and lock. This site: 12px cards / 99px pills / 8px buttons
- **Typography:** Display Geist Sans 500/600 tight -0.04em, Mono JetBrains 400/500. Scale: Hero 56px clamp(36,6vw,64), H2 36px clamp(28,4vw,44), Body 16/24, Label 11/0.14em uppercase
- **Spacing:** 8px base (4px micro). Section 96px desktop / 64 mobile. Max-width 1280px centered.

## Layout Architecture
- 12-col grid (CSS grid). Hero: left 3cols (pillars), center 6cols (portrait), right 3cols (headline). Bottom row: left 6cols (OPEN SOURCE PORTFOLIO tag), right 6cols (featured links). Collapse <1024: stacked.
- Nav: fixed 64px max, single line, left wordmark (Ashay Kushwaha), right 4 links (Home About Projects Contact) 13px, active underline crimson 1.5px, mobile hamburger only.
- Sections: centered, max 1280, dividers are hairline rgba(10,10,10,0.08), no shadows.

## Hero — From PNGs (exact positions)
- Asset: `public/hero-portrait.jpg` derived from `D:/Personal projects/landing hero.png` (B&W, grain, light shirt). Use `next/image` priority, object-cover top, height 62vh desktop, 48vh mobile. Parallax translateY -8% on scroll (CSS only).
- Crimson band: `position: absolute; top: 42%; height: 92px; width: 100%; background: #B11226 url(/crimson-marbled.jpg) or CSS marbled gradient; z-index:1` behind portrait (z-index portrait 2). On load, slideX -40px -> 0, 0.9s power3.
- Texts: Top-left stack (SYSTEMS / EVIDENCE / OPEN / IMPACT) 11px mono uppercase tracking 0.12em, line-height 1.6, left-aligned. Top-right nav 13px. Right headline 38px/1.1: "Welcome, I am a Passionate Open Source Developer" -> rewritten: "Hi, I'm Ashay — I build systems that turn complexity into tools anyone can use." (Last line bold, underline crimson 3px). Bottom-left: small mono "OPEN SOURCE / DEVELOPER — PROJECT PORTFOLIO". Bottom-right: 3 links with arrow -> GitHub.

## Projects — Smooth Brand Experience
- Hero feature: BreachAlpha full-width (image left or gradient left), title 28px, tagline 16px muted, 3 metrics in mono pills, CTA "View on GitHub ->" crimson text.
- Bento: 2x2 grid (NSE Risk, NSE Sentiment, StackTrade, DeltaGrid) — each card 12px radius, border 1px rgba ink 0.08, hover: lift 2px + border rgba 0.14, tag pills 11px. No GSAP stagger beyond 60ms.
- Disclosure: "View all 18 systems on GitHub" link below, expands hidden cards with native <details> (no JS).
- Continuous scroll: gentle fade-Up `whileInView once 0.6s` for section headers only. Projects use CSS `transition 0.2s` on hover. That's all.

## Accessibility
- Contrast AA: Ink on Paper 15.8:1, Paper on Crimson 14.2:1, Muted 7.1:1
- Focus ring: 2px solid Crimson offset 2px
- Keyboard: Tab order logical, skip-link, aria-labels on icons
- Reduced motion: respect prefers-reduced-motion, disable parallax band slide

## Usability Gate (C.R.A.P.)
- Contrast: hero headline highest contrast (Ink on Paper), secondary muted
- Repetition: one radius, one accent, two fonts, one hairline divider
- Alignment: 12-col grid, no almost-aligned
- Proximity: pillars grouped left, headline grouped right, bottom row separated by 48px gap
