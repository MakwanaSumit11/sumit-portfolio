import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheck, FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import GradientBlobs from "../components/GradientBlobs";

const contactLinks = [
  { icon: FiMail, label: "Email", value: "hello@sumit11.tech", href: "mailto:hello@sumit11.tech" },
  { icon: FiLinkedin, label: "LinkedIn", value: "/in/sumit-makwana", href: "https://linkedin.com" },
  { icon: FiGithub, label: "GitHub", value: "/sumitmakwana", href: "https://github.com" },
  { icon: FiMapPin, label: "Location", value: "Gujarat, India", href: null },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    // Placeholder submit — wire this up to an email/service endpoint
    // (Formspree, EmailJS, or a custom API route) when deploying.
    setTimeout(() => setStatus("sent"), 1400);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <GradientBlobs />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Have a role, a project, or just want to talk shop? I'd love to hear from you."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-3"
          >
            {contactLinks.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  href={href ?? undefined}
                  className="glass-card flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-[var(--border-strong)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-strong)] text-[var(--color-accent-cyan)]">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-xs text-[var(--text-faint)]">{label}</span>
                    <span className="block text-sm font-medium text-[var(--text)]">{value}</span>
                  </span>
                </Wrapper>
              );
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card rounded-3xl p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-xs font-medium text-[var(--text-faint)]">Name</span>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--color-accent-violet)]"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-1.5 block text-xs font-medium text-[var(--text-faint)]">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--color-accent-violet)]"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium text-[var(--text-faint)]">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about what you're building..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-faint)] focus:border-[var(--color-accent-violet)]"
                />
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors bg-[linear-gradient(120deg,var(--color-accent-violet),var(--color-accent-purple),var(--color-accent-cyan))] disabled:opacity-80"
              disabled={status !== "idle"}
            >
              {status === "idle" && (
                <>
                  <FiSend /> Send Message
                </>
              )}
              {status === "sending" && (
                <motion.span
                  className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                />
              )}
              {status === "sent" && (
                <>
                  <FiCheck /> Message Sent
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
