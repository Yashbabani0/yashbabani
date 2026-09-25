import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { emailUri, githubUri, xUri } from "@/lib/social-links";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Yash Babani</p>

        <div className="flex items-center gap-5">
          {githubUri && (
            <Link
              href={githubUri}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              <FaGithub size={18} />
            </Link>
          )}

          {xUri && (
            <Link
              href={xUri}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              <FaXTwitter size={18} />
            </Link>
          )}

          {emailUri && (
            <Link
              href={emailUri}
              aria-label="Email"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              <HiOutlineMail size={20} />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
