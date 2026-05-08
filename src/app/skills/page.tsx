import { Container, FadeIn, PageHeader, SectionTitle } from "@/components/section";

type Row = { area: string; keywords: string; level: number; project?: string };

const algorithm: Row[] = [
  { area: "Multimodal LLM", keywords: "Qwen3-VL · Qwen2.5-VL-72B · SigLIP2 · BGE-Visualized", level: 5, project: "IM Industrial / Tsubaki / Fufeng RAG" },
  { area: "LLM Fine-tuning", keywords: "SFT · DPO · GRPO · QDoRA · LoRA / PEFT-CPT", level: 5, project: "Tianque legal R1 / Qwen full series" },
  { area: "RAG / Agent", keywords: "Vision-Native RAG · Agentic NL2SQL · DrawingInsightAgent · Function Calling", level: 5, project: "Fufeng / IM Agent-in-Container" },
  { area: "Inference Optimization", keywords: "vLLM PagedAttention · FlashAttention-3 · Speculative Decoding · FP8/INT4", level: 4, project: "Tianshu / IM" },
  { area: "Quant Alpha", keywords: "Genetic Programming · iTransformer · GNN · MAPPO · HRP", level: 4, project: "Yichen Fund / Crypto" },
  { area: "Diffusion / Anomaly", keywords: "ViTPose-Tiny · Transformer Head · MotionMAE", level: 4, project: "Thesis" },
  { area: "Time-series / Microstructure", keywords: "LOB / OBI · Time2Vec · vol-of-vol · Ledoit-Wolf", level: 4, project: "Yichen + Crypto" },
];

const engineering: Row[] = [
  { area: "Cloud / Training", keywords: "Vertex AI Custom Training · GCS · Cloud Build · Artifact Registry", level: 5, project: "IMTrainer" },
  { area: "Serverless", keywords: "Vercel Edge / Cron / Blob · Supabase · Postgres SKIP LOCKED", level: 5, project: "Eval-Pipeline" },
  { area: "Container", keywords: "Docker / Swarm · Customer Deployment · Agent-in-Container", level: 4, project: "IM" },
  { area: "Distributed Inference", keywords: "vLLM · TensorRT-LLM · DeepSpeed · Flash-Attn · Continuous Batching", level: 4, project: "Tianshu / IM" },
  { area: "Vector DB", keywords: "Milvus · MinIO · Binary Quantization · Residual Quantization · MRL", level: 5, project: "Fufeng / Tianshu" },
  { area: "Database", keywords: "Supabase / Postgres · Redis (KV/JSON) · Neo4j · MindsDB", level: 4, project: "Eval / NL2SQL" },
  { area: "CAD / Industrial", keywords: "DXF/DWG (ezdxf) · IDF/PCF · LayoutLMv3", level: 3, project: "Siemens / Henry Mogi" },
];

const research = [
  { area: "Statistics", keywords: "Non-parametric · Stochastic Processes · Applied Regression · Time Series", level: 5 },
  { area: "Probability / Bayesian", keywords: "Bayesian Non-parametric · MAP/MLE · Information Entropy · IFD", level: 4 },
  { area: "Reinforcement Learning", keywords: "PPO · DDPG · MAPPO · RLHF", level: 4 },
  { area: "Generative Models", keywords: "Diffusion (CFG) · Auto-encoder · MotionMAE", level: 3 },
  { area: "Optimization", keywords: "Ledoit-Wolf shrinkage · SHAP · HRP · MCDA-TOPSIS", level: 4 },
];

