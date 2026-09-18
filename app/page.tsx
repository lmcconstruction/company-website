import Image from "next/image";
import Link from "next/link";
import ArrowLink from "./arrow-link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[var(--forest-deep)]">
        <Image
          src="/images/completed-custom-home.jpg"
          alt="Completed custom-built home in Birmingham, AL"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)] via-[var(--forest-deep)]/35 to-[var(--forest-deep)]/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 text-center">
          <h1 className="font-display text-4xl leading-[1.15] text-[var(--stone)] md:text-6xl">
            Custom Home Builder in Birmingham, AL
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-[var(--stone)]/40" />
          <p className="mx-auto mt-6 max-w-lg text-[17px] text-[var(--stone)]/85">
            The builder of choice for homeowners across Birmingham and the
            surrounding communities.
          </p>
          <div className="mt-10 flex justify-center">
            <ArrowLink href="/current-projects" tone="light">
              Explore our projects
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Dark intro block */}
      <section className="lattice-texture bg-[var(--forest-deep)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-display text-3xl text-[var(--stone)] md:text-4xl">
            Local Craft. Uncompromised Quality.
          </p>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--stone)]/80">
            LMC Construction builds custom luxury homes and remodels
            residences that meet the exact standard a homeowner expects.
            Helping clients combine their lifestyle needs with a home built
            around them is what we do best.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-10">
            <ArrowLink href="/about" tone="light">
              Meet LMC
            </ArrowLink>
            <ArrowLink href="/past-projects" tone="light">
              Past projects
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Staggered overlap: text card over photo */}
      <section className="bg-[var(--stone)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-[1fr_1.3fr]">
            <div className="corner-mark z-10 flex flex-col justify-center bg-[var(--stone-warm)] p-10 md:mr-[-3rem] md:p-14">
              <p className="font-display text-3xl leading-tight text-[var(--forest-deep)] md:text-4xl">
                Naturally Inspired, Built for Luxury
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink)]/75">
                Every LMC home blends the character of its lot with the
                height of custom finish work — from rustic textures to
                refined, modern interiors.
              </p>
              <div className="mt-8">
                <ArrowLink href="/current-projects">
                  Explore current projects
                </ArrowLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src="/images/masonry-mountain-brook.jpg"
                alt="Brick masonry underway on an LMC Construction project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed serif overlay section */}
      <section className="relative flex h-[70vh] items-end overflow-hidden bg-[var(--forest-deep)]">
        <Image
          src="/images/completed-brick-colonial.jpg"
          alt="A completed LMC Construction home under a dramatic sky"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/85 via-[var(--forest-deep)]/15 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 text-center">
          <p className="font-display text-4xl italic text-[var(--stone)] md:text-5xl">
            Welcome to LMC Construction
          </p>
          <p className="mt-3 text-[16px] tracking-wide text-[var(--stone)]/80">
            Where craftsmanship meets care.
          </p>
        </div>
      </section>

      {/* Staggered dual-photo collage */}
      <section className="bg-[var(--stone-warm)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] translate-y-6">
                <Image
                  src="/images/foundation-birmingham.jpg"
                  alt="Foundation work on an LMC Construction project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/framing-birmingham.jpg"
                  alt="Framing work on an LMC Construction project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="font-display text-3xl text-[var(--forest-deep)] md:text-4xl">
                Built Around You
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--ink)]/75">
                From the first foundation pour to the final walkthrough, the
                same small crew stays on your project the whole way through
                — so nothing gets lost between stages.
              </p>
              <div className="mt-8">
                <ArrowLink href="/services">See what we build</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <Link href="/current-projects" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/near-complete-mountain-brook.jpg"
                alt="A current LMC Construction project under way"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-5 font-display text-2xl text-[var(--forest-deep)]">
              Current projects
            </p>
            <p className="mt-1 text-[15px] text-[var(--ink)]/70">
              See what&rsquo;s under way right now, from foundation to
              finish.
            </p>
          </Link>
          <Link href="/past-projects" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/completed-brick-colonial.jpg"
                alt="A completed LMC Construction home"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-5 font-display text-2xl text-[var(--forest-deep)]">
              Past projects
            </p>
            <p className="mt-1 text-[15px] text-[var(--ink)]/70">
              Browse completed custom homes and remodels.
            </p>
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="lattice-texture bg-[var(--forest-deep)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 text-[var(--stone)] md:flex-row md:items-center">
          <p className="font-display text-2xl md:text-3xl">
            Have a project in mind? Let&rsquo;s talk through it.
          </p>
          <ArrowLink href="/contact" tone="light">
            Get in touch
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
