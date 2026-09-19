import Link from "next/link";
import styles from "./RayseenImpact.module.css";

const outcomes = [
  {
    icon: "shared-language",
    title: "Shared Language",
    description: "A common foundation across products and teams.",
  },
  {
    icon: "predictable-experiences",
    title: "Predictable Experiences",
    description: "Consistent structures and behaviors across the ecosystem.",
  },
  {
    icon: "reusable-solutions",
    title: "Reusable Solutions",
    description:
      "Layouts and patterns designed once and applied across different contexts.",
  },
  {
    icon: "built-to-scale",
    title: "Build\nto Scale",
    description:
      "A system that can evolve alongside products without losing coherence.",
  },
] as const;

function OutcomeIcon({ type }: { type: (typeof outcomes)[number]["icon"] }) {
  const paths = {
    "shared-language": <><path d="M5 5h14v10H9l-4 4V5Z" /><path d="M9 9h6M9 12h4" /></>,
    "predictable-experiences": <><circle cx="12" cy="12" r="8" /><path d="m8.5 12 2.3 2.3 4.7-4.7" /></>,
    "reusable-solutions": <><path d="M18 9a6.5 6.5 0 0 0-11-2L5 9" /><path d="M5 5v4h4" /><path d="M6 15a6.5 6.5 0 0 0 11 2l2-2" /><path d="M19 19v-4h-4" /></>,
    "built-to-scale": <><circle cx="5" cy="12" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="19" cy="12" r="2" /><circle cx="19" cy="19" r="2" /><path d="M7 12h5M12 12l5-7M12 12h5M12 12l5 7" /></>,
  } as const;

  return <svg aria-hidden="true" className={styles.outcomeIcon} fill="none" focusable="false" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">{paths[type]}</svg>;
}

export function RayseenImpact() {
  return (
    <section className={styles.impact} aria-labelledby="impact-title">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>The impact</p>
        <h2 id="impact-title">
          <span>One system.</span>
          <span>11 products.</span>
        </h2>
        <p>
          What started as an effort to reduce inconsistency became a shared
          foundation for designing and scaling the Rayvarz product ecosystem.
        </p>
      </header>

      <div className={styles.outcomes}>
        {outcomes.map(({ icon, title, description }) => (
          <article className={styles.outcome} key={title}>
            <OutcomeIcon type={icon} />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <p className={styles.finalStatement}>
        <span>Less fragmentation.</span>
        <span>More coherence.</span>
        <strong>One shared product language.</strong>
      </p>

      <Link className={styles.caseStudyLink} href="/work/rayvarz">
        <span className={styles.caseStudyLinkIcon} aria-hidden="true" />
        Back to Case Study
      </Link>
    </section>
  );
}
