import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Wraps any button/link content and gives it a subtle "magnetic" pull
// toward the cursor on hover — a premium micro-interaction rather than
// a plain hover state.
export default function MagneticButton({
  as: Component = "button",
  className = "",
  children,
  strength = 18,
  ...props
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const MotionComponent = motion.create ? motion.create(Component) : motion(Component);

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
