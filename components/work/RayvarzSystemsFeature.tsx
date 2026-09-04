import Image from "next/image";
import { systemFeatures } from "./RayvarzCaseStudy.data";
import styles from "./RayvarzCaseStudy.module.css";

export function RayvarzSystemsFeature() {
  return <section className={styles.systemsFeature} aria-labelledby="systems-title"><header className={styles.systemsFeatureHeading}><h2 id="systems-title">Two-Layered<br />Design</h2><p>Two connected bodies of work: creating the shared design foundation and transforming more than ten individual systems into a cohesive product ecosystem.</p></header><div className={styles.systemsCards}>{systemFeatures.map(({ tag, title, text, image }) => <article className={styles.systemCard} key={tag}><Image src={image} alt={`${title.replace("\n", " ")} visual`} fill sizes="50vw" /><div className={styles.systemCardContent}><span className={styles.systemCardTag}>{tag}</span><h3>{title.split("\n").map(line => <span key={line}>{line}<br /></span>)}</h3><p>{text}</p></div></article>)}</div></section>;
}
