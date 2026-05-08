"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export function PhotoStrip({
  photos,
  countryName,
  flag,
  caption,
  accent = "accent",
}: {
  photos: string[];
  countryName: string;
  flag: string;
  caption: string;
  accent?: "accent" | "green" | "rose";
}) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const accentClass = {
    accent: "text-accent-deep",
    green: "text-green-deep",
    rose: "text-rose",
  }[accent];

  return (
    <div ref={ref} className="relative grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-center">
      {/* Description */}
      <div className="lg:sticky lg:top-32 self-start">
        <div className="text-6xl mb-3">{flag}</div>
        <h3 className={`font-serif text-5xl lg:text-6xl leading-none ${accentClass}`}>
          {countryName}
        </h3>
        <p className="mt-5 text-muted leading-relaxed text-base">{caption}</p>
        <div className="mt-6 flex items-center gap-2 text-xs font-mono text-muted-2">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <div className="flex-1 h-px bg-border" />
          <span>{String(photos.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-12 gap-2 lg:gap-3">
        {photos.map((src, i) => {
          const isHero = i === 0;
          const colSpan = isHero
            ? "col-span-12 lg:col-span-8"
            : i % 3 === 0
            ? "col-span-6 lg:col-span-4"
            : "col-span-6 lg:col-span-4";
          const aspect = isHero ? "aspect-[16/10]" : "aspect-square";
          return (
            <motion.div
              key={src}
              className={`${colSpan} ${aspect} relative image-frame bg-background-elev`}
              onMouseEnter={() => setActive(i)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <Image
                src={src}
                alt={`${countryName} ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
