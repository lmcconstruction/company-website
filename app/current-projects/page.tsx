import ArrowLink from "../arrow-link";
import ProjectCard from "../project-card";
import { PROJECTS } from "../projects-data";

export default function CurrentProjectsPage() {
  const projects = PROJECTS.filter((p) => p.status === "current");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-lg text-[var(--forest-mid)]">
          Current Projects
        </p>
        <h1 className="mt-3 font-display text-4xl text-[var(--forest-deep)] md:text-5xl">
          What we&rsquo;re building right now.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-[var(--ink)]/80">
          Click into any project below for photos, details, and current
          status.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-20 flex flex-wrap items-center gap-8 border-t border-[var(--forest-deep)]/10 pt-10">
        <p className="font-display text-xl text-[var(--forest-deep)]">
          Want a similar build for your lot?
        </p>
        <ArrowLink href="/contact">Start a conversation</ArrowLink>
      </div>
    </div>
  );
}
