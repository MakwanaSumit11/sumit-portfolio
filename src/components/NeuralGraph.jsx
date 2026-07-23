import { motion } from "framer-motion";
import { useMemo } from "react";

// The portfolio's signature visual: an animated node graph that reads
// simultaneously as a neural network (AI) and a system architecture
// diagram (full stack) — pulsing data flows through it on a loop.
// Built as plain SVG + Framer Motion so it stays crisp at any size
// and costs nothing to load (no images, no canvas).
const LAYERS = [
  { x: 60, ys: [70, 150, 230, 310] },
  { x: 200, ys: [40, 120, 200, 280, 360] },
  { x: 340, ys: [90, 190, 290] },
  { x: 460, ys: [130, 230] },
];

function buildEdges() {
  const edges = [];
  for (let l = 0; l < LAYERS.length - 1; l++) {
    const from = LAYERS[l];
    const to = LAYERS[l + 1];
    from.ys.forEach((fy, fi) => {
      to.ys.forEach((ty, ti) => {
        // Sparse connections keep the graph legible instead of a solid mesh.
        if ((fi + ti) % 2 === 0) {
          edges.push({ x1: from.x, y1: fy, x2: to.x, y2: ty, key: `${l}-${fi}-${ti}` });
        }
      });
    });
  }
  return edges;
}

export default function NeuralGraph({ className = "" }) {
  const edges = useMemo(buildEdges, []);

  return (
    <svg
      viewBox="0 0 520 400"
      className={className}
      role="img"
      aria-label="Animated diagram of a neural network resembling a full-stack system architecture"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-accent-violet)" />
          <stop offset="100%" stopColor="var(--color-accent-cyan)" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent-cyan)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-accent-violet)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map((edge, i) => (
        <motion.line
          key={edge.key}
          x1={edge.x1}
          y1={edge.y1}
          x2={edge.x2}
          y2={edge.y2}
          stroke="url(#edgeGradient)"
          strokeWidth="1"
          strokeOpacity="0.18"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.35, 0.18] }}
          transition={{ duration: 1.6, delay: 0.2 + i * 0.015, ease: "easeOut" }}
        />
      ))}

      {LAYERS.flatMap((layer, li) =>
        layer.ys.map((y, ni) => (
          <g key={`${li}-${ni}`}>
            <motion.circle
              cx={layer.x}
              cy={y}
              r="14"
              fill="url(#nodeGlow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{
                duration: 3 + ((li + ni) % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: (li + ni) * 0.2,
              }}
            />
            <motion.circle
              cx={layer.x}
              cy={y}
              r="4.5"
              fill="var(--bg)"
              stroke="url(#edgeGradient)"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + (li * 4 + ni) * 0.04 }}
            />
          </g>
        ))
      )}
    </svg>
  );
}
