import Image from "next/image";
import styles from "./RayseenLayoutSystem.module.css";

const layouts = [
  {
    title: "Table",
    description: "For dense data views, lists, filtering, and repeated actions.",
    icon: "/images/rayvarz/rayseen/Layout_Table.png",
    alt: "Table layout example.",
  },
  {
    title: "Single Entity",
    description:
      "For focused views centered around a master-data record or business object.",
    icon: "/images/rayvarz/rayseen/Layout_SingleEntity.png",
    alt: "Single Entity layout example.",
  },
  {
    title: "MasterDetail",
    description: "For transactional data, keeping related entities in context.",
    icon: "/images/rayvarz/rayseen/Layout_MasterDetail.png",
    alt: "MasterDetail layout example.",
  },
  {
    title: "Modal",
    description:
      "For contained tasks that should not interrupt the main workflow.",
    icon: "/images/rayvarz/rayseen/Layout_Modal.png",
    alt: "Modal layout example.",
  },
  {
    title: "Operation",
    description:
      "For guided, action-oriented processes and transactional flows.",
    icon: "/images/rayvarz/rayseen/Layout_Operation.png",
    alt: "Operation layout example.",
  },
  {
    title: "SimpleForm",
    description:
      "For lightweight data entry with minimal structural complexity.",
    icon: "/images/rayvarz/rayseen/Layout_SimpleForm.png",
    alt: "SimpleForm layout example.",
  },
] as const;

export function RayseenLayoutSystem() {
  return (
    <section className={styles.layoutSystem} aria-labelledby="layout-system-title">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Layout system</p>
        <div className={styles.statement}>
          <p aria-hidden="true" className={styles.number}>
            &lt; 6
          </p>
          <div>
            <h2 id="layout-system-title">Less than 6 Layouts.</h2>
            <p className={styles.secondary}>One consistent system.</p>
          </div>
        </div>
        <p className={styles.supportingCopy}>
          RAYSEEN deliberately limits page structures to a small set of
          reusable layouts, reducing variation and making complex ERP
          experiences more predictable across products.
        </p>
      </header>

      <div className={styles.layoutGrid}>
        {layouts.map(({ title, description, icon, alt }) => (
          <article className={styles.layoutItem} key={title}>
            <Image
              alt={alt}
              className={styles.layoutIcon}
              height={317}
              src={icon}
              unoptimized
              width={422}
            />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
