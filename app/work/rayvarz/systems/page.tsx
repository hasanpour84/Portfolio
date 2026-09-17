import type { Metadata } from "next";
import Link from "next/link";
import { RayvarzSystemLandscape } from "@/components/work/RayvarzSystemLandscape";
import { RayvarzComplexityChallenge } from "@/components/work/RayvarzComplexityChallenge";
import { RayvarzFragmentedTasksChallenge } from "@/components/work/RayvarzFragmentedTasksChallenge";
import { RayvarzCognitiveLoadChallenge } from "@/components/work/RayvarzCognitiveLoadChallenge";
import { RayvarzInformationChallenge } from "@/components/work/RayvarzInformationChallenge";
import { RayvarzContextChallenge } from "@/components/work/RayvarzContextChallenge";
import { RayvarzConsistencyClosing } from "@/components/work/RayvarzConsistencyClosing";
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
          <div className={styles.heroEyebrow}>
            <Link className={styles.backLink} href="/work/rayvarz" aria-label="Back to Rayvarz Case Study">
              <span aria-hidden="true" />
            </Link>
            <p className={styles.eyebrow}>Rayvarz · Product Experience</p>
          </div>
          <h1>
            Solving UX <em>Challenges</em> Across 10+ Systems
          </h1>
          <div className={styles.introduction}>
            <p>
              Across a complex ERP ecosystem, I worked on recurring UX
              problems—from dense interfaces and fragmented workflows to
              cognitive load, information discovery, and expert-user
              efficiency.
            </p>
          </div>
        </header>
        <RayvarzSystemLandscape />
        <RayvarzComplexityChallenge />
        <RayvarzFragmentedTasksChallenge />
        <RayvarzCognitiveLoadChallenge />
        <RayvarzInformationChallenge />
        <RayvarzContextChallenge />
        <RayvarzConsistencyClosing />
      </article>
    </main>
  );
}
