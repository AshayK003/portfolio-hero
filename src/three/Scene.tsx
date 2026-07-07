"use client"

import { Canvas } from "@react-three/fiber"
import { HeroParticles } from "./HeroParticles"
import { FloatingShape } from "./FloatingShape"
import { Suspense } from "react"

interface SceneProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>
  scrollProgress: React.MutableRefObject<number>
}

export function Scene({ mouse, scrollProgress }: SceneProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 1,
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <HeroParticles mouse={mouse} scrollProgress={scrollProgress} />
          <FloatingShape mouse={mouse} scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
