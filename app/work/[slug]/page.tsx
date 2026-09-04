import { caseStudies } from "@/content/caseStudies";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RayvarzCaseStudy } from "@/components/work/RayvarzCaseStudy";
import { RayvarzClosing } from "@/components/work/RayvarzClosing";
import { CaseStudyClosing } from "@/components/work/CaseStudyClosing";
import type { Metadata } from "next";
import styles from "./page.module.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);
  if (!caseStudy) return { title: "Case study not found" };
  return {
    title: `${caseStudy.title} case study`,
    description: caseStudy.overview,
    openGraph: { title: `${caseStudy.title} — Mohsen Hasanpour`, description: caseStudy.overview, images: [{ url: caseStudy.cover, alt: caseStudy.alt }] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const caseStudy = caseStudies.find(
    (caseStudy) => caseStudy.slug === slug
  );

  if (!caseStudy) notFound();

  const isRayvarz = caseStudy.slug === "rayvarz";

  return (
    <main className={`page${isRayvarz ? ` ${styles.rayvarzPage}` : ""}`}>
      <article className="case-study">
        <header className={`case-hero${isRayvarz ? ` ${styles.rayvarzCaseHero}` : ""}`}>
          {!isRayvarz && (
            <div className="case-meta">
              <span>{caseStudy.category}</span>
              <span>{caseStudy.year}</span>
              <span>{caseStudy.role}</span>
            </div>
          )}
          {!isRayvarz && <h1>{caseStudy.title}</h1>}
          {!isRayvarz && <p className="hero-copy">{caseStudy.overview}</p>}
        </header>

        <figure className={`case-cover${isRayvarz ? ` ${styles.rayvarzCaseCover}` : ""}`}>
          <Image src={caseStudy.cover} alt={caseStudy.alt} fill priority sizes="100vw" />
        </figure>

        {isRayvarz && (
          <section className={styles.caseStudyTitleCard} aria-labelledby="case-study-title-card-title">
            <p className={styles.caseStudyTitleCardEyebrow}>Rayvarz / Product design</p>
            <h1 id="case-study-title-card-title">{caseStudy.title}</h1>
            <p className={styles.caseStudyTitleCardSubtitle}>Senior Product Designer</p>
          </section>
        )}

        <div className={`case-intro${isRayvarz ? ` ${styles.rayvarzCaseIntro}` : ""}`}>
          {!isRayvarz && (
            <dl className="case-facts">
              <div>
                <dt>Client</dt>
                <dd>{caseStudy.client}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{caseStudy.role}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{caseStudy.timeline}</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>{caseStudy.tools}</dd>
              </div>
            </dl>
          )}
          <p>
            {isRayvarz ? (
              <>
                RAYVARZ is one of Iran&apos;s leading ERP providers, offering an ecosystem of integrated large-scale enterprise applications across finance, supply chain, human resources, manufacturing, and other business domains. As the <strong>sole Senior Product Designer</strong>, I was responsible for shaping the user experience across new generation of ERP ecosystem developed by multiple independent teams.
              </>
            ) : caseStudy.context}
          </p>
        </div>

        <div className="case-narrative">
          <section>
            <h2>The Challenge</h2>
            <p>{caseStudy.challenge}</p>
          </section>
          <section>
            <h2>Process</h2>
            <p>{caseStudy.process}</p>
          </section>
          <section>
            <h2>Solution</h2>
            <p>{caseStudy.solution}</p>
          </section>
        </div>

        {isRayvarz ? (
          <>
            <RayvarzCaseStudy />
            <RayvarzClosing />
          </>
        ) : (
          <CaseStudyClosing caseStudy={caseStudy} />
        )}
      </article>
    </main>
  );
}
