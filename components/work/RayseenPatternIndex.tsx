import Image from "next/image";
import styles from "./RayseenPatternIndex.module.css";

const patterns = [
  {
    title: "Search",
    subtitle: "Find information quickly",
    icon: "/images/rayvarz/rayseen/pattern-search-icon-placeholder.svg",
  },
  {
    title: "Data Tables",
    subtitle: "Review dense records",
    icon: "/images/rayvarz/rayseen/pattern-data-tables-icon-placeholder.svg",
  },
  {
    title: "Forms",
    subtitle: "Capture information clearly",
    icon: "/images/rayvarz/rayseen/pattern-forms-icon-placeholder.svg",
  },
  {
    title: "Navigation",
    subtitle: "Move through workflows",
    icon: "/images/rayvarz/rayseen/pattern-navigation-icon-placeholder.svg",
  },
  {
    title: "Status",
    subtitle: "Make system state visible",
    icon: "/images/rayvarz/rayseen/pattern-status-icon-placeholder.svg",
  },
  {
    title: "Bulk Actions",
    subtitle: "Act on multiple records",
    icon: "/images/rayvarz/rayseen/pattern-bulk-actions-icon-placeholder.svg",
  },
] as const;

export function RayseenPatternIndex() {
  return (
    <section className={styles.patternIndex} aria-label="Sample shared patterns">
      {patterns.map(({ title, subtitle, icon }) => (
        <article className={styles.patternItem} key={title}>
          <Image
            alt=""
            className={styles.icon}
            height={36}
            src={icon}
            unoptimized
            width={36}
          />
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </article>
      ))}
    </section>
  );
}
