"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion, MotionConfig } from "motion/react";
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

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <header className="navbar-enter sticky top-0 z-50 shrink-0 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <MotionLink
            href="/"
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

          <div className="flex items-center gap-5">
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
          </div>
        </nav>
      </header>
    </MotionConfig>
  );
}
