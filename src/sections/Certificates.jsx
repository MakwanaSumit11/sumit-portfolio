import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Certificates" title="Credentials along the way." />

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="glass-card flex min-w-[260px] shrink-0 snap-start items-center gap-4 rounded-2xl p-5 md:min-w-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(140deg,var(--color-accent-violet),var(--color-accent-cyan))]">
                <FiAward className="text-lg text-white" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold leading-snug">{cert.title}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
