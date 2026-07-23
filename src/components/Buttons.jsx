import MagneticButton from "./MagneticButton";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-display transition-colors duration-300 whitespace-nowrap";

export function PrimaryButton({ children, className = "", ...props }) {
  return (
    <MagneticButton
      as="a"
      className={`${base} text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] bg-[linear-gradient(120deg,var(--color-accent-violet),var(--color-accent-purple))] hover:shadow-[0_8px_30px_-8px_var(--color-accent-purple)] ${className}`}
      {...props}
    >
      {children}
    </MagneticButton>
  );
}

export function SecondaryButton({ children, className = "", ...props }) {
  return (
    <MagneticButton
      as="a"
      className={`${base} glass-card text-[var(--text)] hover:border-[var(--border-strong)] ${className}`}
      {...props}
    >
      {children}
    </MagneticButton>
  );
}

export function GhostButton({ children, className = "", ...props }) {
  return (
    <MagneticButton
      as="a"
      className={`${base} text-[var(--text-muted)] hover:text-[var(--text)] ${className}`}
      {...props}
    >
      {children}
    </MagneticButton>
  );
}