export default function SkillsPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="/ Skills"
        title={
          <>
            Four layers — <em>Algorithm</em>,{" "}
            <em>Engineering</em>, <em>Research</em>,{" "}
            <em className="text-accent">Tools</em>.
          </>
        }
        subtitle="Each row carries a fluency rating and a typical project. The aim is for an employer to form the right impression in three seconds."
      />

      <Section title="01 — Algorithm / Models" rows={algorithm} />
      <Section title="02 — Engineering / Systems" rows={engineering} />
      <ResearchSection rows={research} />

      {/* Tools */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 04" title="Languages, Frameworks, Platforms" />
        <div className="grid lg:grid-cols-2 gap-6">
          <Bucket
            label="Languages"
            items={[
              { name: "Python", level: 5 },
              { name: "C++", level: 3 },
              { name: "TypeScript", level: 3 },
              { name: "SQL", level: 4 },
              { name: "Bash", level: 4 },
            ]}
          />
          <Bucket
            label="Spoken"
            items={[
              { name: "Chinese (native)", level: 5 },
              { name: "English (CET-4 512 / CET-6 440 · IELTS in prep)", level: 4 },
              { name: "French (basic, M.Sc. France)", level: 2 },
            ]}
          />
          <Tags
            label="Frameworks"
            items={["PyTorch", "transformers", "ms-swift", "litellm", "FastAPI", "React (Vite)", "Tailwind"]}
          />
          <Tags
            label="Platforms"
            items={[
              "Google Cloud (Vertex / GCS / Cloud Build)",
              "Vercel",
              "Supabase",
              "OpenRouter",
              "Anthropic / Google AI Studio / Azure OpenAI",
            ]}
          />
          <Tags
            label="Collaboration"
            items={["Cursor", "GitHub", "Label Studio", "飞书 Lark", "Notion", "Obsidian"]}
          />
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16">
        <FadeIn>
          <blockquote className="font-serif text-3xl lg:text-5xl leading-tight max-w-5xl">
            &ldquo;Deeply understand models · build queues for systems · write
            PyTorch <em className="text-accent">and</em> explain factors.&rdquo;
            <span className="block text-muted text-base font-sans mt-4 not-italic">
              — what I want an employer to know about me in three seconds.
            </span>
          </blockquote>
        </FadeIn>
      </section>
    </Container>
  );
}

function Section({ title, rows }: { title: string; rows: Row[] }) {
  const [num, ...rest] = title.split(" — ");
  return (
    <section className="py-12 lg:py-16">
      <SectionTitle number={`/ ${num}`} title={rest.join(" — ")} />
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="hidden lg:grid grid-cols-[14rem_1fr_8rem_14rem] gap-6 px-6 py-3 bg-background-elev/60 text-xs font-mono text-muted-2 uppercase tracking-widest border-b border-border">
          <span>Area</span>
          <span>Keywords</span>
          <span>Fluency</span>
          <span>Project</span>
        </div>
        <div className="divide-y divide-border">
          {rows.map((r, i) => (
            <FadeIn key={r.area} delay={i * 0.03}>
              <div className="grid lg:grid-cols-[14rem_1fr_8rem_14rem] gap-3 lg:gap-6 px-6 py-5 items-baseline hover:bg-background-elev/40 transition-colors">
                <div className="font-serif text-lg">{r.area}</div>
                <div className="text-sm text-muted leading-relaxed">{r.keywords}</div>
                <Stars n={r.level} />
                <div className="text-xs text-muted-2 font-mono">{r.project}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchSection({ rows }: { rows: { area: string; keywords: string; level: number }[] }) {
  return (
    <section className="py-12 lg:py-16">
      <SectionTitle number="/ 03" title="Research / Mathematics" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {rows.map((r) => (
          <FadeIn key={r.area}>
            <div className="p-5 rounded-xl border border-border bg-background-elev/40 h-full">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-xl">{r.area}</h3>
                <Stars n={r.level} />
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{r.keywords}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`text-xs ${i <= n ? "text-accent" : "text-muted-2"}`}
        >
          ●
        </span>
      ))}
    </div>
  );
}

function Bucket({ label, items }: { label: string; items: { name: string; level: number }[] }) {
  return (
    <div className="p-5 rounded-xl border border-border bg-background-elev/40">
      <div className="text-xs font-mono text-muted-2 uppercase tracking-widest mb-3">{label}</div>
      <div className="space-y-2.5">
        {items.map((it) => (
          <div key={it.name} className="flex items-center justify-between gap-4 text-sm">
            <span>{it.name}</span>
            <Stars n={it.level} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Tags({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="p-5 rounded-xl border border-border bg-background-elev/40">
      <div className="text-xs font-mono text-muted-2 uppercase tracking-widest mb-3">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span key={it} className="tag">{it}</span>
        ))}
      </div>
    </div>
  );
}
