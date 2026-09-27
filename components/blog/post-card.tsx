import ContentCard from "@/components/catalog/content-card";
import type { BlogPost } from "./data";
export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <ContentCard
      href={post.href}
      image={post.image}
      title={post.title}
      category={post.category}
      description={post.excerpt}
    >
      <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
        <span>{post.date}</span>
        <span aria-hidden="true">•</span>
        <span>{post.readTime}</span>
      </div>
    </ContentCard>
  );
}
