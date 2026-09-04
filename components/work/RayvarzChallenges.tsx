import Image from "next/image";
import { challenges } from "./RayvarzCaseStudy.data";
import styles from "./RayvarzCaseStudy.module.css";

export function RayvarzChallenges() {
  return <section className={styles.rayvarzChallenges} aria-labelledby="challenges-title"><div className={styles.rayvarzChallengesHeader}><h2 id="challenges-title">Challenges</h2><p>Six connected problems shaped the experience. Each required its own answer, while still feeling like one clear and confident Rayvarz journey.</p></div><div className={styles.challengeCards}>{challenges.map(({ title, description, image }, index) => <article className={styles.challengeCard} key={title}><Image src={image} alt="" fill sizes="(max-width: 700px) 50vw, 33vw" /><span className={styles.challengeCardNumber}>{String(index + 1).padStart(2, "0")}</span><div className={styles.challengeCardContent}><h3>{title}</h3><p>{description}</p></div></article>)}</div></section>;
}
