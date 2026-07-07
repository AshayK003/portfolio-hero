"use client"

import { useEffect, useRef, useCallback } from "react"

/**
 * Bridges DOM scroll events to a shared ref consumed by Three.js components.
 * Tracks scrollProgress (0→1) and mouse position (normalized -1→1).
 */
export function useScrollManager() {
  const scrollProgress = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollProgress
}

export function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0 })

  const handleMouse = useCallback((e: MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [handleMouse])

  return mouse
}
