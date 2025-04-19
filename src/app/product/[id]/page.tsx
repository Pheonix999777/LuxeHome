"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/product-gallery/product-gallery";
import { ProductReviews } from "@/components/product-reviews/product-reviews";
import { RelatedProducts } from "@/components/related-products/related-products";
import { getAllProducts, getProductById, getRelatedProducts } from "@/lib/data";
import { useParams } from "next/navigation";
import { Star, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { useCart } from "@/lib/context/cart-context";
import { toast } from "@/hooks/toast";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;

  const product = getProductById(productId);
  const relatedProducts = getRelatedProducts(productId);

  const allProducts = getAllProducts();

  const allImage = allProducts.find((item) => item.id === productId);

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || "Natural"
  );
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="container px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-4">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image:
        typeof product.image === "string" ? product.image : product.image.src,
      quantity: quantity,
      color: selectedColor,
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid gap-12 md:grid-cols-2">
        <ProductGallery
          images={product.gallery || (allImage ? [allImage.image] : [])}
        />

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-600">
                ({product.reviewCount || 0} reviews)
              </span>
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            {product.oldPrice && (
              <p className="text-sm text-neutral-600 line-through">
                ${product.oldPrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="color"
                  className="block text-sm font-medium mb-1"
                >
                  Color
                </label>
                <select
                  id="color"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  {product.colors?.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  )) || <option>Natural</option>}
                </select>
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium mb-1"
                >
                  Quantity
                </label>
                <select
                  id="quantity"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>

          <div className="border-t border-b py-4 space-y-3">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-neutral-600" />
              <span className="text-sm">
                Free shipping on orders over $1000
              </span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-neutral-600" />
              <span className="text-sm">30-day returns</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-neutral-600" />
              <span className="text-sm">5-year warranty</span>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600">
              {product.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              )) || (
                <>
                  <li>Sustainably sourced materials</li>
                  <li>Handcrafted by skilled artisans</li>
                  <li>Designed for comfort and durability</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <ProductReviews productId={productId} />

      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
