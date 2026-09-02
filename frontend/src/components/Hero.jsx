import { motion } from "framer-motion";
import { ArrowDown, FolderGit2, Sparkles } from "lucide-react";
import { HeroScene } from "./HeroScene";
import { scrollToSection } from "./Nav";
import { profile } from "../data/portfolio";

const MaskedLine = ({ children, delay, className }) => (
    <div className="overflow-hidden">
        <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    </div>
);

export const Hero = ({ loaded, lowPower }) => {
    return (
        <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-60" />
            <div className="absolute inset-0">
                <HeroScene lowPower={lowPower} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#050811] via-[#050811]/70 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-24">
                {loaded && (
                    <>
                <MaskedLine delay={0.1}>
                    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 label-mono">
                        <Sparkles size={12} className="text-cyan-300" />
                        {profile.title} · {profile.company}
                    </span>
                </MaskedLine>

                <MaskedLine delay={0.25} className="mt-6">
                    <span className="font-jet text-sm text-slate-400">Hi, I'm</span>
                </MaskedLine>
                <MaskedLine delay={0.38}>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
                        {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
                    </h1>
                </MaskedLine>
                <MaskedLine delay={0.52} className="mt-5 max-w-xl">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{profile.statement}</p>
                </MaskedLine>

                <MaskedLine delay={0.68} className="mt-9 flex flex-wrap gap-4">
                    <button
                        data-testid="hero-explore-button"
                        onClick={() => scrollToSection("journey")}
                        className="group inline-flex items-center gap-2 rounded-full bg-[#00F5D4] px-6 py-3 text-sm font-semibold text-[#050811] transition-transform hover:scale-[1.04] active:scale-95"
                    >
                        Explore My Journey
                        <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
                    </button>
                    <button
                        data-testid="hero-projects-button"
                        onClick={() => scrollToSection("projects")}
                        className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                        <FolderGit2 size={16} />
                        View My Projects
                    </button>
                </MaskedLine>
                    </>
                )}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="font-jet text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent pulse-soft" />
            </motion.div>
        </section>
    );
};
