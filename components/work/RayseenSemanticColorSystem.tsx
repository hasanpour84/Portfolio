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
  { role: "input-standard-title", source: "Gray 200", color: "#878787" },
  { role: "button-primary-standard-text", source: "Gray 0", color: "#ffffff" },
  { role: "text-gray A", source: "Gray 300", color: "#545454" },
  { role: "shell-header-background", source: "Violet 300", color: "#5a2bbe" },
  { role: "input-standard-value A", source: "Gray 300", color: "#545454" },
  { role: "button-primary-standard-icon", source: "Gray 0", color: "#ffffff" },
  { role: "text-gray B", source: "Gray 100", color: "#bababa" },
  { role: "shell-header-text A", source: "Gray 0", color: "#ffffff" },
  { role: "button-danger-hover-icon", source: "Red 400", color: "#bf3830" },
  { role: "button-primary-standard-border", source: "Green 300", color: "#45b653" },
  { role: "text-primary", source: "Gray 400", color: "#14ae5c" },
  { role: "shell-header-text B", source: "Yellow 300", color: "#efac1f" },
  { role: "input-standard-background", source: "Gray 0", color: "#ffffff" },
  { role: "button-primary-standard-background", source: "Green 300", color: "#45b653" },
  { role: "text-secondary", source: "Violet 300", color: "#5a2bbe" },
  { role: "input-standard-value B", source: "Sky Blue 300", color: "#1498f8" },
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
          consistent and scalable across products while enabling high-quality
          Light and Dark theme implementation.
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
