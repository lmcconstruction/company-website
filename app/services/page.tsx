import ArrowLink from "../arrow-link";

const services = [
  {
    title: "Custom home building",
    copy: "We work from your plans, or help you develop them with an architect we trust. Every custom build includes a fixed-scope contract, a realistic timeline, and weekly walkthroughs so nothing happens without you knowing about it first.",
  },
  {
    title: "Additions & second stories",
    copy: "Adding square footage to an existing home is its own discipline — matching rooflines, tying into existing structure, and keeping the rest of the house livable while we work. This is where a lot of general contractors cut corners; it's where we spend the most care.",
  },
  {
    title: "Kitchen & bath renovation",
    copy: "The two rooms that get used hardest and shown off most. We handle layout changes, plumbing and electrical relocation, and finish work end to end, coordinated with a single point of contact throughout.",
  },
  {
    title: "Structural repair",
    copy: "Foundation settling, load-bearing wall removal, water damage, framing corrections. We assess honestly — sometimes the fix is smaller than a homeowner fears, and we'll tell you that too.",
  },
  {
    title: "Pre-construction consulting",
    copy: "Buying a fixer-upper or planning a renovation before you've committed? We'll walk the property with you and give you a realistic read on scope and cost before you're locked into anything.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-lg text-[var(--forest-mid)]">
          Services
        </p>
        <h1 className="mt-3 font-display text-4xl text-[var(--forest-deep)] md:text-5xl">
          Every project gets the same level of attention.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-[var(--ink)]/80">
          Whether it's a ground-up luxury custom home or a single-room
          remodel, the same person oversees your project from quote to final
          walkthrough.
        </p>
      </div>

      <div className="mt-14 divide-y divide-[var(--forest-deep)]/10 border-t border-[var(--forest-deep)]/10">
        {services.map((service) => (
          <div
            key={service.title}
            className="grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-10"
          >
            <h2 className="font-display text-2xl text-[var(--forest-deep)]">
              {service.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-[var(--ink)]/75">
              {service.copy}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-[var(--forest-deep)]/10 pt-10">
        <p className="font-display text-xl text-[var(--forest-deep)]">
          Not sure which of these fits your project?
        </p>
        <ArrowLink href="/contact">Tell us about it</ArrowLink>
      </div>
    </div>
  );
}
