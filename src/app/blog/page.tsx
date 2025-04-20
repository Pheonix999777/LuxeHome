import { BlogCard } from "@/components/blog-card/blog-card";
import { getBlogPosts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Interior Design Inspiration & Tips",
  description:
    "Explore our blog for interior design inspiration, furniture care tips, and the latest trends in home decor.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Blog
          </h1>
          <p className="text-neutral-600 mt-2 md:text-xl">
            Interior design inspiration, furniture care tips, and the latest
            trends in home decor.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              category={post.category}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
