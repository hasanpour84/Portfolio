import Image from "next/image";
import { SupportingCopy } from "./SupportingCopy";
import styles from "./RayvarzComplexityChallenge.module.css";

type SupportingExample = { name: string; category: string; description: string; image: string };

const supportingExamples: SupportingExample[] = [
  { name: "Noe Estekhdam", category: "Forms", description: "Grouped related inputs so the next action stayed clear.", image: "/images/rayvarz/systems/NoeEstekhdam_v1.jpg" },
  { name: "Pishfaktor", category: "Analytics", description: "I designed a shared document structure to unify how documents are created and managed across different systems. Instead of each product defining its own form structure and interactions, documents now follow a consistent framework while remaining flexible enough for different workflows and levels of complexity. Within this framework, different patterns are used based on context. For example, large forms can use two variants of Expansion Panels to organize additional information without overwhelming the main workspace. This approach created a more predictable experience across systems while still allowing each document to adapt to its specific requirements.", image: "/images/rayvarz/systems/Pishfaktor_v1.jpg" },
  { name: "Shablon Sanad", category: "Workflow", description: "The original template form had a highly complex structure that exposed too many options and dependencies at once. By deeply understanding the underlying logic and how different inputs affected each other, I was able to simplify the interaction significantly. The complex structure was replaced with a radio-button-driven flow, where input fields dynamically change based on the selected option. This reduced the number of visible fields and decisions at any given moment, turning a complicated form into a much simpler and more focused experience.", image: "/images/rayvarz/systems/Shablon Sanad_v1.jpg" },
  { name: "Majma", category: "Configuration", description: "Simplifying the Majma form required going beyond the interface and rethinking the underlying data model. I separated individual and bulk operations and introduced the concepts of Person Type and Transfer Type, creating a clearer structure for both the data and the user workflow. This solution required challenging existing assumptions and aligning the product management team around changes to the underlying model—not just redesigning the form. The result was a simpler interface built on a more coherent structure.", image: "/images/rayvarz/systems/Majma_v1.jpg" },
];

export function RayvarzComplexityChallenge() {
  return (
    <article className={styles.challenge} aria-labelledby="complexity-challenge-title">
      <header className={styles.header}>
        <p className={styles.index}>Challenge 01</p>
        <h3 id="complexity-challenge-title">Making Complex Interfaces Easier to Use</h3>
        <p className={styles.introduction}>Complex enterprise work needs more than fewer controls—it needs a clearer order, focus, and path through the task.</p>
      </header>

      <section className={styles.heroExample} aria-labelledby="reconciliation-title">
        <div className={styles.comparison}>
          <figure className={styles.before}>
            <figcaption>Before</figcaption>
            <div className={styles.beforeImage}><Image src="/images/rayvarz/systems/Moghyaratgiri_before_v1.jpg" alt="Earlier reconciliation interface" fill sizes="(max-width: 700px) 58vw, 30vw" /></div>
          </figure>
          <figure className={styles.redesigned}>
            <figcaption>Redesigned</figcaption>
            <div className={styles.redesignedImage}><Image src="/images/rayvarz/systems/Moghyaratgiri_after_v1.jpg" alt="Redesigned reconciliation tool interface" fill priority sizes="(max-width: 700px) 86vw, 66vw" /></div>
          </figure>
        </div>

        <div className={styles.heroDescription}><h4 id="reconciliation-title">Moghayeratgiri</h4></div>

        <details className={styles.exploration}>
          <summary><span className={styles.explorationIcon} aria-hidden="true" />Explore the redesign</summary>
          <div className={styles.detailContent}>
            <section>
              <p className={styles.label}>Challenge</p>
              <p>The reconciliation tool had become extremely dense and complex. Users were confronted with a large amount of information, controls, and possible actions at the same time, making it difficult to understand where to start, what to do next, or even what state the system was currently in.</p>
            </section>
            <section>
              <p className={styles.label}>Solution</p>
              <p>I redesigned the experience around the user’s workflow rather than exposing the entire system at once.</p>
              <ul>
                <li><strong>A clear starting point:</strong> The flow now begins with selecting a reconciliation source, giving users a clear entry point before exposing the workspace.</li>
                <li><strong>Contextual information and actions:</strong> Each area shows only the information and controls relevant to the current task.</li>
                <li><strong>Manual vs. automatic workflows:</strong> Manual and automated reconciliation were separated through a switch, preventing two different modes of work from competing for attention.</li>
                <li><strong>User-controlled reconciliation:</strong> In manual mode, users explicitly choose which items they want to reconcile. Colors and checkbox states provide immediate visual feedback, making it clear which items are selected and currently being worked on.</li>
                <li><strong>Progressive complexity:</strong> Secondary information and advanced actions are revealed only when they become relevant instead of being visible from the beginning.</li>
                <li><strong>Clearer visual hierarchy:</strong> Information, actions, and results were reorganized according to their importance in the reconciliation workflow.</li>
              </ul>
            </section>
            <section>
              <p className={styles.label}>Impact</p>
              <p>The redesign transformed reconciliation from a screen users had to interpret before using into a guided workspace with a clear starting point, visible states, and contextual actions.</p>
              <p>Users can focus on the task at hand instead of processing the entire complexity of the system at once, reducing cognitive load while preserving the capabilities required for advanced reconciliation.</p>
            </section>
          </div>
        </details>
      </section>

      <section className={styles.supporting} aria-labelledby="supporting-examples-title">
        <div className={styles.supportingHeader}><h4 id="supporting-examples-title">Supporting Examples</h4></div>
        <div className={styles.examples}>
          {supportingExamples.map((example, index) => <figure className={styles.example} key={example.name}>
            <div className={styles.exampleImage}><Image src={example.image} alt="" fill sizes="(max-width: 700px) 100vw, 45vw" /></div>
            <figcaption><p className={styles.exampleIndex}>0{index + 1} · {example.category}</p><h5>{example.name}</h5><SupportingCopy className={styles.supportingCopy}><p>{example.description}</p></SupportingCopy></figcaption>
          </figure>)}
        </div>
      </section>
    </article>
  );
}
