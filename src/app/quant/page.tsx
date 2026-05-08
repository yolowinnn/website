import { Container, FadeIn, PageHeader, SectionTitle } from "@/components/section";

const factors = [
  { id: "vol_004", formula: "cs_rank(-ts_mean((H-L)/L, 5))", econ: "5-day amplitude low → orderbook stable" },
  { id: "rev_004", formula: "cs_rank(-ts_mean((C-L)/L, 5))", econ: "Strong close → mean reversion" },
  { id: "rev_002", formula: "cs_rank(-ts_mean((H-C)/H, 5))", econ: "Selling pressure absorbed → bounce" },
  { id: "vol_001b", formula: "cs_rank(-realized_vol(C, 5))", econ: "5-day low vol premium" },
  { id: "vol_001", formula: "cs_rank(-realized_vol(C, 20))", econ: "20-day low vol premium" },
  { id: "vol_005", formula: "cs_rank(-vol_of_vol(C, 5, 20))", econ: "Low VoV → regime stable" },
];

export default function QuantPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="/ Quant"
        title={
          <>
            Not <em>&ldquo;a few factors&rdquo;</em> — a full pipeline.
          </>
        }
        subtitle="Data infra → features / models → backtest → risk constraints → review. Two main lines: A-share / futures traditional alpha; crypto perpetual high-frequency factor research."
      />

      {/* Yichen */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 01" title="Yichen Fund — A-share / Futures (2024.12 – 2025.02)" />
        <div className="grid lg:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          <FadeIn>
            <div className="bg-background-elev/40 p-7 lg:p-8 h-full">
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
                Factor mining + portfolio optimization
              </div>
              <h3 className="font-serif text-2xl">Symbolic discovery + multi-feature pillars.</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-muted leading-relaxed">
                <li><span className="text-accent font-mono">—</span> Wind + Akshare millisecond-level data stream.</li>
                <li><span className="text-accent font-mono">—</span> Genetic Programming (GP) symbolic factor engine for non-linear high-frequency alpha.</li>
                <li><span className="text-accent font-mono">—</span> iTransformer (ICLR 2024) for multivariate temporal features; GNN for industry supply-chain &amp; sector linkage topology.</li>
                <li><span className="text-accent font-mono">—</span> SHAP attribution + Ledoit-Wolf covariance shrinkage for strict factor orthogonality.</li>
              </ul>
              <div className="mt-6 p-5 rounded-lg bg-background border border-border">
                <div className="text-xs text-muted-2 font-mono uppercase tracking-widest">Annualized α (post-cost)</div>
                <div className="font-serif text-5xl mt-1 text-accent">15.2%</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-background-elev/40 p-7 lg:p-8 h-full">
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
                Multi-Agent RL trading
              </div>
              <h3 className="font-serif text-2xl">MAPPO + HRP for cyclical, high-vol sectors.</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-muted leading-relaxed">
                <li><span className="text-accent font-mono">—</span> Microstructure: LOB high-freq OBI + multi-level depth dynamics.</li>
                <li><span className="text-accent font-mono">—</span> MAPPO end-to-end position management on continuous state space.</li>
                <li><span className="text-accent font-mono">—</span> HRP replaces mean-variance to dodge covariance estimation bias under high-skew markets.</li>
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <Stat k="21.3%" l="Net Return" />
                <Stat k="6.0%" l="MDD" />
                <Stat k="2.1" l="Sharpe" accent />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Crypto */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 02" title="Crypto Perpetual — Personal Research (2026 – present)" />

        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <Stat k="569" l="USDT perpetuals" sub="incl. delisted, no survivorship" />
            <Stat k="3y" l="Minute-level data" sub="Binance OHLCV · 9.9 GB" />
            <Stat k="1133" l="Trading days" sub="IS 855 / OOS 272" />
            <Stat k="+24.2%" l="Post-cost annualized" accent sub="Sharpe 0.40" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-xl border border-border bg-background-elev/40 overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-baseline justify-between">
              <h3 className="font-serif text-2xl">A-class factor family</h3>
              <span className="text-xs font-mono text-muted-2">6 factors · 2 independent signals</span>
            </div>
            <div className="divide-y divide-border">
              {factors.map((f) => (
                <div key={f.id} className="grid sm:grid-cols-[10rem_1fr_1fr] gap-3 px-6 py-4 items-center">
                  <div className="font-mono text-sm text-accent">{f.id}</div>
                  <code className="font-mono text-xs text-foreground/90 break-all">{f.formula}</code>
                  <div className="text-sm text-muted">{f.econ}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 p-6 lg:p-8 rounded-xl border border-border bg-background-elev/40">
            <div className="text-xs font-mono text-accent uppercase tracking-widest">
              Composite signal
            </div>
            <pre className="mt-4 p-5 rounded-lg bg-black/40 border border-border overflow-x-auto text-xs leading-relaxed">
              <code className="font-mono text-foreground/90">{`signal_lowvol = (vol_004 + vol_001b + rev_002 + rev_004) / 4   # PC1 equivalent
signal_vov    = vol_005                                         # 2nd-order independent signal
composite     = cs_zscore(signal_lowvol + 0.5 * cs_zscore(signal_vov))`}</code>
            </pre>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="text-sm text-muted leading-relaxed">
                <strong className="text-foreground font-medium">Low-vol family</strong> stable over the full sample
                (positive ICIR every year; OOS does not decay — actually strengthens).
              </div>
              <div className="text-sm text-muted leading-relaxed">
                <strong className="text-foreground font-medium">VoV</strong> provides an independent 2nd-order risk
                signal, r ≈ 0.44–0.57 with low-vol family — <em>composes well, doesn&rsquo;t replace</em>.
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Engineered library */}
      <section className="py-12 lg:py-16">
        <SectionTitle number="/ 03" title="Not just research — engineered" />
        <FadeIn>
          <div className="p-6 lg:p-8 rounded-xl border border-border bg-background-elev/40">
            <p className="text-muted leading-relaxed mb-4">
              <code className="font-mono text-xs text-accent-soft">/Users/jiaweili/quant/factor_system/</code>{" "}
              has matured into a reusable factor library:
            </p>
            <ul className="space-y-2 text-sm text-muted leading-relaxed">
              <li><span className="text-accent font-mono mr-2">—</span> Factor definitions / cross-sectional &amp; time-series operators / rolling-window cache.</li>
              <li><span className="text-accent font-mono mr-2">—</span> Backtest engine (holding period, lazy threshold, configurable cost model).</li>
              <li><span className="text-accent font-mono mr-2">—</span> Full metrics suite: ICIR / Rank IC / decile NAV / turnover / Sortino.</li>
              <li><span className="text-accent font-mono mr-2">—</span> Report generator (Markdown + HTML + charts).</li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Closing */}
      <section className="py-16">
        <FadeIn>
          <blockquote className="font-serif text-3xl lg:text-4xl leading-tight max-w-4xl">
            <span className="text-muted">A factor isn&rsquo;t one line of alpha.</span>{" "}
            <code className="font-mono text-2xl text-accent">cs_rank(-realized_vol(C, 5))</code>{" "}
            <span className="text-muted">is</span>{" "}
            <em>a sentence about the market</em>.
          </blockquote>
        </FadeIn>
      </section>
    </Container>
  );
}

function Stat({ k, l, sub, accent }: { k: string; l: string; sub?: string; accent?: boolean }) {
  return (
    <div className="p-4 rounded-lg bg-background border border-border">
      <div className={`font-serif text-2xl lg:text-3xl ${accent ? "text-accent" : ""}`}>{k}</div>
      <div className="text-xs text-foreground/80 mt-1">{l}</div>
      {sub && <div className="text-[10px] text-muted-2 font-mono mt-0.5">{sub}</div>}
    </div>
  );
}
