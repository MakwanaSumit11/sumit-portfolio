import { motion } from "framer-motion";
import { FiCode, FiGitBranch, FiAward, FiZap } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { achievements } from "../data/achievements";

const ICONS = {
  chess: FiAward,
  hackathons: FiZap,
  coding: FiCode,
  "open-source": FiGitBranch,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="Achievements" title="Beyond the day job." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.id] ?? FiAward;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6"
              >
                <Icon className="text-2xl text-[var(--color-accent-cyan)]" />
                <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{a.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
