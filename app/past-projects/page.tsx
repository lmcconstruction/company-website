import Image from "next/image";
import ArrowLink from "../arrow-link";

const projects = [
  {
    title: "Traditional custom build",
    location: "Birmingham, AL",
    image: "/images/completed-custom-home.jpg",
    copy: "A ground-up custom home designed around a wooded lot — brick and stone exterior, deep front lawn, and a layout built for the family that commissioned it.",
    tags: ["New construction", "Custom design"],
  },
  {
    title: "Brick colonial",
    location: "Birmingham, AL",
    image: "/images/completed-brick-colonial.jpg",
    copy: "A full-brick colonial with a dramatic double-height chimney and a clean, symmetrical facade — finished from the foundation up.",
    tags: ["New construction", "Masonry exterior"],
  },
];

export default function PastProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-lg text-[var(--forest-mid)]">
          Past Projects
        </p>
        <h1 className="mt-3 font-display text-4xl text-[var(--forest-deep)] md:text-5xl">
          Homes we&rsquo;ve finished.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-[var(--ink)]/80">
          A sample of completed custom builds and remodels across the
          Birmingham area.
        </p>
      </div>

      <div className="mt-14 space-y-20">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid gap-8 md:grid-cols-[3fr_2fr] md:items-center"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} in ${project.location}, completed by LMC Construction`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-[var(--ink)]/60">
                {project.location}
              </p>
              <h2 className="mt-1 font-display text-3xl text-[var(--forest-deep)]">
                {project.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink)]/75">
                {project.copy}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-[var(--forest-deep)]/20 px-3 py-1 text-xs text-[var(--forest-deep)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap items-center gap-8 border-t border-[var(--forest-deep)]/10 pt-10">
        <p className="font-display text-xl text-[var(--forest-deep)]">
          Have a project like one of these in mind?
        </p>
        <ArrowLink href="/contact">Tell us about it</ArrowLink>
      </div>
    </div>
  );
}
