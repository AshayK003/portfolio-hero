"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface HeroParticlesProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>
  scrollProgress: React.MutableRefObject<number>
}

export function HeroParticles({ mouse, scrollProgress }: HeroParticlesProps) {
  const ref = useRef<THREE.Points>(null)
  const clockRef = useRef(0)

  const [positions, colors, sizes] = useMemo(() => {
    const count = 600
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)

    const cyan = new THREE.Color("#38bdf8")
    const violet = new THREE.Color("#a78bfa")
    const dark = new THREE.Color("#0a0a0a")

    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.cos(phi)
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) - 1

      const t = (pos[i * 3 + 1] + 3) / 6 // normalize y to 0-1
      const color = cyan.clone().lerp(violet, t)
      col[i * 3] = color.r
      col[i * 3 + 1] = color.g
      col[i * 3 + 2] = color.b

      siz[i] = 0.02 + Math.random() * 0.04
    }
    return [pos, col, siz]
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return

    clockRef.current += delta

    const positions = ref.current.geometry.attributes.position.array as Float32Array
    const scroll = scrollProgress.current
    const mx = mouse.current.x * 0.5
    const my = mouse.current.y * 0.5

    for (let i = 0; i < positions.length / 3; i++) {
      // Slow orbital drift
      const idx = i * 3
      const baseX = positions[idx]
      const baseZ = positions[idx + 2] ?? 0
      const speed = 0.08 + (i % 5) * 0.02

      // Gentle wave motion
      positions[idx + 1] += Math.sin(clockRef.current * speed + i * 0.01) * 0.001

      // Mouse influence - subtlest pull
      positions[idx] -= mx * 0.002
      positions[idx + 2] -= my * 0.002
    }

    ref.current.geometry.attributes.position.needsUpdate = true

    // Opacity fade on scroll
    const material = ref.current.material as THREE.PointsMaterial
    material.opacity = Math.max(0, 1 - scroll * 1.5)
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          args={[positions, 3]}
          attach="attributes-position"
        />
        <bufferAttribute
          args={[colors, 3]}
          attach="attributes-color"
        />
        <bufferAttribute
          args={[sizes, 1]}
          attach="attributes-size"
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={1}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
