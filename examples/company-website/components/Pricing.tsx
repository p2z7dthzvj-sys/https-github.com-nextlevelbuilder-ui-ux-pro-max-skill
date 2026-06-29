import Link from "next/link";
import { plans } from "@/app/content";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-muted/40 py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start free. Upgrade when you grow. Save 20% with annual billing.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-7 ${
                plan.popular
                  ? "border-accent shadow-lg ring-1 ring-accent"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.cadence}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-foreground">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                      <path d="m5 13 4 4L19 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-7 ${plan.popular ? "btn-primary" : "btn-ghost"}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
