import styles from "./RayseenPatternIndex.module.css";

const patterns = [
  {
    title: "Search",
    subtitle: "Find information quickly",
    icon: "search",
  },
  {
    title: "Data Tables",
    subtitle: "Review dense records",
    icon: "data-tables",
  },
  {
    title: "Forms",
    subtitle: "Capture information clearly",
    icon: "forms",
  },
  {
    title: "Navigation",
    subtitle: "Move through workflows",
    icon: "navigation",
  },
  {
    title: "Status",
    subtitle: "Make system state visible",
    icon: "status",
  },
  {
    title: "Bulk Actions",
    subtitle: "Act on multiple records",
    icon: "bulk-actions",
  },
] as const;

function PatternIcon({ type }: { type: (typeof patterns)[number]["icon"] }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="5.5" /><path d="m15 15 4.5 4.5" /></>,
    "data-tables": <><rect x="4" y="5" width="16" height="14" rx="1" /><path d="M4 10h16M9 5v14M15 5v14" /></>,
    forms: <><rect x="6" y="4" width="12" height="16" rx="1" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
    navigation: <><circle cx="5" cy="6" r="1.5" /><circle cx="19" cy="18" r="1.5" /><path d="M6.5 6h4a3 3 0 0 1 3 3v3a3 3 0 0 0 3 3h1.5" /><path d="m16 13.5 3 1.5-3 1.5" /></>,
    status: <><circle cx="12" cy="12" r="7" /><path d="m8.5 12 2.3 2.3 4.7-4.7" /></>,
    "bulk-actions": <><rect x="4" y="5" width="5" height="5" rx=".5" /><rect x="4" y="14" width="5" height="5" rx=".5" /><path d="M12 7.5h8M12 16.5h8" /><path d="m17 4 3 3.5-3 3.5" /></>,
  } as const;

  return <svg aria-hidden="true" className={styles.icon} fill="none" focusable="false" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">{paths[type]}</svg>;
}

export function RayseenPatternIndex() {
  return (
    <section className={styles.patternIndex} aria-label="Sample shared patterns">
      {patterns.map(({ title, subtitle, icon }) => (
        <article className={styles.patternItem} key={title}>
          <PatternIcon type={icon} />
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </article>
      ))}
    </section>
  );
}
