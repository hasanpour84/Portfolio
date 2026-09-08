import type { CSSProperties } from "react";
import styles from "./RayseenSemanticColorSystem.module.css";

const atomicTokens = [
  { family: "Green", level: "50", color: "#edf8ee" },
  { family: "Green", level: "100", color: "#d5f0d9" },
  { family: "Green", level: "200", color: "#a4e1ae" },
  { family: "Green", level: "500", color: "#45b653" },
  { family: "Green", level: "700", color: "#237534" },
  { family: "Blue", level: "50", color: "#edf3ff" },
  { family: "Blue", level: "100", color: "#dce8fc" },
  { family: "Blue", level: "300", color: "#8cadf0" },
  { family: "Blue", level: "500", color: "#5278c9" },
  { family: "Blue", level: "700", color: "#304d91" },
  { family: "Gray", level: "50", color: "#f7f7f5" },
  { family: "Gray", level: "100", color: "#e9e9e5" },
  { family: "Gray", level: "300", color: "#b8b9b4" },
  { family: "Gray", level: "500", color: "#72746f" },
  { family: "Gray", level: "900", color: "#181112" },
  { family: "Red", level: "500", color: "#c7242f" },
  { family: "Orange", level: "500", color: "#d67b2c" },
  { family: "Yellow", level: "500", color: "#d7ab28" },
  { family: "Purple", level: "500", color: "#7656b5" },
  { family: "Teal", level: "500", color: "#2f978b" },
] as const;

const semanticTokens = [
  { role: "Background / Primary", source: "White", color: "#ffffff" },
  { role: "Background / Surface", source: "Gray / 50", color: "#f7f7f5" },
  { role: "Background / Muted", source: "Gray / 100", color: "#e9e9e5" },
  { role: "Text / Primary", source: "Gray / 900", color: "#181112" },
  { role: "Text / Secondary", source: "Gray / 600", color: "#5e605b" },
  { role: "Text / Inverse", source: "White", color: "#ffffff" },
  { role: "Border / Default", source: "Gray / 200", color: "#d6d7d2" },
  { role: "Border / Subtle", source: "Gray / 100", color: "#e9e9e5" },
  { role: "Action / Primary", source: "Green / 500", color: "#45b653" },
  { role: "Action / Secondary", source: "Blue / 500", color: "#5278c9" },
  { role: "Action / Disabled", source: "Gray / 300", color: "#b8b9b4" },
  { role: "Status / Success", source: "Green / 500", color: "#45b653" },
  { role: "Status / Info", source: "Blue / 500", color: "#5278c9" },
  { role: "Status / Neutral", source: "Gray / 500", color: "#72746f" },
  { role: "Status / Warning", source: "Yellow / 500", color: "#d7ab28" },
  { role: "Status / Error", source: "Red / 500", color: "#c7242f" },
] as const;

export function RayseenSemanticColorSystem() {
  return (
    <section className={styles.colorSystem} aria-labelledby="color-system-title">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Semantic color system</p>
        <h2 id="color-system-title">Color with meaning, not just values.</h2>
        <p>
          RAYSEEN separates raw color values from their functional meaning
          through a two-layer token architecture, making theming more
          consistent and scalable across products.
        </p>
      </header>

      <div className={styles.tokenArchitecture}>
        <section className={styles.tokenGroup} aria-labelledby="atomic-tokens-title">
          <header className={styles.groupHeader}>
            <div>
              <h3 id="atomic-tokens-title">Atomic Tokens</h3>
              <p>Raw color values that form the palette.</p>
            </div>
          </header>
          <div className={styles.atomicGrid}>
            {atomicTokens.map(({ family, level, color }) => (
              <article
                className={styles.atomicToken}
                key={`${family}-${level}`}
                style={{ "--swatch": color } as CSSProperties}
              >
                <span className={styles.atomicSwatch} />
                <span>{family}</span>
                <strong>{level}</strong>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.transition} aria-hidden="true">
          <span>→</span>
          <p>From values to meaning.</p>
        </div>

        <section className={styles.tokenGroup} aria-labelledby="semantic-tokens-title">
          <header className={styles.groupHeader}>
            <div>
              <h3 id="semantic-tokens-title">Semantic Tokens</h3>
              <p>Tokens that describe how color is used.</p>
            </div>
          </header>
          <div className={styles.semanticGrid}>
            {semanticTokens.map(({ role, source, color }) => (
              <article
                className={styles.semanticToken}
                key={role}
                style={{ "--swatch": color } as CSSProperties}
              >
                <span className={styles.semanticSwatch} />
                <div>
                  <h4>{role}</h4>
                  <p>{source}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <p className={styles.closing}>
        Atomic tokens define what a color is. <strong>Semantic tokens define what the color means.</strong>
      </p>
    </section>
  );
}
