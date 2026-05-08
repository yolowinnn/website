import Image from "next/image";
import {
  Container,
  FadeIn,
  ImageReveal,
  Marquee,
  PageHeader,
  Parallax,
  SectionTitle,
} from "@/components/section";
import { VideoCard } from "@/components/video-card";
import { PhotoStrip } from "@/components/photo-strip";

const hobbies = [
  {
    icon: "🏹",
    title: "Archery",
    body:
      "Recurve / compound — the appeal is that the demand for stillness exceeds the demand for motion. Grip, release, breath, anchor. The moment you push, you miss; the moment you let go, you focus.",
    quote: "Focus on one line — and use it to thread many targets.",
    tone: "accent",
  },
  {
    icon: "⛳",
    title: "Golf",
    body:
      "The fun isn't distance. It's whether the deviation between predicted and actual landing point can be precisely attributed to one variable in one phase of the swing. Same ergonomics as factor attribution.",
    tone: "green",
  },
  {
    icon: "🤿",
    title: "Scuba",
    body:
      "Mostly Phuket and Bali. Underwater is a peculiar engineering site — every invisible detail amplifies at 25 m. Where I learned to feel system redundancy in my body.",
    tone: "accent",
  },
  {
    icon: "🏄",
    title: "Surf · Hike · Music",
    body:
      "Surf complements diving — drop and observe vs float and follow. Hikes in Shangri-La and Daocheng. Code to instrumental / Lo-fi / Post-rock.",
    tone: "rose",
  },
];

type CountryData = {
  name: string;
  flag: string;
  photos: string[];
  caption: string;
  accent: "accent" | "green" | "rose";
};

