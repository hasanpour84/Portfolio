import Image from "next/image";
import { systems } from "./RayvarzCaseStudy.data";
import styles from "./RayvarzCaseStudy.module.css";

function SystemIcon({ name }: { name: (typeof systems)[number][0] }) {
  const icons = { Accounting: <><path d="M5 5h14v14H5z" /><path d="M8 9h8M8 13h3M8 16h8M15 12v4" /></>, Credit: <><rect x="4" y="7" width="16" height="11" rx="1" /><path d="M4 11h16M8 15h3" /></>, Sale: <><path d="M4 8h16l-2 11H6L4 8Z" /><path d="M8 8V5h8v3M9 12h6M12 10v4" /></>, Inventory: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>, Cash: <><rect x="3" y="6" width="18" height="12" rx="1" /><circle cx="12" cy="12" r="3" /><path d="M6 9h.01M18 15h.01" /></>, Asset: <><path d="M5 20V8l7-4 7 4v12M3 20h18M9 20v-5h6v5M8 10h.01M16 10h.01" /></>, Payroll: <><circle cx="12" cy="8" r="3" /><path d="M5 20v-2a7 7 0 0 1 14 0v2M16 6h4v5M18 4v2" /></>, "Human Resource": <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M15 16a5 5 0 0 1 6 4" /></>, "Report Generator": <><path d="M6 3h9l4 4v14H6V3Z" /><path d="M15 3v5h4M9 12h6M9 16h6" /></>, Shareholder: <><circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M3 20v-1a5 5 0 0 1 10 0v1M11 20v-1a5 5 0 0 1 10 0v1" /></> };
  return <svg className={styles.systemTileIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">{icons[name]}</svg>;
}

export function RayvarzSystemsLibrary() {
  return <section className={styles.systemsLibrary} aria-labelledby="library-title"><header className={styles.systemsLibraryHeader}><h2 id="library-title">System<br />Library</h2><p>Ten connected systems, each with its own purpose and context—brought together through a shared experience and design language.</p></header><div className={styles.systemsLibraryGrid}>{systems.map(([name, transliteration, image]) => <article className={styles.systemTile} key={name}><figure className={styles.systemTileImage}><Image src={image} alt={`${name} system interface`} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 20vw" /></figure><div className={styles.systemTileContent}><SystemIcon name={name} /><div><h3>{name}</h3><p>{transliteration}</p></div></div></article>)}</div></section>;
}
