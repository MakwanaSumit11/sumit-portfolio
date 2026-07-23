import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FiX, FiGithub, FiArrowUpRight, FiCpu, FiServer, FiLayers } from "react-icons/fi";

const accentMap = {
  violet: "var(--color-accent-violet)",
  purple: "var(--color-accent-purple)",
  cyan: "var(--color-accent-cyan)",
};

export default function ProjectDetailsModal({ project, isOpen, onClose }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key press to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const accentColor = accentMap[project.accent] ?? accentMap.violet;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="glass-card-strong relative z-10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
            style={{
              boxShadow: `0 20px 50px -12px ${accentColor}18, 0 0 0 1px ${accentColor}22`,
            }}
          >
            {/* Header Image banner */}
            <div className="relative aspect-[21/9] w-full overflow-hidden border-b border-[var(--border)] bg-zinc-950">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/65 transition-colors border border-white/10"
                aria-label="Close modal"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)] bg-[var(--surface)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                    style={{ background: `linear-gradient(120deg, ${accentColor}, var(--color-accent-cyan))` }}
                  >
                    Live Demo <FiArrowUpRight />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-[var(--text)] bg-[var(--surface)] transition-colors hover:border-[var(--border-strong)]"
                  >
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>

              {/* Grid sections */}
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                  {/* Overview */}
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--text-faint)] flex items-center gap-2">
                      <FiLayers className="text-sm" /> Overview
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-[var(--text-muted)]">
                      {project.detailedDescription || project.description}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  {project.challenge && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-red-950/10 border border-red-500/10 p-4">
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-red-400">
                          The Challenge
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                          {project.challenge}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-emerald-950/10 border border-emerald-500/10 p-4">
                        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          The Solution
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Code Snippet / Architecture Highlights */}
                  {project.codeSnippet && (
                    <div>
                      <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--text-faint)] flex items-center gap-2 mb-2">
                        <FiCpu className="text-sm" /> Technical Highlight
                      </h3>
                      <pre className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-zinc-950 p-4 font-mono text-[11px] leading-relaxed text-[var(--text-muted)]">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>

                {/* Sidebar details */}
                <div className="space-y-6">
                  {/* Architecture info */}
                  {project.architecture && (
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)] flex items-center gap-2">
                        <FiServer className="text-xs" /> System Architecture
                      </h3>
                      <ul className="mt-3 space-y-2 text-xs text-[var(--text-muted)]">
                        {project.architecture.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-cyan)] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack highlight checklist */}
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-[var(--text-faint)]">
                      Key Technical Details
                    </h3>
                    <ul className="mt-3 space-y-2 text-xs text-[var(--text-muted)]">
                      <li className="flex justify-between">
                        <span>Database:</span>
                        <span className="font-semibold text-[var(--text)]">{project.dbType || "N/A"}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Framework:</span>
                        <span className="font-semibold text-[var(--text)]">{project.framework || "N/A"}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Deployment:</span>
                        <span className="font-semibold text-[var(--text)]">{project.deployment || "N/A"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
