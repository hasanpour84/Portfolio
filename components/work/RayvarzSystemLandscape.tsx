import Image from "next/image";
import styles from "./RayvarzSystemLandscape.module.css";

type System = {
  name: string;
  image: string;
  emphasis:
    | "finance"
    | "payroll"
    | "humanResources"
    | "warehouse"
    | "sales"
    | "treasury"
    | "assets"
    | "shareholders"
    | "reporting"
    | "access";
};

const systems: readonly System[] = [
  {
    name: "Finance",
    image: "/images/rayvarz/systems/mosaic_finance.jpg",
    emphasis: "finance",
  },
  {
    name: "Payroll",
    image: "/images/rayvarz/systems/mosaic_payroll.jpg",
    emphasis: "payroll",
  },
  {
    name: "Human Resources",
    image: "/images/rayvarz/systems/mosaic_hr.jpg",
    emphasis: "humanResources",
  },
  {
    name: "Warehouse",
    image: "/images/rayvarz/systems/mosaic_warehouse.jpg",
    emphasis: "warehouse",
  },
  {
    name: "Sales",
    image: "/images/rayvarz/systems/mosaic_sale.jpg",
    emphasis: "sales",
  },
  {
    name: "Cash & Treasury",
    image: "/images/rayvarz/systems/mosaic_cash.jpg",
    emphasis: "treasury",
  },
  {
    name: "Fixed Assets",
    image: "/images/rayvarz/systems/mosaic_asset.jpg",
    emphasis: "assets",
  },
  {
    name: "Shareholders",
    image: "/images/rayvarz/systems/mosaic_shareholder.jpg",
    emphasis: "shareholders",
  },
  {
    name: "Reporting",
    image: "/images/rayvarz/systems/mosaic_report.jpg",
    emphasis: "reporting",
  },
  {
    name: "Credit",
    image: "/images/rayvarz/systems/mosaic_credit.jpg",
    emphasis: "access",
  },
] as const;

export function RayvarzSystemLandscape() {
  return (
    <section className={styles.section} aria-label="Selected Rayvarz enterprise systems">
      <div className={styles.landscape} aria-label="Selected Rayvarz enterprise systems">
        <p className={styles.landscapeLabel}>Selected system landscape</p>
        <ul className={styles.systems}>
          {systems.map(({ name, image, emphasis }) => (
            <li className={`${styles.system} ${styles[emphasis]}`} key={name}>
              <Image
                alt=""
                className={styles.image}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw"
                src={image}
              />
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
