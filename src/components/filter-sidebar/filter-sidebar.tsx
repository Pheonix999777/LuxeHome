"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  materials: string[];
  colors: string[];
}

interface FilterSidebarProps {
  currentCategory?: string;
  onFilterChange: (filters: FilterOptions) => void;
  maxPrice?: number;
}

export function FilterSidebar({
  currentCategory,
  onFilterChange,
  maxPrice = 5000,
}: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    currentCategory ? [currentCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    materials: true,
    colors: true,
  });

  // Update filters when currentCategory changes
  useEffect(() => {
    if (currentCategory) {
      setSelectedCategories([currentCategory]);
    }
  }, [currentCategory]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => {
      if (checked) {
        return [...prev, category];
      } else {
        return prev.filter((c) => c !== category);
      }
    });
  };

  const handleMaterialChange = (material: string, checked: boolean) => {
    setSelectedMaterials((prev) => {
      if (checked) {
        return [...prev, material];
      } else {
        return prev.filter((m) => m !== material);
      }
    });
  };

  const handleColorChange = (color: string, checked: boolean) => {
    setSelectedColors((prev) => {
      if (checked) {
        return [...prev, color];
      } else {
        return prev.filter((c) => c !== color);
      }
    });
  };

  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      priceRange,
      materials: selectedMaterials,
      colors: selectedColors,
    });
  };

  const resetFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedCategories(currentCategory ? [currentCategory] : []);
    setSelectedMaterials([]);
    setSelectedColors([]);

    onFilterChange({
      categories: currentCategory ? [currentCategory] : [],
      priceRange: [0, maxPrice],
      materials: [],
      colors: [],
    });
  };

  // Available options
  const categories = ["living-room", "bedroom", "dining", "office", "outdoor"];
  const materials = ["Wood", "Leather", "Fabric", "Metal", "Glass"];
  const colors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Brown", value: "#8B4513" },
    { name: "Gray", value: "#808080" },
    { name: "Light Gray", value: "#D3D3D3" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("categories")}
        >
          <h3 className="font-medium">Categories</h3>
          {expandedSections.categories ? (
            <ChevronUp className="h-4 w-4 text-neutral-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          )}
        </div>
        {expandedSections.categories && (
          <div className="mt-3 space-y-2">
            {categories.map((category) => {
              const formattedCategory = category
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

              return (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) =>
                      handleCategoryChange(category, checked === true)
                    }
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="text-sm text-neutral-600"
                  >
                    {formattedCategory}
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="border-t pt-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h3 className="font-medium">Price Range</h3>
          {expandedSections.price ? (
            <ChevronUp className="h-4 w-4 text-neutral-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          )}
        </div>
        {expandedSections.price && (
          <div className="mt-3 space-y-4">
            <Slider
              max={maxPrice}
              step={100}
              value={priceRange}
              onValueChange={(value) =>
                setPriceRange(value as [number, number])
              }
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-600">${priceRange[0]}</span>
              <span className="text-sm text-neutral-600">${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      <div className="border-t pt-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("materials")}
        >
          <h3 className="font-medium">Materials</h3>
          {expandedSections.materials ? (
            <ChevronUp className="h-4 w-4 text-neutral-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          )}
        </div>
        {expandedSections.materials && (
          <div className="mt-3 space-y-2">
            {materials.map((material) => (
              <div key={material} className="flex items-center space-x-2">
                <Checkbox
                  id={`material-${material.toLowerCase()}`}
                  checked={selectedMaterials.includes(material)}
                  onCheckedChange={(checked) =>
                    handleMaterialChange(material, checked === true)
                  }
                />
                <label
                  htmlFor={`material-${material.toLowerCase()}`}
                  className="text-sm text-neutral-600"
                >
                  {material}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection("colors")}
        >
          <h3 className="font-medium">Colors</h3>
          {expandedSections.colors ? (
            <ChevronUp className="h-4 w-4 text-neutral-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-neutral-500" />
          )}
        </div>
        {expandedSections.colors && (
          <div className="mt-3">
            <div className="grid grid-cols-5 gap-2">
              {colors.map((color) => (
                <div
                  key={color.value}
                  className={`w-8 h-8 rounded-full cursor-pointer border ${
                    selectedColors.includes(color.name)
                      ? "ring-2 ring-neutral-900"
                      : "border-neutral-200"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                  onClick={() =>
                    handleColorChange(
                      color.name,
                      !selectedColors.includes(color.name)
                    )
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t pt-6">
        <Button className="w-full" onClick={applyFilters}>
          Apply Filters
        </Button>
        <Button
          variant="outline"
          className="w-full mt-2"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
