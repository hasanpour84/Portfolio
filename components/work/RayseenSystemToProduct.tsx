"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./RayseenSystemToProduct.module.css";

const annotations = [
  {
    id: "expansion-panel",
    label: "Expansion Panel",
    description:
      "Progressive disclosure keeps related information available without overwhelming the page.",
    x: "97%",
    y: "17.5%",
    side: "left",
  },
  {
    id: "crud-buttons",
    label: "CRUD Buttons",
    description:
      "Consistent actions make creating, editing, duplicating, and deleting feel predictable.",
    x: "92.5%",
    y: "33%",
    side: "left",
  },
  {
    id: "lookup",
    label: "Lookup",
    description:
      "Reusable lookup controls connect users to the right records quickly.",
    x: "5.5%",
    y: "25.5%",
    side: "right",
  },
  {
    id: "master-detail-layout",
    label: "MasterDetail Layout",
    description:
      "A connected master and detail view supports focused work without losing context.",
    x: "28.5%",
    y: "84%",
    side: "right",
  },
  {
    id: "global-header",
    label: "Global Header",
    description:
      "A shared header keeps navigation, utilities, and system context consistent.",
    x: "40%",
    y: "8%",
    side: "right",
  },
  {
    id: "data-card",
    label: "Data Card",
    description:
      "A concise summary surfaces important totals and status at the point of decision.",
    x: "42%",
    y: "93%",
    side: "right",
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
            data-visible={layersVisible}
            onClick={toggleLayers}
            type="button"
          >
            <span className={styles.revealButtonLabel}>System layers</span>
            <span className={styles.revealSwitch} aria-hidden="true">
              <span className={styles.revealSwitchThumb} />
            </span>
            <span className={styles.revealButtonState}>
              {layersVisible ? "On" : "Off"}
            </span>
          </button>
        </div>

        <div className={styles.productFrame}>
          <Image
            alt="RAYSEEN product interface showing the design system in use."
            className={styles.productScreenshot}
            height={1500}
            src="/images/rayvarz/rayseen/System2Product.jpg"
            width={2400}
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
                  data-side={annotation.side}
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
