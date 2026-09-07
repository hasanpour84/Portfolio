import Image from "next/image";
import { roleCover, roles } from "./RayvarzCaseStudy.data";
import styles from "./RayvarzCaseStudy.module.css";

function RoleIcon({ type }: { type: (typeof roles)[number][0] }) {
  const paths = { strategy: <><circle cx="12" cy="12" r="7" /><path d="m12 8 2.5 4.5L12 16l-2.5-3.5L12 8Z" /></>, system: <><rect x="5" y="5" width="5" height="5" /><rect x="14" y="5" width="5" height="5" /><rect x="5" y="14" width="5" height="5" /><rect x="14" y="14" width="5" height="5" /></>, journey: <><path d="M5 7h8a3 3 0 1 1 0 6h-2a3 3 0 1 0 0 6h8" /><path d="m16 5 3 2-3 2M16 17l3 2-3 2" /></>, research: <><circle cx="10" cy="10" r="5" /><path d="m14 14 5 5M8 10h4M10 8v4" /></> };
  return <svg className={styles.roleIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[type]}</svg>;
}

export function RayvarzRole() {
  return <section className={styles.rayvarzRole} aria-labelledby="role-title"><div className={styles.rayvarzRoleVisual}><Image src={roleCover} alt="Rayvarz product design work" fill sizes="50vw" /><span>Rayvarz / Product design</span></div><div className={styles.rayvarzRoleContent}><span>My role</span><h2 id="role-title">Leading the Experience From Strategy to System.</h2><ul className={styles.roleList}>{roles.map(([icon, role]) => <li key={role}><RoleIcon type={icon} /><div>{role}</div></li>)}</ul></div></section>;
}
