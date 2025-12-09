'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function NodeCluster() {
  const group = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.x = t * 0.1
      group.current.rotation.y = t * 0.2
    }
  })

  const nodes = new Array(42).fill(0).map((_, i) => {
    const phi = (i / 42) * Math.PI * 2
    const theta = (i / 42) * Math.PI
    const r = 1.6
    return new THREE.Vector3(
      r * Math.cos(phi) * Math.sin(theta),
      r * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
    )
  })

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos.toArray()}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial emissive="#00FF41" color="#00FF41" />
        </mesh>
      ))}
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => {
          if (i % 6 !== 0 || j % 4 !== 0) return null
          const points = [a, b]
          const curve = new THREE.CatmullRomCurve3(points)
          const geometry = new THREE.TubeGeometry(curve, 8, 0.01, 8, false)
          return (
            <mesh key={`${i}-${j}`} geometry={geometry}>
              <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" />
            </mesh>
          )
        }),
      )}
    </group>
  )
}

export function CausalManifold() {
  return (
    <div className="w-full h-80 bg-black/80 border border-terminal-green/40">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 4]} intensity={1.6} color="#00FF41" />
        <NodeCluster />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  )
}

