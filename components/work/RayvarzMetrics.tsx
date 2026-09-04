"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { metricGroups } from "./RayvarzCaseStudy.data";
import styles from "./RayvarzCaseStudy.module.css";

export function RayvarzMetrics() {
  const [metricView, setMetricView] = useState<"before" | "after">("after");
  return <section className={`${styles.metricsFeature}${metricView === "before" ? ` ${styles.metricsFeatureBefore}` : ""}`} aria-labelledby="metrics-title"><header className={styles.metricsFeatureHeader}><div><h2 id="metrics-title">Metrics</h2><p>Fourteen measures that capture the user experience and the impact of a stronger product design system.</p></div><div className={styles.metricsToggle} role="group" aria-label="Select metric comparison"><span className={styles.metricsToggleIndicator} aria-hidden="true" /><button type="button" onClick={() => setMetricView("before")} aria-pressed={metricView === "before"}>Before</button><button type="button" onClick={() => setMetricView("after")} aria-pressed={metricView === "after"}>After</button></div></header><div className={styles.metricsGroups}>{metricGroups.map(({ title, metrics }) => <section className={styles.metricsGroup} key={title} aria-labelledby={`${title.toLowerCase().replace(/ /g, "-")}-metrics`}><h3 id={`${title.toLowerCase().replace(/ /g, "-")}-metrics`}>{title}</h3><div className={styles.metricsLines}>{metrics.map(([metric, before, after], index) => { const value = metricView === "before" ? before : after; return <div className={styles.metricLine} key={metric}><span className={styles.metricLineNumber}>{String(index + 1).padStart(2, "0")}</span><div className={styles.metricLineContent}><span>{metric}</span><div className={styles.metricLineBar} aria-hidden="true"><i style={{ "--metric-value": `${value}` } as CSSProperties} /></div></div><strong aria-label={`${metric}: ${metricView} value ${value}`}>{value}</strong></div>; })}</div></section>)}</div></section>;
}
