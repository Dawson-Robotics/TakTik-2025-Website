import React, { useRef, useState, useEffect, useCallback, ReactNode, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useFBX, Html } from '@react-three/drei'
import { Group, Vector3 } from "three"

// Camera control component
function CameraSetup() {
  const { camera } = useThree()
  
  useEffect(() => {
    camera.position.set(0, 100, 0)
    camera.lookAt(0, 0, -500)
  }, [camera])
  
  return null
}

// Separate Hover component
function Hover({ children }) {
  useFrame((state, delta) => {
    if (children?.props?.object) {
      children.props.object.rotation.y += delta * 0.3
    }
  })

  return <group name="hover">{children}</group>
}

// Separate Model component to handle FBX loading
function Model() {
  const fbx = useFBX('/assets/gamefield.fbx')
  
  return (
    <Hover>
      <primitive 
        color="white" 
        material={null} 
        rotation={[0.4, 0, 0]} 
        position={[0, 0, -900]} 
        object={fbx} 
      />
    </Hover>
  )
}

// Loading fallback component
function Loader() {
  return (
    <Html center>
      <div className="loader">Loading...</div>
    </Html>
  )
}

// Main Field component
function Field() {
  return (
    <div style={{ width: '70%', height: '300px', padding: '50px 0' }}>
      <Canvas 
        camera={{ 
          far: 2000,
          fov: 75,
        }}
        shadows
      >
        <CameraSetup />
        <pointLight position={[0, 200, -10]} decay={0} intensity={1} />
        <color attach="background" args={['#f5efe6']} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Field