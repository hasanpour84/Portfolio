import styles from "./RayvarzEfficiencyChallenge.module.css";

const efficiencyNotes = [
  { title: "Keyboard Navigation", description: "Faster interaction for repetitive workflows." },
  { title: "Zone Navigation", description: "Faster movement between working areas." },
  { title: "Bulk Operations", description: "Multiple records handled in a single operation." },
] as const;

export function RayvarzEfficiencyChallenge() {
  return (
    <article className={styles.challenge} aria-labelledby="efficiency-challenge-title">
      <header className={styles.header}>
        <p className={styles.index}>Challenge 06</p>
        <h3 id="efficiency-challenge-title">Designing for Efficiency at Scale</h3>
        <p>For users who spend hours every day in the product, usability isn&apos;t only about learning the interface. Repeated work needs to become faster.</p>
      </header>

      <section className={styles.evidence} aria-labelledby="operational-pattern-title">
        <header>
          <p className={styles.label}>Operational Pattern</p>
          <h4 id="operational-pattern-title">Designed Once. Refined Through Use. Scaled Across Products.</h4>
          <p>A solution created for repeated operations was refined through real use and eventually became a reusable interaction pattern across different workflows and systems.</p>
        </header>
        <figure className={styles.screenshot} aria-label="Operational Pattern product screenshot placeholder">
          <figcaption>Operational Pattern — Product Screenshot</figcaption>
        </figure>
        <div className={styles.notes} aria-label="Supporting efficiency evidence">
          {efficiencyNotes.map(({ title, description }) => (
            <section key={title}>
              <h5>{title}</h5>
              <p>{description}</p>
            </section>
          ))}
        </div>
      </section>
    </article>
  );
}
