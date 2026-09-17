import Image from "next/image";
import styles from "./RayvarzContextChallenge.module.css";

const evidenceNotes = [
  { title: "Context Summary", description: "Keep key information visible while performing an action." },
  { title: "Document Relationships", description: "Show how the current document relates to previous and next documents." },
  { title: "Cross-System State", description: "Make the status of transactions across connected systems visible." },
] as const;

export function RayvarzContextChallenge() {
  return (
    <article className={styles.challenge} aria-labelledby="context-challenge-title">
      <div className={styles.spread}>
        <header className={styles.narrative}>
          <p className={styles.index}>Challenge 05</p>
          <h3 id="context-challenge-title">Making Context, State &amp; Relationships Visible</h3>
          <p>In complex workflows, users often needed more than the current record. They needed to understand its status, history, relationships, and what had happened before or after an operation.</p>
          <p className={styles.principle}>Keep the context users need close to the action they&apos;re taking.</p>
        </header>

        <section className={styles.evidence} aria-labelledby="cheque-lifecycle-title">
          <header>
            <p className={styles.system}>Cash &amp; Treasury</p>
            <h4 id="cheque-lifecycle-title">Cheque Lifecycle</h4>
            <p>A status shows where a cheque is now. Its timeline shows how it got there.</p>
          </header>
          <figure className={styles.screenshot}>
            <Image src="/images/rayvarz/systems/state_timeline_v1.jpg" alt="Cheque lifecycle timeline showing document state and relationships" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
          </figure>
          <div className={styles.notes} aria-label="Supporting evidence notes">
            {evidenceNotes.map(({ title, description }, index) => (
              <section key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h5>{title}</h5>
                <p>{description}</p>
              </section>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
