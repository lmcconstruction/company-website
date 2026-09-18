import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowLink from "../../arrow-link";
import Gallery from "../../gallery";
import { PROJECTS, getProject } from "../../projects-data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const galleryImages = project.gallery.map((src) => ({
    src,
    alt: `${project.title} in ${project.location}`,
  }));

  return (
    <div>
      <div className="relative h-[55vh] overflow-hidden bg-[var(--forest-deep)]">
        <Image
          src={project.cover}
          alt={`${project.title} in ${project.location}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)] via-[var(--forest-deep)]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-6 pb-10">
            <p className="text-sm tracking-wide text-[var(--sage-light)]">
              {project.location}
            </p>
            <h1 className="mt-2 font-display text-4xl text-[var(--stone)] md:text-5xl">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="flex flex-wrap gap-3">
          <span className="border border-[var(--forest-deep)]/25 px-3 py-1 text-xs tracking-wide text-[var(--forest-deep)]">
            {project.status === "current" ? "Current project" : "Past project"}
          </span>
          <span className="border border-[var(--forest-deep)]/25 px-3 py-1 text-xs tracking-wide text-[var(--forest-deep)]">
            {project.phase}
          </span>
          {project.forSale && (
            <span className="bg-[var(--forest-deep)] px-3 py-1 text-xs tracking-wide text-[var(--stone)]">
              For Sale
            </span>
          )}
          {project.sold && (
            <span className="bg-[var(--brass)] px-3 py-1 text-xs tracking-wide text-[var(--forest-deep)]">
              Sold
            </span>
          )}
        </div>

        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--ink)]/80">
          {project.description}
        </p>

        <div className="mt-14">
          <p className="font-display text-2xl text-[var(--forest-deep)]">
            Gallery
          </p>
          <div className="mt-6">
            <div className="bg-[var(--forest-deep)] p-4 md:p-6">
              <Gallery images={galleryImages} />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--forest-deep)]/10 pt-10">
          <p className="font-display text-2xl text-[var(--forest-deep)]">
            Floor plans
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--ink)]/75">
            Floor plans for this project are available on request —{" "}
            <Link href="/contact" className="underline hover:no-underline">
              contact us
            </Link>{" "}
            and we&rsquo;ll send them over.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-[var(--forest-deep)]/10 pt-10">
          <p className="font-display text-xl text-[var(--forest-deep)]">
            Interested in a project like this one?
          </p>
          <ArrowLink href="/contact">Get in touch</ArrowLink>
        </div>

        <div className="mt-10">
          <ArrowLink
            href={project.status === "current" ? "/current-projects" : "/past-projects"}
          >
            {project.status === "current"
              ? "Back to current projects"
              : "Back to past projects"}
          </ArrowLink>
        </div>
      </div>
    </div>
  );
}