const countries: CountryData[] = [
  {
    name: "Bali",
    flag: "🇮🇩",
    photos: [
      "/images/travel/bali/pental-beach.jpg",
      "/images/travel/bali/1.jpg",
      "/images/travel/bali/2.jpg",
      "/images/travel/bali/3.jpg",
      "/images/travel/bali/4.jpg",
      "/images/travel/bali/5.jpg",
      "/images/travel/bali/6.jpg",
      "/images/travel/bali/7.jpg",
    ],
    caption:
      "Mornings diving Penida, afternoons writing code on a balcony in Ubud. Where I first understood that focus is a way of living, not a posture.",
    accent: "green",
  },
  {
    name: "Bromo",
    flag: "🌋",
    photos: [
      "/images/travel/bromo/1.jpg",
      "/images/travel/bromo/2.jpg",
      "/images/travel/bromo/3.jpg",
    ],
    caption:
      "Pre-dawn jeep ride to the volcano rim. Java's lunar-looking caldera at sunrise is a reminder that scale is real.",
    accent: "rose",
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    photos: [
      "/images/travel/thailand/1.jpg",
      "/images/travel/thailand/2.jpg",
      "/images/travel/thailand/3.jpg",
      "/images/travel/thailand/4.jpg",
    ],
    caption:
      "Phuket diving + Chiang Mai mountain cycling. The cleanest test bed for nomad routines: the wifi is fast, the food is fuel, the deadline is forgiving.",
    accent: "accent",
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    photos: [
      "/images/travel/malaysia/1.jpg",
      "/images/travel/malaysia/2.jpg",
      "/images/travel/malaysia/3.jpg",
      "/images/travel/malaysia/4.jpg",
      "/images/travel/malaysia/5.jpg",
      "/images/travel/malaysia/6.jpg",
      "/images/travel/malaysia/7.jpg",
    ],
    caption:
      "Kuala Lumpur is what happens when three cuisines and four languages share a metro. KL Tower at night is the city's heartbeat made visible.",
    accent: "green",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    photos: [
      "/images/travel/singapore/1.jpg",
      "/images/travel/singapore/2.jpg",
      "/images/travel/singapore/3.jpg",
      "/images/travel/singapore/4.jpg",
      "/images/travel/singapore/5.jpg",
      "/images/travel/singapore/6.jpg",
    ],
    caption:
      "An entire city as a UX exhibit. Marina Bay at golden hour, Hawker Centre at midnight, MRT in between — engineering taste calibrated.",
    accent: "accent",
  },
  {
    name: "Hong Kong",
    flag: "🇭🇰",
    photos: [
      "/images/travel/hk/1.jpg",
      "/images/travel/hk/2.jpg",
      "/images/travel/hk/3.jpg",
      "/images/travel/hk/4.jpg",
      "/images/travel/hk/5.jpg",
      "/images/travel/hk/6.jpg",
    ],
    caption:
      "Tram up to The Peak, Star Ferry across the harbour, dim sum at sunrise. A density of decisions per square kilometre that you can't simulate.",
    accent: "rose",
  },
  {
    name: "Yunnan",
    flag: "🏔️",
    photos: [
      "/images/travel/yunnan/views.jpg",
      "/images/travel/yunnan/beach.jpg",
      "/images/travel/yunnan/food.jpg",
      "/images/travel/yunnan/music_band.jpg",
    ],
    caption:
      "Dali → Shangri-La. Long-distance walking is active meditation; the altitude trims everything you don't need.",
    accent: "green",
  },
  {
    name: "Shanghai",
    flag: "🇨🇳",
    photos: [
      "/images/travel/shanghai/1.jpg",
      "/images/travel/shanghai/2.jpg",
    ],
    caption:
      "Home base — where the laptop sleeps and IndustrialMind.ai code gets shipped.",
    accent: "accent",
  },
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

      {/* INTRO with floating travel marquee */}
      <FadeIn>
        <section className="py-8">
          <Marquee speed="fast">
            {countries.map((c) => (
              <span key={c.name} className="inline-flex items-center gap-12">
                <span className="font-serif text-4xl italic">{c.flag} {c.name}</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </Marquee>
        </section>
      </FadeIn>

      {/* TRAVEL VIDEOS */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 01" title="Frames in motion" />
        <FadeIn>
          <p className="text-muted max-w-3xl mb-10 leading-relaxed">
            In 2025 I ran a 6-month A/B test: in different cities, time zones,
            and work environments, can I still ship high-quality engineering?{" "}
            <span className="text-foreground font-medium">The answer was yes — and better.</span>
          </p>
        </FadeIn>

        <div className="grid grid-cols-12 gap-3 lg:gap-4">
          <div className="col-span-12 lg:col-span-8 aspect-[16/9] lg:aspect-[16/10]">
            <VideoCard
              src="/videos/travel-02.mp4"
              caption="Sunset over the islands"
              location="Bali, Indonesia"
              className="h-full"
            />
          </div>
          <div className="col-span-6 lg:col-span-4 aspect-square">
            <VideoCard
              src="/videos/aerial-01.mp4"
              caption="DJI · slow descent"
              location="Aerial · Yunnan"
              className="h-full"
            />
          </div>
          <div className="col-span-6 lg:col-span-4 aspect-square">
            <VideoCard
              src="/videos/travel-01.mp4"
              caption="Roads I&rsquo;ve walked twice"
              location="Chiang Mai"
              className="h-full"
            />
          </div>
          <div className="col-span-6 lg:col-span-4 aspect-square">
            <VideoCard
              src="/videos/aerial-03.mp4"
              caption="Top-down on the ridge"
              location="Aerial · Sichuan"
              className="h-full"
            />
          </div>
          <div className="col-span-6 lg:col-span-4 aspect-square">
            <VideoCard
              src="/videos/aerial-02.mp4"
              caption="Wind, then water"
              location="Aerial · Coastal"
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* COUNTRY GALLERIES */}
      <section className="py-12 lg:py-20">
        <SectionTitle number="/ 02" title="Every place I&rsquo;ve carried the laptop" />
        <div className="space-y-24 lg:space-y-36 mt-12">
          {countries.map((c) => (
            <PhotoStrip
              key={c.name}
              countryName={c.name}
              flag={c.flag}
              caption={c.caption}
              photos={c.photos}
              accent={c.accent}
            />
          ))}
        </div>
      </section>

      {/* WHY NOMAD MATTERS */}
      <section className="py-16 lg:py-20 bg-background-elev/40 -mx-6 lg:-mx-8 px-6 lg:px-8 rounded-3xl">
        <SectionTitle number="/ 03" title="What the road taught me" />
        <div className="grid lg:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            {
              n: "01",
              title: "Time zones are structured silence",
              body: "Running CN projects from European tz: 8am there is 2pm here, everyone online. After 1pm, 4–5 hours of pure deep work. Reverse rhythm gave me my best benchmarks.",
              tone: "accent",
            },
            {
              n: "02",
              title: "Engineering must self-describe",
              body: "Without face-to-face explanation, I was forced to write self-describing systems: AGENTS.md / README.md / dev-history.md per module. Every doc you see is a nomad-habit byproduct.",
              tone: "green",
            },
            {
              n: "03",
              title: "Life as project management",
              body: "Visa, housing, network, healthcare, taxes, family — each is harder than a microservice. Tracking them as PR + issue board sharpened my system-boundary instinct.",
              tone: "rose",
            },
            {
              n: "04",
              title: "Body and focus are one variable",
              body: "Mornings diving in Bali, afternoons writing code; cycling in Chiang Mai, evenings running backtests. Stabilize the body first, then the mind.",
              tone: "accent",
            },
          ].map((b, i) => (
            <FadeIn key={b.n} delay={i * 0.04}>
              <div className="bg-background p-7 lg:p-9 h-full">
                <div className="font-mono text-xs text-accent-deep">/ {b.n}</div>
                <h3 className="font-serif text-2xl mt-2">{b.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{b.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* HOBBIES */}
      <section className="py-16 lg:py-20">
        <SectionTitle number="/ 04" title="Hobbies — long-feedback precision sports" />
        <div className="grid lg:grid-cols-2 gap-4">
          {hobbies.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.05}>
              <article className="lift-card relative p-7 lg:p-9 rounded-2xl border border-border bg-background h-full">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl">{h.icon}</span>
                  <h3 className="font-serif text-2xl">{h.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">{h.body}</p>
                {h.quote && (
                  <div className="mt-5 pl-4 border-l-2 border-accent font-serif italic text-foreground/90">
                    &ldquo;{h.quote}&rdquo;
                  </div>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 p-7 lg:p-10 rounded-2xl bg-gradient-to-br from-accent-soft/30 via-background to-green-soft/20 border border-border">
            <div className="ribbon mb-3">Why this is on a portfolio</div>
            <p className="text-foreground/90 leading-relaxed lg:text-lg max-w-3xl">
              Hobbies and career rhyme. Archery, golf, diving — each is a{" "}
              <em className="text-green-deep">long-feedback-loop precision sport</em>:
              you attribute invisible deviations to specific variables. That&rsquo;s
              what factor research, model evaluation, and system design do every day.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ROCK MUSIC with band photos */}
      <section className="py-16 lg:py-24">
        <SectionTitle number="/ 05" title="Rock — what plays in the headphones" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Band photo collage */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n, i) => (
              <FadeIn key={n} delay={i * 0.04} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <Parallax speed={i % 2 === 0 ? 0.05 : -0.05} className="h-full">
                  <ImageReveal className={`image-frame ${i === 0 ? "aspect-[4/5]" : "aspect-square"} h-full`}>
                    <Image
                      src={`/images/music/${n}.jpg`}
                      alt={`Live show ${n}`}
                      width={800}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </ImageReveal>
                </Parallax>
              </FadeIn>
            ))}
          </div>

          {/* Track list */}
          <div>
            <p className="text-muted leading-relaxed mb-6">
              Live shows, late-night sessions, riffs that built the taste. A
              curated, opinionated list — not exhaustive.
            </p>
            <div className="space-y-2">
              {rockTracks.map((t, i) => (
                <FadeIn key={t.track} delay={i * 0.04}>
                  <div className="lift-card group flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent">
                    <div className="size-10 shrink-0 rounded-full bg-accent-soft border border-accent grid place-items-center text-accent-deep group-hover:bg-accent group-hover:text-background transition-colors">
                      ▶
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-serif text-lg truncate">{t.track}</span>
                        <span className="text-xs text-muted-2 font-mono shrink-0">{t.album.split(" · ")[1]}</span>
                      </div>
                      <div className="text-xs text-muted">{t.artist}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <FadeIn>
          <div className="mt-10 p-5 rounded-2xl border border-dashed border-border-strong text-sm text-muted-2 font-mono">
            // Reserved — coming: live-show photos with venue + setlist, on-the-road
            playlists, and a short essay on why post-rock pairs better with vLLM than with quant.
          </div>
        </FadeIn>
      </section>

      {/* CLOSING */}
      <section className="py-20 lg:py-28">
        <FadeIn>
          <blockquote className="font-serif text-3xl lg:text-5xl leading-tight tracking-tight max-w-5xl">
            <em className="text-green-deep">&ldquo;Engineering and life don&rsquo;t have to fight.&rdquo;</em>{" "}
            <span className="text-muted">Focus is a way of living, not a posture.</span>
          </blockquote>
        </FadeIn>
      </section>
    </Container>
  );
}
