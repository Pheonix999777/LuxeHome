"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAllProducts } from "@/lib/data";
import Link from "next/link";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const router = useRouter();
  const allProducts = getAllProducts();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results.slice(0, 5));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      onClose();
    }
  };

  // Handle product click
  const handleProductClick = () => {
    onClose();
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Search</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-10"
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
            </div>
          </form>

          {searchResults.length > 0 && (
            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-medium text-neutral-500">Products</h3>
              <ul className="divide-y">
                {searchResults.map((product) => (
                  <li key={product.id} className="py-2">
                    <Link
                      href={`/product/${product.id}`}
                      className="flex items-center gap-3 hover:bg-neutral-50 p-2 rounded-md"
                      onClick={handleProductClick}
                    >
                      <div className="h-12 w-12 overflow-hidden rounded-md border">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {product.category}
                        </p>
                      </div>
                      <div className="text-sm font-medium">
                        ${product.price.toFixed(2)}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
                    onClose();
                  }}
                >
                  View all results
                </Button>
              </div>
            </div>
          )}

          {searchQuery.trim() !== "" && searchResults.length === 0 && (
            <div className="py-6 text-center">
              <p className="text-neutral-600">
                No products found for &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
