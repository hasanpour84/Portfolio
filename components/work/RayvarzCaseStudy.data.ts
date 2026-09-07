export const cover = "/images/rayvarz/rayvarz-cover-homepage.jpg";
export const roleCover = "/images/rayvarz/rayvarz_role.jpg";

export const challenges = [
  { title: "Designed by Non-Designers", description: "Interfaces were often created without shared design principles.", image: "/images/rayvarz/Rayvarz_Challenge_non designer.png" },
  { title: "Inconsistency and Scattering", description: "Patterns, visuals, and interactions had fragmented across products.", image: "/images/rayvarz/Rayvarz_Challenge_inconsistency.png" },
  { title: "No Design Culture", description: "Design was not yet embedded in everyday product decisions.", image: "/images/rayvarz/Rayvarz_Challenge_culture.png" },
  { title: "Different Needs and Priorities", description: "Each team balanced distinct goals, constraints, and expectations.", image: "/images/rayvarz/Rayvarz_Challenge_needs.png" },
  { title: "Difficulty of Research", description: "Limited time and access made it harder to gather reliable evidence.", image: "/images/rayvarz/Rayvarz_Challenge_research.png" },
  { title: "Innovation vs Continuity", description: "Move the experience forward without disrupting familiar workflows.", image: "/images/rayvarz/Rayvarz_Challenge_ innovation.png" },
] as const;

export const strategies = [
  { title: "Clarity First", principle: "Standardized, Yet Flexible", description: "Organize every page around the decision a visitor needs to make, rather than the internal structure of the business.", example: "Lead with the one customer outcome, then reveal supporting detail only when it helps the decision.", image: "/images/rayvarz/Rayvarz_Strategy_Standard.png" },
  { title: "Pace the Detail", principle: "Test First, Scale Then", description: "Offer enough information to build confidence at each step, without asking people to process the whole system at once.", example: "Start with a concise overview, then let people choose the specific feature, proof point, or technical detail they need.", image: "/images/rayvarz/Rayvarz_Strategy_Test.png" },
  { title: "One Experience", principle: "Design for Long-Term Scalability", description: "Create continuity across touchpoints, so people never need to relearn the product or wonder where they are in the journey.", example: "Use shared language, navigation patterns, and status cues as a person moves between related products.", image: "/images/rayvarz/Rayvarz_Strategy_Scale.png" },
  { title: "Build for Change", principle: "Balancing Consistency and Innovation", description: "Use a deliberate set of components and rules so new experiences can grow without compromising quality or consistency.", example: "New modules inherit the same spacing, type, interaction, and accessibility rules from the Rayseen Design System.", image: "/images/rayvarz/Rayvarz_Strategy_Balance.png" },
  { title: "Learn Continuously", principle: "Design for Recognition, Not Memory", description: "Treat research and design review as an ongoing feedback loop, using real behavior to sharpen the work before and after release.", example: "Review research signals with the team, turn findings into prioritised improvements, and validate the next iteration.", image: "/images/rayvarz/Rayvarz_Strategy_Recognition.png" },
] as const;

export const roles = [["strategy", "Defined the cross-product UX strategy"], ["system", "Owned the Rayseen Design System"], ["journey", "Designed end-to-end user experiences"], ["research", "Conducted user research and design reviews"]] as const;

export const systemFeatures = [
  { tag: "Design System", title: "Rayseen\nDesign System", text: "Created and owned the shared design language, components, and principles that gave Rayvarz teams a reliable foundation to build with clarity and consistency.", image: "/images/rayvarz/rayvarz_twolayercard_designsystem.jpg" },
  { tag: "Transformation", title: "10+ Individual\nSystems, Unified", text: "Transformed more than ten independent systems into a connected experience—aligning journeys, patterns, and quality without flattening the needs of each product.", image: "/images/rayvarz/rayvarz_twolayercard_10systems.jpg" },
] as const;

export const systems = [["Accounting", "Hesabdari", "/images/rayvarz/rayvarz_systemcard_hesabdari.jpg"], ["Credit", "Etebarat", "/images/rayvarz/rayvarz_systemcard_etebarat.jpg"], ["Sale", "Foroush", "/images/rayvarz/rayvarz_systemcard_foroush.jpg"], ["Inventory", "Anbar", "/images/rayvarz/rayvarz_systemcard_anbar.jpg"], ["Cash", "Vojooh Naghd", "/images/rayvarz/rayvarz_systemcard_vojouh.jpg"], ["Asset", "Darayee Sabet", "/images/rayvarz/rayvarz_systemcard_darayeesabet.jpg"], ["Payroll", "Hoghoogh", "/images/rayvarz/rayvarz_systemcard_hoghoogh.jpg"], ["Human Resource", "Kargozini", "/images/rayvarz/rayvarz_systemcard_kargozini.jpg"], ["Report Generator", "Gozareshat", "/images/rayvarz/rayvarz_systemcard_report.jpg"], ["Shareholder", "Saham", "/images/rayvarz/rayvarz_systemcard_saham.jpg"]] as const;

export const metricGroups = [
  { title: "User Experience", metrics: [["Average Clicks to Complete Complex Tasks", 12, 4], ["Visible Actions per Screen", 7, 2], ["Time to Learn Key Workflows During Onboarding", 20, 3], ["Maximum Navigation Depth", 6, 3], ["Form Complexity", 17, 1], ["Information Visibility", 3, 16], ["Task Completion Rate", 4, 15], ["User Error Rate", 14, 4]] },
  { title: "Team and Product Impact", metrics: [["Number of Reusable Components", 2, 16], ["Number of Standardized Patterns", 0, 6], ["Cross-Product Consistency", 6, 15], ["Design Handoff Quality", 2, 4], ["Design Scalability", 3, 16], ["Time to Design and Implement New Feature", 14, 5]] },
] as const;
