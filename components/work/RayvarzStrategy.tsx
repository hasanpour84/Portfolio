"use client";

import Image from "next/image";
import { useState } from "react";
import { strategies } from "./RayvarzCaseStudy.data";
import styles from "./RayvarzCaseStudy.module.css";

export function RayvarzStrategy() {
  const [strategy, setStrategy] = useState(0);
  const activeStrategy = strategies[strategy];
  return <section className={styles.rayvarzStrategy} aria-labelledby="strategy-title"><header className={styles.rayvarzStrategyHeader}><h2 id="strategy-title">UX Strategy</h2><p>Five principles gave the work a shared direction—from the first visit through to the more detailed product journeys.</p></header><div className={styles.strategyViewport}><article className={styles.strategyItem} key={strategy}><figure className={styles.strategyItemImage}><Image src={activeStrategy.image} alt={`Rayvarz strategy visual: ${activeStrategy.principle}`} fill sizes="(max-width: 700px) 100vw, 52vw" /></figure><div className={styles.strategyItemContent}><span className={styles.strategyItemNumber}>{String(strategy + 1).padStart(2, "0")} / {activeStrategy.title}</span><h3>{activeStrategy.principle}</h3><p className={styles.strategyItemDescription}>{activeStrategy.description}</p><aside className={styles.strategyItemExample}><span>In practice</span><p>{activeStrategy.example}</p></aside></div></article></div><div className={styles.strategyControls}><div className={styles.strategyTabs} role="tablist" aria-label="UX strategy principles">{strategies.map((item, index) => <button key={item.principle} type="button" role="tab" aria-selected={strategy === index} onClick={() => setStrategy(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.principle}</button>)}</div><div className={styles.strategyButtons}><button className={styles.strategyButton} type="button" onClick={() => setStrategy(strategy - 1)} disabled={strategy === 0} aria-label="Previous UX strategy">‹</button><button className={styles.strategyButton} type="button" onClick={() => setStrategy(strategy + 1)} disabled={strategy === strategies.length - 1} aria-label="Next UX strategy">›</button></div></div></section>;
}
