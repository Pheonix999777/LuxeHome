import type { Metadata } from "next";
import CollectionsPageClient from "./CollectionsPageClient";

export const metadata: Metadata = {
  title: "All Collections | Premium Furniture",
  description:
    "Browse our complete collection of premium furniture for every room in your home. Filter by category, price, and more.",
};

export default function CollectionsPage() {
  return <CollectionsPageClient />;
}
