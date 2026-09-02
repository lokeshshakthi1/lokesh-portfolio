import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export const SoundToggle = () => {
    const [on, setOn] = useState(false);
    const audioRef = useRef(null);

    const start = () => {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        const ctx = new Ctx();
        const master = ctx.createGain();
        master.gain.value = 0;
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 420;
        filter.connect(master);
        master.connect(ctx.destination);

        const oscs = [55, 82.5, 110].map((freq, i) => {
            const osc = ctx.createOscillator();
            osc.type = "sine";
            osc.frequency.value = freq;
            const g = ctx.createGain();
            g.gain.value = i === 0 ? 0.5 : 0.22;
            osc.connect(g);
            g.connect(filter);
            osc.start();
            return osc;
        });

        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.08;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 0.015;
        lfo.connect(lfoGain);
        lfoGain.connect(master.gain);
        lfo.start();

        master.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 1.8);
        audioRef.current = { ctx, master, oscs, lfo };
    };

    const stop = () => {
        const a = audioRef.current;
        if (!a) return;
        a.master.gain.linearRampToValueAtTime(0, a.ctx.currentTime + 0.4);
        setTimeout(() => {
            a.oscs.forEach((o) => o.stop());
            a.lfo.stop();
            a.ctx.close();
        }, 500);
        audioRef.current = null;
    };

    const toggle = () => {
        if (on) {
            stop();
            setOn(false);
        } else {
            start();
            setOn(true);
        }
    };

    useEffect(() => () => stop(), []);

    return (
        <motion.button
            data-testid="sound-toggle-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
            onClick={toggle}
            aria-label={on ? "Mute ambient sound" : "Enable ambient sound"}
            className={`fixed bottom-6 left-6 z-50 glass rounded-full p-3 transition-colors ${
                on ? "text-[#00F5D4] border-cyan-400/50" : "text-slate-400 hover:text-slate-200"
            }`}
        >
            {on ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </motion.button>
    );
};
