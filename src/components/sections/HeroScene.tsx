import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GoldOrb({ mouse }: { mouse: { x: number; y: number } }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.003;
    mesh.current.rotation.y += 0.005;
    mesh.current.position.x += (mouse.x * 1.5 - mesh.current.position.x) * 0.05;
    mesh.current.position.y += (-mouse.y * 1.0 - mesh.current.position.y) * 0.05;
  });
  return (
    <Icosahedron ref={mesh} args={[1.4, 4]}>
      <MeshDistortMaterial
        color="#C9A84C"
        distort={0.35}
        speed={1.8}
        roughness={0.1}
        metalness={0.9}
        wireframe={false}
      />
    </Icosahedron>
  );
}

export function HeroScene({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#C9A84C" />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#ffffff" />
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#C9A84C" />
      <GoldOrb mouse={mouse} />
    </Canvas>
  );
}
