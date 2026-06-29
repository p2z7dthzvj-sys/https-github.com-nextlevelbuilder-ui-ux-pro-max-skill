"use client";

import { useState } from "react";
import { company } from "@/app/content";

type Status = "idle" | "submitting" | "success";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulated submit — wire to an API route / form service / dispatch inbox.
    setTimeout(() => setStatus("success"), 700);
  }

  return (
    <div className="container-page grid gap-14 py-20 lg:grid-cols-2">
      {/* Left: info */}
      <div>
        <span className="eyebrow"><span className="h-2 w-2 bg-safety" />Get a quote</span>
        <h1 className="display mt-4 text-6xl text-foreground sm:text-7xl">
          Tell us about your load
        </h1>
        <p className="mt-5 max-w-md text-lg text-muted">
          Dimensions, weight, pickup and delivery — the more detail, the faster we can route,
          permit, and price your haul.
        </p>

        <div className="mt-10 space-y-5">
          <InfoRow label="Call dispatch">
            <a href={`tel:${company.phoneHref}`} className="text-xl font-bold text-foreground hover:text-safety">
              {company.phone}
            </a>
          </InfoRow>
          <InfoRow label="Head office">
            <p className="text-foreground">
              {company.address.line1}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </p>
          </InfoRow>
          <InfoRow label="Holding yard">
            <p className="text-foreground">{company.yard}</p>
          </InfoRow>
          <InfoRow label="Authority">
            <p className="text-foreground">
              FMCSA · USDOT {company.usdot} · {company.mc}
            </p>
          </InfoRow>
        </div>
      </div>

      {/* Right: form */}
      <div className="card p-8">
        {status === "success" ? (
          <div className="flex h-full flex-col items-center justify-center py-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-safety text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7">
                <path d="m5 13 4 4L19 7" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="display mt-5 text-3xl text-foreground">Request received</h2>
            <p className="mt-2 text-muted">
              Thanks — our dispatch team will get back to you, usually same-day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" type="text" required />
              <Field id="company" label="Company" type="text" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="email" label="Email" type="email" required />
              <Field id="phone" label="Phone" type="tel" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="origin" label="Pickup location" type="text" />
              <Field id="destination" label="Delivery location" type="text" />
            </div>
            <Field id="equipment" label="Equipment / load type & weight" type="text" />
            <div>
              <label htmlFor="details" className="mb-1.5 block text-sm font-semibold uppercase tracking-wider text-muted">
                Load details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                required
                placeholder="Dimensions, weight, timeline, special requirements…"
                className="w-full rounded-sm border border-line bg-surface-2 px-4 py-3 text-foreground outline-none transition placeholder:text-muted/60 focus:border-safety focus:ring-2 focus:ring-safety/30"
              />
            </div>
            <button type="submit" disabled={status === "submitting"} className="btn-safety w-full disabled:opacity-60">
              {status === "submitting" ? "Sending…" : "Request Quote"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-safety pl-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Field({
  id,
  label,
  type,
  required,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold uppercase tracking-wider text-muted">
        {label}
        {required && <span className="text-safety"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-sm border border-line bg-surface-2 px-4 py-3 text-foreground outline-none transition focus:border-safety focus:ring-2 focus:ring-safety/30"
      />
    </div>
  );
}
