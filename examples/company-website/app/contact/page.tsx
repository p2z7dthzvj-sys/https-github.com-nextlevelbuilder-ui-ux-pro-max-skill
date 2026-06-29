"use client";

import { useState } from "react";
import { company } from "@/app/content";

type Status = "idle" | "submitting" | "success";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulated submit. Wire this to your API route or form service.
    setTimeout(() => setStatus("success"), 700);
  }

  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Get in touch</h1>
        <p className="mt-4 text-muted-foreground">
          Tell us a bit about your team and we will get back within one business day. Prefer email?{" "}
          <a href={`mailto:${company.email}`} className="font-medium text-accent hover:underline">
            {company.email}
          </a>
        </p>

        {status === "success" ? (
          <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                <path d="m5 13 4 4L19 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="mt-4 text-xl text-foreground">Thanks — message sent!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We received your message and will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <Field id="name" label="Full name" type="text" required />
            <Field id="email" label="Work email" type="email" required />
            <Field id="company" label="Company" type="text" />
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1.5 w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
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
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
