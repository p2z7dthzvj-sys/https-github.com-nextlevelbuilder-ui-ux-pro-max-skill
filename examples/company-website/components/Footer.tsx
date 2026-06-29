import Link from "next/link";
import { company } from "@/app/content";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-primary">{company.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{company.tagline}</p>
        </div>
        <FooterCol title="Product" items={["Features", "Pricing", "Security", "Roadmap"]} />
        <FooterCol title="Company" items={["About", "Careers", "Blog", "Contact"]} />
        <FooterCol title="Legal" items={["Privacy", "Terms", "DPA", "Status"]} />
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}, Inc. All rights reserved.
          </p>
          <Link href={`mailto:${company.email}`} className="hover:text-foreground">
            {company.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
