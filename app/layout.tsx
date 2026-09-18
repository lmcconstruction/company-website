import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "LMC Construction | Custom & Residential Home Building",
  description:
    "LMC Construction builds and renovates homes with careful craftsmanship. Serving the Birmingham, AL area.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <header className="border-b border-[var(--forest-deep)]/15">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" className="font-display text-2xl tracking-tight text-[var(--forest-deep)]">
              LMC Construction
            </Link>
            <nav className="hidden gap-8 text-[15px] md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--ink)]/80 transition-colors hover:text-[var(--forest-deep)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="tel:12059991871"
              className="rounded-sm bg-[var(--forest-deep)] px-4 py-2 text-sm text-[var(--stone)] transition-colors hover:bg-[var(--forest-mid)]"
            >
              205-999-1871
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-[var(--forest-deep)]/15 bg-[var(--forest-deep)] text-[var(--stone)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
            <div>
              <p className="font-display text-xl">LMC Construction</p>
              <p className="mt-3 max-w-xs text-sm text-[var(--stone)]/70">
                Residential building and renovation, built around the way you
                actually live.
              </p>
            </div>
            <div className="text-sm text-[var(--stone)]/80">
              <p className="font-medium text-[var(--stone)]">Contact</p>
              <p className="mt-3">
                <a href="tel:12059991871" className="hover:underline">
                  205-999-1871
                </a>
              </p>
              <p className="mt-1">Birmingham, AL</p>
            </div>
            <div className="text-sm text-[var(--stone)]/80">
              <p className="font-medium text-[var(--stone)]">Hours</p>
              <p className="mt-3">Mon&ndash;Fri, 7am&ndash;6pm</p>
              <p className="mt-1">Saturday by appointment</p>
            </div>
          </div>
          <div className="border-t border-[var(--stone)]/10 px-6 py-5 text-center text-xs text-[var(--stone)]/50">
            &copy; {new Date().getFullYear()} LMC Construction. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
