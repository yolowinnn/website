"use client";

import { useRef, useState } from "react";

export function VideoCard({
  src,
  caption,
  location,
  className = "",
}: {
  src: string;
  caption: string;
  location?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative group overflow-hidden rounded-xl border border-border bg-background-elev ${className}`}
      onMouseEnter={() => {
        ref.current?.play().catch(() => {});
        setPlaying(true);
      }}
      onMouseLeave={() => {
        ref.current?.pause();
        if (ref.current) ref.current.currentTime = 0;
        setPlaying(false);
      }}
    >
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-2 text-xs font-mono text-accent-soft mb-1">
          <span
            className={`size-1.5 rounded-full ${
              playing ? "bg-emerald-400 animate-pulse" : "bg-accent"
            }`}
          />
          {location ?? "Travel"}
        </div>
        <div className="font-serif text-xl text-white leading-tight">{caption}</div>
      </div>
    </div>
  );
}
