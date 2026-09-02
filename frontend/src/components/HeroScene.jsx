import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";

const useMouse = () => {
    const mouse = useRef({ x: 0, y: 0 });
    useEffect(() => {
        const onMove = (e) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);
    return mouse;
};

const Core = () => {
    const outer = useRef();
    const inner = useRef();
    useFrame((_, d) => {
        outer.current.rotation.y += d * 0.12;
        outer.current.rotation.x += d * 0.04;
        inner.current.rotation.y -= d * 0.18;
    });
    return (
        <group>
            <mesh ref={outer}>
                <icosahedronGeometry args={[1.7, 1]} />
                <meshBasicMaterial wireframe color="#00F5D4" transparent opacity={0.32} />
            </mesh>
            <mesh ref={inner}>
                <icosahedronGeometry args={[1.0, 0]} />
                <meshStandardMaterial
                    color="#0e7490"
                    emissive="#00F5D4"
                    emissiveIntensity={0.55}
                    metalness={0.85}
                    roughness={0.25}
                    flatShading
                />
            </mesh>
        </group>
    );
};

const OrbitRing = ({ radius, tilt, speed, nodeCount }) => {
    const ring = useRef();
    useFrame((_, d) => {
        ring.current.rotation.z += d * speed;
    });
    const nodes = useMemo(
        () =>
            Array.from({ length: nodeCount }, (_, i) => {
                const a = (i / nodeCount) * Math.PI * 2;
                return [Math.cos(a) * radius, Math.sin(a) * radius, 0];
            }),
        [radius, nodeCount]
    );
    return (
        <group rotation={tilt}>
            <mesh>
                <torusGeometry args={[radius, 0.004, 8, 128]} />
                <meshBasicMaterial color="#38BDF8" transparent opacity={0.22} />
            </mesh>
            <group ref={ring}>
                {nodes.map((p, i) => (
                    <mesh key={i} position={p}>
                        <sphereGeometry args={[0.045, 12, 12]} />
                        <meshStandardMaterial color="#00F5D4" emissive="#00F5D4" emissiveIntensity={1.6} />
                    </mesh>
                ))}
            </group>
        </group>
    );
};

const ParallaxGroup = ({ children }) => {
    const group = useRef();
    const mouse = useMouse();
    useFrame(() => {
        if (!group.current) return;
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.current.x * 0.28, 0.05);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouse.current.y * 0.18, 0.05);
    });
    return <group ref={group}>{children}</group>;
};

export const HeroScene = ({ lowPower }) => {
    return (
        <Canvas
            data-testid="hero-3d-scene"
            camera={{ position: [0, 0, 6.2], fov: 50 }}
            dpr={lowPower ? 1 : [1, 1.75]}
            gl={{ antialias: true, alpha: true }}
            style={{ pointerEvents: "none" }}
        >
            <ambientLight intensity={0.35} />
            <pointLight position={[5, 4, 5]} intensity={60} distance={20} color="#00F5D4" />
            <pointLight position={[-5, -3, 3]} intensity={40} distance={20} color="#38BDF8" />
            <ParallaxGroup>
                <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.7}>
                    <Core />
                    <OrbitRing radius={2.5} tilt={[Math.PI / 2.4, 0, 0]} speed={0.25} nodeCount={5} />
                    <OrbitRing radius={3.1} tilt={[Math.PI / 1.7, 0.5, 0]} speed={-0.18} nodeCount={7} />
                </Float>
            </ParallaxGroup>
            <Stars radius={80} depth={45} count={lowPower ? 1200 : 3200} factor={3} saturation={0.4} fade speed={0.5} />
        </Canvas>
    );
};
