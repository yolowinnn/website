import { Container, FadeIn, PageHeader, SectionTitle } from "@/components/section";
import { VideoCard } from "@/components/video-card";

const hobbies = [
  {
    icon: "🏹",
    title: "Archery",
    en: "Archery",
    body:
      "Recurve / compound — the appeal is that the demand for stillness exceeds the demand for motion. Grip, release, breath, anchor. The moment you push, you miss; the moment you let go, you focus. Engineering rhymes: a panicked commit always loses to 30 calm seconds.",
    quote: "Focus on one line — and use it to thread many targets.",
  },
  {
    icon: "⛳",
    title: "Golf",
    en: "Golf",
    body:
      "The fun isn’t distance. It’s whether the deviation between predicted and actual landing point can be precisely attributed to one variable inside one phase of the swing. Same ergonomics as factor attribution / SHAP / model ablation — every replay is a backtest.",
  },
  {
    icon: "🤿",
    title: "Scuba Diving",
    en: "Scuba",
    body:
      "Mostly Phuket and Bali. Underwater is a peculiar engineering site — every invisible detail amplifies at 25 m. Buoyancy, gas consumption, current, visibility. It’s where I learned to feel “system redundancy” in my body: a single point of failure underwater is not allowed.",
  },
  {
    icon: "🏄",
    title: "Surf · Hike · Music",
    en: "Outdoors",
    body:
      "Surf complements diving — one teaches you to drop and observe, the other to float and follow. Long hikes are active meditation: recent ones in Shangri-La and Daocheng. Code to instrumental / Lo-fi / Post-rock; run to dense electronic.",
  },
];

const travelDestinations = [
  { tag: "✅", place: "China", note: "Dali · Shangri-La · Hainan" },
  { tag: "✅", place: "Thailand", note: "Phuket · Chiang Mai" },
  { tag: "✅", place: "Indonesia", note: "Bali" },
  { tag: "🔜", place: "France", note: "2026 Fall — M.Sc." },
  { tag: "🔜", place: "Portugal · Spain", note: "Summer destinations" },
];

const rockTracks = [
  { artist: "Pink Floyd", track: "Comfortably Numb", album: "The Wall · 1979", note: "The guitar solo I can&rsquo;t skip." },
  { artist: "Radiohead", track: "Paranoid Android", album: "OK Computer · 1997", note: "Three songs in one." },
  { artist: "Led Zeppelin", track: "Kashmir", album: "Physical Graffiti · 1975", note: "Riff that sounds like a desert." },
  { artist: "Queen", track: "Bohemian Rhapsody", album: "A Night at the Opera · 1975", note: "Operatic chaos, lovingly built." },
  { artist: "The Beatles", track: "While My Guitar Gently Weeps", album: "The White Album · 1968", note: "Harrison + Clapton." },
  { artist: "Nirvana", track: "Smells Like Teen Spirit", album: "Nevermind · 1991", note: "The riff that ended the 80s." },
];

