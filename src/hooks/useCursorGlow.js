import { useEffect, useRef } from "react";

// Tracks pointer position with a spring-like lag and exposes refs
// that a component can wire into a CSS transform, avoiding re-renders.
export function usePointer() {
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return pos;
}
