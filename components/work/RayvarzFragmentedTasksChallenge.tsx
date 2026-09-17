import Image from "next/image";
import type { ReactNode } from "react";
import { SupportingCopy } from "./SupportingCopy";
import styles from "./RayvarzFragmentedTasksChallenge.module.css";

type SupportingExample = {
  system: string;
  title: string;
  description: ReactNode[];
  image: string;
};

const supportingExamples: SupportingExample[] = [
  {
    system: "Payroll",
    title: "Tasviyeh",
    description: [
      <>The settlement process was fragmented across different parts of the system. Users had to complete several separate tasks, perform some calculations outside the product—often in Excel—and then bring everything together manually. The system provided little guidance on what needed to be done or in what order.</>,
      <>I redesigned the process as a <strong>step-by-step wizard</strong>, bringing the required tasks, information, and calculations into a single guided flow. Each step focuses on a specific part of the settlement, making the process easier to understand and reducing the need to rely on external tools or prior knowledge.</>,
      <>The result was a complex, scattered workflow transformed into a clear process where the system guides users from start to finish.</>,
    ],
    image: "/images/rayvarz/systems/fragmanted flow_tasviyeh_v1.jpg",
  },
  {
    system: "Credit",
    title: "Tafriq",
    description: [
      <>The first challenge was understanding the domain itself. Budget settlement involved specialized concepts and relationships that had to be understood before the workflow could be meaningfully simplified.</>,
      <>After mapping the underlying logic, I brought key settlement information directly into the main table as <strong>numeric summary cards</strong>. Instead of navigating elsewhere to retrieve or interpret this information, users can now see the essential figures alongside their work, keeping critical context visible throughout the process.</>,
    ],
    image: "/images/rayvarz/systems/fragmanted flow_tafriq_v1.jpg",
  },
  {
    system: "Warehouse",
    title: "Anbargardani",
    description: [
      <>Stocktaking involves multiple related activities that need to happen in the right sequence. When these actions are presented independently, users have to understand and remember the process themselves—what has already been completed and what should happen next.</>,
      <>I reorganized the experience around the <strong>stocktaking flow itself</strong>, connecting related actions and making the sequence more explicit. The interface provides clearer context for each stage, helping users understand where they are in the process and what they need to do next.</>,
      <>This shifted the burden of remembering the workflow from the user to the system, making a complex operational process easier to follow and manage.</>,
    ],
    image: "/images/rayvarz/systems/fragmanted flow_anbargardani_v1.jpg",
  },
] as const;

export function RayvarzFragmentedTasksChallenge() {
  return (
    <article className={styles.challenge} aria-labelledby="fragmented-tasks-challenge-title">
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.index}>Challenge 02</p>
          <h3 id="fragmented-tasks-challenge-title">Bringing Fragmented Tasks Together</h3>
          <div className={styles.copy}>
            <p>
              Many workflows had been shaped around individual features and the
              software&apos;s internal structure rather than the task users were
              actually trying to complete.
            </p>
            <p>
              As a result, a single task could require users to move between
              different menus, pages, or operations just to complete one
              coherent piece of work.
            </p>
          </div>
        </header>

        <div className={styles.direction}>
          <p>Scattered features</p>
          <span aria-hidden="true">→</span>
          <p>Coherent task</p>
        </div>

        <figure className={styles.screenshot}>
          <Image
            src="/images/rayvarz/systems/fragmanted flow_sanad mali_v1.jpg"
            alt="Financial documents task flow"
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </figure>

        <section className={styles.heroExample} aria-labelledby="sanad-mali-title">
          <div className={styles.heroDescription}>
            <h4 id="sanad-mali-title">Sanad Mali</h4>
            <p>Bringing frangmanted flow into a coherent one</p>
          </div>

          <details className={styles.exploration}>
            <summary>
              <span className={styles.explorationIcon} aria-hidden="true" />Explore the redesign
            </summary>
            <div className={styles.detailContent}>
              <section>
                <p className={styles.label}>Challenge</p>
                <p>
                  Creating, viewing, and deleting financial documents were
                  treated as separate workflows, each accessible through a
                  different menu. Users had to navigate between different
                  parts of the system just to manage the lifecycle of the same
                  entity, making a frequent task unnecessarily fragmented and
                  complex.
                </p>
              </section>
              <section>
                <p className={styles.label}>Solution</p>
                <p>
                  I consolidated the entire document workflow into a{' '}
                  <strong>single, centralized workspace</strong>. Existing
                  documents are listed in one table, while creating a new
                  document, viewing details, and deleting documents can all be
                  handled directly from the same context.
                </p>
                <p>
                  I also introduced multiple levels of{' '}
                  <strong>filtering and search</strong>, along with contextual
                  actions and utilities, allowing users to find and manage
                  documents without leaving the workspace.
                </p>
                <p>
                  Instead of organizing the experience around separate system
                  functions, the new flow was organized around the{' '}
                  <strong>document itself and what users need to do with it</strong>.
                </p>
              </section>
              <section>
                <p className={styles.label}>Impact</p>
                <p>
                  A fragmented, menu-driven process became a continuous
                  workflow. Users can now find, create, review, and manage
                  financial documents from one place, reducing unnecessary
                  navigation and keeping them in context throughout the task.
                </p>
                <p>
                  This approach also established a more scalable interaction
                  pattern that could be reused for managing entities across
                  other systems.
                </p>
              </section>
            </div>
          </details>
        </section>

        <section className={styles.supportingExamples} aria-labelledby="fragmented-supporting-examples-title">
          <header>
            <h4 id="fragmented-supporting-examples-title">Supporting Examples</h4>
          </header>
          <div className={styles.exampleGrid}>
            {supportingExamples.map(({ system, title, description, image }) => (
              <article className={styles.example} key={title}>
                <figure>
                  <Image
                    src={image}
                    alt={`${title} task flow`}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </figure>
                <div>
                  <p className={styles.system}>{system}</p>
                  <h5>{title}</h5>
                  <SupportingCopy className={styles.supportingCopy}>{description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</SupportingCopy>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}
