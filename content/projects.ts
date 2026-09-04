export type FeaturedProject = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  alt: string;
  isPublished?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "rayvarz",
    title: "Rayvarz",
    category: "Digital experience",
    year: "2026",
    cover: "/images/homepage/homepage_casestudycard_rayvarz.png",
    alt: "Rayvarz homepage case study card",
    isPublished: true,
  },
  {
    slug: "arc-utility",
    title: "Blocklychain",
    category: "Product design",
    year: "2024",
    cover: "/images/homepage/homepage_casestudycard_blocklychain.png",
    alt: "Blocklychain homepage case study card",
    isPublished: true,
  },
  {
    slug: "common-ground",
    title: "Common Ground",
    category: "Brand strategy",
    year: "2023",
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
    alt: "Warm modern workplace with natural materials",
    isPublished: true,
  },
  {
    slug: "morrow-health",
    title: "Morrow Health",
    category: "Digital experience",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
    alt: "Healthcare professional reviewing a patient record",
    isPublished: true,
  },
];

export const homeFeaturedProjects = featuredProjects.filter(
  ({ slug }) => slug === "rayvarz" || slug === "arc-utility",
);
