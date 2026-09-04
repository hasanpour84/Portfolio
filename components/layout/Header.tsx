import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.siteHeader}>
      <Link className="brand" href="/" aria-label={`${site.name} home`}>
        {site.initials}
        <span>®</span>
      </Link>
      <nav aria-label="Main navigation">
        {site.navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
