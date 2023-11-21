import type { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Cube() {
  const cube = useRef<Mesh>(null!);

  useFrame(() => {
    cube.current.rotation.x += 0.005;
    cube.current.rotation.z += 0.008;
  });

  return (
    <mesh ref={cube} castShadow>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
