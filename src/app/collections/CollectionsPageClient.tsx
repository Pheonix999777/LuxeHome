"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/product-grid/product-grid";
import {
  FilterSidebar,
  type FilterOptions,
} from "@/components/filter-sidebar/filter-sidebar";
import { getAllProducts } from "@/lib/data";

export default function CollectionsPageClient() {
  const products = getAllProducts();
  const [activeFilters, setActiveFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: [0, 5000],
    materials: [],
    colors: [],
  });

  const handleFilterChange = (filters: FilterOptions) => {
    setActiveFilters(filters);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            All Collections
          </h1>
          <p className="text-neutral-600 mt-2">
            Browse our complete collection of premium furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FilterSidebar onFilterChange={handleFilterChange} maxPrice={5000} />
          <div className="md:col-span-3">
            <ProductGrid products={products} filters={activeFilters} />
          </div>
        </div>
      </div>
    </div>
  );
}
