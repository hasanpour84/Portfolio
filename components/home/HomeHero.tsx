import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div>
        <span className="eyebrow">Independent designer · Available for select work</span>
        <h1>
          I Turn Complex Problems into <em>Clear, Considered</em> Experiences.
        </h1>
      </div>
      <div className={styles.heroBottom}>
        <p className={styles.heroCopy}>
          Mohsen Hasanpour is a multidisciplinary designer helping ambitious
          teams make useful, beautiful things that people choose to return to.
        </p>
      </div>
    </section>
  );
}
