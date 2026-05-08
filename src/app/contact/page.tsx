import { Container, FadeIn, PageHeader, SectionTitle } from "@/components/section";

const channels = [
  {
    label: "Email",
    value: "ljw2556826312@gmail.com",
    href: "mailto:ljw2556826312@gmail.com",
    primary: true,
  },
  {
    label: "LinkedIn",
    value: "/in/jiawei-li-1b1482341",
    href: "https://www.linkedin.com/in/jiawei-li-1b1482341/",
  },
  {
    label: "GitHub",
    value: "@yolowinnn",
    href: "https://github.com/yolowinnn",
  },
  {
    label: "Phone / WeChat",
    value: "+86 199 4053 2470",
  },
];

const looking = [
  "Software Engineer / AI Engineer / ML Engineer (full-time, 2026 Fall / 2027 onboarding)",
  "Quantitative Researcher / Quant Developer (full-time / internship)",
  "Algorithm Engineer (multimodal / RAG / Agent / Inference — any focus)",
  "Master Thesis / Research Internship (during studies, 2026 Fall onward)",
];

const notFor = [
  "Roles that depend heavily on in-office presence and reject async collaboration",
  "Pure web / pure app roles without algorithmic or model components",
  "Full-time 5-day on-site in China that conflicts with M.Sc. France",
];

const why = [
  ["Algorithm + engineering as one body", "From vLLM kernel optimization to Vertex Custom Training to Vercel Serverless task scheduling — same line of thinking through all of it."],
  ["Quant + multimodal dual background", "I switch comfortably between mathematical rigor and engineering roughness."],
  ["Remote-friendly", "One year of nomad living proved that I deliver high-quality engineering across time zones."],
  ["Explainable", "Every line of the résumé and every number — I can walk you through the experiment chain."],
];

export default function ContactPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="/ Contact"
        title={
          <>
            Hire someone who&rsquo;ll make your{" "}
            <em className="text-accent">job easier</em> — not your job description.
          </>
        }
        subtitle="Job opportunities, project consults, quant discussions, or a nomad-route dinner — all welcome."
      />

      {/* Channels */}
      <section className="py-8 lg:py-12">
        <div className="grid sm:grid-cols-2 gap-3">
          {channels.map((c) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <FadeIn key={c.label}>
                <Wrapper
                  {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}
                  className={`block p-6 lg:p-7 rounded-xl border transition-all ${
                    c.primary
                      ? "border-accent/40 bg-gradient-to-br from-accent/[0.06] to-transparent hover:border-accent"
                      : "border-border bg-background-elev/40 hover:border-border-strong hover:bg-background-elev/70"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-mono text-muted-2 uppercase tracking-widest">
                      {c.label}
                    </div>
                    {c.href && (
                      <span className="font-mono text-xs text-accent">↗</span>
                    )}
                  </div>
                  <div className="font-serif text-2xl lg:text-3xl mt-2 break-all">
                    {c.value}
                  </div>
                </Wrapper>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Looking for */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 01" title="What I&rsquo;m looking at" />
        <ul className="space-y-3">
          {looking.map((l, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <li className="flex gap-4 p-5 rounded-xl border border-border bg-background-elev/40">
                <span className="text-accent font-mono shrink-0 mt-1">✓</span>
                <span className="text-foreground/90 leading-relaxed">{l}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* Not a fit */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 02" title="Probably not a fit" />
        <ul className="space-y-3">
          {notFor.map((l, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <li className="flex gap-4 p-5 rounded-xl border border-border bg-background-elev/40 opacity-80">
                <span className="text-muted-2 font-mono shrink-0 mt-1">×</span>
                <span className="text-muted leading-relaxed">{l}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* Why work with me */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 03" title="Why work with me" />
        <div className="grid sm:grid-cols-2 gap-3">
          {why.map(([t, b], i) => (
            <FadeIn key={t} delay={i * 0.04}>
              <div className="p-6 rounded-xl border border-border bg-background-elev/40 h-full">
                <div className="font-mono text-xs text-accent">/ 0{i + 1}</div>
                <h3 className="font-serif text-2xl mt-2 leading-tight">{t}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{b}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Final */}
      <section className="py-16 lg:py-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border p-10 lg:p-16 bg-gradient-to-br from-background-elev to-background">
            <div className="absolute -top-40 -left-40 size-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="text-xs font-mono text-accent uppercase tracking-[0.2em]">
                Send the email
              </div>
              <h3 className="font-serif text-4xl lg:text-6xl mt-4 leading-tight">
                I read every message.<br />
                <span className="text-muted">Tell me what you&rsquo;re building.</span>
              </h3>
              <a
                href="mailto:ljw2556826312@gmail.com?subject=Hi%20Jiawei"
                className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-accent text-black hover:bg-accent-soft transition-colors font-medium"
              >
                ljw2556826312@gmail.com
                <span className="font-mono">→</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </Container>
  );
}
