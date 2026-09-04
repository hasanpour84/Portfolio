"use client";

import { useState } from "react";
import { featuredProjects } from "@/content/projects";
import { ProjectGrid } from "./ProjectGrid";

const filters = ["All work", ...new Set(featuredProjects.map((project) => project.category))];

export function WorkArchive() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const visibleProjects = activeFilter === "All work" ? featuredProjects : featuredProjects.filter((project) => project.category === activeFilter);

  return <>
    <div className="filters" role="group" aria-label="Filter case studies">
      {filters.map((filter) => <button className={`filter${activeFilter === filter ? " active" : ""}`} key={filter} type="button" onClick={() => setActiveFilter(filter)}>{filter}</button>)}
    </div>
    <ProjectGrid projects={visibleProjects} />
  </>;
}
