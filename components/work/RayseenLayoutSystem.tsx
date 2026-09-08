import Image from "next/image";
import styles from "./RayseenLayoutSystem.module.css";

const layouts = [
  {
    title: "Table",
    description: "For dense data views, lists, filtering, and repeated actions.",
    icon: "/images/rayvarz/rayseen/layout-table-icon-placeholder.svg",
    alt: "Temporary placeholder for the Table layout icon.",
  },
  {
    title: "Single Entity",
    description:
      "For focused views centered around one record or business object.",
    icon: "/images/rayvarz/rayseen/layout-single-entity-icon-placeholder.svg",
    alt: "Temporary placeholder for the Single Entity layout icon.",
  },
  {
    title: "MasterDetail",
    description: "For navigating related entities without losing context.",
    icon: "/images/rayvarz/rayseen/layout-master-detail-icon-placeholder.svg",
    alt: "Temporary placeholder for the MasterDetail layout icon.",
  },
  {
    title: "Modal",
    description:
      "For contained tasks that should not interrupt the main workflow.",
    icon: "/images/rayvarz/rayseen/layout-modal-icon-placeholder.svg",
    alt: "Temporary placeholder for the Modal layout icon.",
  },
  {
    title: "Operation",
    description:
      "For guided, action-oriented processes and transactional flows.",
    icon: "/images/rayvarz/rayseen/layout-operation-icon-placeholder.svg",
    alt: "Temporary placeholder for the Operation layout icon.",
  },
  {
    title: "SimpleForm",
    description:
      "For lightweight data entry with minimal structural complexity.",
    icon: "/images/rayvarz/rayseen/layout-simple-form-icon-placeholder.svg",
    alt: "Temporary placeholder for the SimpleForm layout icon.",
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
              height={48}
              src={icon}
              unoptimized
              width={48}
            />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
