"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./RayvarzCaseStudy.module.css";

const cover = "/images/rayvarz/rayvarz-cover-homepage.jpg";

const challengeImages = [
  "/images/rayvarz/Rayvarz_Challenge_non designer.png",
  "/images/rayvarz/Rayvarz_Challenge_inconsistency.png",
  "/images/rayvarz/Rayvarz_Challenge_culture.png",
  "/images/rayvarz/Rayvarz_Challenge_needs.png",
  "/images/rayvarz/Rayvarz_Challenge_research.png",
  "/images/rayvarz/Rayvarz_Challenge_ innovation.png",
];

const challenges = [
  ["Designed by Non-Designers", "Interfaces were often created without shared design principles."],
  ["Inconsistency and Scattering", "Patterns, visuals, and interactions had fragmented across products."],
  ["No Design Culture", "Design was not yet embedded in everyday product decisions."],
  ["Different Needs and Priorities", "Each team balanced distinct goals, constraints, and expectations."],
  ["Difficulty of Research", "Limited time and access made it harder to gather reliable evidence."],
  ["Innovation vs Continuity", "Move the experience forward without disrupting familiar workflows."],
];

const strategies = [
  ["Clarity First", "Standardized, Yet Flexible", "Organize every page around the decision a visitor needs to make, rather than the internal structure of the business.", "Lead with the one customer outcome, then reveal supporting detail only when it helps the decision."],
  ["Pace the Detail", "Test First, Scale Then", "Offer enough information to build confidence at each step, without asking people to process the whole system at once.", "Start with a concise overview, then let people choose the specific feature, proof point, or technical detail they need."],
  ["One Experience", "Design for Long-Term Scalability", "Create continuity across touchpoints, so people never need to relearn the product or wonder where they are in the journey.", "Use shared language, navigation patterns, and status cues as a person moves between related products."],
  ["Build for Change", "Balancing Consistency and Innovation", "Use a deliberate set of components and rules so new experiences can grow without compromising quality or consistency.", "New modules inherit the same spacing, type, interaction, and accessibility rules from the Rayseen Design System."],
  ["Learn Continuously", "Design for Recognition, Not Memory", "Treat research and design review as an ongoing feedback loop, using real behavior to sharpen the work before and after release.", "Review research signals with the team, turn findings into prioritised improvements, and validate the next iteration."],
];

const strategyImages = [
  "/images/rayvarz/Rayvarz_Strategy_Standard.png",
  "/images/rayvarz/Rayvarz_Strategy_Test.png",
  "/images/rayvarz/Rayvarz_Strategy_Scale.png",
  "/images/rayvarz/Rayvarz_Strategy_Balance.png",
  "/images/rayvarz/Rayvarz_Strategy_Recognition.png",
];

const systems = [
  ["Accounting", "Hesabdari", "/images/rayvarz/rayvarz_systemcard_hesabdari.jpg"],
  ["Credit", "Etebarat", "/images/rayvarz/rayvarz_systemcard_etebarat.jpg"],
  ["Sale", "Foroush", "/images/rayvarz/rayvarz_systemcard_foroush.jpg"],
  ["Inventory", "Anbar", "/images/rayvarz/rayvarz_systemcard_anbar.jpg"],
  ["Cash", "Vojooh Naghd", "/images/rayvarz/rayvarz_systemcard_vojouh.jpg"],
  ["Asset", "Darayee Sabet", "/images/rayvarz/rayvarz_systemcard_darayeesabet.jpg"],
  ["Payroll", "Hoghoogh", "/images/rayvarz/rayvarz_systemcard_hoghoogh.jpg"],
  ["Human Resource", "Kargozini", "/images/rayvarz/rayvarz_systemcard_kargozini.jpg"],
  ["Report Generator", "Gozareshat", cover],
  ["Shareholder", "Saham", "/images/rayvarz/rayvarz_systemcard_saham.jpg"],
] as const;

const roles = [
  ["strategy", "Defined the cross-product UX strategy"],
  ["system", "Owned the Rayseen Design System"],
  ["journey", "Designed end-to-end user experiences"],
  ["research", "Conducted user research and design reviews"],
] as const;

const metricGroups = [
  {
    title: "User Experience",
    metrics: [
      ["Average Clicks to Complete Complex Tasks", 12, 4],
      ["Visible Actions per Screen", 7, 2],
      ["Time to Learn Key Workflows During Onboarding", 20, 3],
      ["Maximum Navigation Depth", 6, 3],
      ["Form Complexity", 17, 1],
      ["Information Visibility", 3, 16],
      ["Task Completion Rate", 4, 15],
      ["User Error Rate", 14, 4],
    ],
  },
  {
    title: "Team and Product Impact",
    metrics: [
      ["Number of Reusable Components", 2, 16],
      ["Number of Standardized Patterns", 0, 6],
      ["Cross-Product Consistency", 6, 15],
      ["Design Handoff Quality", 2, 4],
      ["Design Scalability", 3, 16],
      ["Time to Design and Implement New Feature", 14, 5],
    ],
  },
] as const;

