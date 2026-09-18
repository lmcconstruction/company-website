import Image from "next/image";
import ArrowLink from "../arrow-link";
import Gallery from "../gallery";

const stages = [
  {
    stage: "Foundation",
    location: "Birmingham, AL",
    image: "/images/foundation-birmingham.jpg",
    copy: "Forms are set and the footings are poured. Everything above ground depends on getting this stage exactly right — level, square, and built for the soil it's sitting in.",
  },
  {
    stage: "Framing",
    location: "Birmingham, AL",
    image: "/images/framing-birmingham.jpg",
    copy: "The structure starts taking shape. Walls, openings, and rooflines get their first real form, wrapped and ready for the trades that follow.",
  },
  {
    stage: "Masonry",
    location: "Mountain Brook, AL",
    image: "/images/masonry-mountain-brook.jpg",
    copy: "Brick and stonework go on by hand, course by course. This is where a home's exterior character really starts to show.",
  },
];

const galleryImages = [
  { src: "/images/foundation-birmingham.jpg", alt: "Foundation stage" },
  { src: "/images/framing-birmingham.jpg", alt: "Framing stage" },
  { src: "/images/masonry-mountain-brook.jpg", alt: "Masonry stage" },
  {
    src: "/images/near-complete-mountain-brook.jpg",
    alt: "Nearing completion",
  },
];

export default function CurrentProjectsPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-xl">
          <p className="font-display text-lg text-[var(--forest-mid)]">
            Current Projects
          </p>
          <h1 className="mt-3 font-display text-4xl text-[var(--forest-deep)] md:text-5xl">
            What we&rsquo;re building right now.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-[var(--ink)]/80">
            A look at the stages our active projects move through — from the
            foundation up.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {stages.map((item, i) => (
            <div
              key={item.stage}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.stage} stage of an LMC Construction project in ${item.location}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-[var(--ink)]/60">
                  {item.location}
                </p>
                <h2 className="mt-1 font-display text-3xl text-[var(--forest-deep)]">
                  {item.stage}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink)]/75">
                  {item.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-[var(--forest-deep)]/10 pt-16">
          <p className="font-display text-lg text-[var(--forest-mid)]">
            Also under way
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/near-complete-mountain-brook.jpg"
                alt="New construction nearing completion in Mountain Brook, AL"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-[var(--ink)]/60">
                Mountain Brook, AL
              </p>
              <h2 className="mt-1 font-display text-3xl text-[var(--forest-deep)]">
                New construction, nearing completion
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink)]/75">
                Roof, brick, and windows are in and the finish work is
                underway. This traditional new build is on track to close
                out in the coming weeks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lattice-texture bg-[var(--forest-deep)] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center font-display text-2xl text-[var(--stone)] md:text-3xl">
            Full gallery
          </p>
          <div className="mt-10">
            <Gallery images={galleryImages} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-wrap items-center gap-8 border-t border-[var(--forest-deep)]/10 pt-10">
          <p className="font-display text-xl text-[var(--forest-deep)]">
            Want a similar build for your lot?
          </p>
          <ArrowLink href="/contact">Start a conversation</ArrowLink>
        </div>
      </div>
    </div>
  );
}
