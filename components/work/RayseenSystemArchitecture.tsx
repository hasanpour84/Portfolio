"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./RayseenSystemArchitecture.module.css";

const systemLayers = [
  {
    number: "01",
    title: "Foundations",
    description:
      "Core rules that define the visual and structural language of the system.",
    image: "/images/rayvarz/rayseen/rayseen_foundation.jpg",
    alt: "RAYSEEN design-system foundations.",
  },
  {
    number: "02",
    title: "Components",
    description:
      "Reusable interface building blocks created from shared foundations.",
    image: "/images/rayvarz/rayseen/rayseen_component.jpg",
    alt: "RAYSEEN design-system components.",
  },
  {
    number: "03",
    title: "Layouts",
    description:
      "Structured page frameworks that organize complex product information.",
    image: "/images/rayvarz/rayseen/rayseen_layout.jpg",
    alt: "RAYSEEN design-system layouts.",
  },
  {
    number: "04",
    title: "Patterns",
    description:
      "Reusable interaction solutions for recurring user needs and workflows.",
    image: "/images/rayvarz/rayseen/rayseen_pattern.jpg",
    alt: "RAYSEEN design-system patterns.",
  },
  {
    number: "05",
    title: "Experiences",
    description:
      "Real product experiences created by combining every layer of the system.",
    image: "/images/rayvarz/rayseen/rayseen_experience.jpg",
    alt: "RAYSEEN product experiences built from the design system.",
  },
] as const;

export function RayseenSystemArchitecture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLayer = systemLayers[activeIndex];

  return (
    <section className={styles.architecture} aria-labelledby="architecture-title">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>System architecture</p>
        <h2 id="architecture-title">
          A layered system, from foundation to experience.
        </h2>
        <p>
          RAYSEEN is structured as a layered system where each layer builds on
          the previous one — from foundational rules to real product
          experiences.
        </p>
      </header>

      <div className={styles.content}>
        <div className={styles.layerList} aria-label="RAYSEEN system layers">
          {systemLayers.map((layer, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                aria-controls="architecture-visual"
                aria-pressed={isActive}
                className={styles.layerCard}
                key={layer.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span>{layer.number}</span>
                <strong>{layer.title}</strong>
                <small>{layer.description}</small>
              </button>
            );
          })}
        </div>

        <div
          aria-atomic="true"
          aria-live="polite"
          className={styles.visual}
          id="architecture-visual"
        >
          <Image
            alt={activeLayer.alt}
            className={styles.visualImage}
            fill
            key={activeLayer.image}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 62vw, 65vw"
            src={activeLayer.image}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
