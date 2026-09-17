import styles from "./RayvarzConsistencyClosing.module.css";

export function RayvarzConsistencyClosing() {
  return (
    <section className={styles.closing} aria-labelledby="consistency-closing-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>A connected ecosystem</p>
        <h2 id="consistency-closing-title">Different Challenges. One <em>Consistent</em> Experience.</h2>
        <p className={styles.statement}>Each challenge required a contextual solution, but none was designed in isolation. Consistent patterns, behaviors, and principles kept the experience coherent across the entire ecosystem.</p>
        <p className={styles.patterns}>Consistent Patterns <span>·</span> Consistent Behaviors <span>·</span> Shared Principles</p>
      </div>
    </section>
  );
}
