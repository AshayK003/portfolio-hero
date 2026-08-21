# Bottlenecks — portfolio-hero

## #1 Bottleneck — 3D Theater That Hides Your Moat
- **Where:** `src/three/*` (Scene.tsx, HeroParticles.tsx 600 points, FloatingShape.tsx random TorusKnot/Icosahedron), `package.json` deps `@react-three/* + three + @react-three/postprocessing` (unused), `src/components/Hero.tsx:159` gated Scene
- **Current:** 400kb+ Three.js, 600-point orbital particles, random geometry each load, mouse parallax, scroll-fade. Looks like "award-winning portfolio" tutorial.
- **Why wasteful:** Hiring manager learns nothing in the 3s hero window. Particles convey no proof. GPU cost harms low-end mobiles (your Indian audience). Random geometry = non-deterministic brand (different shape per reload).
- **Fix:** Delete `src/three/` entirely. Remove `three`, `@react-three/*`, `postprocessing`. Build PNG hero exactly as in `landing hero.png`: CSS-only parallax (transform translateY on scroll, no canvas). One decisive image > 600 particles.
- **Impact:** -380kb JS, -1 Canvas full-screen repaint per frame, deterministic brand, LCP improves ~40%. **ROI: High**
- **Effort:** 1h (delete + rewrite Hero.tsx to paper layout)

## #2 Bottleneck — GSAP Everywhere = Predictable AI Rhythm
- **Where:** `About.tsx:4 GSAP contexts`, `Stack.tsx: GSAP bar fill`, `Projects.tsx: stagger 0.1`, `Nav.tsx: y hide`, `Hero.tsx: tl badge/sub/cta + scroll scrub`, `Contact.tsx: x slide`, `Footer.tsx: fade` — 10+ ScrollTriggers. `globals.css` 1252 lines of token soup to support it.
- **Current:** Every section fades/slides/staggers on entering viewport. Identical easing (`power3.out`) everywhere.
- **Why wasteful:** Creates the exact LLM slop fingerprint: staggered cards, bar grow, chip slide. Reviewers pattern-match to "AI generated" and disengage. Also forces `useEffect` + `gsap.context` in every client component, doubling JS.
- **Fix:** Replace with 2 `motion` primitives: `whileInView fadeUp once` for section headers, `stagger 0.06` only for project bento (one place). Delete GSAP. Reduce `globals.css` to ~250 lines: tokens + utilities only. Shape consistency lock: radius 12px everywhere or 0 everywhere — pick one.
- **Impact:** -GSAP 80kb, eliminates 8 ScrollTriggers, breaks AI tell, faster interaction. **ROI: High**
- **Effort:** 2h

## #3 Bottleneck — Content Hierarchy Buries Proof (13 equal cards, 14 skill bars at 90%/75%)
- **Where:** `config.ts: projects[]` 13 items all rendered via `Projects.tsx` identical `project-card`, `Stack.tsx` `level:90,85,75` bars
- **Current:** NSE Risk Scanner (VaR 99, 355 tests, deployed) has same visual weight as hackathon-problem-statements list. Skills at 90%/75% are unverifiable and read as filler. Interests = 6 chips nobody remembers.
- **Why wasteful:** Peak-End Rule violated: no peak project, no memorable end. Recruiter scanning for signal gets noise. 13 cards > cognitive load (Hick's Law).
- **Fix:** Information architecture: 1 Hero Feature (BreachAlpha or NSE Risk, full-width with metrics), 2x2 bento for next 4, rest under "View all on GitHub →" disclosure. Replace skill bars with 3 proof pills: `Python · Data Systems · Ship to Production` — no percentages. Interests fold into About prose.
- **Impact:** Immediate comprehension of moat (systems > demos), lower density (gallery airy 3/10), higher recall. **ROI: Highest (conversion)**
- **Effort:** 1.5h (config reprioritization + Projects.tsx rewrite)

## Quick Wins (<1h each)
- Remove `postprocessing` unused dep (`npm uninstall @react-three/postprocessing`)
- Delete `FloatingShape random geometry` nondeterminism
- Cap `nav` height 64px (currently 80px + floating 16px offset wastes viewport)
- Add `priority` to hero PNG image, `next/font` for Geist + JetBrains Mono

## What NOT to do
- Don't add Framer Motion orchestration library to replace GSAP 1:1 — keep motion minimal or delete entirely
- Don't introduce serif display font (Fraunces, Instrument Serif) — sans + mono is the brand, serif = AI tell for dev portfolio
- Don't create a CMS or markdown layer for projects — config.ts as single source is correct, keep it
- Don't invent a new palette per section — lock Paper #F5F3EE, Ink #0A0A0A, Crimson #B11226 globally
