import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  title: string;
  image: string | StaticImageData;
  href: string;
}

export function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-lg">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=400&width=400"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
          <h3 className="text-white font-medium">{title}</h3>
          <div className="bg-white rounded-full p-1.5 text-neutral-900 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
