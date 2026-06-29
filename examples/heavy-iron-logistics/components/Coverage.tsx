import { company, crossBorder } from "@/app/content";

export function Coverage() {
  return (
    <section id="coverage" className="scroll-mt-24 border-b border-line py-24">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow"><span className="h-2 w-2 bg-safety" />Cross-border</span>
          <h2 className="display mt-4 text-5xl text-foreground sm:text-6xl">
            One broker, three countries
          </h2>
          <p className="mt-4 text-muted">
            From a secure holding yard in {company.yard}, we move freight seamlessly across the
            US–Mexico and US–Canada borders — handling the paperwork so your equipment keeps moving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {company.regions.map((r) => (
              <span
                key={r}
                className="rounded-sm border border-line bg-surface px-4 py-2 text-sm font-semibold uppercase tracking-wider text-foreground"
              >
                {r}
              </span>
            ))}
          </div>

          <dl className="mt-10 space-y-5">
            {crossBorder.map((c) => (
              <div key={c.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-safety text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                    <path d="m5 13 4 4L19 7" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <dt className="font-semibold text-foreground">{c.title}</dt>
                  <dd className="text-sm text-muted">{c.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* stylized route panel */}
        <div className="card relative overflow-hidden p-8">
          <div className="absolute right-0 top-0 h-24 w-24 bg-hazard opacity-20" />
          <p className="font-display text-2xl text-foreground">Border-region advantage</p>
          <p className="mt-2 text-sm text-muted">
            Headquartered minutes from the Hidalgo–Reynosa crossing — one of the busiest commercial
            gateways in North America.
          </p>

          <div className="mt-8 space-y-4">
            <RouteRow from="Texas, USA" to="Northern Mexico" label="Customs-cleared" />
            <RouteRow from="US Midwest" to="Western Canada" label="Permitted" />
            <RouteRow from="Gulf Coast" to="Nationwide" label="Door-to-door" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line">
            <div className="bg-surface-2 p-4">
              <p className="font-display text-3xl text-safety">{company.usdot}</p>
              <p className="text-xs uppercase tracking-wider text-muted">USDOT</p>
            </div>
            <div className="bg-surface-2 p-4">
              <p className="font-display text-3xl text-safety">{company.mc}</p>
              <p className="text-xs uppercase tracking-wider text-muted">FMCSA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteRow({ from, to, label }: { from: string; to: string; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-sm border border-line bg-surface-2 p-3">
      <span className="text-sm font-semibold text-foreground">{from}</span>
      <span className="flex-1 border-t border-dashed border-line" />
      <span className="text-safety">→</span>
      <span className="flex-1 border-t border-dashed border-line" />
      <span className="text-sm font-semibold text-foreground">{to}</span>
      <span className="ml-2 hidden rounded-sm bg-safety/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-safety sm:inline">
        {label}
      </span>
    </div>
  );
}
