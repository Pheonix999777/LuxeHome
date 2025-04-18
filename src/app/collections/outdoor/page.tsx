import type { Metadata } from "next";
import OutdoorPageClient from "./OutdoorPageClient";

export const metadata: Metadata = {
  title: "Outdoor Furniture Collection | Patio & Garden",
  description:
    "Discover our collection of durable and stylish outdoor furniture for your patio, garden, or balcony. Weather-resistant materials and timeless designs.",
};

export default function OutdoorPage() {
  return <OutdoorPageClient />;
}
