import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiArrowUpRight, FiGithub, FiInfo } from "react-icons/fi";

const accentMap = {
  violet: "var(--color-accent-violet)",
  purple: "var(--color-accent-purple)",
  cyan: "var(--color-accent-cyan)",
};

export default function ProjectCard({ project, index, onOpenDetails }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const accent = accentMap[project.accent] ?? accentMap.violet;

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -4, ry: px * 6 });
  };

  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="glass-card group relative flex h-full flex-col overflow-hidden rounded-3xl cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        onClick={() => onOpenDetails(project)}
      >
        <div
          className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-[var(--border)] bg-zinc-950"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          ) : (
            <span className="font-display text-sm text-[var(--text-faint)]">Project preview</span>
          )}
          <div
            className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: accent, opacity: 0.25 }}
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold group-hover:text-[var(--color-accent-cyan)] transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-muted)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 cursor-pointer"
              style={{ background: `linear-gradient(120deg, ${accent}, var(--color-accent-cyan))` }}
            >
              Details <FiInfo />
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-2 text-xs font-semibold text-[var(--text)] transition-colors hover:border-[var(--border-strong)]"
            >
              Demo <FiArrowUpRight />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-2 text-xs font-semibold text-[var(--text)] transition-colors hover:border-[var(--border-strong)]"
            >
              <FiGithub /> Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
