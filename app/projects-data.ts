export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "current" | "past";
  phase: string;
  forSale?: boolean;
  cover: string;
  gallery: string[];
  description: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "birmingham-foundation-build",
    title: "New Custom Build",
    location: "Birmingham, AL",
    status: "current",
    phase: "Foundation",
    cover: "/images/foundation-birmingham.jpg",
    gallery: ["/images/foundation-birmingham.jpg"],
    description:
      "Forms are set and footings are poured on this ground-up custom build. Everything above ground depends on getting this stage exactly right — level, square, and built for the soil it's sitting in.",
  },
  {
    slug: "birmingham-framing-build",
    title: "New Custom Build",
    location: "Birmingham, AL",
    status: "current",
    phase: "Framing",
    cover: "/images/framing-birmingham.jpg",
    gallery: ["/images/framing-birmingham.jpg"],
    description:
      "The structure is taking shape. Walls, openings, and rooflines are getting their first real form, wrapped and ready for the trades that follow.",
  },
  {
    slug: "mountain-brook-masonry-build",
    title: "Custom Brick Build",
    location: "Mountain Brook, AL",
    status: "current",
    phase: "Masonry",
    cover: "/images/masonry-mountain-brook.jpg",
    gallery: ["/images/masonry-mountain-brook.jpg"],
    description:
      "Brick goes on by hand, course by course, on this custom build. This is the stage where a home's exterior character really starts to show.",
  },
  {
    slug: "mountain-brook-new-construction",
    title: "New Construction",
    location: "Mountain Brook, AL",
    status: "current",
    phase: "Nearing completion",
    forSale: true,
    cover: "/images/near-complete-mountain-brook.jpg",
    gallery: ["/images/near-complete-mountain-brook.jpg"],
    description:
      "Roof, brick, and windows are in and finish work is underway on this traditional new build. Listed with LAH Sotheby's International Realty.",
  },
  {
    slug: "birmingham-traditional-custom-home",
    title: "Traditional Custom Build",
    location: "Birmingham, AL",
    status: "past",
    phase: "Completed",
    cover: "/images/completed-custom-home.jpg",
    gallery: ["/images/completed-custom-home.jpg"],
    description:
      "A ground-up custom home designed around a wooded lot — brick and stone exterior, deep front lawn, and a layout built for the family that commissioned it.",
  },
  {
    slug: "birmingham-brick-colonial",
    title: "Brick Colonial",
    location: "Birmingham, AL",
    status: "past",
    phase: "Completed",
    cover: "/images/completed-brick-colonial.jpg",
    gallery: ["/images/completed-brick-colonial.jpg"],
    description:
      "A full-brick colonial with a dramatic double-height chimney and a clean, symmetrical facade — finished from the foundation up.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
