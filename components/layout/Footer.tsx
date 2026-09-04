import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div>
        <Link className="brand" href="/">
          {site.initials}
          <span>®</span>
        </Link>
        <p>
          Independent design practice
          <br />
          for ambitious ideas.
        </p>
      </div>
      <div className={styles.footerLinks}>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        {site.socialLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <p className={styles.copyright}>© {new Date().getFullYear()} Mohsen Hasanpour</p>
    </footer>
  );
}
