"use client";

import { useEffect, useRef, useState } from "react";

export function HeroHeading() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const lineStyle = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  return (
    <h1
      ref={ref}
      className="font-serif text-[12vw] sm:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-tight"
    >
      <span
        style={lineStyle(0)}
        className="block text-muted-2 text-xs sm:text-sm lg:text-base tracking-[0.25em] font-mono not-italic uppercase mb-4"
      >
        <span className="text-accent-deep">/</span> Hi, I&rsquo;m
      </span>
      <span style={lineStyle(0.1)} className="block italic">
        <span className="name-accent">Jiawei</span>{" "}
        <span className="text-foreground">Li.</span>
      </span>
      <span
        style={lineStyle(0.25)}
        className="block text-muted text-[7vw] sm:text-4xl lg:text-5xl mt-3 not-italic"
      >
        AI <span className="text-accent-deep">×</span> Quant Engineer.
      </span>
    </h1>
  );
}
