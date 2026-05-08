import Link from "next/link";
import Image from "next/image";
import {
  Container,
  FadeIn,
  Magnetic,
  Marquee,
  WordReveal,
  Counter,
  Parallax,
  ImageReveal,
} from "@/components/section";

const stats = [
  { v: 24.2, suffix: "%", label: "Post-cost annualized α", sub: "Crypto perpetuals · 569 universe", color: "green" },
  { v: 0.934, decimals: 3, label: "Avenue AUC", sub: "Diffusion + MotionMAE > SOTA", color: "accent" },
  { v: 60, suffix: "%+", label: "Context compressed", sub: "Hierarchical Agent Memory", color: "rose" },
  { v: 5, label: "Internships shipped", sub: "Quant · LLM · RAG · vLLM · VLM", color: "green" },
];

const marqueeWords = [
  "Multimodal LLM",
  "Vertex AI",
  "vLLM",
  "Quantitative Finance",
  "Vision-Native RAG",
  "iTransformer",
  "MAPPO",
  "Genetic Programming",
  "Diffusion Models",
  "Agent-in-Container",
  "Plan + AGENTS",
  "FlashAttention-3",
];

const marqueeCities = ["Bali", "Phuket", "Chiang Mai", "Yunnan", "Bromo", "Singapore", "Kuala Lumpur", "Hong Kong", "Shanghai", "Paris ↗"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid pointer-events-none" />
        <div className="sun-blob bg-accent-soft" style={{ width: 600, height: 600, top: -200, right: -150 }} />
        <div className="sun-blob bg-green-soft" style={{ width: 400, height: 400, top: 200, left: -100 }} />

        <Container className="relative pt-20 lg:pt-28 pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border bg-background-elev/60 backdrop-blur-sm">
                  <span className="size-1.5 rounded-full bg-green pulse-glow" />
                  <span className="text-xs font-mono text-muted">
                    Building VLM × Industrial Drawings @ IndustrialMind.ai
                  </span>
                </div>
              </FadeIn>

              <h1 className="font-serif text-[14vw] sm:text-7xl lg:text-[7.5rem] leading-[0.9] tracking-tight">
                <span className="block overflow-hidden">
                  <WordReveal text="Hi, I'm" />
                </span>
                <span className="block italic gradient-text">
                  <WordReveal text="Jiawei Li" delay={0.15} />
                </span>
                <span className="block text-muted text-[8vw] sm:text-5xl lg:text-6xl mt-2 not-italic">
                  <WordReveal text="AI × Quant Engineer." delay={0.35} />
                </span>
              </h1>

              <FadeIn delay={0.55}>
                <p className="mt-10 text-lg text-muted max-w-xl leading-relaxed">
                  From{" "}
                  <span className="text-accent-deep font-medium">millisecond alpha factors</span>{" "}
                  to{" "}
                  <span className="text-green-deep font-medium">72B vision-language deployments</span>.
                  I keep the uncertainty of research and the certainty of engineering on
                  separate tracks — so both move fast.
                </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Magnetic>
                    <Link
                      href="/work"
                      data-magnetic
                      className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-foreground text-background hover:bg-accent-deep transition-colors"
                    >
                      <span className="text-sm font-medium">See the work</span>
                      <span className="font-mono text-sm group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link
                      href="/contact"
                      data-magnetic
                      className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full border-[1.5px] border-foreground/30 hover:bg-foreground/[0.04] hover:border-accent transition-all"
                    >
                      <span className="text-sm">Get in touch</span>
                      <span className="font-mono text-sm">↗</span>
                    </Link>
                  </Magnetic>
                </div>
              </FadeIn>
            </div>

            {/* PORTRAIT COLUMN */}
            <FadeIn delay={0.4} y={32} className="relative">
              <Parallax speed={-0.05} className="relative">
                <ImageReveal className="image-frame relative aspect-[3/4] max-w-md mx-auto">
                  <Image
                    src="/images/portrait/1.jpg"
                    alt="Jiawei Li portrait"
                    width={900}
                    height={1200}
                    priority
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
                </ImageReveal>
              </Parallax>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 size-20 rounded-full border-[1.5px] border-accent border-dashed spin-slow opacity-60" />
              <div className="absolute -bottom-3 -left-3 size-12 rounded-full bg-green/30 float" />

              {/* Floating chip */}
              <div className="absolute -bottom-4 right-4 lg:right-8 px-4 py-3 rounded-2xl bg-background border border-border-strong shadow-xl float">
                <div className="text-[10px] font-mono text-muted-2 uppercase tracking-widest">Currently</div>
                <div className="text-sm mt-0.5 font-medium">Shanghai · 上海</div>
                <div className="text-xs text-green-deep mt-1 font-mono">Paris · Fall 2026 →</div>
              </div>
            </FadeIn>
          </div>
        </Container>

        {/* Marquee strip */}
        <div className="border-y border-border bg-background-elev/40 py-5">
          <Marquee>
            {marqueeWords.map((w) => (
              <span key={w} className="inline-flex items-center gap-12">
                <span className="font-serif text-3xl lg:text-4xl italic text-foreground/80">
                  {w}
                </span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn>
            <div className="ribbon mb-6">/ 01 — By the numbers</div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight max-w-3xl">
              Numbers I can defend, every line I can{" "}
              <em className="text-green-deep">trace</em>.
            </h2>
          </FadeIn>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s, i) => {
              const colorClasses = {
                accent: "text-accent-deep",
                green: "text-green-deep",
                rose: "text-rose",
              }[s.color];
              return (
                <FadeIn key={s.label} delay={i * 0.06}>
                  <div className="lift-card relative p-6 rounded-2xl border border-border bg-background overflow-hidden">
                    <div className="absolute top-0 right-0 size-24 rounded-full opacity-30 blur-2xl"
                         style={{ backgroundColor: s.color === "accent" ? "var(--accent-soft)" : s.color === "green" ? "var(--green-soft)" : "var(--peach)" }} />
                    <div className={`relative font-serif text-5xl lg:text-6xl ${colorClasses}`}>
                      <Counter to={s.v} suffix={s.suffix ?? ""} decimals={s.decimals ?? (s.v < 10 ? 1 : 0)} />
                    </div>
                    <div className="relative mt-3 text-sm text-foreground font-medium">{s.label}</div>
                    <div className="relative text-xs text-muted-2 font-mono mt-1">{s.sub}</div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* WHAT I DO */}
      <section className="py-20 lg:py-28 bg-background-elev/40 border-y border-border">
        <Container>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            <div>
              <div className="ribbon mb-5">/ 02 — Focus</div>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                Where my code <em>actually</em> lives.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  title: "Multimodal & VLM",
                  body: "Qwen3-VL / Qwen2.5-VL-72B end-to-end pipelines, Vision-Native RAG, Agent-in-Container deployment for industrial drawings.",
                  href: "/work",
                  icon: "🎯",
                  tone: "accent",
                },
                {
                  title: "Inference Engineering",
                  body: "vLLM kernel-level optimization, PagedAttention, Speculative Decoding, FP8/INT4 quantization at production latency.",
                  href: "/skills",
                  icon: "⚡",
                  tone: "green",
                },
                {
                  title: "Quant Research",
                  body: "GP-based factor mining, iTransformer + GNN, MAPPO trading, crypto perpetual low-vol + VoV factor research.",
                  href: "/quant",
                  icon: "📈",
                  tone: "rose",
                },
                {
                  title: "Cloud Systems",
                  body: "Vertex AI custom training, Vercel Serverless task queues, Postgres SKIP LOCKED + Cron heartbeat for long-running jobs.",
                  href: "/projects",
                  icon: "☁️",
                  tone: "accent",
                },
              ].map((it, i) => (
                <FadeIn key={it.title} delay={i * 0.05}>
                  <Link
                    href={it.href}
                    className="lift-card group flex flex-col p-7 lg:p-8 rounded-2xl border border-border bg-background h-full"
                  >
                    <div className="flex items-start justify-between">
                      <div className="text-3xl">{it.icon}</div>
                      <span className="font-mono text-xs text-muted-2 group-hover:text-accent-deep transition-colors">
                        →
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl mt-5">{it.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{it.body}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CITY MARQUEE — feel of travel */}
      <section className="py-12">
        <Marquee speed="fast" reverse>
          {marqueeCities.map((c) => (
            <span key={c} className="inline-flex items-center gap-12">
              <span className="font-serif text-2xl lg:text-3xl italic text-muted">
                {c}
              </span>
              <span className="size-2 rounded-full bg-green" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-soft/40 via-background to-green-soft/30 p-10 lg:p-16">
              <div className="sun-blob bg-accent" style={{ width: 280, height: 280, top: -80, right: -80, opacity: 0.5 }} />
              <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
                <div>
                  <div className="ribbon mb-5">/ 03 — Outside the editor</div>
                  <h3 className="font-serif text-4xl lg:text-6xl leading-tight">
                    Engineering is a <em className="text-green-deep">slow-motion sport</em>.
                  </h3>
                  <p className="mt-5 text-muted max-w-xl leading-relaxed text-lg">
                    Archery, golf, scuba, surfing, mountains — I&rsquo;ve also tried
                    digital-nomad living for a year. Travel and engineering, it
                    turns out, sharpen each other.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Magnetic>
                    <Link
                      href="/life"
                      data-magnetic
                      className="group flex items-center justify-between p-5 rounded-2xl border-[1.5px] border-foreground/15 bg-background/70 hover:border-accent hover:bg-background transition-all"
                    >
                      <span className="text-sm font-medium">旅居 · 户外 · 音乐</span>
                      <span className="font-mono text-accent-deep group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link
                      href="/about"
                      data-magnetic
                      className="group flex items-center justify-between p-5 rounded-2xl border-[1.5px] border-foreground/15 bg-background/70 hover:border-accent hover:bg-background transition-all"
                    >
                      <span className="text-sm font-medium">The longer story</span>
                      <span className="font-mono text-accent-deep group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
