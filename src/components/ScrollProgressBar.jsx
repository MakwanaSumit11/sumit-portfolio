import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-[linear-gradient(90deg,var(--color-accent-violet),var(--color-accent-purple),var(--color-accent-cyan))]"
        style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
}
