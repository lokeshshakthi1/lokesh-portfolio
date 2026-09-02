import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { SectionHeading } from "./SectionHeading";
import { profile } from "../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        if (sending) return;
        setSending(true);
        try {
            const res = await axios.post(`${API}/contact`, form);
            toast.success(
                res.data.email_sent
                    ? "Message sent — it landed straight in my inbox."
                    : "Message received and saved. I'll get back to you soon."
            );
            setForm({ name: "", email: "", message: "" });
        } catch {
            toast.error("Could not send right now — please email me directly instead.");
        } finally {
            setSending(false);
        }
    };

    const inputCls =
        "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-cyan-400/60 focus:bg-white/[0.07] transition-colors";

    return (
        <section id="contact" data-testid="contact-section" className="relative py-24 px-6 sm:px-10 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="07" kicker="Contact" title="Let's Build Something." />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 glass rounded-2xl p-6 lg:p-8"
                    >
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                            Open to conversations about .NET engineering, data-driven applications, production support and
                            opportunities where clean, reliable software matters.
                        </p>
                        <div className="mt-8 space-y-4 text-sm">
                            <a data-testid="contact-email-link" href={`mailto:${profile.email}`} className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors">
                                <span className="glass rounded-lg p-2 text-cyan-300"><Mail size={15} /></span> {profile.email}
                            </a>
                            <a data-testid="contact-linkedin-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors">
                                <span className="glass rounded-lg p-2 text-cyan-300"><Linkedin size={15} /></span> linkedin.com/in/lokesh-shakthi-20bb20216
                            </a>
                            <p className="flex items-center gap-3 text-slate-400">
                                <span className="glass rounded-lg p-2 text-cyan-300"><MapPin size={15} /></span> {profile.location}
                            </p>
                        </div>
                    </motion.div>

                    <motion.form
                        data-testid="contact-form"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        onSubmit={submit}
                        className="lg:col-span-7 glass rounded-2xl p-6 lg:p-8 space-y-4"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                data-testid="contact-name-input"
                                required
                                maxLength={100}
                                placeholder="Your name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className={inputCls}
                            />
                            <input
                                data-testid="contact-email-input"
                                required
                                type="email"
                                placeholder="Your email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className={inputCls}
                            />
                        </div>
                        <textarea
                            data-testid="contact-message-input"
                            required
                            maxLength={2000}
                            rows={6}
                            placeholder="Tell me about the role, project or idea..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className={`${inputCls} resize-none`}
                        />
                        <button
                            data-testid="contact-send-button"
                            type="submit"
                            disabled={sending}
                            className="inline-flex items-center gap-2 rounded-full bg-[#00F5D4] px-7 py-3 text-sm font-semibold text-[#050811] transition-transform hover:scale-[1.03] active:scale-95 disabled:opacity-60 disabled:hover:scale-100"
                        >
                            {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
