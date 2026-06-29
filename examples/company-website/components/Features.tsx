import { features } from "@/app/content";

const icons: Record<string, JSX.Element> = {
  chart: (
    <path d="M4 19V5m0 14h16M8 17V9m4 8V7m4 10v-5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeWidth={2} strokeLinejoin="round" />,
  users: (
    <path d="M16 14a4 4 0 1 0-8 0m12 6v-1a4 4 0 0 0-3-3.87M4 20v-1a4 4 0 0 1 3-3.87M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3z" strokeWidth={2} strokeLinejoin="round" />,
};

export function Features() {
  return (
    <section id="features" className="container-page scroll-mt-20 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          Everything your team needs, in one place
        </h2>
        <p className="mt-4 text-muted-foreground">
          Stop stitching together tools. Northwind brings the whole workflow under one roof.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                {icons[f.icon]}
              </svg>
            </div>
            <h3 className="mt-5 text-lg text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
