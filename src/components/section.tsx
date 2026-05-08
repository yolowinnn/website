"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

/* useOnScreen — robust IntersectionObserver hook */
function useOnScreen<T extends Element>(
  ref: React.RefObject<T | null>,
  rootMargin = "0px"
) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin, threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, rootMargin]);
  return visible;
}

/* FadeIn — pure CSS keyframe animation, runs on mount */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className={`fade-up ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="pt-24 pb-12 lg:pt-32 lg:pb-16">
      {eyebrow && <div className="ribbon mb-6">{eyebrow}</div>}
      <h1 className="font-serif text-5xl lg:text-7xl leading-[0.95] tracking-tight max-w-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-lg lg:text-xl text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-6xl mx-auto px-6 lg:px-8 ${className}`}>{children}</div>
  );
}

export function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="font-mono text-xs text-accent-deep">{number}</span>
      <h2 className="font-serif text-3xl lg:text-4xl tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-border ml-4" />
    </div>
  );
}

/* Magnetic — element subtly follows cursor (still uses framer for spring) */
export function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };
  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Parallax — scroll-driven Y offset */
export function Parallax({
  children,
  speed = 0.3,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * 100}%`, `${-speed * 100}%`]
  );
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* Marquee */
export function Marquee({
  children,
  speed = "normal",
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  speed?: "normal" | "fast";
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`marquee ${speed === "fast" ? "fast" : ""} ${
          reverse ? "reverse" : ""
        }`}
      >
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* Counter — eased ramp on scroll-into-view */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  className = "",
  duration = 1.6,
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useOnScreen(ref);
  const [val, setVal] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!visible) return;
    if (reduce) {
      setVal(to);
      return;
    }
    let start: number | null = null;
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);
    let raf = 0;
    const loop = (ts: number) => {
      if (start == null) start = ts;
      const p = Math.min(1, (ts - start) / (duration * 1000));
      setVal(to * ease(p));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [visible, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* Scroll-progress bar at the top */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green via-accent to-rose origin-left z-[60]"
    />
  );
}

/* ImageReveal — pure CSS keyframe animation; always runs on mount */
export function ImageReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className={`clip-reveal ${className}`}
    >
      {children}
    </div>
  );
}

/* WordReveal — pure CSS word-by-word */
export function WordReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useOnScreen(ref);
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block"
            style={{
              transform:
                reduce || visible ? "translateY(0)" : "translateY(120%)",
              transition: reduce
                ? "none"
                : `transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${
                    delay + i * 0.06
                  }s`,
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
