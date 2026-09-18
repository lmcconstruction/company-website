import Image from "next/image";
import Link from "next/link";
import { Project } from "./projects-data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.cover}
          alt={`${project.title} in ${project.location}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.forSale && (
          <span className="absolute left-3 top-3 bg-[var(--forest-deep)] px-3 py-1 text-xs tracking-wide text-[var(--stone)]">
            For Sale
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-[var(--ink)]/60">{project.location}</p>
        <p className="mt-1 font-display text-xl text-[var(--forest-deep)]">
          {project.title}
        </p>
        <p className="mt-1 text-sm text-[var(--forest-mid)]">
          {project.phase}
        </p>
      </div>
    </Link>
  );
}
