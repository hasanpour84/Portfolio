"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./RayseenInteractionPatterns.module.css";

const filteringContexts = [
  {
    slug: "finance",
    title: "Finance",
    description: "Financial reports and transactional data",
    icon: "/images/rayvarz/rayseen/filtering-finance-icon-placeholder.svg",
    image: "/images/rayvarz/rayseen/filter_finance.jpg",
    alt: "Finance product filtering interface.",
    width: 1600,
    height: 1000,
  },
  {
    slug: "warehouse",
    title: "Warehouse",
    description: "Items, inventory, and stock operations",
    icon: "/images/rayvarz/rayseen/filtering-warehouse-icon-placeholder.svg",
    image: "/images/rayvarz/rayseen/filter_warehouse.jpg",
    alt: "Warehouse product filtering interface.",
    width: 1600,
    height: 1000,
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    description: "Employees and organizational data",
    icon: "/images/rayvarz/rayseen/filtering-human-resources-icon-placeholder.svg",
    image: "/images/rayvarz/rayseen/filter_humanresource.jpg",
    alt: "Human Resources product filtering interface.",
    width: 1600,
    height: 1000,
  },
] as const;

export function RayseenInteractionPatterns() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.patterns} aria-labelledby="patterns-title">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Interaction patterns</p>
        <h2 id="patterns-title">Same behavior. Different contexts.</h2>
        <p>
          Recurring user problems are solved through shared interaction
          patterns, creating predictable experiences across different products
          and workflows.
        </p>
      </header>

      <div className={styles.featuredPattern}>
        <div className={styles.patternSummary}>
          <p>Featured pattern</p>
          <h3>Filtering</h3>
          <p>
            A shared filtering pattern used across different products, with the
            same underlying structure and behavior adapted to each context.
          </p>
        </div>

        <div className={styles.accordion}>
          {filteringContexts.map((context, index) => {
            const isOpen = openIndex === index;
            const panelId = `filtering-${context.slug}-panel`;
            const buttonId = `filtering-${context.slug}-button`;

            return (
              <article
                className={styles.panel}
                data-open={isOpen}
                key={context.slug}
              >
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className={styles.panelButton}
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  type="button"
                >
                  <Image
                    alt=""
                    className={styles.productIcon}
                    height={36}
                    src={context.icon}
                    unoptimized
                    width={36}
                  />
                  <span className={styles.productTitle}>{context.title}</span>
                  <span className={styles.productDescription}>
                    {context.description}
                  </span>
                  <span aria-hidden="true" className={styles.indicator} />
                </button>

                <div
                  aria-hidden={!isOpen}
                  aria-labelledby={buttonId}
                  className={styles.panelContent}
                  id={panelId}
                  role="region"
                >
                  <div className={styles.screenshotFrame}>
                    <Image
                      alt={context.alt}
                      className={styles.screenshot}
                      height={context.height}
                      src={context.image}
                      unoptimized
                      width={context.width}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
