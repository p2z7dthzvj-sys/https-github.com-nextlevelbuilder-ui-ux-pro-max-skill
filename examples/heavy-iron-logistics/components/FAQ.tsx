import { faqs } from "@/app/content";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-line py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <span className="eyebrow"><span className="h-2 w-2 bg-safety" />Questions</span>
          <h2 className="display mt-4 text-5xl text-foreground sm:text-6xl">
            Straight answers
          </h2>
          <p className="mt-4 text-muted">
            Can&apos;t find it? Call dispatch — we&apos;ll talk through your haul.
          </p>
        </div>

        <div className="divide-y divide-line overflow-hidden rounded-md border border-line bg-surface">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6 [&_summary]:cursor-pointer">
              <summary className="flex list-none items-center justify-between gap-4 text-left font-semibold text-foreground">
                {item.q}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 shrink-0 text-safety transition group-open:rotate-45">
                  <path d="M12 5v14M5 12h14" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
