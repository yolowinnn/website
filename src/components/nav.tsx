"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="size-7 rounded-md bg-gradient-to-br from-accent to-accent-soft flex items-center justify-center text-black font-serif text-sm font-semibold">
            J
          </span>
          <span className="font-serif text-lg tracking-tight">
            Jiawei <span className="text-muted">Li</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  active
                    ? "text-foreground bg-white/[0.06]"
                    : "text-muted hover:text-foreground hover:bg-white/[0.04]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden size-9 grid place-items-center rounded-md hover:bg-white/[0.06]"
          aria-label="Toggle menu"
        >
          <span className="block w-4 h-px bg-foreground relative">
            <span className="absolute -top-1.5 left-0 w-4 h-px bg-foreground" />
            <span className="absolute top-1.5 left-0 w-4 h-px bg-foreground" />
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
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
        </div>
      )}
    </header>
  );
}
