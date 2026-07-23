import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import GradientBlobs from "../components/GradientBlobs";
import NeuralGraph from "../components/NeuralGraph";
import { PrimaryButton, SecondaryButton, GhostButton } from "../components/Buttons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero({ onViewProjects }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      <div className="mesh-bg absolute inset-0 opacity-70" aria-hidden="true" />
      <GradientBlobs />
      <div className="noise-overlay" aria-hidden="true" />

      <div className="section-container relative z-10 grid items-center gap-14 md:grid-cols-2 md:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-cyan)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-cyan)]" />
            </span>
            <span className="eyebrow">Open to opportunities · Gujarat, India</span>
          </motion.div>

          <motion.p variants={item} className="font-display text-xl font-medium text-[var(--text-muted)] md:text-2xl">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-1 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Sumit Makwana
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-4 font-display text-2xl font-medium leading-tight md:text-3xl"
          >
            <span className="text-gradient">Full Stack Developer</span>
            <span className="text-[var(--text-muted)]"> &amp; </span>
            <span className="text-gradient">AI Engineer</span>
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
            I design and build mobile apps, databases, and AI systems — turning ambitious ideas into products that ship.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryButton href="#projects" onClick={(e) => { e.preventDefault(); onViewProjects(); }}>
              View Projects
            </PrimaryButton>
            <SecondaryButton href="/resume.pdf" download>
              <FiDownload /> Download Resume
            </SecondaryButton>
            <GhostButton href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
              <FiMail /> Contact Me
            </GhostButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <div className="glass-card relative rounded-[28px] p-4 md:p-6">
            <NeuralGraph className="h-auto w-full" />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-faint)] md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="eyebrow">Scroll</span>
        <FiArrowDown />
      </motion.button>
    </section>
  );
}
