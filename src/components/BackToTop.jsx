import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function BackToTop() {
  const progress = useScrollProgress();
  const visible = progress > 0.12;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          className="glass-card-strong fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full text-[var(--text)] shadow-lg md:bottom-8 md:right-8"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
