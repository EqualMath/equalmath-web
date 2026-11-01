"use client"

import { Moon, Sun } from "lucide-react"

const storageKey = "theme"

/**
 * Runs in <head> before the page paints so a saved choice never flashes the
 * wrong theme. With nothing saved, the site follows the system setting.
 */
export const themeScript = `try{var t=localStorage.getItem("${storageKey}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement
    const isDark =
      root.dataset.theme ?
        root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches
    const next = isDark ? "light" : "dark"

    root.dataset.theme = next
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // Storage can be blocked; the choice still applies for this page view.
    }
  }

  // Both icons render, and CSS shows the right one, so the server markup
  // never disagrees with the theme the visitor actually has.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded-full p-2 text-graphite transition-colors hover:bg-rule/60 hover:text-ink"
    >
      <Moon aria-hidden="true" className="size-5 dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-5 dark:block" />
    </button>
  )
}
