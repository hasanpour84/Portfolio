import Image from "next/image";
import Link from "next/link";
import type { FeaturedProject } from "@/content/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: FeaturedProject;
  number: number;
  showNumber?: boolean;
};

export function ProjectCard({ project, number, showNumber = true }: ProjectCardProps) {
  const card = <>
    <div className={styles.projectImage}>
      <Image
        src={project.cover}
        alt={project.alt}
        fill
        sizes="(max-width: 700px) 100vw, 50vw"
        priority={number === 1}
      />
      {showNumber && <span className={styles.projectNo}>{String(number).padStart(2, "0")}</span>}
    </div>
    <div className={styles.projectMeta}>
      <h3>{project.title}</h3>
      <p>{project.category} / {project.year}</p>
    </div>
  </>;

  if (!project.isPublished) {
    return <article className={`${styles.projectCard} ${styles.pending} project-card`} aria-label={`${project.title} case study coming soon`}>{card}</article>;
  }

  return (
    <Link className={`${styles.projectCard} project-card`} href={`/work/${project.slug}`}>{card}</Link>
  );
}
