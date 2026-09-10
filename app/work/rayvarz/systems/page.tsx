import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Solving UX Challenges Across 10+ Systems",
  description:
    "A product experience case study within the Rayvarz ERP ecosystem.",
  alternates: { canonical: "/work/rayvarz/systems" },
  openGraph: {
    title: "Solving UX Challenges Across 10+ Systems — Mohsen Hasanpour",
    description:
      "A product experience case study within the Rayvarz ERP ecosystem.",
  },
};

export default function RayvarzSystemsPage() {
  return (
    <main className={`page ${styles.page}`}>
      <article className={styles.caseStudy}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Rayvarz · Product Experience</p>
          <h1>Solving UX Challenges Across 10+ Systems</h1>
        </header>
      </article>
    </main>
  );
}
