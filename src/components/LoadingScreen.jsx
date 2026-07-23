import { AnimatePresence, motion } from "framer-motion";

// A short, branded loading sequence shown once on first paint.
// Kept brief and skippable-feeling — it should read as "premium
// polish", never as an obstacle between the visitor and the content.
export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-display text-3xl font-semibold text-gradient">SM</span>
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-[var(--border)]">
              <motion.div
                className="h-full w-full bg-[linear-gradient(90deg,var(--color-accent-violet),var(--color-accent-cyan))]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
