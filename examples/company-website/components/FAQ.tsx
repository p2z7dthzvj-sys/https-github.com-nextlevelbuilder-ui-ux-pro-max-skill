import { faqs } from "@/app/content";

export function FAQ() {
  return (
    <section id="faq" className="container-page scroll-mt-20 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-4 text-muted-foreground">Everything else you might want to know.</p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((item) => (
          <details key={item.q} className="group p-6 [&_summary]:cursor-pointer">
            <summary className="flex list-none items-center justify-between text-left font-medium text-foreground">
              {item.q}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
