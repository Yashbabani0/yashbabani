"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { useRef } from "react";
import { flushSync } from "react-dom";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const transitioning = useRef(false);

  async function toggleTheme() {
    if (transitioning.current) return;

    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    transitioning.current = true;
    const root = document.documentElement;
    root.dataset.themeTransition = "true";

    try {
      // Capture the old page, then commit the new theme before its snapshot.
      const transition = document.startViewTransition(() => {
        flushSync(() => setTheme(nextTheme));
      });
      await transition.finished;
    } finally {
      delete root.dataset.themeTransition;
      transitioning.current = false;
    }
  }

  return (
    <motion.button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex size-9 cursor-pointer items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
    >
      <Moon
        size={20}
        className="absolute rotate-0 scale-100 opacity-100 transition-[transform,opacity] duration-400 motion-reduce:transition-none dark:-rotate-90 dark:scale-50 dark:opacity-0"
        aria-hidden="true"
      />
      <Sun
        size={20}
        className="absolute rotate-90 scale-50 opacity-0 transition-[transform,opacity] duration-400 motion-reduce:transition-none dark:rotate-0 dark:scale-100 dark:opacity-100"
        aria-hidden="true"
      />
    </motion.button>
  );
}
