"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  const group = useRef();

  let i = 0;
  useFrame(() => {
    group.current.rotation.x += 0.01; // Adjust the rotation speed as needed
    group.current.rotation.y = 0.02;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={2.5}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");
