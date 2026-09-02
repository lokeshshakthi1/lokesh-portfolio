import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { experience } from "../data/portfolio";

export const Experience = () => (
    <section id="experience" data-testid="experience-section" className="relative py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
            <SectionHeading index="05" kicker="Experience" title="Roles that shaped the craft" />
            <div className="space-y-5">
                {experience.map((role, i) => (
                    <motion.div
                        key={i}
                        data-testid={`experience-role-${i}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="glass rounded-2xl p-6 lg:p-8 hover:border-cyan-500/30 transition-colors"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div className="flex items-start gap-4">
                                <span className="glass rounded-xl p-3 text-cyan-300 shrink-0">
                                    <Briefcase size={18} />
                                </span>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-white">{role.position}</h3>
                                    <p className="text-sm text-cyan-300/80 mt-0.5">{role.company}</p>
                                    <p className="text-xs text-slate-500 mt-1 inline-flex items-center gap-1">
                                        <MapPin size={11} /> {role.location}
                                    </p>
                                </div>
                            </div>
                            <span className="font-jet text-xs text-slate-400 tracking-wider bg-white/5 border border-white/10 rounded-full px-3 py-1">
                                {role.period}
                            </span>
                        </div>
                        <ul className="space-y-2.5 pl-1">
                            {role.points.map((pt, j) => (
                                <li key={j} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                                    <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
