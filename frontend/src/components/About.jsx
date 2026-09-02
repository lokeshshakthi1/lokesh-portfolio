import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { profile, aboutStory } from "../data/portfolio";

export const About = () => (
    <section id="about" data-testid="about-section" className="relative py-24 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
            <SectionHeading index="01" kicker="About" title="The engineer behind the universe" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="lg:col-span-7 glass rounded-2xl p-6 lg:p-10 hover:border-cyan-500/30 transition-colors"
                >
                    {aboutStory.map((p, i) => (
                        <p key={i} className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5 last:mb-0">
                            {p}
                        </p>
                    ))}
                    <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} className="text-cyan-400" /> {profile.location}
                        </span>
                        <a
                            data-testid="about-email-link"
                            href={`mailto:${profile.email}`}
                            className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                        >
                            <Mail size={14} className="text-cyan-400" /> {profile.email}
                        </a>
                        <a
                            data-testid="about-linkedin-link"
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
                        >
                            <Linkedin size={14} className="text-cyan-400" /> LinkedIn
                        </a>
                    </div>
                </motion.div>

                <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                    {profile.stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            data-testid={`stat-card-${i}`}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-500/30 transition-colors"
                        >
                            <span className="font-display text-4xl font-extrabold text-gradient">{s.value}</span>
                            <span className="text-sm text-slate-400">{s.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
