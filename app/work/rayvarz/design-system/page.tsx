import type { Metadata } from "next";
import Link from "next/link";
import { RayseenInteractionPatterns } from "@/components/work/RayseenInteractionPatterns";
import { RayseenImpact } from "@/components/work/RayseenImpact";
import { RayseenLayoutSystem } from "@/components/work/RayseenLayoutSystem";
import { RayseenPatternIndex } from "@/components/work/RayseenPatternIndex";
import { RayseenSystemArchitecture } from "@/components/work/RayseenSystemArchitecture";
import { RayseenSystemToProduct } from "@/components/work/RayseenSystemToProduct";
import { RayseenSemanticColorSystem } from "@/components/work/RayseenSemanticColorSystem";
import styles from "./page.module.css";

const problems = [
  {
    title: "Fragmentation",
    description:
      "Products had evolved independently, each developing its own structures, conventions, and interaction language.",
  },
  {
    title: "Inconsistency",
    description:
      "Similar actions behaved differently across products, making the experience harder to learn and predict.",
  },
  {
    title: "Repetition",
    description:
      "Teams repeatedly solved the same design problems, creating duplicate solutions instead of reusable patterns.",
  },
  {
    title: "Scaling Complexity",
    description:
      "As the ecosystem grew, maintaining consistency across products became increasingly difficult.",
  },
] as const;

export const metadata: Metadata = {
  title: "RAYSEEN Design System",
  description:
    "The design system behind a unified experience across Rayvarz ERP products.",
  alternates: { canonical: "/work/rayvarz/design-system" },
  openGraph: {
    title: "RAYSEEN Design System — Mohsen Hasanpour",
    description:
      "The design system behind a unified experience across Rayvarz ERP products.",
  },
};

export default function RayseenDesignSystemPage() {
  return (
    <main className={`page ${styles.page}`}>
      <article className={styles.caseStudy}>
        <Link className={styles.backLink} href="/work/rayvarz">
          <span aria-hidden="true">←</span> Back to Rayvarz Case Study
        </Link>

        <header className={styles.hero}>
          <p className={styles.eyebrow}>RAYSEEN Design System</p>
          <h1>A shared product language for a complex ERP ecosystem.</h1>
          <p className={styles.metadata}>
            11 Products <span aria-hidden="true">·</span> 500+ Features{" "}
            <span aria-hidden="true">·</span> Light &amp; Dark{" "}
            <span aria-hidden="true">·</span> Web ERP
          </p>
        </header>

        <div className={styles.heroVisual} aria-label="Future RAYSEEN design system visual" role="img">
          <span>Hero visual in progress</span>
        </div>

        <section className={styles.whySystem} aria-labelledby="why-system-title">
          <header className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Why a system?</p>
            <h2 id="why-system-title">
              Complexity was growing faster than consistency.
            </h2>
            <p>
              As Rayvarz products evolved independently, the experience became
              increasingly fragmented. Similar problems were being solved in
              different ways, making the ecosystem harder to learn, maintain,
              and scale.
            </p>
          </header>

          <div className={styles.problemGrid}>
            {problems.map(({ title, description }, index) => (
              <article className={styles.problemCard} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <RayseenSystemArchitecture />
        <RayseenLayoutSystem />
        <RayseenInteractionPatterns />
        <RayseenPatternIndex />
        <RayseenSystemToProduct />
        <RayseenSemanticColorSystem />
        <RayseenImpact />
      </article>
    </main>
  );
}
