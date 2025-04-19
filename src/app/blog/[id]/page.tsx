import { getBlogPostById, getRelatedBlogPosts } from "@/lib/data";
import { BlogCard } from "@/components/blog-card/blog-card";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getBlogPostById(params.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | LuxeHome Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: typeof post.image === "string" ? post.image : post.image.src,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPostById(params.id);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(params.id);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-neutral-600 hover:underline mb-4 inline-block"
        >
          ← Back to all posts
        </Link>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={
                  post.author.avatar || "/placeholder.svg?height=40&width=40"
                }
                fill
                alt={post.author.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-neutral-600">{post.author.role}</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl mb-8">
          <Image
            src={post.image || "/placeholder.svg?height=675&width=1200"}
            alt={post.title}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">About the author</h3>
              <div className="flex items-center space-x-4 mt-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={
                      post.author.avatar ||
                      "/placeholder.svg?height=64&width=64"
                    }
                    fill
                    alt={post.author.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-neutral-600">{post.author.role}</p>
                  <p className="text-sm text-neutral-600 mt-1">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
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
      )}
    </div>
  );
}
