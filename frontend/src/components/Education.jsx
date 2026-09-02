import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education, certifications } from "../data/portfolio";

export const Education = () => (
    <section id="education" data-testid="education-section" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-[#070b14]">
        <div className="max-w-6xl mx-auto">
            <SectionHeading index="06" kicker="Education & Certifications" title="Foundations and credentials" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-5">
                    {education.map((ed, i) => (
                        <motion.div
                            key={i}
                            data-testid={`education-card-${i}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="glass rounded-2xl p-6 lg:p-8 hover:border-cyan-500/30 transition-colors"
                        >
                            <span className="glass inline-block rounded-xl p-3 text-cyan-300 mb-4">
                                <GraduationCap size={20} />
                            </span>
                            <h3 className="font-display text-lg font-semibold text-white leading-snug">{ed.degree}</h3>
                            <p className="text-sm text-cyan-300/80 mt-1.5">{ed.institution}</p>
                            <p className="font-jet text-xs text-slate-500 mt-2">{ed.period}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="glass rounded-2xl p-6 lg:p-8 hover:border-cyan-500/30 transition-colors"
                >
                    <span className="glass inline-block rounded-xl p-3 text-cyan-300 mb-4">
                        <BadgeCheck size={20} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white mb-5">Certifications</h3>
                    <ul className="space-y-4">
                        {certifications.map((cert, i) => (
                            <li key={i} data-testid={`certification-${i}`} className="flex items-center gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#00F5D4] to-[#38BDF8] shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-200 font-medium">{cert.name}</p>
                                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    </section>
);
