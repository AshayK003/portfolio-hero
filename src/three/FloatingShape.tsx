"use client"
// Reads CSS custom properties at runtime. Fallback ensures SSR safety.
function cssVar(name: string, fallback: string): string {
  if (typeof document === "undefined") return fallback
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback
}


import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

interface FloatingShapeProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>
  scrollProgress: React.MutableRefObject<number>
}

export function FloatingShape({ mouse, scrollProgress }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  const colorRef = useRef(new THREE.Color(cssVar("--color-accent", "#38bdf8")))

  // Pick one geometry at random for variety each load
  const geometry = useMemo(() => {
    const types = [
      new THREE.TorusKnotGeometry(1.2, 0.35, 128, 16),
      new THREE.IcosahedronGeometry(1.1, 0),
      new THREE.OctahedronGeometry(1.3, 0),
    ]
    return types[Math.floor(Math.random() * types.length)]
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    // Slow rotation
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.2

    // Subtle mouse parallax
    meshRef.current.position.x += (mouse.current.x * 0.15 - meshRef.current.position.x) * 0.02
    meshRef.current.position.y += (-mouse.current.y * 0.15 - meshRef.current.position.y) * 0.02

    // Scroll-driven effects
    const scroll = scrollProgress.current
    const scale = Math.max(0.12, 1 - scroll * 2.5)
    meshRef.current.scale.setScalar(scale)
    const material = meshRef.current.material as THREE.MeshStandardMaterial
    material.opacity = scale

    // Color-shift from cyan → violet → warm as scroll progresses
    const cyan = new THREE.Color(cssVar("--color-accent", "#38bdf8"))
    const violet = new THREE.Color(cssVar("--color-accent-2", "#a78bfa"))
    const warm = new THREE.Color(cssVar("--color-warm-glow", "#e7c59a"))
    const t = Math.min(scroll * 2, 1)
    const targetColor = t < 0.5
      ? cyan.clone().lerp(violet, t * 2)
      : violet.clone().lerp(warm, (t - 0.5) * 2)
    colorRef.current.lerp(targetColor, 0.05)
    material.color.copy(colorRef.current)
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial
          color={cssVar("--color-accent", "#38bdf8")}
          metalness={0.3}
          roughness={0.4}
          transparent
          opacity={1}
          wireframe={false}
          envMapIntensity={0.5}
          clearcoat={0.1}
        />
      </mesh>
    </Float>
  )
}
