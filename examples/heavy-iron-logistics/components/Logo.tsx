import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-safety">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden>
          {/* simple hauler mark */}
          <path d="M2 14h11v3H2zM13 11h5l3 3v3h-8z" />
          <circle cx="6" cy="18.5" r="1.6" fill="#0B0F14" />
          <circle cx="16.5" cy="18.5" r="1.6" fill="#0B0F14" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl tracking-display text-foreground">
          HEAVY IRON
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-safety">
          Logistics
        </span>
      </span>
    </Link>
  );
}
