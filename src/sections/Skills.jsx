import { motion } from "framer-motion";
import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiSpring,
  SiTailwindcss,
} from "react-icons/si";
import { FiCloud, FiCpu, FiMessageSquare, FiShare2 } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/skills";

const ICONS = {
  Java: FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  "Spring Boot": SiSpring,
  FastAPI: SiFastapi,
  AWS: FiCloud,
  Docker: SiDocker,
  "REST API": FiShare2,
  "AI / ML": FiCpu,
  "Prompt Engineering": FiMessageSquare,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.04, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for."
          description="Grouped by where they sit in a product, from the interface down to the infrastructure."
        />

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--text-faint)]">
                {group.label}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.skills.map((skill, i) => {
                  const Icon = ICONS[skill.name] ?? FiCpu;
                  return (
                    <motion.div
                      key={skill.name}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ y: -4 }}
                      className="glass-card group flex items-center gap-3 rounded-2xl px-4 py-4 transition-colors hover:border-[var(--border-strong)]"
                    >
                      <Icon className="shrink-0 text-xl text-[var(--color-accent-violet)] transition-colors group-hover:text-[var(--color-accent-cyan)]" />
                      <span className="text-sm font-medium text-[var(--text)]">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
