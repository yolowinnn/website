import Link from "next/link";
import { Container, FadeIn } from "@/components/section";

const stats = [
  { k: "5", label: "实习经历", sub: "Quant · LLM · RAG · vLLM · VLM" },
  { k: "+24.2%", label: "扣费后年化", sub: "Crypto perpetual factors, 569 universe" },
  { k: "0.934", label: "Avenue AUC", sub: "Diffusion + MotionMAE · > SOTA" },
  { k: "60%+", label: "上下文压缩", sub: "Hierarchical Agent Memory @ Tianshu" },
];

const stack = [
  ["Multimodal LLM", "Qwen3-VL", "SigLIP2", "BGE-Visualized"],
  ["Inference", "vLLM", "FlashAttention-3", "Speculative Decoding"],
  ["Quant", "Genetic Programming", "iTransformer", "MAPPO", "HRP"],
  ["Cloud", "Vertex AI", "Vercel Edge", "Supabase Postgres"],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden noise">
        <div className="absolute inset-0 subtle-grid pointer-events-none" />
        <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute top-60 -left-20 size-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <Container className="relative pt-24 lg:pt-36 pb-24 lg:pb-40">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border bg-white/[0.02] backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-muted">
                Building VLM × Industrial Drawings @ IndustrialMind.ai
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-[12vw] sm:text-7xl lg:text-[8.5rem] leading-[0.9] tracking-tighter">
              <span className="block">From <em className="text-accent">millisecond</em></span>
              <span className="block">alpha factors</span>
              <span className="block text-muted-2">to 72B</span>
              <span className="block gradient-text">vision-language</span>
              <span className="block">deployments.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 items-end">
              <p className="text-base lg:text-lg text-muted max-w-xl leading-relaxed">
                I&rsquo;m <span className="text-foreground">Jiawei Li</span> —
                an AI Engineer with a dual background in Quantitative Finance
                and Multimodal Generative AI. I keep the uncertainty of research
                and the certainty of engineering on separate tracks, so both
                move fast.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl bg-foreground text-background hover:bg-accent-soft transition-colors"
                >
                  <span className="text-sm font-medium">See the work</span>
                  <span className="font-mono text-sm group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl border border-border hover:border-border-strong hover:bg-white/[0.04] transition-all"
                >
                  <span className="text-sm">Get in touch</span>
                  <span className="font-mono text-xs text-muted">↗</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>

        {/* Stats strip */}
        <div className="border-y border-border bg-background-elev/30">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {stats.map((s, i) => (
                <FadeIn key={s.label} delay={0.05 * i}>
                  <div className="px-6 py-8 lg:py-10">
                    <div className="font-serif text-4xl lg:text-5xl text-foreground">
                      {s.k}
                    </div>
                    <div className="mt-2 text-sm text-foreground/90">{s.label}</div>
                    <div className="mt-1 text-xs text-muted-2 font-mono">{s.sub}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] font-mono text-accent">
                / 01 — Focus
              </div>
              <h2 className="font-serif text-4xl mt-4 leading-tight">
                Where my code <em>actually</em> lives.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
              {[
                {
                  title: "Multimodal & VLM",
                  body: "Qwen3-VL / Qwen2.5-VL-72B end-to-end pipelines, Vision-Native RAG, Agent-in-Container deployment for industrial drawings.",
                  href: "/work",
                },
                {
                  title: "Inference Engineering",
                  body: "vLLM kernel-level optimization, PagedAttention, Speculative Decoding, FP8/INT4 quantization at production latency.",
                  href: "/skills",
                },
                {
                  title: "Quant Research",
                  body: "GP-based factor mining, iTransformer + GNN, MAPPO trading, crypto perpetual low-vol + VoV factor research.",
                  href: "/quant",
                },
                {
                  title: "Cloud Systems",
                  body: "Vertex AI custom training, Vercel Serverless task queues, Postgres SKIP LOCKED + Cron heartbeat for long-running jobs.",
                  href: "/projects",
                },
              ].map((it) => (
                <Link
                  key={it.title}
                  href={it.href}
                  className="group p-7 lg:p-8 bg-background hover:bg-background-elev transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-2xl">{it.title}</h3>
                    <span className="font-mono text-xs text-muted-2 group-hover:text-accent transition-colors">→</span>
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{it.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* STACK */}
      <section className="py-20 lg:py-28 border-y border-border bg-background-elev/30">
        <Container>
          <FadeIn>
            <div className="text-xs uppercase tracking-[0.2em] font-mono text-accent mb-6">
              / 02 — Stack &amp; Vocabulary
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight max-w-3xl">
              The vocabulary I think in.
            </h2>
          </FadeIn>

          <div className="mt-14 grid lg:grid-cols-2 gap-x-12 gap-y-8">
            {stack.map(([cat, ...items]) => (
              <FadeIn key={cat}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-muted-2">{cat}</span>
                  <span className="flex-1 h-px bg-border" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span key={it} className="tag">
                      {it}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-40">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background-elev to-background p-10 lg:p-16">
              <div className="absolute -top-20 -right-20 size-80 rounded-full bg-accent/15 blur-3xl" />
              <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-end">
                <div>
                  <div className="text-xs font-mono text-accent uppercase tracking-[0.2em] mb-5">
                    / 03 — Outside the editor
                  </div>
                  <h3 className="font-serif text-4xl lg:text-5xl leading-tight">
                    Engineering is a <em>slow-motion sport</em>.
                  </h3>
                  <p className="mt-5 text-muted max-w-xl leading-relaxed">
                    Archery, golf, scuba, surfing, mountains — I&rsquo;ve also tried
                    digital-nomad living for a year. Travel and engineering, it
                    turns out, sharpen each other.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/life"
                    className="group flex items-center justify-between p-5 rounded-xl border border-border hover:border-accent/40 hover:bg-white/[0.04] transition-all"
                  >
                    <span className="text-sm">旅居 · 户外 · 音乐</span>
                    <span className="font-mono text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                  <Link
                    href="/about"
                    className="group flex items-center justify-between p-5 rounded-xl border border-border hover:border-accent/40 hover:bg-white/[0.04] transition-all"
                  >
                    <span className="text-sm">The longer story</span>
                    <span className="font-mono text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
