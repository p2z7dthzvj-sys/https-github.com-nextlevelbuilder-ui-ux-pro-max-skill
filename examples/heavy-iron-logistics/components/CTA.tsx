import Link from "next/link";
import { company } from "@/app/content";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="h-2 w-full bg-hazard" />
      <div className="bg-safety">
        <div className="container-page flex flex-col items-center justify-between gap-8 py-16 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="display text-5xl text-white sm:text-6xl">
              Got a heavy load? Let&apos;s move it.
            </h2>
            <p className="mt-3 max-w-xl text-white/90">
              Send us the dimensions and weight — we&apos;ll get you a quote, often same-day.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-ink px-7 py-3 font-display text-lg uppercase tracking-display text-white transition hover:bg-surface-2"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${company.phoneHref}`}
              className="inline-flex items-center justify-center rounded-sm border-2 border-ink px-7 py-3 font-display text-lg uppercase tracking-display text-ink transition hover:bg-ink hover:text-white"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
