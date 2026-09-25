import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { emailUri, githubUri, xUri } from "@/lib/social-links";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/5 py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Contact
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
            Have something in mind?
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Whether it&apos;s a web project, collaboration, game development, or
            just something interesting you want to discuss, feel free to reach
            out.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {emailUri && (
              <Link
                href={emailUri}
                className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
              >
                <HiOutlineMail size={18} />
                Send an email
              </Link>
            )}

            {githubUri && (
              <Link
                href={githubUri}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-lg border border-black/10 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:border-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
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
                className="flex size-10 items-center justify-center rounded-lg border border-black/10 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-black dark:border-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
              >
                <FaXTwitter size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
