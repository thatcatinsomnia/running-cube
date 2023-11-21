import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from '../Cube';
import Ground from '../Ground';

export default function Scene() {
  return (
      <Canvas shadows>
        <color args={["#29272f"]} attach="background" />

        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 8, 5]} intensity={3} castShadow />
        <OrbitControls />

        <Cube />
        <Ground />
      </Canvas>
  );
}
