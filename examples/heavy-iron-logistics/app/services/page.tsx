import type { Metadata } from "next";
import Link from "next/link";
import { services, fleet, company } from "@/app/content";

export const metadata: Metadata = {
  title: "Services — Heavy Iron Logistics",
  description:
    "Heavy-haul services for construction equipment, mining & oilfield gear, and industrial cranes, with RGN, lowboy, and flatbed equipment.",
};

export default function ServicesPage() {
  return (
    <div className="container-page py-20">
      <span className="eyebrow"><span className="h-2 w-2 bg-safety" />Capabilities</span>
      <h1 className="display mt-4 text-6xl text-foreground sm:text-7xl">Heavy-haul services</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        {company.name} manages the full lifecycle of oversized and overweight freight — permits,
        routing, equipment, and cross-border clearance.
      </p>

      <div className="mt-14 space-y-6">
        {services.map((s) => (
          <div key={s.title} className="card p-8">
            <h2 className="display text-3xl text-foreground">{s.title}</h2>
            <p className="mt-3 max-w-3xl text-muted">{s.body}</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {s.points.map((p) => (
                <li key={p} className="rounded-sm border border-line bg-surface-2 px-3 py-1.5 text-sm text-foreground">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="display mt-16 text-4xl text-foreground">Equipment</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {fleet.map((f) => (
          <div key={f.title} className="card p-6">
            <h3 className="display text-2xl text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted">{f.body}</p>
            <p className="mt-4 inline-block rounded-sm bg-safety/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-safety">
              {f.spec}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <Link href="/contact" className="btn-safety">Request a Quote</Link>
      </div>
    </div>
  );
}
