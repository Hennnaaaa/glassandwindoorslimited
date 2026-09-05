"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const FRAME_COLOR = "#161d2b";
const GLASS_COLOR = "#bfe8ff";

function GlassPane({ position, size }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[size[0], size[1], 0.04]} />
      <meshPhysicalMaterial
        color={GLASS_COLOR}
        transmission={1}
        thickness={0.4}
        roughness={0.04}
        ior={1.5}
        envMapIntensity={1.4}
        clearcoat={1}
        clearcoatRoughness={0.1}
        attenuationColor={"#8fd6ff"}
        attenuationDistance={1.2}
      />
    </mesh>
  );
}

function FrameBar({ position, size }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={FRAME_COLOR} metalness={0.65} roughness={0.35} />
    </mesh>
  );
}

function WindowModel() {
  const group = useRef(null);
  const pointer = useThree((s) => s.pointer);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    const targetX = pointer.y * 0.18;
    const targetYOffset = pointer.x * 0.25;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetYOffset, 0.04);
  });

  const w = 2.6;
  const h = 3.2;
  const barThickness = 0.12;
  const paneW = w / 2 - barThickness;
  const paneH = h / 2 - barThickness;

  return (
    <group ref={group} rotation={[0.05, -0.4, 0]}>
      {/* Outer frame */}
      <FrameBar position={[0, h / 2, 0]} size={[w + barThickness, barThickness, barThickness]} />
      <FrameBar position={[0, -h / 2, 0]} size={[w + barThickness, barThickness, barThickness]} />
      <FrameBar position={[-w / 2, 0, 0]} size={[barThickness, h + barThickness, barThickness]} />
      <FrameBar position={[w / 2, 0, 0]} size={[barThickness, h + barThickness, barThickness]} />
      {/* Cross mullions */}
      <FrameBar position={[0, 0, 0]} size={[w, barThickness, barThickness]} />
      <FrameBar position={[0, 0, 0]} size={[barThickness, h, barThickness]} />

      {/* Four panes */}
      <GlassPane position={[-w / 4 - barThickness / 4, h / 4 + barThickness / 4, 0]} size={[paneW, paneH]} />
      <GlassPane position={[w / 4 + barThickness / 4, h / 4 + barThickness / 4, 0]} size={[paneW, paneH]} />
      <GlassPane position={[-w / 4 - barThickness / 4, -h / 4 - barThickness / 4, 0]} size={[paneW, paneH]} />
      <GlassPane position={[w / 4 + barThickness / 4, -h / 4 - barThickness / 4, 0]} size={[paneW, paneH]} />
    </group>
  );
}

function FloatingShards() {
  const shards = [
    { pos: [2.6, 1.4, -1.2], scale: 0.35, speed: 1.1 },
    { pos: [-2.8, -0.8, -0.6], scale: 0.25, speed: 1.6 },
    { pos: [2.1, -1.6, 0.4], scale: 0.3, speed: 0.9 },
    { pos: [-2.3, 1.8, 0.2], scale: 0.2, speed: 1.3 },
  ];

  return shards.map((s, i) => (
    <Float key={i} speed={s.speed} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh position={s.pos} scale={s.scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color={GLASS_COLOR}
          transmission={1}
          roughness={0.05}
          thickness={0.6}
          ior={1.4}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  ));
}

export default function GlassHeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 6]} intensity={1.4} castShadow />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#7dd3fc" />

      <Suspense fallback={null}>
        <WindowModel />
        <FloatingShards />
        {/* Procedurally generated on the GPU — unlike Environment presets,
            this never fetches an external HDR file over the network (the
            "city" preset alone was pulling ~1.5MB from raw.githubusercontent.com
            on every homepage load). */}
        <Environment resolution={256}>
          <Lightformer intensity={2.5} color="white" position={[0, 4, -5]} scale={[10, 5, 1]} />
          <Lightformer intensity={1.5} color="#bae6fd" position={[-5, 1, 3]} scale={[5, 5, 1]} rotation={[0, Math.PI / 3, 0]} />
          <Lightformer intensity={1.5} color="white" position={[5, 1, 3]} scale={[5, 5, 1]} rotation={[0, -Math.PI / 3, 0]} />
        </Environment>
        <ContactShadows position={[0, -2, 0]} opacity={0.35} scale={10} blur={2.4} far={4} />
      </Suspense>
    </Canvas>
  );
}
