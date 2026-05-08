import { Container, FadeIn, PageHeader, SectionTitle } from "@/components/section";
import Link from "next/link";

const timeline = [
  { date: "2026.02 – Present", role: "AI Engineer", org: "IndustrialMind.ai", loc: "Shanghai", current: true },
  { date: "2026 Fall →", role: "M.Sc. AI & Applied Statistics", org: "France", loc: "(incoming)", current: false, accent: true },
  { date: "2025.10 – 2026.02", role: "AI Algorithm Intern", org: "Tianshu Tech", loc: "Xi'an" },
  { date: "2025.05 – 2025.09", role: "AI Algorithm Intern", org: "Fufeng Tech", loc: "Shenzhen" },
  { date: "2025.02 – 2025.05", role: "LLM Algorithm Intern", org: "Tianque Tech", loc: "Hangzhou" },
  { date: "2024.12 – 2025.02", role: "Quant Intern", org: "Yichen Fund", loc: "Hangzhou" },
  { date: "2024.12 – 2025.05", role: "Thesis", org: "Diffusion-based Video Anomaly Detection", loc: "" },
  { date: "2021.09 – 2026.01", role: "B.Sc. Statistics", org: "Southwest Jiaotong University", loc: "" },
];

const keywords = [
  "Multimodal LLM", "Vertex AI", "vLLM", "RAG", "Agentic Systems",
  "Quantitative Finance", "MAPPO", "Genetic Programming", "iTransformer",
  "GNN", "Diffusion Models", "DPO/GRPO", "Plan + AGENTS",
  "Customer Deployment", "Edge Cron Heartbeat", "Serverless Queue",
];

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="/ About"
        title={
          <>
            Math statistics → <em>Quant</em> → Multimodal AI →{" "}
            <span className="text-accent">Industrial AI</span>.
          </>
        }
        subtitle="Wide-looking trajectory, single throughline: use the most rigorous math and the most brute-force engineering to solve real-world complex problems."
      />

      {/* The story */}
      <section className="py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 self-start">
            <div className="font-mono text-xs text-accent">/ 01</div>
            <h2 className="font-serif text-3xl mt-3 leading-tight">
              The story, in <em>one breath</em>.
            </h2>
          </div>
          <div className="space-y-6 text-foreground/90 leading-relaxed lg:text-lg">
            <p>
              I&rsquo;m <strong className="font-medium text-foreground">Jiawei Li</strong>,
              born in 2003 in Qingyang, Gansu. I study statistics at Southwest
              Jiaotong University. My trajectory has been mathematical
              statistics → quantitative finance → LLMs / multimodal AI →
              industrial AI — wide-looking, with a single throughline.
            </p>
            <p>
              In the past two years I&rsquo;ve shipped: high-frequency alpha
              factors (GP + iTransformer + GNN) at <Link href="/quant" className="link">Yichen Fund</Link>;
              R1 distillation + QDoRA fine-tuning for legal at Tianque; Vision-Native
              RAG, Agentic NL2SQL, and cross-platform multimodal profiling at
              Fufeng; vLLM kernel-level optimization and hierarchical Agent
              memory at Tianshu; and currently, end-to-end VLM pipelines for
              industrial drawing understanding at <Link href="/work" className="link">IndustrialMind.ai</Link>.
            </p>
            <p className="text-muted">
              Two themes recur on my résumé:
            </p>
            <ul className="space-y-3 pl-0 list-none">
              <li className="flex gap-4">
                <span className="font-mono text-xs text-accent mt-2 shrink-0">01</span>
                <span><strong className="font-medium">Engineering systems that are explainable, auditable, and resumable.</strong>
                  <span className="text-muted"> I believe boundaries are designed, not stumbled into.</span></span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-xs text-accent mt-2 shrink-0">02</span>
                <span><strong className="font-medium">Numbers I can defend.</strong>
                  <span className="text-muted"> Never inflated, always backed by a full experimental chain.</span></span>
              </li>
            </ul>
            <p className="pt-2">
              Outside work I shoot archery, golf, scuba, surf, hike. I&rsquo;ve also
              tried digital-nomad living — it taught me that engineering and
              life don&rsquo;t have to fight: <em>focus is a way of living, not a posture</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <SectionTitle number="/ 02" title="Timeline" />
        <div className="relative">
          <div className="absolute left-0 lg:left-[18rem] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="grid lg:grid-cols-[18rem_1fr] gap-4 lg:gap-12 group">
                  <div className="font-mono text-sm text-muted lg:text-right lg:pr-8 relative">
                    {t.date}
                  </div>
                  <div className="relative pl-6 lg:pl-12">
                    <span
                      className={`absolute left-0 lg:-left-1.5 top-2 size-3 rounded-full border-2 ${
                        t.current
                          ? "bg-accent border-accent shadow-[0_0_20px_rgba(212,162,86,0.6)]"
                          : t.accent
                          ? "bg-background border-accent"
                          : "bg-background border-border-strong"
                      }`}
                    />
                    <div className="font-serif text-2xl leading-tight">{t.role}</div>
                    <div className="text-muted mt-0.5">
                      {t.org} {t.loc && <span className="text-muted-2">· {t.loc}</span>}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-16 lg:py-20">
        <SectionTitle number="/ 03" title="Vocabulary I work with" />
        <div className="flex flex-wrap gap-2">
          {keywords.map((k) => (
            <span key={k} className="tag">{k}</span>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-16 lg:py-24">
        <FadeIn>
          <blockquote className="font-serif text-3xl lg:text-5xl leading-tight tracking-tight max-w-4xl">
            &ldquo;I keep the <em className="text-accent">uncertainty</em> of research
            and the certainty of engineering on separate tracks — so both move fast.&rdquo;
          </blockquote>
        </FadeIn>
      </section>
    </Container>
  );
}
