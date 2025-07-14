import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Float, Text3D, MeshDistortMaterial, Sphere, Box, Octahedron, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingCube({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.x += 0.01 * speed
    meshRef.current.rotation.y += 0.01 * speed
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} position={position} args={[0.8, 0.8, 0.8]}>
        <MeshDistortMaterial color={color} distort={0.3} speed={2} />
      </Box>
    </Float>
  )
}

function FloatingSphere({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.x += 0.005 * speed
    meshRef.current.rotation.z += 0.01 * speed
    meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 0.4
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={3}>
      <Sphere ref={meshRef} position={position} args={[0.5]}>
        <MeshDistortMaterial color={color} distort={0.4} speed={3} />
      </Sphere>
    </Float>
  )
}

function FloatingOctahedron({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.x += 0.02 * speed
    meshRef.current.rotation.y += 0.015 * speed
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + 1) * 0.5
  })

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
      <Octahedron ref={meshRef} position={position} args={[0.6]}>
        <MeshDistortMaterial color={color} distort={0.5} speed={1.5} />
      </Octahedron>
    </Float>
  )
}

function CrystalFormation({ position }: { position: [number, number, number] }) {
  const group = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    group.current.rotation.y += 0.005
    group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
  })

  return (
    <group ref={group} position={position}>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main crystal */}
        <Box args={[0.3, 1.5, 0.3]} position={[0, 0, 0]}>
          <MeshDistortMaterial color="#60a5fa" distort={0.2} speed={2} />
        </Box>
        {/* Side crystals */}
        <Box args={[0.2, 0.8, 0.2]} position={[0.4, -0.2, 0]} rotation={[0, 0, 0.3]}>
          <MeshDistortMaterial color="#3b82f6" distort={0.15} speed={1.5} />
        </Box>
        <Box args={[0.15, 0.6, 0.15]} position={[-0.3, -0.3, 0]} rotation={[0, 0, -0.4]}>
          <MeshDistortMaterial color="#1d4ed8" distort={0.1} speed={1} />
        </Box>
      </Float>
    </group>
  )
}

function MemoryOrb({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.y += 0.01
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + 2) * 0.3
  })

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        {/* Outer ring */}
        <mesh ref={meshRef}>
          <torusGeometry args={[0.8, 0.1, 8, 16]} />
          <MeshDistortMaterial color="#f59e0b" distort={0.3} speed={2} />
        </mesh>
        {/* Inner sphere */}
        <Sphere args={[0.4]} position={[0, 0, 0]}>
          <MeshDistortMaterial color="#fbbf24" distort={0.4} speed={3} transparent opacity={0.8} />
        </Sphere>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      
      {/* Floating elements */}
      <FloatingCube position={[-3, 2, -2]} color="#10b981" speed={0.8} />
      <FloatingCube position={[4, -1, -3]} color="#6366f1" speed={1.2} />
      
      <FloatingSphere position={[-2, -2, 2]} color="#f59e0b" speed={1.5} />
      <FloatingSphere position={[3, 3, 1]} color="#ef4444" speed={0.7} />
      
      <FloatingOctahedron position={[0, 4, -4]} color="#8b5cf6" speed={1.1} />
      <FloatingOctahedron position={[-4, 0, 3]} color="#06b6d4" speed={0.9} />
      
      <CrystalFormation position={[2, 0, 4]} />
      <CrystalFormation position={[-3, 3, -1]} />
      
      <MemoryOrb position={[0, -3, 0]} />
      <MemoryOrb position={[5, 1, -2]} />
      
      {/* Floating text */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.3}
          height={0.1}
          position={[-1, 1, 3]}
          rotation={[0, Math.PI / 6, 0]}
        >
          LEGACY
          <MeshDistortMaterial color="#e11d48" distort={0.1} speed={1} />
        </Text3D>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={2}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.25}
          height={0.08}
          position={[2, -1, 2]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          CRAFT
          <MeshDistortMaterial color="#7c3aed" distort={0.15} speed={1.5} />
        </Text3D>
      </Float>
    </>
  )
}

export default function FloatingIsland() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}