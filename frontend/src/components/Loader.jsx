import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = ({ onDone }) => {
    const [progress, setProgress] = useState(0);
    const [gone, setGone] = useState(false);

    useEffect(() => {
        const start = Date.now();
        const tick = setInterval(() => {
            const p = Math.min(100, Math.round(((Date.now() - start) / 1900) * 100));
            setProgress(p);
            if (p >= 100) {
                clearInterval(tick);
                setTimeout(() => {
                    setGone(true);
                    onDone();
                }, 350);
            }
        }, 40);
        return () => clearInterval(tick);
    }, [onDone]);

    return (
        <AnimatePresence>
            {!gone && (
                <motion.div
                    data-testid="loader"
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050811]"
                    exit={{ opacity: 0, transition: { duration: 0.6 } }}
                >
                    <p className="label-mono mb-3">Initializing Career Universe</p>
                    <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {progress}
                        <span className="text-gradient">%</span>
                    </div>
                    <div className="mt-6 h-px w-56 bg-slate-800 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#00F5D4] to-[#38BDF8]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <button
                        data-testid="loader-skip-button"
                        onClick={() => {
                            setGone(true);
                            onDone();
                        }}
                        className="mt-8 font-jet text-xs text-slate-500 hover:text-cyan-300 transition-colors tracking-widest uppercase"
                    >
                        Skip →
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