function RoleIcon({ type }: { type: (typeof roles)[number][0] }) {
  const paths = {
    strategy: <><circle cx="12" cy="12" r="7" /><path d="m12 8 2.5 4.5L12 16l-2.5-3.5L12 8Z" /></>,
    system: <><rect x="5" y="5" width="5" height="5" /><rect x="14" y="5" width="5" height="5" /><rect x="5" y="14" width="5" height="5" /><rect x="14" y="14" width="5" height="5" /></>,
    journey: <><path d="M5 7h8a3 3 0 1 1 0 6h-2a3 3 0 1 0 0 6h8" /><path d="m16 5 3 2-3 2M16 17l3 2-3 2" /></>,
    research: <><circle cx="10" cy="10" r="5" /><path d="m14 14 5 5M8 10h4M10 8v4" /></>,
  };

  return <svg className="role-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[type]}</svg>;
}

function SystemIcon({ name }: { name: (typeof systems)[number][0] }) {
  const icons = {
    Accounting: <><path d="M5 5h14v14H5z" /><path d="M8 9h8M8 13h3M8 16h8M15 12v4" /></>,
    Credit: <><rect x="4" y="7" width="16" height="11" rx="1" /><path d="M4 11h16M8 15h3" /></>,
    Sale: <><path d="M4 8h16l-2 11H6L4 8Z" /><path d="M8 8V5h8v3M9 12h6M12 10v4" /></>,
    Inventory: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
    Cash: <><rect x="3" y="6" width="18" height="12" rx="1" /><circle cx="12" cy="12" r="3" /><path d="M6 9h.01M18 15h.01" /></>,
    Asset: <><path d="M5 20V8l7-4 7 4v12M3 20h18M9 20v-5h6v5M8 10h.01M16 10h.01" /></>,
    Payroll: <><circle cx="12" cy="8" r="3" /><path d="M5 20v-2a7 7 0 0 1 14 0v2M16 6h4v5M18 4v2" /></>,
    "Human Resource": <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M15 16a5 5 0 0 1 6 4" /></>,
    "Report Generator": <><path d="M6 3h9l4 4v14H6V3Z" /><path d="M15 3v5h4M9 12h6M9 16h6" /></>,
    Shareholder: <><circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M3 20v-1a5 5 0 0 1 10 0v1M11 20v-1a5 5 0 0 1 10 0v1" /></>,
  } as const;

  return <svg className="system-tile__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">{icons[name]}</svg>;
}