export default function LifePage() {
  return (
    <Container>
      <PageHeader
        eyebrow="/ Life"
        title={
          <>
            An engineer&rsquo;s life is more than the editor.
          </>
        }
        subtitle="A page reserved for the three-dimensional me — so the reader behind the résumé remembers there&rsquo;s a specific person on the other side of the screen."
      />

      {/* TRAVEL VIDEOS GALLERY */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 01" title="Nomad — frames from a year on the road" />

        <FadeIn>
          <p className="text-muted max-w-3xl mb-10 leading-relaxed">
            In 2025 I ran a 6-month A/B test: in different cities, time zones,
            and work environments, can I still ship high-quality engineering?{" "}
            <span className="text-foreground">The answer was yes — and better.</span>
          </p>
        </FadeIn>

        {/* Mosaic gallery */}
        <div className="grid grid-cols-12 gap-3 lg:gap-4">
          <FadeIn className="col-span-12 lg:col-span-8 aspect-[16/9] lg:aspect-[16/10]">
            <VideoCard
              src="/videos/travel-02.mp4"
              caption="Sunset over the islands"
              location="Bali, Indonesia"
              className="h-full"
            />
          </FadeIn>
          <FadeIn className="col-span-6 lg:col-span-4 aspect-square">
            <VideoCard
              src="/videos/aerial-01.mp4"
              caption="DJI · slow descent"
              location="Aerial · Yunnan"
              className="h-full"
            />
          </FadeIn>
          <FadeIn className="col-span-6 lg:col-span-4 aspect-square">
            <VideoCard
              src="/videos/travel-01.mp4"
              caption="Roads I&rsquo;ve walked twice"
              location="Chiang Mai, Thailand"
              className="h-full"
            />
          </FadeIn>
          <FadeIn className="col-span-6 lg:col-span-4 aspect-square">
            <VideoCard
              src="/videos/aerial-03.mp4"
              caption="Top-down on the ridge"
              location="Aerial · Sichuan"
              className="h-full"
            />
          </FadeIn>
          <FadeIn className="col-span-6 lg:col-span-4 aspect-square">
            <VideoCard
              src="/videos/aerial-02.mp4"
              caption="Wind, then water"
              location="Aerial · Coastal"
              className="h-full"
            />
          </FadeIn>
        </div>

        {/* Lessons */}
        <div className="mt-14 grid lg:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {[
            { n: "01", title: "Time zones are structured silence", body: "Running CN projects from European tz: 8am there is 2pm here, everyone online. After 1pm the night falls in CN — and I get 4–5 hours of pure deep work. The “reverse rhythm” gave me my best benchmarks." },
            { n: "02", title: "Engineering must self-describe", body: "Without face-to-face explanation, I was forced to write self-describing systems: AGENTS.md / README.md / dev-history.md per module. Every structured doc you see is a nomad-habit byproduct." },
            { n: "03", title: "Life as project management", body: "Visa, housing, network, healthcare, taxes, family — each one is harder than a microservice. Tracking them as PR + issue board sharpened my instinct for system boundary conditions." },
            { n: "04", title: "Body and focus are one variable", body: "Mornings diving in Bali, afternoons writing code; cycling in Chiang Mai, evenings running backtests. Stabilize the body first, then the mind. They’re each a precondition for the other." },
          ].map((b) => (
            <FadeIn key={b.n}>
              <div className="bg-background p-7 lg:p-8 h-full">
                <div className="font-mono text-xs text-accent">/ {b.n}</div>
                <h3 className="font-serif text-2xl mt-2">{b.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{b.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Map / list */}
        <div className="mt-12 p-7 lg:p-8 rounded-xl border border-border bg-background-elev/40">
          <div className="text-xs font-mono text-muted-2 uppercase tracking-widest mb-5">
            Routes — done &amp; planned
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {travelDestinations.map((d) => (
              <div key={d.place} className="p-4 rounded-lg bg-background border border-border">
                <div className="text-xs font-mono">{d.tag}</div>
                <div className="font-serif text-lg mt-1">{d.place}</div>
                <div className="text-xs text-muted mt-1">{d.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 02" title="Hobbies — long-feedback precision sports" />
        <div className="grid lg:grid-cols-2 gap-4">
          {hobbies.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.05}>
              <article className="relative p-7 lg:p-8 rounded-xl border border-border bg-background-elev/40 h-full">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl">{h.icon}</span>
                  <h3 className="font-serif text-2xl">{h.title}</h3>
                  <span className="text-xs text-muted-2 font-mono">{h.en}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{h.body}</p>
                {h.quote && (
                  <div className="mt-5 pl-4 border-l-2 border-accent/40 font-serif italic text-foreground/90">
                    &ldquo;{h.quote}&rdquo;
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 p-7 lg:p-8 rounded-xl border border-border bg-gradient-to-br from-accent/[0.04] to-transparent">
            <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
              Why this is on a résumé site
            </div>
            <p className="text-foreground/90 leading-relaxed lg:text-lg max-w-3xl">
              Hobbies and career rhyme. Archery, golf, diving — each is a{" "}
              <em className="text-accent">long-feedback-loop precision sport</em>:
              you attribute invisible deviations to specific variables. That&rsquo;s
              what factor research, model evaluation, and system design do every day.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ROCK MUSIC */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 03" title="Rock — the records that built the taste" />
        <FadeIn>
          <p className="text-muted max-w-3xl mb-8 leading-relaxed">
            A reserved space for what plays in the headphones — riffs, solos,
            production stories. Curated, not exhaustive.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {rockTracks.map((t, i) => (
            <FadeIn key={t.track} delay={i * 0.04}>
              <div className="group relative p-5 rounded-xl border border-border bg-background-elev/40 hover:border-accent/40 transition-all h-full">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-serif text-xl leading-tight">{t.track}</div>
                    <div className="text-sm text-muted mt-1">{t.artist}</div>
                  </div>
                  <div className="size-9 rounded-full border border-border grid place-items-center group-hover:border-accent group-hover:text-accent transition-colors text-xs">
                    ▶
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-2 font-mono">{t.album}</div>
                <div className="mt-3 text-xs text-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: t.note }} />
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-8 p-5 rounded-xl border border-dashed border-border-strong text-sm text-muted-2 font-mono">
            // Reserved — coming: live-show photos, on-the-road playlists, and a
            short essay on why post-rock pairs better with vLLM than with quant.
          </div>
        </FadeIn>
      </section>

      {/* Closing quote */}
      <section className="py-16 lg:py-24">
        <FadeIn>
          <blockquote className="font-serif text-3xl lg:text-5xl leading-tight tracking-tight max-w-5xl">
            <em className="text-accent">&ldquo;Engineering and life don&rsquo;t have to fight.&rdquo;</em>{" "}
            <span className="text-muted">Focus is a way of living, not a posture.</span>
          </blockquote>
        </FadeIn>
      </section>
    </Container>
  );
}
