import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Northwind",
  description: "Why we built Northwind and the team behind it.",
};

const values = [
  { title: "Customer-obsessed", body: "Every roadmap decision starts with a real user problem." },
  { title: "Calm by default", body: "Software should reduce noise, not add to it." },
  { title: "Ship and learn", body: "Small, frequent releases beat big-bang launches." },
];

export default function AboutPage() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">We help teams do their best work</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Northwind started in 2021 when our founders, frustrated by scattered tools and endless
          spreadsheets, set out to build a single calm platform for operations teams. Today we serve
          thousands of teams across 40+ countries.
        </p>
        <p className="mt-4 text-muted-foreground">
          We are a remote-first company of 60 people who believe great software is quiet, fast, and
          gets out of your way.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
