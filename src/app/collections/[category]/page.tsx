"use client";

import { useState } from "react";
import { ProductGrid } from "@/components/product-grid/product-grid";
import {
  FilterSidebar,
  type FilterOptions,
} from "@/components/filter-sidebar/filter-sidebar";
import { getProductsByCategory, getCategoryBySlug } from "@/lib/data";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;

  const category = getCategoryBySlug(categorySlug);
  const products = getProductsByCategory(categorySlug);

  const [activeFilters, setActiveFilters] = useState<FilterOptions>({
    categories: [categorySlug],
    priceRange: [0, 5000],
    materials: [],
    colors: [],
  });

  const handleFilterChange = (filters: FilterOptions) => {
    setActiveFilters(filters);
  };

  if (!category) {
    return (
      <div className="container px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold">Category Not Found</h1>
        <p className="mt-4">
          The category you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {category.name}
          </h1>
          <p className="text-neutral-600 mt-2">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FilterSidebar
            currentCategory={categorySlug}
            onFilterChange={handleFilterChange}
            maxPrice={5000}
          />
          <div className="md:col-span-3">
            <ProductGrid products={products} filters={activeFilters} />
          </div>
        </div>
      </div>
    </div>
  );
}
