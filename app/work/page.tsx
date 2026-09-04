import type { Metadata } from "next";
import { WorkArchive } from "@/components/work/WorkArchive";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product, digital, and brand work by Mohsen Hasanpour.",
};

export default function WorkPage() {
  return <main className="page"><header className={styles.workHero}><span className="eyebrow">Selected work / 2023—2026</span><h1>Built Around the <em>Problem,</em> Not the Portfolio.</h1><p>Each project is a story of inquiry, sharp decisions, and the small details that turn an idea into a meaningful outcome.</p></header><WorkArchive /></main>;
}
