"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/current-projects", label: "Current Projects" },
  { href: "/past-projects", label: "Past Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 border-b border-[var(--forest-deep)]/15 bg-[var(--stone)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="LMC Construction"
              width={516}
              height={297}
              className="h-14 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="tel:12059991871"
              className="hidden text-sm tracking-wide text-[var(--ink)]/80 transition-colors hover:text-[var(--forest-deep)] sm:inline-block"
            >
              205-999-1871
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 items-center gap-3 bg-[var(--forest-deep)] px-4 text-sm font-medium tracking-wide text-[var(--stone)] transition-colors hover:bg-[var(--forest-mid)]"
            >
              {open ? "CLOSE" : "MENU"}
              <span className="flex h-5 w-5 flex-col items-center justify-center gap-[4px]">
                <span
                  className={`block h-[1.5px] w-4 bg-[var(--stone)] transition-transform ${
                    open ? "translate-y-[5.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-4 bg-[var(--stone)] transition-opacity ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-4 bg-[var(--stone)] transition-transform ${
                    open ? "-translate-y-[5.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-[var(--stone-warm)]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Image
              src="/images/logo.png"
              alt="LMC Construction"
              width={516}
              height={297}
              className="h-14 w-auto"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center gap-3 bg-[var(--forest-deep)] px-4 text-sm font-medium tracking-wide text-[var(--stone)]"
            >
              CLOSE
              <span className="relative block h-4 w-4">
                <span className="absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[var(--stone)]" />
                <span className="absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[var(--stone)]" />
              </span>
            </button>
          </div>

          <nav className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-[var(--forest-deep)] transition-colors hover:text-[var(--forest-mid)] md:text-5xl"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-[var(--forest-deep)]/15 bg-[var(--forest-deep)] px-6 py-6">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-8">
              <a
                href="tel:12059991871"
                className="text-sm tracking-wide text-[var(--stone)]"
              >
                205-999-1871
              </a>
              <span className="text-sm tracking-wide text-[var(--stone)]/70">
                Birmingham, AL
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
