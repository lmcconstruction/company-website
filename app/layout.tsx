import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SiteHeader from "./site-header";

export const metadata: Metadata = {
  title: "LMC Construction | Custom Homes & Remodels in Birmingham, AL",
  description:
    "LMC Construction builds custom luxury homes and remodels residences across the Birmingham, AL area, with careful craftsmanship and a small, hands-on crew.",
};

const footerLinks = [
  { href: "/current-projects", label: "Current Projects" },
  { href: "/past-projects", label: "Past Projects" },
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
        <SiteHeader />
        <main>{children}</main>
        <footer className="border-t border-[var(--forest-deep)]/15 bg-[var(--forest-deep)] text-[var(--stone)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
            <div className="md:col-span-2">
              <p className="font-display text-xl">LMC Construction</p>
              <p className="mt-3 max-w-xs text-sm text-[var(--stone)]/70">
                Custom luxury home building and residential remodeling,
                built around the way you actually live.
              </p>
            </div>
            <div className="text-sm text-[var(--stone)]/80">
              <p className="font-medium text-[var(--stone)]">Explore</p>
              <ul className="mt-3 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-sm text-[var(--stone)]/80">
              <p className="font-medium text-[var(--stone)]">Contact</p>
              <p className="mt-3">
                <a href="tel:12059991871" className="hover:underline">
                  205-999-1871
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="mailto:info@lmcconstructionco.com"
                  className="hover:underline"
                >
                  info@lmcconstructionco.com
                </a>
              </p>
              <p className="mt-1">Birmingham, AL</p>
              <p className="mt-4 font-medium text-[var(--stone)]">Hours</p>
              <p className="mt-1">Mon&ndash;Fri, 7am&ndash;6pm</p>
              <p>Saturday by appointment</p>
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
