"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/quant", label: "Quant" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/life", label: "Life" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-1.5 grow-line">
          <span className="font-serif text-xl tracking-tight italic">Jiawei</span>
          <span className="font-serif text-xl tracking-tight">Li</span>
          <span className="ml-2 size-1.5 rounded-full bg-accent translate-y-[-1px]" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-3 py-1.5 text-sm rounded-full transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative ${
                    active ? "text-background" : "text-muted hover:text-foreground"
                  }`}
                >
                  {l.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden size-9 grid place-items-center rounded-md hover:bg-foreground/[0.06]"
          aria-label="Toggle menu"
        >
          <span className="block w-4 h-px bg-foreground relative">
            <span className="absolute -top-1.5 left-0 w-4 h-px bg-foreground" />
            <span className="absolute top-1.5 left-0 w-4 h-px bg-foreground" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-3 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 text-sm ${
                    pathname === l.href ? "text-foreground" : "text-muted"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
