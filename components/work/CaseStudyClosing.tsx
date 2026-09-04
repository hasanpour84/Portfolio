import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";
import { featuredProjects } from "@/content/projects";
import { ProjectGrid } from "./ProjectGrid";

export function CaseStudyClosing({ caseStudy }: { caseStudy: CaseStudy }) {
  const related = featuredProjects.filter((project) => project.slug !== caseStudy.slug).slice(0, 2);
  return <>
    <figure className="full-visual"><Image src={caseStudy.gallery[0]} alt={`Project workshop and design process for ${caseStudy.title}`} fill sizes="100vw" /><figcaption>A working system built for focus, flexibility, and real-world use.</figcaption></figure>
    <section className="case-closing" aria-labelledby="outcome-title"><div className="case-gallery"><figure><Image src={caseStudy.gallery[0]} alt={`Design detail from ${caseStudy.title}`} fill sizes="(max-width: 700px) 100vw, 50vw" /></figure><figure><Image src={caseStudy.gallery[1]} alt={`Team collaborating on ${caseStudy.title}`} fill sizes="(max-width: 700px) 100vw, 50vw" /></figure></div><section className="results"><h2 id="outcome-title">Measured Outcome</h2><div className="result-list">{caseStudy.results.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section></section>
    <section className="section related" aria-labelledby="related-title"><div className="section-head"><span className="eyebrow">Continue exploring</span><Link className="text-link" href="/work">All case studies ↗</Link></div><h2 id="related-title" className="sr-only">More Case Studies</h2><ProjectGrid projects={related} /></section>
  </>;
}
