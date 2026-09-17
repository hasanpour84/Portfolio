"use client";

import Image from "next/image";
import { type ReactNode, useState } from "react";
import styles from "./RayvarzInformationChallenge.module.css";

type SupportingExample = {
  title: string;
  subtitle: string;
  image: string;
  description: ReactNode[];
};

const supportingExamples: SupportingExample[] = [
  {
    title: "Information Architecture",
    subtitle: "Related information is organized around the task, not the system structure.",
    image: "/images/rayvarz/systems/information_menu_v1.jpg",
    description: [
      <>Navigation and terminology had evolved independently across systems, resulting in different menu structures, inconsistent naming, and ambiguous labels. Users had to learn how each product organized essentially similar concepts.</>,
      <>I introduced a <strong>shared information architecture built around five common menu categories</strong> across the ecosystem. Alongside the navigation redesign, terminology was standardized and ambiguous labels were rewritten to make their meaning clearer.</>,
      <>This created a more predictable structure across products, reducing the need for users to relearn navigation and terminology when moving between systems.</>,
    ],
  },
  {
    title: "Unified filter",
    subtitle: "A consistent filter model helps users narrow complex datasets with confidence.",
    image: "/images/rayvarz/systems/information_filter_v1.jpg",
    description: [
      <>Finding specific information across large enterprise tables required a more consistent and scalable approach. I introduced <strong>column-level filtering across all tables</strong>, giving users a predictable way to narrow down data directly where they work.</>,
      <>For more complex scenarios, I designed <strong>dedicated filters for key tables</strong>, along with <strong>advanced filtering and worklist patterns</strong> for tasks requiring more precise criteria.</>,
      <>Together, these layers let users move from quick filtering to more advanced queries based on the complexity of their task, without making every search experience equally complex.</>,
    ],
  },
  {
    title: "Parvande Personneli",
    subtitle: "A clearer profile view brings a person’s key history and records together.",
    image: "/images/rayvarz/systems/information_parvande_v1.jpg",
    description: [
      <>Employee information was distributed across different parts of the system, forcing users to navigate between multiple pages to build a complete picture of a person.</>,
      <>I introduced the <strong>Employee Dossier</strong>, bringing related information together into a single, structured page and providing one central place to access an employee&apos;s data.</>,
      <>This approach later evolved into a <strong>reusable dossier pattern</strong> and was extended to other entities across multiple systems, creating a consistent way to organize and access distributed information.</>,
    ],
  },
];

export function RayvarzInformationChallenge() {
  const [openExample, setOpenExample] = useState<string | null>(null);

  return <article className={styles.challenge} aria-labelledby="information-challenge-title">
    <header className={styles.header}>
      <p className={styles.index}>Challenge 04</p>
      <h3 id="information-challenge-title">Making Information Findable &amp; Understandable</h3>
      <p>Enterprise data becomes useful when people can quickly locate it, recognize its relevance, and understand what it is telling them.</p>
    </header>

    <figure className={styles.dashboard}>
      <Image src="/images/rayvarz/rayvarz_systemcard_vojouh.jpg" alt="Rayvarz dashboard showing enterprise data in a visual overview" fill priority sizes="100vw" />
    </figure>

    <section className={styles.dashboardDescription} aria-labelledby="dashboard-title">
      <h4 id="dashboard-title">Dashboard</h4>
      <p>Information, easy to understand and analyze</p>
    </section>

    <details className={styles.exploration}>
      <summary><span className={styles.explorationIcon} aria-hidden="true" />Explore the redesign</summary>
      <div className={styles.detailContent}>
        <section>
          <p className={styles.label}>Challenge</p>
          <p>
            The previous generation was primarily designed for{' '}
            <strong>data entry and operations</strong>. While the systems
            contained large amounts of valuable data, there was no dashboard
            layer to help users understand what that data meant.
          </p>
          <p>
            Reports were also heavily dependent on numerical tables, requiring
            users to interpret large sets of figures themselves to identify
            patterns, changes, and important information.
          </p>
        </section>
        <section>
          <p className={styles.label}>Solution</p>
          <p>
            I introduced <strong>dashboards and data visualization</strong> as
            a new layer across the product ecosystem.
          </p>
          <p>
            Key information was surfaced through <strong>KPI cards, charts,
            and visual summaries</strong>, giving users an immediate overview
            before diving into details. Existing reports were also enhanced
            with <strong>interactive charts</strong>, allowing users to explore
            and interpret data visually instead of relying solely on numerical
            tables.
          </p>
          <p>
            The goal was not to replace detailed reports, but to create
            different levels of information—from a quick overview to deeper
            exploration—based on what users needed at each moment.
          </p>
        </section>
        <section>
          <p className={styles.label}>Impact</p>
          <p>
            The systems evolved from being primarily tools for{' '}
            <strong>recording and processing data</strong> into products that
            could also help users <strong>monitor, understand, and analyze it</strong>.
          </p>
          <p>
            Important information became easier to scan, patterns became more
            visible, and users gained a clearer path from high-level insights
            to detailed data.
          </p>
        </section>
      </div>
    </details>

    <section className={styles.supportingExamples} aria-labelledby="information-supporting-examples-title">
      <header className={styles.supportingHeader}>
        <h4 id="information-supporting-examples-title">Supporting Examples</h4>
      </header>
      <div className={styles.exampleList}>
        {supportingExamples.map((example) => {
          const isOpen = openExample === example.title;
          return <article className={styles.example} key={example.title}>
            <button className={styles.exampleTrigger} type="button" aria-expanded={isOpen} aria-controls={`information-example-${example.title.replace(/ /g, "-").toLowerCase()}`} onClick={() => setOpenExample(isOpen ? null : example.title)}>
              <span className={styles.thumbnail}><Image src={example.image} alt="" fill sizes="(max-width: 700px) 34vw, 200px" /></span>
              <span className={styles.exampleSummary}><strong>{example.title}</strong><span>{example.subtitle}</span></span>
              <span className={styles.chevron} aria-hidden="true">↓</span>
            </button>
            {isOpen && <div className={styles.exampleDetail} id={`information-example-${example.title.replace(/ /g, "-").toLowerCase()}`}>
              <div className={styles.detailImage}><Image src={example.image} alt="" fill sizes="(max-width: 700px) 100vw, 42vw" /></div>
              <div className={styles.detailCopy}>{example.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
            </div>}
          </article>;
        })}
      </div>
    </section>
  </article>;
}
