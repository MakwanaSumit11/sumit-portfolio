import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiArrowUpRight, FiLayers, FiCpu, FiServer } from "react-icons/fi";
import { projects } from "../data/projects";

const accentMap = {
  violet: "var(--color-accent-violet)",
  purple: "var(--color-accent-purple)",
  cyan: "var(--color-accent-cyan)",
};

export default function ProjectsHub({ onBack }) {
  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="section-container relative z-10">
        {/* Navigation back */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer bg-[var(--surface)]"
        >
          <FiArrowLeft /> Back to Portfolio
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Projects Portfolio
          </h1>
          <p className="mt-2 text-base text-[var(--text-muted)] max-w-xl">
            A comprehensive dive into my systems, technical architectures, and specific challenges solved.
          </p>
        </motion.div>

        {/* Detailed Projects Stack */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const accentColor = accentMap[project.accent] ?? accentMap.violet;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-card-strong rounded-3xl p-6 md:p-8 border border-[var(--border)] relative overflow-hidden"
                style={{
                  boxShadow: `0 10px 30px -10px ${accentColor}0f`,
                }}
              >
                {/* Visual Accent Glow */}
                <div
                  className="absolute top-0 right-0 h-48 w-48 rounded-full blur-[100px] opacity-25 pointer-events-none"
                  style={{ background: accentColor }}
                />

                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-6 mb-6">
                  <div>
                    <span className="eyebrow text-[10px] tracking-widest text-[var(--color-accent-cyan)] font-mono">
                      Project 0{idx + 1}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mt-1">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                      style={{ background: `linear-gradient(120deg, ${accentColor}, var(--color-accent-cyan))` }}
                    >
                      Live Demo <FiArrowUpRight />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-[var(--text)] bg-[var(--surface)] transition-colors hover:border-[var(--border-strong)]"
                    >
                      <FiGithub /> Source Code
                    </a>
                  </div>
                </div>

                {/* Split layouts */}
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-6">
                    {/* Detailed explanation */}
                    <div>
                      <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)] flex items-center gap-2">
                        <FiLayers className="text-xs text-[var(--color-accent-cyan)]" /> Project Details
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                        {project.detailedDescription}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-rose-950/10 border border-rose-500/10 p-4">
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-rose-400">
                          The Challenge
                        </h4>
                        <p className="mt-2 text-[11px] leading-relaxed text-[var(--text-muted)]">
                          {project.challenge}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-emerald-950/10 border border-emerald-500/10 p-4">
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          The Solution
                        </h4>
                        <p className="mt-2 text-[11px] leading-relaxed text-[var(--text-muted)]">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Code Highlight */}
                    <div>
                      <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)] flex items-center gap-2 mb-2">
                        <FiCpu className="text-xs text-[var(--color-accent-cyan)]" /> Code implementation snippet
                      </h3>
                      <pre className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-zinc-950 p-4 font-mono text-[10px] leading-relaxed text-[var(--text-muted)]">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Sidebar Metadata */}
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)] flex items-center gap-2">
                        <FiServer className="text-xs text-[var(--color-accent-cyan)]" /> System Architecture
                      </h3>
                      <ul className="mt-3 space-y-2 text-xs text-[var(--text-muted)]">
                        {project.architecture.map((item, idy) => (
                          <li key={idy} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-cyan)] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--text-faint)] mb-3">
                        Tech Stack Used
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[var(--border)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)] bg-[var(--surface-strong)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 text-xs text-[var(--text-muted)] space-y-2">
                      <div className="flex justify-between">
                        <span>Database:</span>
                        <span className="font-semibold text-[var(--text)]">{project.dbType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Framework:</span>
                        <span className="font-semibold text-[var(--text)]">{project.framework}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deployment:</span>
                        <span className="font-semibold text-[var(--text)]">{project.deployment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
