import type { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

const gravity = -0.01;
const friction = 0.8;
const movement = 0.03;
const rushSpeed = 0.06;

const velocity = {
  x: 0,
  y: -0.04,
  z: 0
};

const keys = {
  w: {
    pressed: false
  },
  s: {
    pressed: false
  },
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  shift: {
    pressed: false
  }
};

export default function Cube() {
  const cube = useRef<Mesh>(null!);

  useFrame(() => {
    velocity.y += gravity;

    const offsetY = cube.current.position.y - 0.5;

    // hit the ground
    if (offsetY + velocity.y <= 0) {
      velocity.y *= friction;
      velocity.y = -velocity.y;
    } else {
      cube.current.position.y += velocity.y;
    }

    if (keys.w.pressed) {
      cube.current.position.z -= keys.shift.pressed ? rushSpeed + movement : movement;
    } else if (keys.s.pressed) {
      cube.current.position.z += keys.shift.pressed ? rushSpeed + movement : movement;
    }

    if (keys.a.pressed) {
      cube.current.position.x -= keys.shift.pressed ? rushSpeed + movement : movement;
    } else if (keys.d.pressed) {
      cube.current.position.x += keys.shift.pressed ? rushSpeed + movement : movement;
    }
  });

  const handleKeyPress = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();

    if(key === 'w' || key === 'arrowup') {
      keys.w.pressed = true;
    }

    if (key === 's' || key === 'arrowdown') {
      keys.s.pressed = true;
    }

    if (key === 'a' || key === 'arrowleft') {
      keys.a.pressed = true;
    }

    if (key === 'd' || key === 'arrowright') {
      keys.d.pressed = true;
    }

    if (key === 'shift') {
      keys.shift.pressed = true;
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();

    if(key === 'w' || key === 'arrowup') {
      keys.w.pressed = false;
    }

    if (key === 's' || key === 'arrowdown') {
      keys.s.pressed = false;
    }

    if (key === 'a' || key === 'arrowleft') {
      keys.a.pressed = false;
    }

    if (key === 'd' || key === 'arrowright') {
      keys.d.pressed = false;
    }

    if (key === 'shift') {
      keys.shift.pressed = false;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      removeEventListener('keydown', handleKeyPress);
      removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return (
    <mesh 
      ref={cube}
      position-y={3} 
      castShadow
    >
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
