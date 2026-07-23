import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
        />

        <div className="relative border-l border-[var(--border)] pl-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--bg)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(120deg,var(--color-accent-violet),var(--color-accent-cyan))]" />
              </span>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                  <span className="eyebrow">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent-cyan)]">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-[var(--text-muted)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-faint)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
