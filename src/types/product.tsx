import { StaticImageData } from "next/image";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: StaticImageData;
  category: string;
  categorySlug: string;
  rating: number;
  reviewCount: number;
  description: string;
  colors: string[];
  materials: string[];
  details: string[];
  gallery: string[];
  oldPrice?: number;
};
