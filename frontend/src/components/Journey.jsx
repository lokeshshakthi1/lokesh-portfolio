import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { journey } from "../data/portfolio";

const Milestone = ({ item, index }) => {
    const left = index % 2 === 0;
    return (
        <motion.div
            data-testid={`journey-milestone-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative flex ${left ? "md:justify-start" : "md:justify-end"} mb-14 last:mb-0`}
        >
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 h-3.5 w-3.5 rounded-full bg-[#050811] border-2 border-cyan-400 shadow-[0_0_14px_rgba(0,245,212,0.5)]" />
            <motion.div
                whileHover={{ rotateX: 2, rotateY: left ? 2 : -2, scale: 1.015 }}
                style={{ transformStyle: "preserve-3d", perspective: 800 }}
                className={`glass rounded-2xl p-6 lg:p-8 w-full md:w-[46%] ml-12 md:ml-0 hover:border-cyan-500/40 hover:shadow-[0_0_36px_rgba(0,245,212,0.08)] transition-shadow ${
                    left ? "md:mr-auto" : "md:ml-auto"
                }`}
            >
                <span className="font-jet text-xs text-cyan-400 tracking-widest">{item.period}</span>
                <h3 className="font-display text-xl font-semibold text-slate-100 mt-2">{item.title}</h3>
                <p className="text-sm text-cyan-300/80 mt-1">{item.org}</p>
                <p className="text-sm text-slate-400 leading-relaxed mt-3">{item.detail}</p>
            </motion.div>
        </motion.div>
    );
};

export const Journey = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
    const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="journey" data-testid="journey-section" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-[#070b14]">
            <div className="max-w-6xl mx-auto" ref={ref}>
                <SectionHeading index="02" kicker="Career Journey" title="Traveling through the timeline" />
                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-800" />
                    <motion.div
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00F5D4] to-[#38BDF8] origin-top"
                        style={{ scaleY: lineScale }}
                    />
                    {journey.map((item, i) => (
                        <Milestone key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};
