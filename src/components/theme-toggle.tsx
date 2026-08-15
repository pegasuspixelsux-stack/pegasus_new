"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar entre modo claro y oscuro"
      className="inline-flex items-center gap-2 rounded-full border border-gray-800 light:border-gray-200 bg-gray-900/60 light:bg-gray-100 px-3 py-1.5 text-xs text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
    >
      <Moon size={14} className="light:hidden" />
      <Sun size={14} className="hidden light:block" />
      <span className="light:hidden">Oscuro</span>
      <span className="hidden light:inline">Claro</span>
    </button>
  );
}
