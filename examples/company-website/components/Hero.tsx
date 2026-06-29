import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/60 to-background" />
      <div className="container-page py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Now with automation 2.0
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
            Run your operations on one calm, fast platform
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Northwind unifies analytics, automation, and collaboration so your team ships
            faster — without the spreadsheet sprawl.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Start free trial
            </Link>
            <Link href="/#features" className="btn-ghost w-full sm:w-auto">
              See how it works
            </Link>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            No credit card required · 14-day trial · Cancel anytime
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-border bg-card p-2 shadow-sm">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Stat label="Uptime" value="99.99%" />
            <Stat label="Avg. time saved / wk" value="11 hrs" />
            <Stat label="Teams onboarded" value="4,200+" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-background p-6 text-center">
      <p className="font-heading text-3xl font-bold text-accent">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
