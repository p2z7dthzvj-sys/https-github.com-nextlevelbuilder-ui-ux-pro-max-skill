import Link from "next/link";
import { company, stats } from "@/app/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* layered industrial background */}
      <div className="absolute inset-0 -z-20 bg-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(234,88,12,0.18),transparent_55%)]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#E6EBF1 1px, transparent 1px), linear-gradient(90deg, #E6EBF1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page py-24 lg:py-32">
        <div className="max-w-4xl">
          <span className="eyebrow">
            <span className="h-2 w-2 bg-safety" />
            Mission, Texas · FMCSA Authorized
          </span>

          <h1 className="display mt-6 text-6xl text-foreground sm:text-7xl lg:text-8xl">
            We move the
            <span className="text-safety"> heaviest loads </span>
            in North America
          </h1>

          <p className="mt-7 max-w-2xl text-lg text-muted sm:text-xl">
            {company.name} is a specialized heavy-haul and freight brokerage for oversized,
            overweight, and subdimensional machinery — coordinated across the US, Canada, and
            Mexico.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-safety">
              Get a Quote
            </Link>
            <a href={`tel:${company.phoneHref}`} className="btn-outline">
              Call Dispatch · {company.phone}
            </a>
          </div>
        </div>

        {/* stat band */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-6">
              <p className="font-display text-4xl text-safety">{s.value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-foreground">
                {s.label}
              </p>
              <p className="text-xs text-muted">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
