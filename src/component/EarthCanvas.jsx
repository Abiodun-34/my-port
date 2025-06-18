import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import earthTexture from "/earth.jpg";  // Adjusted import path

const Earth = () => (
  <mesh>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial
      map={new THREE.TextureLoader().load(earthTexture)}  // Texture applied
      roughness={0.7}
      metalness={0.2}
    />
  </mesh>
);

export const EarthCanvas = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
    <ambientLight intensity={1.5} />
    <pointLight position={[10, 10, 10]} intensity={2} />
    <Earth />
    <OrbitControls 
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      zoomSpeed={0.6}
      autoRotate
      autoRotateSpeed={2}
    />
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
  </Canvas>
);

export default EarthCanvas;