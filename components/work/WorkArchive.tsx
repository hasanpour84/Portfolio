"use client";

import { useState } from "react";
import { featuredProjects } from "@/content/projects";
import { ProjectGrid } from "./ProjectGrid";
import styles from "./WorkArchive.module.css";

const filters = ["All work", ...new Set(featuredProjects.map((project) => project.category))];

export function WorkArchive() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const visibleProjects = activeFilter === "All work" ? featuredProjects : featuredProjects.filter((project) => project.category === activeFilter);

  return <>
    <div className={styles.filters} role="group" aria-label="Filter case studies">
      {filters.map((filter) => <button className={`${styles.filter}${activeFilter === filter ? ` ${styles.active}` : ""}`} key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
    </div>
    <ProjectGrid projects={visibleProjects} />
  </>;
}
