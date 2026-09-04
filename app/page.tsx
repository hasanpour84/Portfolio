import { ContactBand } from "@/components/home/ContactBand";
import { HomeHero } from "@/components/home/HomeHero";
import { ProjectGrid } from "@/components/work/ProjectGrid";
import { homeFeaturedProjects } from "@/content/projects";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page page--home">
      <HomeHero />

      <section className="section featured-work" aria-labelledby="selected-work-title">
        <div className="section-head">
          <span className="eyebrow">01 / Selected work</span>
          <Link className="text-link" href="/work">
            View all case studies ↗
          </Link>
        </div>
        <h2 id="selected-work-title" className="sr-only">
          Selected Work
        </h2>
        <ProjectGrid projects={homeFeaturedProjects} showNumbers={false} />
      </section>

      <section className="mesh-statement" aria-labelledby="practice-title">
        <div className="mesh-statement__content">
          <span className="eyebrow">02 / Design practice</span>
          <h2 id="practice-title" className="sr-only">Design practice</h2>
          <div className="mesh-card-grid">
            <article className="mesh-card">
              <h3>Complex Products</h3>
              <p>Making complicated systems feel simple.</p>
            </article>
            <article className="mesh-card">
              <h3>Design at Scale</h3>
              <p>Building foundations that grow with the product.</p>
            </article>
            <article className="mesh-card">
              <h3>Product Direction</h3>
              <p>Bringing structure and clarity to ambiguous products.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section statement how-i-work" aria-labelledby="approach-title">
        <span className="eyebrow">03 / How I work</span>
        <h2 id="approach-title">
          Good Work Starts by Getting <em>Uncomfortably Close</em> to the Real
          Problem—Then Making the Answer Feel Inevitable.
        </h2>
      </section>

      <ContactBand />
    </main>
  );
}
