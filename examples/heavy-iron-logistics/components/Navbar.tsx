"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { company } from "@/app/content";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#fleet", label: "Fleet" },
  { href: "/#coverage", label: "Coverage" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      {/* Hazard accent strip */}
      <div className="h-1 w-full bg-hazard" />
      <nav className="container-page flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-muted transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${company.phoneHref}`}
            className="text-sm font-bold text-foreground transition hover:text-safety"
          >
            {company.phone}
          </a>
          <Link href="/contact" className="btn-safety !py-2 !text-base">
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded p-2 text-foreground lg:hidden"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm font-semibold uppercase tracking-wider text-muted hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a href={`tel:${company.phoneHref}`} className="px-2 py-2 text-sm font-bold text-safety">
              {company.phone}
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-safety mt-2 !py-2 !text-base">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
