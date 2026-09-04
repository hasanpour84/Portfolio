export type CaseStudy = {
    slug: string;
    title: string;
    category: string;
    year: string;
    cover: string;
    alt: string;
  
    overview: string;
    challenge: string;
    role: string;
    client: string;
    timeline: string;
    tools: string;
    context: string;
    process: string;
    solution: string;
    gallery: [string, string];
    results: [string, string][];
  };

  export const caseStudies: CaseStudy[] = [
    {
      slug: "rayvarz",
      title: "Rayvarz",
      category: "Product design",
      year: "2026",
      cover: "/images/rayvarz/rayvarz-cover-page.jpg",
      alt: "Rayvarz project page cover",
  
      overview:
        "Led the UX transformation of a fragmented ERP ecosystem, creating a unified experience across interconnected enterprise products.",
  
      challenge:
        "A large legacy ERP ecosystem had grown across multiple products and teams, resulting in inconsistent interfaces, fragmented navigation, and complex workflows.",
  
      role:
        "Senior Product Designer — leading UX strategy, design system development, product design, and cross-functional collaboration.",
      client: "Rayvarz",
      timeline: "12 weeks",
      tools: "Figma, Strategy, Prototyping",
      context:
        "RAYVARZ is one of Iran's leading ERP providers, offering an ecosystem of integrated large-scale enterprise applications across finance, supply chain, human resources, manufacturing, and other business domains. As the sole Senior Product Designer, I was responsible for shaping the user experience across new generation of ERP ecosystem developed by multiple independent teams.",
      process:
        "We mapped key audience questions, organized the information architecture around real decision-making moments, and created a shared design language that could serve multiple product teams.",
      solution:
        "The resulting experience combines direct messaging, editorial visual rhythm, and focused calls to action with a scalable component system for consistent journeys across the ecosystem.",
      gallery: ["/images/rayvarz/rayvarz-cover-homepage.jpg", "/images/rayvarz/rayvarz-cover-homepage.jpg"],
      results: [["Clearer", "value proposition"], ["Focused", "user journeys"], ["Scalable", "content system"]],
    },
    { slug: "arc-utility", title: "Blocklychain", category: "Product design", year: "2024", cover: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85", alt: "Team collaborating around a table in a bright studio", overview: "Making home-energy decisions feel as clear as a monthly statement.", challenge: "Customers had rich usage data but no practical way to act on it. The product was dense, hard to scan, and support requests were climbing.", role: "Lead Product Designer", client: "Arc Energy", timeline: "16 weeks", tools: "Figma, FigJam, Maze", context: "A fast-growing clean-energy provider needed a simpler way for households to understand and manage their energy use.", process: "We spoke with 18 households, mapped their energy moments, and reduced a dashboard of 26 competing data points to three useful daily decisions.", solution: "A calm, adaptive home screen turns consumption into a plain-language narrative, then offers one meaningful action at a time.", gallery: ["https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85"], results: [["31%", "fewer support contacts"], ["2.4×", "more plan changes"], ["+18 pts", "task success score"]] },
    { slug: "common-ground", title: "Common Ground", category: "Brand strategy", year: "2023", cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85", alt: "Warm modern workplace with natural materials", overview: "A culture brand for workplaces that make room for everyone.", challenge: "The identity blended into a sea of friendly workplace platforms, while its central belief—belonging is designed—was hidden.", role: "Brand Strategist & Designer", client: "Common Ground", timeline: "12 weeks", tools: "Strategy, Illustrator, Webflow", context: "Common Ground creates better shared spaces for distributed teams. Their work was thoughtful; their story did not yet feel as distinctive.", process: "We ran founder workshops, interviewed members, and translated a recurring insight into an ownable verbal and visual system.", solution: "The new identity uses soft geometry, candid language, and an elastic layout system that can hold many voices without losing its center.", gallery: ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"], results: [["42%", "lift in demo conversion"], ["3.1×", "organic reach"], ["8", "launch touchpoints"]] },
    { slug: "morrow-health", title: "Morrow Health", category: "Digital experience", year: "2024", cover: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85", alt: "Healthcare professional reviewing a patient record", overview: "A more human first step into preventative care.", challenge: "The onboarding asked for too much too soon. People abandoned it before receiving any value—and clinicians received incomplete profiles.", role: "Product Design Director", client: "Morrow Health", timeline: "20 weeks", tools: "Figma, ProtoPie, Dovetail", context: "Morrow pairs people with proactive care plans before small health concerns become serious ones.", process: "We tested a progressive disclosure flow with patients and clinicians, then built a content framework around confidence rather than compliance.", solution: "A three-minute conversational assessment creates a useful first plan immediately, with detail collected naturally over time.", gallery: ["https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85", "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85"], results: [["27%", "higher completion"], ["46%", "more booked consults"], ["4.8/5", "clarity rating"]] },
  ];
