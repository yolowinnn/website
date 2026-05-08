"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
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
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-accent-soft font-mono mb-5">
          {eyebrow}
        </div>
      )}
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
    <div className={`max-w-6xl mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="font-mono text-xs text-accent">{number}</span>
      <h2 className="font-serif text-3xl lg:text-4xl tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border ml-4" />
    </div>
  );
}
