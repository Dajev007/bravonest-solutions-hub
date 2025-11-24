import React, { useEffect, useState } from "react";

const STORAGE_KEY = "bravonest:theme";

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // initialize from localStorage or system preference
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
        return;
      }
      if (saved === "light") {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
        return;
      }
    } catch (e) {
      // ignore
    }

    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem(STORAGE_KEY, "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem(STORAGE_KEY, "light");
      }
    } catch (e) {
      // ignore
    }
  };

  return (
    <button
      aria-pressed={!!isDark}
      onClick={toggle}
      className="p-2 rounded-md hover:scale-105 transition-transform duration-200 flex items-center justify-center text-sm"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span className="text-lg" aria-hidden>
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default DarkModeToggle;
