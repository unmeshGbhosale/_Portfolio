"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "cyberpunk";

const storageKey = "portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "cyberpunk" ? "dark" : "light";
}

function getThemeSnapshot(): Theme {
  if (typeof window === "undefined") return "light";
  return window.localStorage.getItem(storageKey) === "cyberpunk" ? "cyberpunk" : "light";
}

function subscribeToTheme(listener: () => void) {
  window.addEventListener("storage", listener);
  return () => window.removeEventListener("storage", listener);
}

function setStoredTheme(theme: Theme) {
  window.localStorage.setItem(storageKey, theme);
  window.dispatchEvent(new StorageEvent("storage", { key: storageKey, newValue: theme }));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, getThemeSnapshot, () => "light");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "cyberpunk" ? "light" : "cyberpunk";
    setStoredTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={theme === "cyberpunk"}
      aria-label={`Switch to ${theme === "cyberpunk" ? "light" : "dark"} theme`}
      className="theme-toggle focus-ring group relative inline-flex min-h-12 items-center overflow-hidden rounded-full border border-line bg-white p-2 text-[15px] font-bold text-ink transition hover:-translate-y-0.5 hover:border-ink"
    >
      <span aria-hidden="true" className="theme-toggle-track relative grid h-8 w-14 shrink-0 items-center overflow-hidden rounded-full">
        <span className="theme-toggle-stars absolute inset-0" />
        <span className="theme-toggle-orb absolute left-1 top-1 grid h-6 w-6 place-items-center rounded-full">
          <span className="theme-toggle-symbol">{theme === "cyberpunk" ? "☾" : "☀"}</span>
        </span>
      </span>
    </button>
  );
}
