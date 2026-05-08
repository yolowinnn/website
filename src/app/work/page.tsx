import { Container, FadeIn, PageHeader, SectionTitle } from "@/components/section";
import Link from "next/link";

const experiences = [
  {
    period: "2026.02 – Present",
    company: "IndustrialMind.ai",
    role: "AI Engineer",
    location: "Shanghai",
    clients: ["Siemens", "Andritz", "Tsubaki", "Tesa"],
    summary:
      "Driving end-to-end VLM × industrial-drawing pipelines from research notebook to customer container.",
    bullets: [
      "Proposed Plan + AGENTS on-the-spot programming paradigm: users write a natural-language plan; Cursor reads AGENTS.md to generate training / eval / deploy scripts.",
      "Designed Eval-Pipeline — a dual-path adaptive evaluation system using Postgres SKIP LOCKED + Cron heartbeat to build a task queue inside Vercel Serverless limits.",
      "Integrated DrawingInsightAgent (zoom-in multi-step reasoning) into the customer inference container — research connects directly to production.",
    ],
    tags: ["Vertex AI", "ms-swift", "DeepSpeed", "Flash-Attn", "Vercel + Supabase", "Customer Deployment", "Agent-in-Container"],
    accent: true,
  },
  {
    period: "2025.10 – 2026.02",
    company: "Shaanxi Tianshu Tech",
    role: "AI Algorithm Intern",
    location: "Xi'an",
    clients: ["DRaaS Lifestyle App"],
    summary:
      "Production-grade LLM inference + business recommendation algorithms for a lifestyle vertical app.",
    bullets: [
      "Dynamic hierarchical Agent memory on top of vLLM PagedAttention — L1–L4 saliency-aware tiers, 60%+ lossless context compression.",
      "Hotel heterogeneous retrieval: Constrained Decoding + JSON Schema → MRL + residual quantization → vLLM rerank inference < 200ms.",
      "Bayesian non-parametric update protocol — evolves fuzzy semantic fragments into symbolic structured profiles across tiers, reducing long-term semantic drift.",
    ],
    tags: ["vLLM", "PagedAttention", "FlashAttention-3", "Speculative Decoding", "Milvus + MRL + RQ", "Bayesian Non-parametric"],
  },
  {
    period: "2025.05 – 2025.09",
    company: "Fufeng Tech",
    role: "AI Algorithm Intern",
    location: "Shenzhen",
    clients: ["AI Learning Platform", "NL2SQL", "Cross-platform Profiling"],
    summary:
      "Shipped Vision-Native RAG + Agentic NL2SQL + multimodal customer profiling.",
    bullets: [
      "Vision-Native RAG: BGE-Visualized unified image-text space + RRF fusion + MinerU ROI pruning. Visual tokens -60%, index storage -90%, Recall@5 +18~22%, P90 < 500ms.",
      "Agentic NL2SQL: DeepSeek-R1 + Qwen2.5-VL, MindsDB TAG augmentation + full evidence trace + Context Persistence Hub.",
      "Cross-platform profiling: 700K+ IG/FB/RED records, SigLIP2 + Qwen2.5-VL-72B + Time2Vec + UMAP + HDBSCAN, silhouette 0.4 → 0.55+.",
    ],
    tags: ["BGE-Visualized", "RRF", "Milvus + Binary Quantization", "MinerU", "SigLIP2", "Qwen2.5-VL-72B", "UMAP/HDBSCAN"],
  },
  {
    period: "2025.02 – 2025.05",
    company: "Hangzhou Tianque Tech",
    role: "LLM Algorithm Intern",
    location: "Hangzhou",
    clients: ["Legal Risk Classification (Tencent Cloud-backed)"],
    summary: "R1 distillation + QDoRA fine-tuning + legal-domain incremental pretraining.",
    bullets: [
      "Synthesized 140K+ heterogeneous samples via Instruction Back-translation + IFD + entropy-based filtering.",
      "QDoRA across DeepSeek-R1-Distill-Qwen 7B/14B/32B: 4-bit weight direction/magnitude decoupling + dynamic SVD rank + NEFTune + Auto-CoT — accuracy 74% → 91%.",
      "Legal CPT: LayoutLMv3 multimodal parsing + In-Context Pretraining + BGE-M3 + TSP topology + R1 CoT distillation; reasoning completeness +27%.",
    ],
    tags: ["DeepSeek-R1", "QDoRA", "Dynamic Rank (SVD)", "NEFTune", "Auto-CoT", "LayoutLMv3", "ICP + BGE-M3", "TSP"],
  },
  {
    period: "2024.12 – 2025.02",
    company: "Yichen Fund",
    role: "Quant Intern",
    location: "Hangzhou",
    clients: ["Vitamin / Hog (high-vol cyclical)"],
    summary: "Symbolic factor discovery + multi-agent RL trading. See /quant for the full story.",
    bullets: [
      "GP + iTransformer + GNN factor mining — annualized α 15.2% (after costs).",
      "MAPPO + HRP long-short policy — net return 21.3%, MDD 6.0%, Sharpe 2.1.",
    ],
    tags: ["Genetic Programming", "iTransformer", "GNN", "MAPPO", "HRP", "Ledoit-Wolf"],
    seeMore: { href: "/quant", label: "Full quant page" },
  },
];

