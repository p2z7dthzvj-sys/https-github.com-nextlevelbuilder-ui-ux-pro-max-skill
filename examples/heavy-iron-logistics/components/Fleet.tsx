import { fleet } from "@/app/content";

export function Fleet() {
  return (
    <section id="fleet" className="scroll-mt-24 border-b border-line bg-surface/30 py-24">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="h-2 w-2 bg-safety" />The equipment</span>
            <h2 className="display mt-4 text-5xl text-foreground sm:text-6xl">
              The right trailer for every load
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Non-standard, high-weight freight demands the right deck. We match equipment to the
            haul — every time.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-3">
          {fleet.map((f, i) => (
            <div key={f.title} className="bg-surface p-8">
              <span className="font-display text-5xl text-line">0{i + 1}</span>
              <h3 className="display mt-4 text-3xl text-foreground">{f.title}</h3>
              <p className="mt-3 text-muted">{f.body}</p>
              <p className="mt-5 inline-block rounded-sm bg-safety/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-safety">
                {f.spec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
