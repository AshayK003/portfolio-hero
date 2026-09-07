"use client"
import { useEffect, useRef } from "react"
import type { CSSProperties, ReactNode } from "react"

/**
 * Observes its own box once; when it enters the viewport, tags itself
 * `is-visible` so `[data-reveal]` children stagger in via CSS.
 * The wrapper renders the exact className given, so grid/layout CSS is untouched.
 */
export function RevealGroup({
  children,
  className,
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const kids = Array.from(root.querySelectorAll("[data-reveal]"))
    kids.forEach((kid, i) => {
      ;(kid as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(i, 8) * 70}ms`)
    })
    if (typeof IntersectionObserver === "undefined") {
      root.classList.add("is-visible")
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          root.classList.add("is-visible")
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(root)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
