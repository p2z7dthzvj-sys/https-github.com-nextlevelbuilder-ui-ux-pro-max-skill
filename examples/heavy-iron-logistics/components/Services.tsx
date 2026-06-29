import { services } from "@/app/content";

const icons: Record<string, JSX.Element> = {
  excavator: (
    <path
      d="M3 20h18M5 20v-4h6v4M11 16l2-6 5 2M13 10l4-4M6 16v-2h4"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  drill: (
    <path
      d="M12 2v6M9 8h6l-1 5h-4zM11 13v5l-2 2M13 13v5l2 2"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  crane: (
    <path
      d="M5 21V5l14-2M5 5h14M9 5v4M5 9h6M19 3v8l-3 0M16 11v3"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-line py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="h-2 w-2 bg-safety" />What we haul</span>
          <h2 className="display mt-4 text-5xl text-foreground sm:text-6xl">
            Built for industrial weight
          </h2>
          <p className="mt-4 text-muted">
            End-to-end logistics for the machinery that keeps heavy industry running.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card group p-8 transition hover:border-safety">
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-safety/10 text-safety">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
                  {icons[s.icon]}
                </svg>
              </div>
              <h3 className="display mt-6 text-3xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 bg-safety" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
