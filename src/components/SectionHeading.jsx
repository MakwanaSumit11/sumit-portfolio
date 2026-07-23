import { motion } from "framer-motion";

// A consistent section header: a small mono "eyebrow" label connected
// to the heading by a short node-and-line mark — echoing the
// network-graph motif from the hero instead of generic 01/02/03 numbering.
export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <div className={`mb-4 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-cyan)]" />
        <span className="h-px w-8 bg-[var(--border-strong)]" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-[var(--text-muted)] md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
