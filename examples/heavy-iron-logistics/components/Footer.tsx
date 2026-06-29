import Link from "next/link";
import { Logo } from "./Logo";
import { company } from "@/app/content";

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">{company.tagline}</p>
          <p className="mt-4 text-xs text-muted">
            Operating legally under {company.legal}.
          </p>
        </div>

        <FooterCol
          title="Services"
          items={["Construction Equipment", "Mining & Oilfield Gear", "Industrial Cranes", "Cross-Border Freight"]}
        />
        <FooterCol
          title="Company"
          items={["About", "Fleet", "Coverage", "Carrier Registration"]}
        />

        <div>
          <p className="font-display text-xl tracking-display text-foreground">Contact</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-muted">
            <p>
              {company.address.line1}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </p>
            <p>
              <a href={`tel:${company.phoneHref}`} className="font-semibold text-foreground hover:text-safety">
                {company.phone}
              </a>
            </p>
            <p>
              <Link href="/contact" className="hover:text-safety">
                {company.email}
              </Link>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.name} ({company.legal}). All rights reserved.
          </p>
          <p className="flex gap-4">
            <span>USDOT {company.usdot}</span>
            <span>{company.mc}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-display text-xl tracking-display text-foreground">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm text-muted transition hover:text-safety">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
