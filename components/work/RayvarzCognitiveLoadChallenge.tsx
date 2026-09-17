import Image from "next/image";
import type { ReactNode } from "react";
import { SupportingCopy } from "./SupportingCopy";
import styles from "./RayvarzCognitiveLoadChallenge.module.css";

type SupportingExample = {
  system: string;
  title: string;
  description: ReactNode[];
  image: string;
};

const supportingExamples: SupportingExample[] = [
  {
    system: "Reporting",
    title: "Filter in Gozareshsaz",
    description: [
      <>The report filter was one of the most complex forms in the entire system, combining multiple concepts, dependencies, and configuration options. Redesigning it required extensive exploration to make these relationships understandable without removing its advanced capabilities.</>,
      <>I reorganized the form into a <strong>top-to-bottom flow</strong>, giving users a clear direction to follow. The configuration was divided into two related sections connected through an explicit intermediate relationship, while <strong>progressive disclosure</strong> reveals options according to the user&apos;s previous choices.</>,
      <>I also placed the applied filters alongside the form, so users can immediately see the resulting filter structure as they add or modify conditions—reducing the need to mentally track how individual choices contribute to the final configuration.</>,
    ],
    image: "/images/rayvarz/systems/cognitive_filter gozaresh_v1.jpg",
  },
  {
    system: "Finance",
    title: "Lock in Sanad Mali",
    description: [
      <>This form contains six interdependent values: some are entered manually while others are calculated automatically. The complexity comes from its <strong>dynamic behavior</strong>—users can decide which values they want to provide and which ones the system should calculate.</>,
      <>I introduced a <strong>lock interaction</strong> that makes this relationship explicit. Users lock the values they want the system to calculate and enter the remaining values themselves. The visual state of each field immediately communicates what is user-controlled and what is system-calculated.</>,
      <>This turned an invisible calculation logic into a visible interaction, reducing the mental effort required to understand and control the form.</>,
    ],
    image: "/images/rayvarz/systems/cognitive_sanad mali_v1.jpg",
  },
  {
    system: "Shareholders",
    title: "Summary in Afzayesh Sarmayeh",
    description: [
      <>A capital increase involves multiple steps and decisions, making it difficult for users to mentally keep track of everything they have configured before committing to the operation.</>,
      <>I added a <strong>summary step at the end of the wizard</strong> that brings the key information and choices from previous steps into one place. Users can review the final state, verify their inputs, and only then confirm the operation.</>,
      <>This provides a clear checkpoint before a consequential action, reducing the need to remember previous inputs and helping users confirm exactly what is about to happen.</>,
    ],
    image: "/images/rayvarz/systems/cognitive_afzayesh sarmaye_v1.jpg",
  },
];

export function RayvarzCognitiveLoadChallenge() {
  return (
    <article className={styles.challenge} aria-labelledby="cognitive-load-challenge-title">
      <header className={styles.header}>
        <p className={styles.index}>Challenge 03</p>
        <h3 id="cognitive-load-challenge-title">Reducing Cognitive Load &amp; Preventing Errors</h3>
        <p>Complex workflows often relied on users remembering dependencies, prerequisites, and business rules. I moved more of that knowledge into the product so the system could guide users and prevent mistakes earlier.</p>
      </header>

      <section className={styles.mainExample} aria-labelledby="year-closing-title">
        <figure className={styles.screenshot}>
          <Image src="/images/rayvarz/systems/cognitive_control_v1.jpg" alt="Financial Year Closing control checks" fill priority sizes="(max-width: 1400px) 100vw, 1400px" />
        </figure>
        <div className={styles.heroDescription}>
          <p className={styles.system}>Finance</p>
          <h4 id="year-closing-title">Financial Year Closing</h4>
          <p>creating a new pattern</p>
        </div>
        <details className={styles.exploration}>
          <summary><span className={styles.explorationIcon} aria-hidden="true" />Explore the redesign</summary>
          <div className={styles.detailContent}>
              <section>
                <p className={styles.label}>Challenge</p>
                <p>
                  Closing a financial year is a sensitive operation that
                  requires many conditions to be checked beforehand. Users had
                  to know what to verify, remember numerous requirements, and
                  make sure nothing was overlooked.
                </p>
                <p>
                  The previous generation relied heavily on users&apos; knowledge
                  and caution—even requiring up to <strong>four confirmation
                  steps</strong> to reduce the risk of performing the operation
                  incorrectly. The system asked users to confirm their
                  decision, but did little to help them determine whether
                  everything was actually ready.
                </p>
              </section>
              <section>
                <p className={styles.label}>Solution</p>
                <p>
                  I introduced a new concept to the system: the{' '}
                  <strong>Control Pattern</strong>.
                </p>
                <p>
                  Instead of expecting users to remember every prerequisite,
                  the system provides a dedicated panel containing the checks
                  required before closing the financial year. Users can trigger
                  these controls directly, and the system verifies the relevant
                  conditions and clearly identifies any issues that need
                  attention.
                </p>
                <p>
                  Once the required controls pass successfully, the system
                  confirms that the financial year is ready to be closed.
                </p>
              </section>
              <section>
                <p className={styles.label}>Impact</p>
                <p>
                  The responsibility for remembering and validating complex
                  prerequisites shifted from the <strong>user to the system</strong>.
                </p>
                <p>
                  Instead of relying on repeated confirmations, users now
                  receive meaningful validation based on actual system
                  conditions. This reduces cognitive load, makes problems
                  visible before a critical operation, and gives users clearer
                  confidence about when they can safely proceed.
                </p>
            </section>
          </div>
        </details>
      </section>

      <section className={styles.supportingExamples} aria-labelledby="cognitive-supporting-examples-title">
        <p>Supporting examples</p>
        <h4 id="cognitive-supporting-examples-title">More knowledge embedded in the product.</h4>
        <div>
          {supportingExamples.map(({ system, title, description, image }) => (
            <article key={title}>
              <div className={styles.exampleImage}><Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
              <p className={styles.system}>{system}</p>
              <h5>{title}</h5>
              <SupportingCopy className={styles.supportingCopy}>{description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</SupportingCopy>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
