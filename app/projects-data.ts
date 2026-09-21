export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "current" | "past";
  phase: string;
  forSale?: boolean;
  sold?: boolean;
  renders?: boolean;
  cover: string;
  gallery: string[];
  description: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "cliff",
    title: "Cliff",
    location: "Homewood, AL",
    status: "current",
    phase: "Design & planning",
    renders: true,
    cover: "/images/cliff-render-front.jpg",
    gallery: [
      "/images/cliff-render-front.jpg",
      "/images/cliff-render-rear.jpg",
      "/images/cliff-render-main-floor.jpg",
      "/images/cliff-render-basement.jpg",
    ],
    description:
      "A new custom home taking shape in Homewood. The front elevation pairs cedar-shingle gables with a stone-and-brick base, while the rear opens onto an arched, covered porch. Inside, the main floor is built around an open kitchen with a coffee bar and walk-in pantry, a fireplace-anchored living room with built-in shelving, and a private primary suite with a freestanding tub and walk-in shower. The finished basement adds a lounge, a dining and game room, a home office, and a full gym. These are architectural renderings — construction has not yet begun.",
  },
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
