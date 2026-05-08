import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-background-elev/40">
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-32 h-1 bg-accent rounded-full" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="font-serif text-3xl">
              <span className="italic">Jiawei</span> Li
            </div>
            <p className="text-sm text-muted mt-3 max-w-xs leading-relaxed">
              AI × Quant Engineer. Building systems that are explainable,
              auditable, and resumable.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-muted-2">
              <span className="size-1.5 rounded-full bg-green animate-pulse" />
              Open to opportunities · Shanghai → Paris
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-2 uppercase tracking-widest mb-4 font-mono">
              Navigate
            </div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <Link href="/about" className="text-muted hover:text-accent-deep grow-line w-fit">About</Link>
              <Link href="/work" className="text-muted hover:text-accent-deep grow-line w-fit">Work</Link>
              <Link href="/quant" className="text-muted hover:text-accent-deep grow-line w-fit">Quant</Link>
              <Link href="/projects" className="text-muted hover:text-accent-deep grow-line w-fit">Projects</Link>
              <Link href="/skills" className="text-muted hover:text-accent-deep grow-line w-fit">Skills</Link>
              <Link href="/life" className="text-muted hover:text-accent-deep grow-line w-fit">Life</Link>
              <Link href="/contact" className="text-muted hover:text-accent-deep grow-line w-fit">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-2 uppercase tracking-widest mb-4 font-mono">
              Elsewhere
            </div>
            <div className="flex flex-col text-sm gap-2">
              <a href="mailto:ljw2556826312@gmail.com" className="text-muted hover:text-accent-deep grow-line w-fit">
                ljw2556826312@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jiawei-li-1b1482341/"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-accent-deep grow-line w-fit"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/yolowinnn"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-accent-deep grow-line w-fit"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-2 font-mono">
          <span>© {new Date().getFullYear()} Jiawei Li · Engineering is a slow-motion sport.</span>
          <span>Made with sun &amp; sand</span>
        </div>
      </div>
    </footer>
  );
}
