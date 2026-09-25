import Image from "next/image";
import Link from "@/components/motion/animated-link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "./data";
export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.href}
      className="group block h-full overflow-hidden rounded-2xl border border-black/10 transition-colors hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-neutral-950"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={post.image}
          alt={`${post.title} preview`}
          fill
          sizes="(min-width: 1152px) 552px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              {post.category}
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-white">
              {post.title}
            </h2>
          </div>

          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-neutral-400 transition-all motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 group-hover:text-black dark:group-hover:text-white"
          />
        </div>

        <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
          <span>{post.date}</span>

          <span aria-hidden="true">•</span>

          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
