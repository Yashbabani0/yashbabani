import BlogHeader from "@/components/blog/blog-header";
import BlogCatalog from "@/components/blog/blog-catalog";
export default function BlogPage() {
  return (
    <main>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <BlogHeader />
          <BlogCatalog />
        </div>
      </section>
    </main>
  );
}
