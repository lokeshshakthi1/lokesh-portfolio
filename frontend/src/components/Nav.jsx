import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];

export const scrollToSection = (id) => {
    if (window.__lenis) {
        window.__lenis.scrollTo(`#${id}`, { offset: -20, duration: 1.4 });
    } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
};

export const Nav = () => {
    const [open, setOpen] = useState(false);

    const go = (id) => {
        setOpen(false);
        scrollToSection(id);
    };

    return (
        <>
            <motion.nav
                data-testid="main-nav"
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 hidden md:flex items-center gap-1"
            >
                {links.map((l) => (
                    <button
                        key={l.id}
                        data-testid={`nav-link-${l.id}`}
                        onClick={() => go(l.id)}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        {l.label}
                    </button>
                ))}
            </motion.nav>

            <button
                data-testid="nav-toggle-button"
                onClick={() => setOpen(!open)}
                className="fixed top-4 right-4 z-50 md:hidden glass rounded-full p-3 text-slate-200"
                aria-label="Toggle navigation menu"
            >
                {open ? <X size={18} /> : <Menu size={18} />}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid="mobile-menu"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className="fixed top-16 right-4 left-4 z-50 md:hidden glass-strong rounded-2xl p-4 flex flex-col gap-1"
                    >
                        {links.map((l) => (
                            <button
                                key={l.id}
                                data-testid={`mobile-nav-link-${l.id}`}
                                onClick={() => go(l.id)}
                                className="text-left px-4 py-2.5 rounded-xl text-sm text-slate-200 hover:bg-white/10 transition-colors"
                            >
                                {l.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
