"use client"

import { Nav } from "./Nav"
import { Hero } from "./Hero"
import { About } from "./About"
import { SkillsVenn } from "./SkillsVenn"
import { Stack } from "./Stack"
import { Projects } from "./Projects"
import { GitHubActivity } from "./GitHubActivity"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
import { MorseDivider } from "./MorseDivider"

export function Landing() {
  return (
    <>
      <Nav />
      <main id="main-content" role="main">
        <Hero />
        <MorseDivider />
        <About />
        <div className="section-divider" aria-hidden="true" />
        <SkillsVenn />
        <div className="section-divider" aria-hidden="true" />
        <Stack />
        <div className="section-divider" aria-hidden="true" />
        <Projects />
        <div className="section-divider" aria-hidden="true" />
        <GitHubActivity />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
