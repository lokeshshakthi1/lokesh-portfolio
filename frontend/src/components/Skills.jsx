import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls, Float } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

const clusterPositions = [
    [-3.4, 1.2, 0],
    [0.2, 2.0, -1.2],
    [3.4, 0.9, 0.4],
    [-1.6, -1.8, 0.6],
    [2.2, -1.7, -0.8],
];

const buildNodes = () => {
    const nodes = [];
    skillGroups.forEach((group, gi) => {
        const center = clusterPositions[gi % clusterPositions.length];
        group.skills.forEach((skill, si) => {
            const a = (si / group.skills.length) * Math.PI * 2 + gi;
            const r = 0.9 + (si % 3) * 0.35;
            nodes.push({
                ...skill,
                group: group.name,
                color: group.color,
                center,
                pos: [center[0] + Math.cos(a) * r, center[1] + Math.sin(a) * r * 0.7, center[2] + Math.sin(a * 1.7) * 0.8],
            });
        });
    });
    return nodes;
};

const SkillNodes = ({ nodes, active, setActive }) => {
    const groupRef = useRef();
    useFrame((_, d) => {
        if (groupRef.current) groupRef.current.rotation.y += d * 0.04;
    });
    return (
        <group ref={groupRef}>
            {nodes.map((n, i) => (
                <Line
                    key={`l-${i}`}
                    points={[n.center, n.pos]}
                    color={n.color}
                    transparent
                    opacity={active && active.name === n.name ? 0.7 : 0.12}
                    lineWidth={1}
                />
            ))}
            {nodes.map((n, i) => {
                const isActive = active && active.name === n.name;
                return (
                    <Float key={i} speed={1.6} floatIntensity={0.5} rotationIntensity={0}>
                        <mesh
                            position={n.pos}
                            onPointerOver={(e) => {
                                e.stopPropagation();
                                setActive(n);
                                document.body.style.cursor = "pointer";
                            }}
                            onPointerOut={() => {
                                document.body.style.cursor = "auto";
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActive(n);
                            }}
                            scale={isActive ? 1.7 : 1}
                        >
                            <sphereGeometry args={[0.085, 16, 16]} />
                            <meshStandardMaterial
                                color={n.color}
                                emissive={n.color}
                                emissiveIntensity={isActive ? 2.4 : 0.9}
                                metalness={0.6}
                                roughness={0.3}
                            />
                        </mesh>
                    </Float>
                );
            })}
        </group>
    );
};

const SkillUniverse = ({ active, setActive, lowPower }) => {
    const nodes = useMemo(buildNodes, []);
    return (
        <Canvas camera={{ position: [0, 0.4, 9], fov: 52 }} dpr={lowPower ? 1 : [1, 1.5]} gl={{ antialias: true, alpha: true }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[6, 5, 6]} intensity={50} distance={25} color="#00F5D4" />
            <SkillNodes nodes={nodes} active={active} setActive={setActive} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
    );
};

export const Skills = ({ lowPower }) => {
    const [active, setActive] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        setIsMobile(mq.matches);
        const fn = (e) => setIsMobile(e.matches);
        mq.addEventListener("change", fn);
        return () => mq.removeEventListener("change", fn);
    }, []);

    return (
        <section id="skills" data-testid="skills-section" className="relative py-24 px-6 sm:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <SectionHeading index="03" kicker="Skill Universe" title="Technologies in orbit" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 glass rounded-2xl overflow-hidden relative min-h-[380px] md:min-h-[480px]">
                        {isMobile ? (
                            <div className="p-6 grid grid-cols-2 gap-3" data-testid="skills-mobile-grid">
                                {skillGroups.map((g) => (
                                    <div key={g.name}>
                                        <p className="font-jet text-[10px] tracking-widest uppercase mb-2" style={{ color: g.color }}>
                                            {g.name}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {g.skills.map((s) => (
                                                <button
                                                    key={s.name}
                                                    data-testid={`skill-chip-${s.name.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
                                                    onClick={() => setActive({ ...s, group: g.name, color: g.color })}
                                                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                                                >
                                                    {s.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <SkillUniverse active={active} setActive={setActive} lowPower={lowPower} />
                        )}
                        <p className="absolute bottom-3 left-4 font-jet text-[10px] text-slate-500 tracking-widest uppercase hidden md:block">
                            Drag to rotate · Hover a node
                        </p>
                    </div>

                    <div className="lg:col-span-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active ? active.name : "empty"}
                                data-testid="skill-detail-panel"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="glass rounded-2xl p-6 lg:p-8 h-full min-h-[200px]"
                            >
                                {active ? (
                                    <>
                                        <span className="font-jet text-[10px] tracking-widest uppercase" style={{ color: active.color }}>
                                            {active.group}
                                        </span>
                                        <h3 className="font-display text-2xl font-bold text-white mt-2">{active.name}</h3>
                                        <p className="text-sm text-slate-300 leading-relaxed mt-3">{active.note}</p>
                                    </>
                                ) : (
                                    <div className="h-full flex flex-col justify-center">
                                        <p className="font-jet text-xs text-cyan-400 tracking-widest uppercase mb-2">Node Inspector</p>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            Hover or tap any node in the universe to inspect the technology and where it shows up in my work.
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
