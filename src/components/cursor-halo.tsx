"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorHalo() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest("a, button, [data-magnetic], [data-cursor=hover]");
      setHover(!!interactive);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="cursor-halo"
      style={{
        translateX: sx,
        translateY: sy,
        width: hover ? 56 : 28,
        height: hover ? 56 : 28,
      }}
    />
  );
}
