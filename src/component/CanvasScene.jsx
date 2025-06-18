import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => (
  <mesh>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial
      map={new THREE.TextureLoader().load('earth.jpg')}
    />
  </mesh>
);

export const CanvasScene = () => (
  <Canvas camera={{ position: [2, 2, 5] }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[3, 3, 3]} />
    <Stars />
    <Earth />
    <OrbitControls enableZoom />
  </Canvas>
);

export default CanvasScene;