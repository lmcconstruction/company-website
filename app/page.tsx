import Link from "next/link";

const offerings = [
  {
    title: "Custom homes",
    copy: "From site selection through final walkthrough, we build to your plans and your pace, not a production schedule.",
  },
  {
    title: "Renovations & additions",
    copy: "Kitchens, primary suites, second stories, and full-home reworks — matched to the character of the house you already have.",
  },
  {
    title: "Structural & foundation work",
    copy: "The parts no one sees but everyone relies on: framing, foundations, and load-bearing corrections done right the first time.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:items-end">
          <div className="corner-mark p-8 md:p-10">
            <p className="font-display text-lg text-[var(--forest-mid)]">
              Built in Birmingham, for the way you live
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.08] text-[var(--forest-deep)] md:text-6xl">
              Homes built with the same care you'd put into your own.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[var(--ink)]/80">
              LMC Construction builds and renovates residential homes across
              the Birmingham area — from custom new builds to additions that
              feel like they were always there.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[var(--forest-deep)] px-6 py-3 text-sm text-[var(--stone)] transition-colors hover:bg-[var(--forest-mid)]"
              >
                Request a quote
              </Link>
              <a
                href="tel:12059991871"
                className="border border-[var(--forest-deep)]/30 px-6 py-3 text-sm text-[var(--forest-deep)] transition-colors hover:border-[var(--forest-deep)]"
              >
                Call 205-999-1871
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-6 border-t border-[var(--forest-deep)]/15 pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
            <div>
              <dt className="text-sm text-[var(--ink)]/60">Service area</dt>
              <dd className="mt-1 font-display text-2xl text-[var(--forest-deep)]">
                Birmingham, AL
              </dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--ink)]/60">Project types</dt>
              <dd className="mt-1 font-display text-2xl text-[var(--forest-deep)]">
                New build &amp; reno
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-y border-[var(--forest-deep)]/10 bg-[var(--stone-warm)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="max-w-lg font-display text-3xl text-[var(--forest-deep)]">
            What we build
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden bg-[var(--forest-deep)]/10 md:grid-cols-3">
            {offerings.map((item) => (
              <div key={item.title} className="bg-[var(--stone-warm)] p-8">
                <h3 className="font-display text-xl text-[var(--forest-deep)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]/75">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-center">
          <h2 className="font-display text-3xl text-[var(--forest-deep)]">
            Why homeowners work with LMC
          </h2>
          <p className="text-[17px] leading-relaxed text-[var(--ink)]/80">
            We keep projects small in number and close in oversight. That
            means the person who quotes your project is the same person who
            walks the site every week — no handoffs, no surprises buried in a
            subcontractor's schedule. You'll know what's happening on your
            home, and when.
          </p>
        </div>
      </section>

      <section className="bg-[var(--forest-deep)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 text-[var(--stone)] md:flex-row md:items-center">
          <p className="font-display text-2xl">
            Have a project in mind? Let's talk through it.
          </p>
          <Link
            href="/contact"
            className="border border-[var(--stone)]/40 px-6 py-3 text-sm transition-colors hover:border-[var(--stone)]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
