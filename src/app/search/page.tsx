"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ProductGrid } from "@/components/product-grid/product-grid";
import { getAllProducts } from "@/lib/data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      const allProducts = getAllProducts();
      const results = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Search Results
          </h1>
          <p className="text-neutral-600 mt-2">
            {searchResults.length}{" "}
            {searchResults.length === 1 ? "result" : "results"} for &quot;
            {query}&quot;
          </p>
        </div>

        {searchResults.length > 0 ? (
          <ProductGrid products={searchResults} />
        ) : (
          <div className="text-center py-12 bg-neutral-50 rounded-lg">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-neutral-600 mt-2">
              Try a different search term or browse our collections
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
