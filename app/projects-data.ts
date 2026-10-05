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
  progressGallery?: string[];
  details?: { label: string; value: string }[];
  description: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "cliff",
    title: "528 Cliff Place",
    location: "Homewood, AL",
    status: "current",
    phase: "Under construction",
    renders: true,
    cover: "/images/cliff-render-front.jpg",
    details: [
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "5.5" },
      { label: "Living area", value: "Over 5,000 SF" },
      { label: "Outdoor living", value: "600+ SF" },
      { label: "Garage", value: "Detached" },
      { label: "Also includes", value: "Workout / cinema room" },
    ],
    progressGallery: [
      "/images/cliff-progress-foundation.jpg",
      "/images/cliff-progress-exterior-wrap.jpg",
      "/images/cliff-progress-interior-framing.jpg",
    ],
    gallery: [
      "/images/cliff-render-front.jpg",
      "/images/cliff-render-rear.jpg",
      "/images/cliff-render-main-floor.jpg",
      "/images/cliff-render-basement.jpg",
    ],
    description:
      "A new custom home taking shape in Homewood. The front elevation pairs cedar-shingle gables with a stone-and-brick base, while the rear opens onto an arched, covered porch. Inside, the main floor is built around an open kitchen with a coffee bar and walk-in pantry, a fireplace-anchored living room with built-in shelving, and a private primary suite with a freestanding tub and walk-in shower. The finished basement adds a lounge, a dining and game room, a home office, and a full gym. The home offers 5 bedrooms, 5.5 bathrooms, over 5,000 square feet of living space, a detached garage, a workout/cinema room, and more than 600 square feet of outdoor living space. The first set of images are architectural renderings; the construction progress photos below show the build as it comes together. We're open to inquiries.",
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
  {
    slug: "durham",
    title: "543 Durham Dr",
    location: "Homewood, AL",
    status: "past",
    phase: "Completed",
    forSale: true,
    cover: "/images/durham-exterior-front.jpg",
    gallery: [
      "/images/durham-exterior-front.jpg",
      "/images/durham-kitchen-island.jpg",
      "/images/durham-kitchen-living.jpg",
      "/images/durham-living-room.jpg",
      "/images/durham-primary-bedroom.jpg",
      "/images/durham-primary-bath.jpg",
      "/images/durham-primary-closet.jpg",
      "/images/durham-sitting-room.jpg",
      "/images/durham-covered-porch.jpg",
    ],
    details: [
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "4.5" },
      { label: "Living area", value: "4,444 SF" },
    ],
    description:
      "A completed custom home in Homewood, now on the market. The front elevation pairs light brick with dark board-and-batten siding, an arched entry with double doors, and a two-car garage. Inside, the kitchen is built around a large island with brass fixtures, glass-front cabinetry, and a large range, and it opens to a fireplace-anchored living room with French doors. The primary suite includes a freestanding tub, a walk-in shower, checkerboard tile floors, and a walk-in closet with built-in storage, and a covered back porch with a wood-paneled ceiling adds outdoor living space. The home offers 5 bedrooms, 4.5 bathrooms, and 4,444 square feet of living space. Contact us to schedule a showing or to learn more.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
