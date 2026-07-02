"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return
    if ("ontouchstart" in window) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Fast dot, slightly slower ring for depth
    const quickDotX = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power2.out" })
    const quickDotY = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power2.out" })
    const quickRingX = gsap.quickTo(ring, "x", { duration: 0.18, ease: "power2.out" })
    const quickRingY = gsap.quickTo(ring, "y", { duration: 0.18, ease: "power2.out" })

    const handleMouseMove = (e: MouseEvent) => {
      quickDotX(e.clientX)
      quickDotY(e.clientY)
      quickRingX(e.clientX)
      quickRingY(e.clientY)
    }

    const handleMouseEnterInteractive = () => {
      gsap.to(dot, { scale: 2.5, duration: 0.2, ease: "power2.out" })
      gsap.to(ring, { scale: 0, opacity: 0, duration: 0.2, ease: "power2.out" })
    }

    const handleMouseLeaveInteractive = () => {
      gsap.to(dot, { scale: 1, duration: 0.2, ease: "power2.out" })
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2, ease: "power2.out" })
    }

    window.addEventListener("mousemove", handleMouseMove)

    const interactives = document.querySelectorAll("a, button, .btn-primary, .btn-outlined, .nav-pill")
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive)
      el.addEventListener("mouseleave", handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive)
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
      />
    </>
  )
}
