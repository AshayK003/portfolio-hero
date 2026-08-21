"use client"

import { Nav } from "./Nav"
import { Hero } from "./Hero"
import { About } from "./About"
import { Stack } from "./Stack"
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { Footer } from "./Footer"

export function Landing() {
  return (
    <>
      <Nav />
      <main id="main-content" role="main">
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <About />
        <div className="section-divider" aria-hidden="true" />
        <Stack />
        <div className="section-divider" aria-hidden="true" />
        <Projects />
        <div className="section-divider" aria-hidden="true" />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
