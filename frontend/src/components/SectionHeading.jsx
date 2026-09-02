import { motion } from "framer-motion";

export const SectionHeading = ({ index, kicker, title }) => (
    <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-12"
    >
        <div className="flex items-center gap-3 mb-3">
            <span className="font-jet text-xs text-cyan-400">{index}</span>
            <span className="h-px w-10 bg-cyan-400/40" />
            <span className="label-mono">{kicker}</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">{title}</h2>
    </motion.div>
);
