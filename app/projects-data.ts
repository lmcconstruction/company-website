export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "current" | "past";
  phase: string;
  forSale?: boolean;
  sold?: boolean;
  cover: string;
  gallery: string[];
  description: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "mt-royal",
    title: "Mt Royal",
    location: "Mountain Brook, AL",
    status: "past",
    phase: "Completed",
    sold: true,
    cover: "/images/mt-royal-exterior-front.jpg",
    gallery: [
      "/images/mt-royal-exterior-front.jpg",
      "/images/mt-royal-exterior-rear-porch.jpg",
      "/images/mt-royal-exterior-rear-angle.jpg",
      "/images/mt-royal-entry-detail.jpg",
      "/images/mt-royal-kitchen-wide-1.jpg",
      "/images/mt-royal-kitchen-wide-2.jpg",
      "/images/mt-royal-kitchen-range.jpg",
      "/images/mt-royal-screened-porch.jpg",
      "/images/mt-royal-mudroom-door.jpg",
      "/images/mt-royal-mudroom-bench.jpg",
      "/images/mt-royal-stairwell.jpg",
      "/images/mt-royal-primary-bath.jpg",
      "/images/mt-royal-bath-shower.jpg",
      "/images/mt-royal-closet.jpg",
    ],
    description:
      "A full home remodel in Mountain Brook, reworked from the studs out. The brick and stone exterior was rebuilt with turret-style dormers, copper-toned lanterns, and a screened porch on brick piers overlooking the wooded backyard. Inside, the kitchen was rebuilt around sage-green cabinetry, brass hardware, and full-slab marble countertops and backsplash, alongside a redesigned mudroom, primary bath, guest bath, and stairwell. The home has since sold.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
