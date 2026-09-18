export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-lg text-[var(--forest-mid)]">About</p>
        <h1 className="mt-3 font-display text-4xl text-[var(--forest-deep)] md:text-5xl">
          A small crew, built to stay small.
        </h1>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-6 text-[17px] leading-relaxed text-[var(--ink)]/80">
          <p>
            LMC Construction is a residential building company based in
            Birmingham, Alabama. We take on a limited number of projects at a
            time, by design — it's the only way to guarantee that the person
            who quotes your job is the same person who's on-site checking the
            framing three weeks later.
          </p>
          <p>
            Our work covers new custom homes, additions, renovations, and the
            structural work that most homeowners never see but every home
            depends on. We'd rather turn down a project that doesn't fit our
            timeline than take it on and stretch our attention too thin.
          </p>
          <p>
            If you're planning a project, we're happy to walk the property
            with you before any contract is signed — no pressure, just a
            straight read on what it'll take.
          </p>
        </div>

        <div className="corner-mark space-y-6 p-8 text-sm text-[var(--ink)]/75">
          <div>
            <p className="font-medium text-[var(--forest-deep)]">
              Service area
            </p>
            <p className="mt-1">Birmingham, AL and surrounding areas</p>
          </div>
          <div>
            <p className="font-medium text-[var(--forest-deep)]">
              Project types
            </p>
            <p className="mt-1">
              Custom homes, additions, renovations, structural repair
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--forest-deep)]">
              Get in touch
            </p>
            <p className="mt-1">
              <a href="tel:12059991871" className="hover:underline">
                205-999-1871
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
