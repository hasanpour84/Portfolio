"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./RayseenSystemToProduct.module.css";

const annotations = [
  {
    id: "layout",
    label: "Layout",
    description:
      "One of the core page structures used throughout the ecosystem.",
    x: "14%",
    y: "28%",
  },
  {
    id: "navigation",
    label: "Navigation",
    description: "Shared navigation patterns keep product movement familiar.",
    x: "31%",
    y: "14%",
  },
  {
    id: "filtering-pattern",
    label: "Filtering pattern",
    description: "Shared filtering behavior used across RAYSEEN products.",
    x: "70%",
    y: "25%",
  },
  {
    id: "table",
    label: "Table",
    description: "A consistent way to scan, compare, and act on dense data.",
    x: "52%",
    y: "58%",
  },
  {
    id: "components",
    label: "Components",
    description: "Reusable building blocks create continuity across screens.",
    x: "19%",
    y: "76%",
  },
  {
    id: "actions-toolbar",
    label: "Actions / Toolbar",
    description: "Predictable actions support efficient, repeatable workflows.",
    x: "78%",
    y: "13%",
  },
] as const;

export function RayseenSystemToProduct() {
  const [layersVisible, setLayersVisible] = useState(false);
  const [activeAnnotation, setActiveAnnotation] = useState<string | null>(null);
  const activeDetail = annotations.find(
    (annotation) => annotation.id === activeAnnotation
  );

  const toggleLayers = () => {
    setLayersVisible((visible) => !visible);
    setActiveAnnotation(null);
  };

  return (
    <section className={styles.systemToProduct} aria-labelledby="system-to-product-title">
      <div className={styles.content}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>From system to product</p>
          <h2 id="system-to-product-title">
            This is where it all comes together.
          </h2>
          <p>
            Foundations, components, layouts, and interaction patterns come
            together to create a consistent product experience.
          </p>
        </header>

        <div className={styles.context} aria-label="System layers in the product">
          Foundations <span aria-hidden="true">·</span> Components{" "}
          <span aria-hidden="true">·</span> Layouts <span aria-hidden="true">·</span>{" "}
          Patterns
        </div>

        <div className={styles.controls}>
          <button
            aria-pressed={layersVisible}
            className={styles.revealButton}
            onClick={toggleLayers}
            type="button"
          >
            {layersVisible ? "Hide system layers" : "Reveal system layers"}
          </button>
        </div>

        <div className={styles.productFrame}>
          <Image
            alt="Temporary placeholder for the RAYSEEN product screenshot."
            className={styles.productScreenshot}
            height={1000}
            src="/images/rayvarz/rayseen/system-to-product-placeholder.svg"
            unoptimized
            width={1600}
          />

          <div
            aria-hidden={!layersVisible}
            className={styles.annotations}
            data-visible={layersVisible}
          >
            {annotations.map((annotation) => {
              const isActive = annotation.id === activeAnnotation;
              const detailId = `${annotation.id}-detail`;

              return (
                <button
                  aria-describedby={isActive ? detailId : undefined}
                  aria-label={`${annotation.label}: ${annotation.description}`}
                  className={styles.marker}
                  key={annotation.id}
                  onClick={() => setActiveAnnotation(annotation.id)}
                  onFocus={() => setActiveAnnotation(annotation.id)}
                  onMouseEnter={() => setActiveAnnotation(annotation.id)}
                  style={{ left: annotation.x, top: annotation.y }}
                  tabIndex={layersVisible ? 0 : -1}
                  type="button"
                >
                  <span className={styles.markerDot} />
                  {isActive && (
                    <span className={styles.markerDetail} id={detailId}>
                      <strong>{annotation.label}</strong>
                      <span>{annotation.description}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {layersVisible && activeDetail && (
          <div className={styles.mobileDetail} aria-live="polite">
            <strong>{activeDetail.label}</strong>
            <p>{activeDetail.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
