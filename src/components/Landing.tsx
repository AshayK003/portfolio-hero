"use client"

import dynamic from "next/dynamic"
import { Nav } from "./Nav"
import { Hero } from "./Hero"

const About = dynamic(() => import("./About").then((m) => ({ default: m.About })), { ssr: true })
const Stack = dynamic(() => import("./Stack").then((m) => ({ default: m.Stack })), { ssr: true })
const Projects = dynamic(() => import("./Projects").then((m) => ({ default: m.Projects })), { ssr: true })
const Contact = dynamic(() => import("./Contact").then((m) => ({ default: m.Contact })), { ssr: true })
const Footer = dynamic(() => import("./Footer").then((m) => ({ default: m.Footer })), { ssr: true })

export function Landing() {
  return (
    <>
      <Nav />
      <main id="main-content" role="main">
        <Hero />
        <div className="section-divider-accent" aria-hidden="true" />
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
