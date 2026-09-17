"use client";

import { useId, useState, type ReactNode } from "react";
import styles from "./SupportingCopy.module.css";

type SupportingCopyProps = {
  children: ReactNode;
  className?: string;
};

export function SupportingCopy({ children, className }: SupportingCopyProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className={styles.wrapper}>
      <div id={contentId} className={`${styles.copy}${className ? ` ${className}` : ""}${isExpanded ? "" : ` ${styles.collapsed}`} `}>
        {children}
      </div>
      <button
        className={styles.button}
        type="button"
        aria-controls={contentId}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? "Show less" : "Read more…"}
      </button>
    </div>
  );
}
