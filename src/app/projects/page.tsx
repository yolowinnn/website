import { Container, FadeIn, PageHeader } from "@/components/section";

const projects = [
  {
    rank: "⭐⭐⭐",
    title: "VLM Industrial Drawing Pipeline",
    org: "IndustrialMind.ai",
    blurb: "End-to-end pipeline turning industrial drawings into structured data.",
    bullets: [
      "Plan + AGENTS on-the-spot programming — natural language plan, Cursor-generated train/eval/deploy scripts.",
      "Architectural philosophy: separate research uncertainty from engineering certainty; GCS is source of truth.",
      "Same base across Siemens / Andritz / Tsubaki / Tesa — customer-specific code <20%.",
      "DrawingInsightAgent (zoom-in multi-step reasoning) packaged into customer inference container.",
    ],
    tags: ["Vertex AI", "ms-swift", "DeepSpeed", "GCS", "Customer Deployment", "Agent-in-Container"],
  },
  {
    rank: "⭐⭐⭐",
    title: "Eval-Pipeline · Adaptive Dual-Path Evaluation",
    org: "IndustrialMind.ai",
    blurb: "Multimodal evaluation task queue inside Vercel Serverless limits.",
    bullets: [
      "Dual-path: <4 MB inline sync; ≥3 MB blob upload + Cron heartbeat relay.",
      "Task queue: FOR UPDATE SKIP LOCKED lease + UPSERT + ux_der_idemp unique index + lease heartbeat.",
      "Single plan supports 1+ hour long jobs, zero loss on crash, monthly infra ~70% lower than K8s alternative.",
    ],
    tags: ["Vercel Edge / Cron / Blob", "Supabase Postgres", "LLM Proxy", "EvalPlan JSON Schema"],
  },
  {
    rank: "⭐⭐",
    title: "Tsubaki — Multi-Model Visual Benchmark",
    org: "Industrial Sprockets · Canada",
    blurb: "73 drawings × 10 fields × 8 frontier vision models.",
    bullets: [
      "Single-order: 20–40 min engineer entry → 3-second auto BOM + Routing.",
      "Benchmark: Claude Sonnet 4.6 / Gemini 2.5 / Llama-4-Scout / GPT-5 / Qwen2.5-VL-72B.",
      "Prompt engineering V2 → V4.3 across 5 generations + F1–F11 patches.",
      "Three-axis scoring: field-level + template-level + hallucination rate.",
    ],
    tags: ["React + Vite + Tailwind + FastAPI", "litellm", "OpenRouter", "JSON Schema"],
  },
  {
    rank: "⭐⭐",
    title: "Vision-Native RAG",
    org: "Fufeng Tech",
    blurb: "Recover semantics that OCR pipelines drop.",
    bullets: [
      "Dual-path fusion: BGE-Visualized visual space + RRF multi-route retrieval.",
      "MinerU ROI pruning compresses visual tokens -60%; Milvus Binary Quantization storage -90%.",
      "Recall@5 +18~22%; P90 < 500ms; canary in production.",
    ],
    tags: ["BGE-Visualized", "Milvus + Binary Quantization", "MinerU", "RRF"],
  },
  {
    rank: "⭐⭐",
    title: "Crypto Perpetual Factor Research",
    org: "Personal",
    blurb: "569 USDT perpetuals, 3y minute-level data, +24.2% post-cost annualized.",
    bullets: [
      "A-class family: amplitude / VoV / reversal / realized vol — 6 factors, 2 independent signals.",
      "Composite: low-vol PC1 + 0.5×VoV; c1→c5 holding; liquidity top-150 + selective top-5%.",
      "Sharpe 0.40, ICIR positive across full sample, OOS does not decay.",
    ],
    tags: ["Genetic Programming", "Volatility-of-Volatility", "Hierarchical Risk Parity", "iTransformer"],
  },
  {
    rank: "⭐⭐",
    title: "Hierarchical Agent Memory",
    org: "Tianshu Tech",
    blurb: "Saliency-aware 4-tier memory atop vLLM PagedAttention.",
    bullets: [
      "L1 KV Cache → L2 Redis recent → L3 Milvus fuzzy semantic → L4 Redis JSON structured profile.",
      "Bayesian non-parametric updates evolve across tiers via offline reflection stream.",
      "60%+ lossless context compression; ms-level personalized completion under high concurrency.",
    ],
    tags: ["vLLM PagedAttention", "Reflection Stream", "Bayesian Non-parametric", "Docker Swarm + Redis Stream"],
  },
  {
    rank: "⭐",
    title: "Diffusion-based Video Anomaly Detection",
    org: "Bachelor Thesis",
    blurb: "Multi-scale diffusion + MotionMAE > SOTA on 3 benchmarks.",
    bullets: [
      "Adaptive multi-scale diffusion + ViTPose-Tiny + Transformer Head + Classifier-Free Guidance.",
      "MotionMAE + Temporal Transformer feature processor.",
      "AUC: Avenue 0.934 / UCSD Ped1 0.864 / UCSD Ped2 0.904 — all > SOTA.",
    ],
    tags: ["Diffusion (CFG)", "ViTPose-Tiny", "MotionMAE", "Temporal Transformer"],
  },
];

export default function ProjectsPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="/ Projects"
        title={
          <>
            Selected case studies, ranked by{" "}
            <em className="text-accent">technical depth × business impact</em>.
          </>
        }
        subtitle="Each card is a compressed view; the underlying experiment chain and design notes live in private engineering docs."
      />

      <section className="py-8 lg:py-12 space-y-6">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.04}>
            <article className="group relative p-7 lg:p-10 rounded-xl border border-border bg-background-elev/40 hover:border-accent/30 hover:bg-background-elev/70 transition-all">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">{p.rank}</span>
                  <span className="text-xs text-muted-2 font-mono">{p.org}</span>
                </div>
                <span className="text-xs text-muted-2 font-mono">/ {String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl mt-3 leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-muted lg:text-lg max-w-3xl">{p.blurb}</p>

              <ul className="mt-6 space-y-2.5">
                {p.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="font-mono text-accent shrink-0 mt-0.5">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </section>
    </Container>
  );
}
