import Link from "next/link";

export default function ArrowLink({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-[var(--stone)]" : "text-[var(--forest-deep)]";
  const line = tone === "light" ? "bg-[var(--stone)]/60" : "bg-[var(--forest-deep)]/50";
  const ring = tone === "light" ? "border-[var(--stone)]/60" : "border-[var(--forest-deep)]/50";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-sm tracking-[0.08em] ${color}`}
    >
      <span className={`h-px w-6 ${line}`} />
      <span className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${ring} transition-transform group-hover:translate-x-1`}>
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          className={tone === "light" ? "stroke-[var(--stone)]" : "stroke-[var(--forest-deep)]"}
        >
          <path d="M0.5 5H13M13 5L9 1M13 5L9 9" strokeWidth="1.2" />
        </svg>
      </span>
      <span className="font-medium uppercase">{children}</span>
    </Link>
  );
}
