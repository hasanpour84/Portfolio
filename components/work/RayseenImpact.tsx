import Link from "next/link";
import styles from "./RayseenImpact.module.css";

const outcomes = [
  {
    title: "Shared Language",
    description: "A common foundation across products and teams.",
  },
  {
    title: "Predictable Experiences",
    description: "Consistent structures and behaviors across the ecosystem.",
  },
  {
    title: "Reusable Solutions",
    description:
      "Layouts and patterns designed once and applied across different contexts.",
  },
  {
    title: "Built to Scale",
    description:
      "A system that can evolve alongside products without losing coherence.",
  },
] as const;

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
        {outcomes.map(({ title, description }) => (
          <article className={styles.outcome} key={title}>
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

      <div className={styles.backNavigation}>
        <Link href="/work/rayvarz">
          <span aria-hidden="true">←</span> Back to Rayvarz Case Study
        </Link>
      </div>
    </section>
  );
}
