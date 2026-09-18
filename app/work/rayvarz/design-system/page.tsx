import type { Metadata } from "next";
import Image from "next/image";
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
    icon: "fragmentation",
    title: "Fragmentation",
    description:
      "Products had evolved independently, each developing its own structures, conventions, and interaction language.",
  },
  {
    icon: "inconsistency",
    title: "Inconsistency",
    description:
      "Similar actions behaved differently across products, making the experience harder to learn and predict.",
  },
  {
    icon: "repetition",
    title: "Repetition",
    description:
      "Teams repeatedly solved the same design problems, creating duplicate solutions instead of reusable patterns.",
  },
  {
    icon: "scaling",
    title: "Scaling Complexity",
    description:
      "As the ecosystem grew, maintaining consistency across products became increasingly difficult.",
  },
] as const;

function ProblemIcon({ type }: { type: (typeof problems)[number]["icon"] }) {
  const paths = {
    fragmentation: <><path d="M4 4h6v6H4zM14 14h6v6h-6z" /><path d="M14 4h6v6h-6zM4 14h6v6H4z" opacity=".38" /></>,
    inconsistency: <><path d="M4 7h11M15 4l3 3-3 3M20 17H9M9 14l-3 3 3 3" /></>,
    repetition: <><rect x="8" y="4" width="12" height="12" rx="1" /><path d="M16 16v4H4V8h4" /></>,
    scaling: <><circle cx="12" cy="12" r="2" /><path d="M10 10 5 5M14 10l5-5M10 14l-5 5M14 14l5 5" /></>,
  } as const;

  return <svg aria-hidden="true" className={styles.problemIcon} fill="none" focusable="false" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">{paths[type]}</svg>;
}

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
        <header className={styles.hero}>
          <div className={styles.heroEyebrow}>
            <Link className={styles.backLink} href="/work/rayvarz" aria-label="Back to Rayvarz Case Study">
              <span aria-hidden="true" />
            </Link>
            <p className={styles.eyebrow}>RAYSEEN Design System</p>
          </div>
          <h1>RAYSEEN: A shared product language for a <em>complex</em> ERP ecosystem.</h1>
          <p className={styles.metadata}>
            11 Products <span aria-hidden="true">·</span> 500+ Features{" "}
            <span aria-hidden="true">·</span> Light &amp; Dark{" "}
            <span aria-hidden="true">·</span> Web ERP
          </p>
        </header>

        <div className={styles.heroVisual}>
          <Image
            src="/images/rayvarz/rayseen/Rayseen%20Hero%201.jpg"
            alt="RAYSEEN design system interface"
            width={1727}
            height={911}
            preload
            sizes="100vw"
            unoptimized
          />
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
            {problems.map(({ icon, title, description }) => (
              <article className={styles.problemCard} key={title}>
                <ProblemIcon type={icon} />
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
