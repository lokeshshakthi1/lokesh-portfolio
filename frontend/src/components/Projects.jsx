import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Layers, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects } from "../data/portfolio";

const TiltCard = ({ project, index, onOpen }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({
            x: ((e.clientY - r.top) / r.height - 0.5) * -8,
            y: ((e.clientX - r.left) / r.width - 0.5) * 8,
        });
    };

    return (
        <motion.button
            data-testid={`project-card-${project.id}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            onMouseMove={onMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            onClick={onOpen}
            style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            className="glass text-left rounded-2xl p-6 lg:p-8 w-full transition-shadow hover:shadow-[0_0_44px_rgba(0,245,212,0.1)] hover:border-cyan-500/40"
        >
            <div className="flex items-start justify-between gap-4">
                <span className="glass rounded-xl p-3 text-cyan-300">
                    <Layers size={20} />
                </span>
                <span className="font-jet text-[10px] text-slate-500 tracking-widest uppercase">0{index + 1}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-white mt-5 leading-snug">{project.name}</h3>
            <p className="text-sm text-cyan-300/80 mt-1.5">{project.tagline}</p>
            <p className="font-jet text-[11px] text-slate-500 mt-3">{project.role}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
                {project.environment.slice(0, 6).map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {t}
                    </span>
                ))}
                {project.environment.length > 6 && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full text-cyan-300">+{project.environment.length - 6}</span>
                )}
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-cyan-300 mt-5 font-medium">
                Open project view <ChevronRight size={14} />
            </span>
        </motion.button>
    );
};

export const Projects = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" data-testid="projects-section" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-[#070b14]">
            <div className="max-w-7xl mx-auto">
                <SectionHeading index="04" kicker="Project Gallery" title="Enterprise work, up close" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((p, i) => (
                        <TiltCard key={p.id} project={p} index={i} onOpen={() => setSelected(p)} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        data-testid="project-detail-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 30, scale: 0.97 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-strong rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 lg:p-10"
                        >
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <div>
                                    <p className="label-mono mb-2">{selected.role}</p>
                                    <h3 className="font-display text-2xl font-bold text-white leading-snug">{selected.name}</h3>
                                </div>
                                <button
                                    data-testid="project-modal-close-button"
                                    onClick={() => setSelected(null)}
                                    className="glass rounded-full p-2.5 text-slate-300 hover:text-white shrink-0"
                                    aria-label="Close project details"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-1.5 my-5">
                                {selected.environment.map((t) => (
                                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <ul className="space-y-3">
                                {selected.points.map((pt, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