export function RayvarzCaseStudy() {
  const [strategy, setStrategy] = useState(0);
  const [metricView, setMetricView] = useState<"before" | "after">("after");
  const activeStrategy = strategies[strategy];

  return <>
    <section className={styles.rayvarzChallenges} aria-labelledby="challenges-title"><div className={styles.rayvarzChallengesHeader}><h2 id="challenges-title">Challenges</h2><p>Six connected problems shaped the experience. Each required its own answer, while still feeling like one clear and confident Rayvarz journey.</p></div><div className={styles.challengeCards}>{challenges.map(([title, description], index) => <article className={styles.challengeCard} key={title}><Image src={challengeImages[index]} alt="" fill sizes="(max-width: 700px) 50vw, 33vw" /><span className={styles.challengeCardNumber}>{String(index + 1).padStart(2, "0")}</span><div className={styles.challengeCardContent}><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>

    <section className="rayvarz-role" aria-labelledby="role-title">
      <div className="rayvarz-role__visual"><Image src={cover} alt="Rayvarz product design work" fill sizes="50vw" /><span>Rayvarz / Product design</span></div>
      <div className="rayvarz-role__content">
        <span>My role</span>
        <h2 id="role-title">Leading the Experience From Strategy to System.</h2>
        <ul className="role-list">
          {roles.map(([icon, role]) => <li key={role}><RoleIcon type={icon} /><div>{role}</div></li>)}
        </ul>
      </div>
    </section>

    <section className={styles.rayvarzStrategy} aria-labelledby="strategy-title">
      <header className={styles.rayvarzStrategyHeader}><h2 id="strategy-title">UX Strategy</h2><p>Five principles gave the work a shared direction—from the first visit through to the more detailed product journeys.</p></header>
      <div className={styles.strategyViewport}>
        <article className={styles.strategyItem} key={strategy}>
          <figure className={styles.strategyItemImage}><Image src={strategyImages[strategy]} alt={`Rayvarz strategy visual: ${activeStrategy[1]}`} fill sizes="(max-width: 700px) 100vw, 52vw" /></figure>
          <div className={styles.strategyItemContent}><span className={styles.strategyItemNumber}>{String(strategy + 1).padStart(2, "0")} / {activeStrategy[0]}</span><h3>{activeStrategy[1]}</h3><p className={styles.strategyItemDescription}>{activeStrategy[2]}</p><aside className={styles.strategyItemExample}><span>In practice</span><p>{activeStrategy[3]}</p></aside></div>
        </article>
      </div>
      <div className={styles.strategyControls}>
        <div className={styles.strategyTabs} role="tablist" aria-label="UX strategy principles">{strategies.map((item, index) => <button key={item[1]} type="button" role="tab" aria-selected={strategy === index} onClick={() => setStrategy(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item[1]}</button>)}</div>
        <div className={styles.strategyButtons}><button className={styles.strategyButton} type="button" onClick={() => setStrategy(strategy - 1)} disabled={strategy === 0} aria-label="Previous UX strategy">‹</button><button className={styles.strategyButton} type="button" onClick={() => setStrategy(strategy + 1)} disabled={strategy === strategies.length - 1} aria-label="Next UX strategy">›</button></div>
      </div>
    </section>

    <section className="systems-feature" aria-labelledby="systems-title"><header className="systems-feature__heading"><h2 id="systems-title">Two-Layered<br />Design</h2><p>Two connected bodies of work: creating the shared design foundation and transforming more than ten individual systems into a cohesive product ecosystem.</p></header><div className="systems-cards">{[["Design System", "Rayseen\nDesign System", "Created and owned the shared design language, components, and principles that gave Rayvarz teams a reliable foundation to build with clarity and consistency.", "/images/rayvarz/rayvarz_twolayercard_designsystem.jpg"], ["Transformation", "10+ Individual\nSystems, Unified", "Transformed more than ten independent systems into a connected experience—aligning journeys, patterns, and quality without flattening the needs of each product.", "/images/rayvarz/rayvarz_twolayercard_10systems.jpg"]].map(([tag, title, text, image]) => <article className="system-card" key={tag}><Image src={image} alt={`${title.replace("\n", " ")} visual`} fill sizes="50vw" /><div className="system-card__content"><span className="system-card__tag">{tag}</span><h3>{title.split("\n").map(line => <span key={line}>{line}<br /></span>)}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="systems-library" aria-labelledby="library-title"><header className="systems-library__header"><h2 id="library-title">System<br />Library</h2><p>Ten connected systems, each with its own purpose and context—brought together through a shared experience and design language.</p></header><div className="systems-library__grid">{systems.map(([name, transliteration, image]) => <article className="system-tile" key={name}><figure className="system-tile__image"><Image src={image} alt={`${name} system interface`} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 20vw" /></figure><div className="system-tile__content"><SystemIcon name={name} /><div><h3>{name}</h3><p>{transliteration}</p></div></div></article>)}</div></section>

    <section className={`${styles.metricsFeature}${metricView === "before" ? ` ${styles.metricsFeatureBefore}` : ""}`} aria-labelledby="metrics-title">
      <header className={styles.metricsFeatureHeader}>
        <div><h2 id="metrics-title">Metrics</h2><p>Fourteen measures that capture the user experience and the impact of a stronger product design system.</p></div>
        <div className={styles.metricsToggle} role="group" aria-label="Select metric comparison">
          <span className={styles.metricsToggleIndicator} aria-hidden="true" />
          <button type="button" onClick={() => setMetricView("before")} aria-pressed={metricView === "before"}>Before</button>
          <button type="button" onClick={() => setMetricView("after")} aria-pressed={metricView === "after"}>After</button>
        </div>
      </header>
      <div className={styles.metricsGroups}>
        {metricGroups.map(({ title, metrics }) => <section className={styles.metricsGroup} key={title} aria-labelledby={`${title.toLowerCase().replace(/ /g, "-")}-metrics`}>
          <h3 id={`${title.toLowerCase().replace(/ /g, "-")}-metrics`}>{title}</h3>
          <div className={styles.metricsLines}>{metrics.map(([metric, before, after], index) => <div className={styles.metricLine} key={metric}><span className={styles.metricLineNumber}>{String(index + 1).padStart(2, "0")}</span><div className={styles.metricLineContent}><span>{metric}</span><div className={styles.metricLineBar} aria-hidden="true"><i style={{ "--metric-value": `${metricView === "before" ? before : after}` } as React.CSSProperties} /></div></div><strong aria-label={`${metric}: ${metricView} value ${metricView === "before" ? before : after}`}>{metricView === "before" ? before : after}</strong></div>)}</div>
        </section>)}
      </div>
    </section>
  </>;
}
