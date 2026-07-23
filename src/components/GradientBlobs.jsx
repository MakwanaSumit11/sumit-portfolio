import { motion } from "framer-motion";

// Slow, large, blurred blobs that float behind content to give the
// page ambient depth without ever competing with foreground text.
export default function GradientBlobs({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-accent-violet) 0%, transparent 70%)", opacity: 0.35 }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[-160px] h-[380px] w-[380px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-accent-cyan) 0%, transparent 70%)", opacity: 0.25 }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-140px] left-1/4 h-[360px] w-[360px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-accent-purple) 0%, transparent 70%)", opacity: 0.28 }}
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
