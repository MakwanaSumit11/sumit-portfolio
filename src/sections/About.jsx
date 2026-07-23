import { motion } from "framer-motion";
import { FiCloud, FiCode, FiCpu, FiTarget } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const highlights = [
  { icon: FiTarget, label: "Problem Solver" },
  { icon: FiCode, label: "Full Stack Developer" },
  { icon: FiCpu, label: "AI Enthusiast" },
  { icon: FiCloud, label: "Cloud Learner" },
];

const journey = [
  { year: "2022", label: "Started B.Tech, first lines of code" },
  { year: "2023", label: "Built first full-stack projects" },
  { year: "2024", label: "Went deep on AI & cloud" },
  { year: "2025", label: "Software Developer Internship" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Engineer by training, builder by habit."
          description="A closer look at how I think and what I've been working toward."
        />

        <div className="grid gap-12 md:grid-cols-[minmax(0,280px)_1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto w-full max-w-[280px] md:mx-0"
          >
            <div className="glass-card relative aspect-[4/5] overflow-hidden rounded-3xl">
              <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,rgba(109,93,246,0.18),rgba(34,211,238,0.12))]">
                <span className="font-display text-6xl font-semibold text-gradient">SM</span>
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[var(--border)]" />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-4 text-base leading-relaxed text-[var(--text-muted)] md:text-lg"
            >
              <p>
                I&apos;m Sumit, a full stack developer from Gujarat, India, who
                spends most of his time somewhere between a database schema
                and a model&apos;s prompt template. I like software that is
                simple to use and honest about what it does under the hood.
              </p>
              <p>
                My focus lately is on combining solid backend fundamentals —
                clean APIs, sensible data models, containerized deployments —
                with practical AI features that actually make a product
                better, not just newer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass-card flex flex-col items-center gap-2 rounded-2xl px-3 py-5 text-center transition-transform hover:-translate-y-1"
                >
                  <Icon className="text-xl text-[var(--color-accent-cyan)]" />
                  <span className="text-xs font-medium text-[var(--text)]">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="mt-10"
            >
              <div className="relative flex flex-col gap-6 border-l border-[var(--border)] pl-6 sm:flex-row sm:gap-0 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-6">
                {journey.map((step) => (
                  <div key={step.year} className="relative flex-1 sm:px-2">
                    <span className="absolute -left-[29px] top-0 h-2 w-2 rounded-full bg-[var(--color-accent-violet)] sm:-left-0 sm:-top-[29px]" />
                    <p className="font-mono text-xs text-[var(--text-faint)]">{step.year}</p>
                    <p className="mt-1 text-sm text-[var(--text)]">{step.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
