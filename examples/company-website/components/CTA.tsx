import Link from "next/link";

export function CTA() {
  return (
    <section className="container-page py-12">
      <div className="overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
          Ready to unify your operations?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Join thousands of teams running calmer, faster operations on Northwind.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            Start free trial
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-white/10 sm:w-auto"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