export default function WorkPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="/ Work"
        title={
          <>
            Five internships, five teams, <em>one curve</em>.
          </>
        }
        subtitle="From single algorithms → system capability → engineering paradigm. Each role is a deliberate move along that arc."
      />

      {/* Curve diagram */}
      <FadeIn>
        <section className="my-12 p-6 lg:p-8 rounded-xl border border-border bg-background-elev/50">
          <div className="text-xs font-mono text-muted-2 uppercase tracking-widest mb-5">
            The trajectory
          </div>
          <div className="grid sm:grid-cols-5 gap-3">
            {[
              ["Yichen", "Math-driven engineering"],
              ["Tianque", "Inside-the-model control"],
              ["Fufeng", "Algorithm at system scale"],
              ["Tianshu", "Inference performance"],
              ["IM", "LLM-driven engineering"],
            ].map(([k, v], i) => (
              <div key={k} className="relative p-4 rounded-lg bg-background border border-border">
                <div className="font-mono text-xs text-accent mb-1">/ 0{i + 1}</div>
                <div className="font-serif text-xl">{k}</div>
                <div className="text-xs text-muted mt-1">{v}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <section className="py-12 lg:py-16">
        <SectionTitle number="/ Detail" title="Each role, in three lines." />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.04}>
              <article
                className={`relative grid lg:grid-cols-[14rem_1fr] gap-4 lg:gap-12 p-6 lg:p-8 rounded-xl border ${
                  exp.accent
                    ? "border-accent/30 bg-gradient-to-br from-accent/[0.04] to-transparent"
                    : "border-border bg-background-elev/40"
                }`}
              >
                <div>
                  <div className="font-mono text-xs text-muted">{exp.period}</div>
                  <div className="mt-2 text-xs text-muted-2 font-mono">{exp.location}</div>
                  {exp.clients?.length ? (
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-widest text-muted-2 mb-2">
                        Clients
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.clients.map((c) => (
                          <span key={c} className="tag">{c}</span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="font-serif text-3xl tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-muted">·</span>
                    <span className="text-muted text-lg">{exp.company}</span>
                    {exp.accent && (
                      <span className="ml-2 tag tag-accent">Current</span>
                    )}
                  </div>
                  <p className="mt-3 text-foreground/90 leading-relaxed">{exp.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                        <span className="font-mono text-accent shrink-0 mt-0.5">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {exp.seeMore && (
                    <div className="mt-5">
                      <Link href={exp.seeMore.href} className="text-sm text-accent hover:text-accent-soft">
                        {exp.seeMore.label} →
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-16">
        <FadeIn>
          <div className="p-8 lg:p-10 rounded-xl border border-border bg-background-elev/40">
            <div className="text-xs font-mono text-accent uppercase tracking-widest">
              / Thesis
            </div>
            <h3 className="font-serif text-3xl mt-3">Diffusion-based Video Anomaly Detection</h3>
            <p className="mt-3 text-muted">
              Adaptive multi-scale diffusion + ViTPose-Tiny + Transformer Head + Classifier-Free Guidance.
              MotionMAE + Temporal Transformer feature processor.
            </p>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {[
                ["Avenue", "0.934", "+0.049"],
                ["UCSD Ped1", "0.864", "+0.041"],
                ["UCSD Ped2", "0.904", "+0.005"],
              ].map(([k, v, d]) => (
                <div key={k} className="p-4 rounded-lg bg-background border border-border">
                  <div className="text-xs text-muted-2 font-mono">{k}</div>
                  <div className="font-serif text-3xl mt-1">{v}</div>
                  <div className="text-xs text-green-deep font-mono mt-1">AUC {d} vs SOTA</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </Container>
  );
}
