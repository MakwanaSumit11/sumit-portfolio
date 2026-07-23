import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

// Custom CSS-based 3D Rubik's Cube Animation
function RubiksCube() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center" style={{ perspective: "400px" }}>
      <style>{`
        @keyframes spinCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        .cube-3d {
          width: 32px;
          height: 32px;
          position: relative;
          transform-style: preserve-3d;
          animation: spinCube 12s infinite linear;
        }
        .cube-face {
          position: absolute;
          width: 32px;
          height: 32px;
          border: 1px solid var(--bg);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(0,0,0,0.85);
          padding: 1px;
        }
        .cube-face div {
          border-radius: 1.5px;
        }
        .face-front  { transform: rotateY(0deg) translateZ(16px); }
        .face-back   { transform: rotateY(180deg) translateZ(16px); }
        .face-left   { transform: rotateY(-90deg) translateZ(16px); }
        .face-right  { transform: rotateY(90deg) translateZ(16px); }
        .face-top    { transform: rotateX(90deg) translateZ(16px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(16px); }
      `}</style>
      <div className="cube-3d">
        {/* Front Face - Blue */}
        <div className="cube-face face-front">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-[var(--color-accent-cyan)]" />
          ))}
        </div>
        {/* Back Face - Purple */}
        <div className="cube-face face-back">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-[var(--color-accent-purple)]" />
          ))}
        </div>
        {/* Left Face - Green */}
        <div className="cube-face face-left">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-emerald-500" />
          ))}
        </div>
        {/* Right Face - Orange */}
        <div className="cube-face face-right">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-amber-500" />
          ))}
        </div>
        {/* Top Face - Yellow */}
        <div className="cube-face face-top">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-yellow-400" />
          ))}
        </div>
        {/* Bottom Face - Red */}
        <div className="cube-face face-bottom">
          {Array(9).fill(0).map((_, i) => (
            <div key={i} className="bg-rose-500" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Custom Full-Stack Code console + Server interaction animation
function FullStackAnim() {
  return (
    <div className="relative flex h-16 w-full items-center justify-center">
      <style>{`
        @keyframes typing {
          0%, 100% { width: 0 }
          50% { width: 42px }
        }
        @keyframes pulseServer {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .code-box {
          border: 1px solid var(--border);
          border-radius: 6px;
          background: rgba(0,0,0,0.4);
          padding: 4px 6px;
          font-family: var(--font-mono);
          font-size: 8px;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .code-text {
          white-space: nowrap;
          overflow: hidden;
          border-right: 1px solid var(--color-accent-cyan);
          animation: typing 4s steps(10) infinite;
        }
      `}</style>
      <div className="flex flex-col items-center gap-1.5">
        <div className="code-box">
          <span className="text-emerald-400">&lt;/&gt;</span>
          <span className="code-text text-[var(--text)]">GET /api/</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-[var(--color-accent-violet)] animate-ping" />
          <span className="text-[9px] font-mono text-[var(--text-faint)] animate-pulse">db_connected</span>
        </div>
      </div>
    </div>
  );
}

// Custom Robot scanning eye animation
function RobotAnim() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <style>{`
        @keyframes scan {
          0%, 100% { top: 12%; }
          50% { top: 88%; }
        }
        .robot-eye {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid var(--border-strong);
          position: relative;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 80%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .laser-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: var(--color-accent-purple);
          box-shadow: 0 0 8px 1px var(--color-accent-purple);
          animation: scan 3s ease-in-out infinite;
        }
        .pupil {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-accent-purple);
          box-shadow: 0 0 10px var(--color-accent-purple);
        }
      `}</style>
      <div className="robot-eye">
        <div className="laser-line" />
        <div className="pupil" />
      </div>
    </div>
  );
}

// Custom Colliding Clouds Animation
function CloudCollision() {
  return (
    <div className="relative flex h-16 w-full items-center justify-center">
      <style>{`
        @keyframes driftLeft {
          0%, 100% { transform: translateX(-14px); }
          50% { transform: translateX(2px); }
        }
        @keyframes driftRight {
          0%, 100% { transform: translateX(14px); }
          50% { transform: translateX(-2px); }
        }
        @keyframes spark {
          0%, 46%, 54%, 100% { opacity: 0; scale: 0.5; }
          50% { opacity: 1; scale: 1.2; filter: drop-shadow(0 0 8px var(--color-accent-cyan)); }
        }
        .cloud-left {
          animation: driftLeft 4s ease-in-out infinite;
        }
        .cloud-right {
          animation: driftRight 4s ease-in-out infinite;
        }
        .sparkle {
          position: absolute;
          color: var(--color-accent-cyan);
          animation: spark 4s ease-in-out infinite;
        }
      `}</style>
      <div className="relative flex items-center justify-center">
        {/* Left Cloud */}
        <svg className="cloud-left h-7 w-7 text-[var(--text-muted)] opacity-80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
        
        {/* Collision Spark */}
        <svg className="sparkle h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
        </svg>

        {/* Right Cloud */}
        <svg className="cloud-right h-6 w-6 text-[var(--color-accent-cyan)] opacity-70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      </div>
    </div>
  );
}

const highlights = [
  { component: RubiksCube, label: "Problem Solver" },
  { component: FullStackAnim, label: "Full Stack Dev" },
  { component: RobotAnim, label: "AI Enthusiast" },
  { component: CloudCollision, label: "Cloud Learner" },
];

const journey = [
  { year: "2020", label: "10th GSEB (Saint Mary's English Medium School, Porbandar) — 74%" },
  { year: "2022", label: "12th GSEB (Saint Mary's English Medium School, Porbandar) — 45.85%" },
  { year: "2022 - 2025", label: "BCA from Dr. V. R. Godhania College, Porbandar — CGPA 8.28" },
  { year: "2025 - 2027", label: "MCA from Institute of Technology, Nirma University, Ahmedabad" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Developer by training, builder by habit."
          description="A closer look at my qualifications, education pathway, and technical animations."
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
                {/* Fallback avatar text until user places profile picture */}
                <img
                  src="/profile.jpg"
                  alt="Sumit Makwana"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <span className="hidden font-display text-6xl font-semibold text-gradient">SM</span>
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
                I&apos;m Sumit Makwana, an MCA postgraduate student from Nirma University, Ahmedabad.
                My focus lies in building modular full stack applications and integrating smart conversational AI features.
              </p>
              <p>
                Whether designing cross-platform mobile checkouts with Flutter, scripting data pipelines in Python,
                or engineering automated agents with LLM tooling, I strive for clean database schemas and seamless user interfaces.
              </p>
            </motion.div>

            {/* Custom Interactive Animated Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {highlights.map(({ component: Component, label }) => (
                <div
                  key={label}
                  className="glass-card flex flex-col items-center justify-between gap-3 rounded-2xl px-3 py-5 text-center transition-transform hover:-translate-y-1"
                >
                  <Component />
                  <span className="text-xs font-semibold tracking-wide text-[var(--text)]">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Timelines updated to reflect real BCA/MCA milestones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="mt-10"
            >
              <div className="relative flex flex-col gap-8 border-l border-[var(--border)] pl-6">
                {journey.map((step) => (
                  <div key={step.year} className="relative">
                    <span className="absolute -left-[30px] top-1.5 h-2 w-2 rounded-full bg-[var(--color-accent-violet)] shadow-[0_0_8px_var(--color-accent-violet)]" />
                    <p className="font-mono text-xs font-semibold text-[var(--color-accent-cyan)]">{step.year}</p>
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
