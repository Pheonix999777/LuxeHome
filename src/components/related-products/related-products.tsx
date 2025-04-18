import { ProductCard } from "@/components/product-card/product-card";
import { StaticImageData } from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string | StaticImageData;
  category: string;
  rating: number;
  reviewCount?: number;
}

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
            category={product.category}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>
    </div>
  );
}
