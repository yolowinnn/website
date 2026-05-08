import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-serif text-2xl">Jiawei Li</div>
            <p className="text-sm text-muted mt-2 max-w-xs">
              AI × Quant Engineer. Building systems that are explainable,
              auditable, and resumable.
            </p>
          </div>

          <div>
            <div className="text-xs text-muted-2 uppercase tracking-widest mb-3">
              Navigate
            </div>
            <div className="grid grid-cols-2 gap-y-1.5 text-sm">
              <Link href="/about" className="text-muted hover:text-foreground">About</Link>
              <Link href="/work" className="text-muted hover:text-foreground">Work</Link>
              <Link href="/quant" className="text-muted hover:text-foreground">Quant</Link>
              <Link href="/projects" className="text-muted hover:text-foreground">Projects</Link>
              <Link href="/skills" className="text-muted hover:text-foreground">Skills</Link>
              <Link href="/life" className="text-muted hover:text-foreground">Life</Link>
              <Link href="/contact" className="text-muted hover:text-foreground">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-xs text-muted-2 uppercase tracking-widest mb-3">
              Elsewhere
            </div>
            <div className="flex flex-col text-sm gap-1.5">
              <a href="mailto:ljw2556826312@gmail.com" className="text-muted hover:text-foreground">
                ljw2556826312@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jiawei-li-1b1482341/"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/yolowinnn"
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-foreground"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-2 font-mono">
          <span>© {new Date().getFullYear()} Jiawei Li · Engineering is a slow-motion sport.</span>
          <span>Shanghai → Paris</span>
        </div>
      </div>
    </footer>
  );
}
