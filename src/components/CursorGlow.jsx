import { useEffect, useRef } from "react";

// A soft radial glow that follows the pointer with gentle easing.
// Purely decorative + pointer-events: none, so it never blocks clicks
// and is skipped entirely on touch devices where there is no cursor.
export default function CursorGlow() {
  const glowRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x - 200}px, ${
          current.current.y - 200
        }px, 0)`;
      }
      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handleMove);
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full blur-3xl md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(109,93,246,0.16) 0%, rgba(34,211,238,0.08) 45%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
