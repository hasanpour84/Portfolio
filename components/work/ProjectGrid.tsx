import type { FeaturedProject } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

type ProjectGridProps = {
  projects: FeaturedProject[];
  showNumbers?: boolean;
};

export function ProjectGrid({ projects, showNumbers = true }: ProjectGridProps) {
  return (
    <div className={`${styles.projectGrid} project-grid`}>
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} number={index + 1} showNumber={showNumbers} />
      ))}
    </div>
  );
}
