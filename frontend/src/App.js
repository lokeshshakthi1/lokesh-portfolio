import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { Loader } from "./components/Loader";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Journey } from "./components/Journey";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { RecruiterDrawer } from "./components/RecruiterDrawer";
import { profile } from "./data/portfolio";

function App() {
    const [loaded, setLoaded] = useState(false);
    const [lowPower, setLowPower] = useState(false);

    useEffect(() => {
        const mobile = window.matchMedia("(max-width: 767px)").matches;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setLowPower(mobile || reduced);

        const lenis = new Lenis({ lerp: 0.09, smoothWheel: !reduced });
        window.__lenis = lenis;
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <div className="App" data-testid="career-universe-app">
            <Loader onDone={() => setLoaded(true)} />
            <Nav />
            <main>
                <Hero loaded={loaded} lowPower={lowPower} />
                <Marquee />
                <About />
                <Journey />
                <Skills lowPower={lowPower} />
                <Projects />
                <Experience />
                <Education />
                <Contact />
            </main>
            <footer data-testid="site-footer" className="border-t border-white/5 py-8 px-6 text-center">
                <p className="font-jet text-[11px] text-slate-500 tracking-widest uppercase">
                    {profile.name} · {profile.title} · Crafted as an interactive career universe
                </p>
            </footer>
            <RecruiterDrawer />
            <Toaster theme="dark" position="bottom-center" />
        </div>
    );
}

export default App;
