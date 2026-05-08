"use client";

import { useEffect, useState } from "react";

export type Track = {
  artist: string;
  track: string;
  album: string;
  youtubeId: string;
  note?: string;
};

export const tracks: Track[] = [
  {
    artist: "Pink Floyd",
    track: "Comfortably Numb",
    album: "The Wall · 1979",
    youtubeId: "_FrOQC-zEog",
    note: "The guitar solo I can&rsquo;t skip.",
  },
  {
    artist: "Radiohead",
    track: "Paranoid Android",
    album: "OK Computer · 1997",
    youtubeId: "fHiGbolFFGw",
    note: "Three songs in one.",
  },
  {
    artist: "Led Zeppelin",
    track: "Kashmir",
    album: "Physical Graffiti · 1975",
    youtubeId: "co6WMzDOh1o",
    note: "A riff that sounds like a desert.",
  },
  {
    artist: "Queen",
    track: "Bohemian Rhapsody",
    album: "A Night at the Opera · 1975",
    youtubeId: "fJ9rUzIMcZQ",
    note: "Operatic chaos, lovingly built.",
  },
  {
    artist: "The Beatles",
    track: "While My Guitar Gently Weeps",
    album: "The White Album · 1968",
    youtubeId: "_yPVlBhRO_8",
    note: "Harrison + Clapton.",
  },
  {
    artist: "Nirvana",
    track: "Smells Like Teen Spirit",
    album: "Nevermind · 1991",
    youtubeId: "hTWKbfoikeg",
    note: "The riff that ended the 80s.",
  },
];

export function MusicList() {
  const [active, setActive] = useState<Track | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="space-y-2">
        {tracks.map((t, i) => (
          <button
            key={t.track}
            onClick={() => setActive(t)}
            className="lift-card group flex w-full items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent text-left fade-up"
            style={{ animationDelay: `${i * 0.04}s` }}
            aria-label={`Play ${t.track} by ${t.artist}`}
          >
            <span className="size-11 shrink-0 rounded-full bg-accent-soft border border-accent grid place-items-center text-accent-deep group-hover:bg-accent group-hover:text-background transition-colors relative">
              <PlayIcon />
              <span className="absolute inset-0 rounded-full ring-2 ring-accent opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="flex items-baseline justify-between gap-3">
                <span className="font-serif text-lg truncate">{t.track}</span>
                <span className="text-xs text-muted-2 font-mono shrink-0">
                  {t.album.split(" · ")[1]}
                </span>
              </span>
              <span className="block text-xs text-muted">{t.artist}</span>
            </span>
          </button>
        ))}
      </div>

      {active && <PlayerModal track={active} onClose={() => setActive(null)} />}
    </>
  );
}

function PlayerModal({ track, onClose }: { track: Track; onClose: () => void }) {
  const search = encodeURIComponent(`${track.artist} ${track.track}`);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Now playing ${track.track}`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/70 backdrop-blur-sm cursor-pointer animate-fade-overlay"
      />
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-background border border-border-strong shadow-2xl animate-pop">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-background-elev/60">
          <div className="min-w-0">
            <div className="font-serif text-xl truncate">{track.track}</div>
            <div className="text-xs text-muted font-mono">
              {track.artist} · {track.album}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="size-9 grid place-items-center rounded-full hover:bg-foreground/[0.06] text-muted hover:text-foreground transition-colors shrink-0"
            aria-label="Close player"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="aspect-video bg-foreground">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${track.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={`${track.track} — ${track.artist}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 bg-background-elev/40 border-t border-border text-xs">
          <span className="text-muted-2 font-mono">
            // ESC to close · click outside to dismiss
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`https://www.youtube.com/results?search_query=${search}`}
              target="_blank"
              rel="noreferrer"
              className="text-accent-deep hover:text-foreground transition-colors grow-line"
            >
              Open on YouTube ↗
            </a>
            <a
              href={`https://open.spotify.com/search/${search}`}
              target="_blank"
              rel="noreferrer"
              className="text-green-deep hover:text-foreground transition-colors grow-line"
            >
              Find on Spotify ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M6 18L18 6" />
    </svg>
  );
}
