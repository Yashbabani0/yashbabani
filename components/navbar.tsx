"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGroup,
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import ThemeToggle from "@/components/theme-toggle";
import { githubUri } from "@/lib/social-links";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Games", href: "/games" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const MotionLink = motion.create(Link);

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node))
        setMobileOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileOpen]);

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <header
        ref={headerRef}
        className="navbar-enter sticky top-0 z-50 shrink-0 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/70"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setMobileOpen(false);
        }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <MotionLink
            href="/"
            onClick={() => setMobileOpen(false)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-current={pathname === "/" ? "page" : undefined}
            className="text-lg font-semibold tracking-tight text-black dark:text-white"
          >
            YASH<span className="text-neutral-400">.</span>
          </MotionLink>

          <div className="hidden items-center gap-7 md:flex">
            <LayoutGroup id="navbar">
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <MotionLink
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative rounded-md py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${active ? "text-black dark:text-white" : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"}`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-neutral-300 transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none dark:bg-neutral-600"
                    />
                    {active && (
                      <motion.span
                        layoutId="active-nav"
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-black dark:bg-white"
                      />
                    )}
                  </MotionLink>
                );
              })}
            </LayoutGroup>
          </div>

          <div className="flex items-center gap-2 md:gap-5">
            {githubUri && (
              <MotionLink
                href={githubUri}
                whileHover={{ y: -2, rotate: -8 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white cursor-pointer"
              >
                <FaGithub size={20} />
              </MotionLink>
            )}

            <ThemeToggle />
            <motion.button
              ref={menuButtonRef}
              type="button"
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
              whileTap={reducedMotion ? undefined : { scale: 0.9 }}
              className="flex size-11 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {mobileOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </nav>
        <motion.div
          id="mobile-navigation"
          initial={false}
          animate={{
            height: mobileOpen ? "auto" : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
          aria-hidden={!mobileOpen}
          inert={!mobileOpen}
          className="absolute inset-x-0 top-full overflow-hidden border-b border-black/5 bg-white shadow-lg md:hidden dark:border-white/10 dark:bg-neutral-950"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto px-6 py-3"
          >
            {navItems.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <MotionLink
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => {
                    setMobileOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                  className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 ${active ? "bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white" : "text-neutral-600 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"}`}
                >
                  {item.label}
                </MotionLink>
              );
            })}
          </nav>
        </motion.div>
      </header>
    </MotionConfig>
  );
}
