import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: StaticImageData;
  category: string;
  categorySlug: string;
  rating: number;
  reviewCount?: number;
  colors?: string[];
  materials?: string[];
}

export function ProductListItem({ product }: { product: Product }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4 border border-neutral-200 rounded-lg bg-white">
      <a
        href={`/product/${product.id}`}
        className="sm:w-48 aspect-square overflow-hidden rounded-md"
      >
        <Image
          src={product.image || "/placeholder.svg?height=192&width=192"}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </a>
      <div className="flex-1">
        <div className="mb-1 text-sm text-neutral-500">{product.category}</div>
        <a href={`/product/${product.id}`}>
          <h3 className="font-medium hover:text-neutral-900">{product.name}</h3>
        </a>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-neutral-500">
            ({product.reviewCount || 0})
          </span>
        </div>
        <p className="text-neutral-600 mt-2 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <span className="font-medium">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-neutral-500 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button size="sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
