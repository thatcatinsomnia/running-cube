type Props = {
  width?: number;
  height?: number;
};

export default function Ground({ width = 10, height = 10 }: Props) {
  return (
    <mesh position={[0, -1, 0]} rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial color="lightyellow" />
    </mesh>
  );
}
