import { steps } from "@/app/content";

export function Process() {
  return (
    <section className="border-b border-line bg-surface/30 py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="h-2 w-2 bg-safety" />How it works</span>
          <h2 className="display mt-4 text-5xl text-foreground sm:text-6xl">
            From quote to delivered
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="card p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-6xl text-safety">{s.n}</span>
                <h3 className="display text-2xl text-foreground">{s.title}</h3>
              </div>
              <p className="mt-4 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
