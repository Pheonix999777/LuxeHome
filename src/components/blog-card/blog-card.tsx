import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string | StaticImageData;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
}

export function BlogCard({
  id,
  title,
  excerpt,
  date,
  image,
  category,
  author,
}: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:shadow-md">
      <Link
        href={`/blog/${id}`}
        className="relative block aspect-video overflow-hidden"
      >
        <Image
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </Link>
      <div className="p-4 sm:p-6">
        <div className="flex items-center text-sm text-neutral-500 mb-2">
          <span>{formatDate(date)}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
        <Link href={`/blog/${id}`}>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-neutral-900">
            {title}
          </h3>
        </Link>
        <p className="text-neutral-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center">
          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
            <Image
              src={author.avatar || "/placeholder.svg?height=32&width=32"}
              alt={author.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-sm font-medium">{author.name}</span>
        </div>
      </div>
    </article>
  );
}
