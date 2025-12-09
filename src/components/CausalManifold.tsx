'use client'

import { useEffect, useRef } from 'react'

export function CausalManifold() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Dynamic import to avoid SSR issues
    const loadThree = async () => {
      const THREE = (await import('three')).default

      if (!containerRef.current) return

      const width = containerRef.current.clientWidth
      const height = 300

      const scene = new THREE.Scene()
      scene.background = new THREE.Color('#050505')

      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
      camera.position.set(0, 6, 8)

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio)
      containerRef.current.appendChild(renderer.domElement)

      // Create grid
      const gridGeometry = new THREE.BufferGeometry()
      const gridSize = 10
      const gridDivisions = 10
      const gridStep = gridSize / gridDivisions

      const positions: number[] = []

      // Horizontal lines
      for (let i = -gridSize / 2; i <= gridSize / 2; i += gridStep) {
        positions.push(-gridSize / 2, 0, i)
        positions.push(gridSize / 2, 0, i)
      }

      // Vertical lines
      for (let i = -gridSize / 2; i <= gridSize / 2; i += gridStep) {
        positions.push(i, 0, -gridSize / 2)
        positions.push(i, 0, gridSize / 2)
      }

      gridGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(positions), 3)
      )

      const gridMaterial = new THREE.LineBasicMaterial({
        color: 0x00ff41,
        linewidth: 1,
        fog: false,
      })

      const gridLines = new THREE.LineSegments(gridGeometry, gridMaterial)
      scene.add(gridLines)

      // Add some reference points
      const pointGeometry = new THREE.BufferGeometry()
      const pointPositions: number[] = [
        -2, 0, -2, 2, 0, -2, -2, 0, 2, 2, 0, 2,
      ]
      pointGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(pointPositions), 3)
      )

      const pointMaterial = new THREE.PointsMaterial({
        color: 0xffb000,
        size: 0.3,
      })
      const points = new THREE.Points(pointGeometry, pointMaterial)
      scene.add(points)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x00ff41, 0.5)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
      directionalLight.position.set(5, 10, 7)
      scene.add(directionalLight)

      // Animation
      let rotationSpeed = 0.0005
      const animate = () => {
        requestAnimationFrame(animate)

        gridLines.rotation.x += rotationSpeed
        gridLines.rotation.y += rotationSpeed * 0.5
        points.rotation.x += rotationSpeed
        points.rotation.y += rotationSpeed * 0.5

        renderer.render(scene, camera)
      }

      animate()

      // Cleanup
      return () => {
        renderer.dispose()
        gridGeometry.dispose()
        gridMaterial.dispose()
      }
    }

    loadThree()
  }, [])

  return <div ref={containerRef} className="w-full h-80 rounded border border-terminal-green/30" />
}
