"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

// Optimized power grid topology network
function Network() {
    const groupRef = useRef<THREE.Group>(null);

    // Generate node positions and line connections only once
    const { positions, lines } = useMemo(() => {
        const pts = [];
        const lineIndices = [];
        const NODE_COUNT = 60;

        for (let i = 0; i < NODE_COUNT; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const radius = 3 + Math.random() * 6; // Spread them outward

            pts.push(
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi)
            );
        }

        // Connect nodes that are close to each other
        for (let i = 0; i < NODE_COUNT; i++) {
            for (let j = i + 1; j < NODE_COUNT; j++) {
                const dx = pts[i * 3] - pts[j * 3];
                const dy = pts[i * 3 + 1] - pts[j * 3 + 1];
                const dz = pts[i * 3 + 2] - pts[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < 3.5) {
                    lineIndices.push(i, j);
                }
            }
        }

        return {
            positions: new Float32Array(pts),
            lines: new Uint16Array(lineIndices)
        };
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle auto-rotation and floating
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
            groupRef.current.rotation.x = state.clock.elapsedTime * 0.02;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;

            // Slight mouse interaction mapped to group rotation
            const targetX = (state.pointer.x * Math.PI) / 8;
            const targetY = (state.pointer.y * Math.PI) / 8;
            groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
            groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Nodes (Single draw call) */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.2} color="#9d2235" sizeAttenuation transparent opacity={0.8} />
            </points>

            {/* Network Connections (Single draw call) */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="index"
                        args={[lines, 1]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#ae152d" transparent opacity={0.25} />
            </lineSegments>

            {/* Central Core - Simplified material for performance */}
            <mesh>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.9}
                    roughness={0.1}
                    metalness={0.2}
                />
            </mesh>
            {/* Inner Core */}
            <mesh>
                <sphereGeometry args={[1.2, 16, 16]} />
                <meshStandardMaterial color="#9d2235" wireframe />
            </mesh>
        </group>
    );
}

export function Hero3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color={'#ffffff'} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color={'#c5a47e'} />
                <Environment preset="city" />
                <Network />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
