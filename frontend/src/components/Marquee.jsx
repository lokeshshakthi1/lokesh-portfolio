import { marqueeItems } from "../data/portfolio";

export const Marquee = () => {
    const items = [...marqueeItems, ...marqueeItems];
    return (
        <div data-testid="tech-marquee" className="relative border-y border-white/5 bg-[#070b14] py-5 overflow-hidden" aria-hidden="true">
            <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-10">
                        <span className="font-display text-lg font-semibold tracking-wide text-slate-400">{item}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
                    </span>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050811] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050811] to-transparent" />
        </div>
    );
};
