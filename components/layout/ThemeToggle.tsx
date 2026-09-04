"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let shouldUseDarkTheme = false;

    try {
      shouldUseDarkTheme = window.localStorage.getItem("theme") === "dark";
    } catch {}

    document.body.classList.toggle("dark", shouldUseDarkTheme);
    const frame = window.requestAnimationFrame(() => setIsDark(shouldUseDarkTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;

    document.body.classList.toggle("dark", nextTheme);
    try {
      window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
    } catch {}
    setIsDark(nextTheme);
  }

  return (
    <button
      className={styles.themeToggle}
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <span aria-hidden="true">◐</span>
    </button>
  );
}
