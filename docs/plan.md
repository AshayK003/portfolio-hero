# Plan — portfolio-hero Reimagine

## Milestones
1. **Tokens + Hero** — globals.css reset to paper/ink/crimson, layout.tsx fonts, Hero.tsx from PNG  (est. 1.5h)
2. **Projects + Nav + About/Stack trim** — bento, single-line nav, remove bars (1.5h)
3. **Asset + Cleanup + Verify** — optimize PNG to webp, uninstall deps, build/typecheck/lint (1h)

## Tasks
- [ ] Copy `landing hero.png` to `public/hero-portrait.png` -> optimize to webp (cwebp -q 82)
- [ ] Rewrite `src/app/globals.css` (~280 lines): tokens, reset, hero, grid, bento, btn
- [ ] Rewrite `src/app/layout.tsx`: Geist + JetBrains Mono via next/font, themeColor #F5F3EE
- [ ] Rewrite `src/components/Hero.tsx`: 12-col editorial, crimson band, portrait, fixed copy
- [ ] Rewrite `src/components/Projects.tsx`: hero feature + 2x2 + disclosure
- [ ] Trim `src/components/Nav.tsx`: 64px, 4 links, remove glass/gradient, mono labels
- [ ] Simplify `About.tsx` (no chips) and `Stack.tsx` (pills not bars)
- [ ] `npm uninstall three @react-three/fiber @react-three/drei @react-three/postprocessing gsap`
- [ ] `npm run build` + `npm run lint` + verify preview

## Build Order
Tokens -> Hero -> Nav -> Projects -> About/Stack -> Deps removal -> Verify

## Risks
- Portrait weight -> mitigate with next/image priority + webp
- Removing GSAP feels static -> one band slide mitigates

## Done Criteria
- `npm run build` passes, `out/` static export, Lighthouse LCP <1.5s, no GSAP/Three in bundle, single accent, 2 fonts, crimson band visible, projects bento smooth.
