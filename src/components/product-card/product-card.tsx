"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/cart-context";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/toast";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string | StaticImageData;
  category: string;
  rating: number;
  reviewCount?: number;
}

export function ProductCard({
  id,
  name,
  price,
  oldPrice,
  image,
  category,
  rating,
  reviewCount = 0,
}: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);

    // Add item to cart
    addItem({
      id,
      name,
      price,
      image: typeof image === "string" ? image : image.src,
      quantity: 1,
    });

    // Show toast notification
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });

    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:shadow-md">
      <Link
        href={`/product/${id}`}
        className="relative block aspect-square overflow-hidden"
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover w-full h-full transition-transform group-hover:scale-105"
        />

        {oldPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded">
            Sale
          </div>
        )}
      </Link>
      <div className="p-4">
        <div className="mb-1 text-sm text-neutral-500">{category}</div>
        <Link href={`/product/${id}`}>
          <h3 className="font-medium line-clamp-1 group-hover:text-neutral-900">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-neutral-500">({reviewCount})</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <span className="font-medium">${price.toFixed(2)}</span>
            {oldPrice && (
              <span className="text-sm text-neutral-500 line-through">
                ${oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
