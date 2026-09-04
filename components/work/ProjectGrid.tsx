import type { FeaturedProject } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: FeaturedProject[];
  showNumbers?: boolean;
};

export function ProjectGrid({ projects, showNumbers = true }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} number={index + 1} showNumber={showNumbers} />
      ))}
    </div>
  );
}
