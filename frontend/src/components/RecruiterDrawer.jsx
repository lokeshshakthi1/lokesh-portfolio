import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X, Mail, Linkedin, MapPin } from "lucide-react";
import { profile, experience, certifications } from "../data/portfolio";

export const RecruiterDrawer = () => {
    const [open, setOpen] = useState(false);
    const topSkills = ["C#", ".NET", "SQL Server", "Python", "ASP.NET MVC", "Azure", "T-SQL", "Agile"];

    return (
        <>
            <motion.button
                data-testid="recruiter-mode-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4 }}
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#00F5D4] px-5 py-3 text-xs font-bold text-[#050811] shadow-[0_0_30px_rgba(0,245,212,0.35)] transition-transform hover:scale-105 active:scale-95"
            >
                <Zap size={14} />
                Recruiter Mode
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    >
                        <motion.aside
                            data-testid="recruiter-drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 240 }}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute right-0 top-0 h-full w-full sm:w-[440px] glass-strong overflow-y-auto p-7"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <p className="label-mono mb-2">Executive Summary</p>
                                    <h3 className="font-display text-2xl font-bold text-white">{profile.name}</h3>
                                    <p className="text-sm text-cyan-300 mt-1">
                                        {profile.title} · {profile.company}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1 inline-flex items-center gap-1">
                                        <MapPin size={11} /> {profile.location}
                                    </p>
                                </div>
                                <button
                                    data-testid="recruiter-close-button"
                                    onClick={() => setOpen(false)}
                                    className="glass rounded-full p-2.5 text-slate-300 hover:text-white"
                                    aria-label="Close recruiter summary"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="glass rounded-xl p-4 mb-6">
                                <p className="text-xs text-slate-300 leading-relaxed">{profile.statement}</p>
                            </div>

                            <p className="font-jet text-[10px] tracking-widest uppercase text-cyan-400 mb-2">Core Stack</p>
                            <div className="flex flex-wrap gap-1.5 mb-6">
                                {topSkills.map((s) => (
                                    <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200">
                                        {s}
                                    </span>
                                ))}
                            </div>

                            <p className="font-jet text-[10px] tracking-widest uppercase text-cyan-400 mb-2">Experience</p>
                            <div className="space-y-3 mb-6">
                                {experience.map((r, i) => (
                                    <div key={i} className="border-l-2 border-cyan-400/30 pl-3">
                                        <p className="text-sm text-slate-200 font-medium">{r.position}</p>
                                        <p className="text-xs text-slate-500">
                                            {r.company} · {r.period}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="font-jet text-[10px] tracking-widest uppercase text-cyan-400 mb-2">Certifications</p>
                            <ul className="space-y-1.5 mb-8">
                                {certifications.map((c, i) => (
                                    <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                                        <span className="h-1 w-1 rounded-full bg-cyan-400" /> {c.name}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-3">
                                <a
                                    data-testid="recruiter-email-button"
                                    href={`mailto:${profile.email}`}
                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#00F5D4] px-4 py-2.5 text-xs font-bold text-[#050811]"
                                >
                                    <Mail size={13} /> Email Me
                                </a>
                                <a
                                    data-testid="recruiter-linkedin-button"
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full glass px-4 py-2.5 text-xs font-semibold text-slate-100 hover:border-cyan-400/50"
                                >
                                    <Linkedin size={13} /> LinkedIn
                                </a>
                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
