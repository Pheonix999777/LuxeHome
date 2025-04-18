"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "@/components/product-card/product-card";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import type { FilterOptions } from "@/components/filter-sidebar/filter-sidebar";
import { ProductListItem } from "../product-list-item/product-list-item";

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  categorySlug: string;
  rating: number;
  reviewCount?: number;
  colors?: string[];
  materials?: string[];
}

interface ProductGridProps {
  products: Product[];
  filters?: FilterOptions;
}

export function ProductGrid({ products, filters }: ProductGridProps) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Apply filters when they change
  useEffect(() => {
    if (!filters) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => {
      // Filter by category
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(product.categorySlug)
      ) {
        return false;
      }

      // Filter by price
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }

      // Filter by materials
      if (filters.materials.length > 0 && product.materials) {
        if (
          !product.materials.some((material) =>
            filters.materials.includes(material)
          )
        ) {
          return false;
        }
      } else if (filters.materials.length > 0 && !product.materials) {
        return false;
      }

      // Filter by colors
      if (filters.colors.length > 0 && product.colors) {
        if (!product.colors.some((color) => filters.colors.includes(color))) {
          return false;
        }
      } else if (filters.colors.length > 0 && !product.colors) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0; // featured - maintain original order
    }
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <p className="text-sm text-neutral-600">
            {sortedProducts.length} products
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <label htmlFor="sort-by" className="sr-only">
              Sort by
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-1 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
          <div className="flex items-center border rounded-md overflow-hidden">
            <Button
              variant={view === "grid" ? "default" : "ghost"}
              size="sm"
              className="h-8 w-8 p-0 rounded-none"
              onClick={() => setView("grid")}
            >
              <Grid className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={view === "list" ? "default" : "ghost"}
              size="sm"
              className="h-8 w-8 p-0 rounded-none"
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
        </div>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="text-center py-12 bg-neutral-50 rounded-lg">
          <p className="text-lg font-medium">No products match your filters</p>
          <p className="text-neutral-600 mt-2">
            Try adjusting your filters or browse all products
          </p>
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
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
      ) : (
        <div className="space-y-6">
          {sortedProducts.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
