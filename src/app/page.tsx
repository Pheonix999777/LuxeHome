import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card/product-card";
import { TestimonialCard } from "@/components/testimonial-card/testimonial-card";
import { CategoryCard } from "@/components/category-card/category-card";
import { Newsletter } from "@/components/newsletter/newsletter";
import {
  getFeaturedProducts,
  getCategories,
  getTestimonials,
} from "@/lib/data";
import Link from "next/link";
import { ArrowRight, TrendingUp, Truck, RotateCcw, Clock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import HeroImage from "../../public/img/Hero Image 17_27_46.png";

export const metadata: Metadata = {
  title: "LuxeHome - Premium Furniture for Modern Living",
  description:
    "Discover our curated collection of premium furniture for every room. Modern designs, exceptional quality, and timeless elegance.",
  openGraph: {
    title: "LuxeHome - Premium Furniture for Modern Living",
    description:
      "Discover our curated collection of premium furniture for every room. Modern designs, exceptional quality, and timeless elegance.",
    url: "https://luxehome-furniture.com",
    siteName: "LuxeHome Furniture",
    images: [
      {
        url: "https://luxehome-furniture.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LuxeHome Furniture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const categories = getCategories();
  const testimonials = getTestimonials();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-neutral-100">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-neutral-200 px-3 py-1 text-sm">
                  New Collection 2025
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Elevate Your Living Space with Timeless Elegance
                </h1>
                <p className="text-neutral-600 md:text-xl max-w-[600px]">
                  Discover furniture that combines exceptional craftsmanship,
                  sustainable materials, and designs that stand the test of
                  time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg">
                    <Link href="/collections">
                      Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">Learn Our Story</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={HeroImage}
                  alt="Modern living room with elegant furniture"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Shop by Room
              </h2>
              <p className="text-neutral-600 md:text-xl max-w-3xl">
                Explore our curated collections designed to transform every
                space in your home.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  title={category.name}
                  image={category.image}
                  href={`/collections/${category.slug}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Featured Products
              </h2>
              <p className="text-neutral-600 md:text-xl max-w-3xl">
                Our most popular pieces, loved for their exceptional design and
                quality.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button asChild size="lg">
                <Link href="/collections">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-neutral-100">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Free Shipping</h3>
                <p className="text-neutral-600">On all orders over $1000</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-neutral-100">
                  <RotateCcw className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Easy Returns</h3>
                <p className="text-neutral-600">30-day return policy</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-neutral-100">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Quality Guarantee</h3>
                <p className="text-neutral-600">
                  5-year warranty on all products
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-neutral-100">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Expert Support</h3>
                <p className="text-neutral-600">Available 7 days a week</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                What Our Customers Say
              </h2>
              <p className="text-neutral-600 md:text-xl max-w-3xl">
                Don&apos;t just take our word for it. Hear from our satisfied
                customers.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  location={testimonial.location}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>
    </div>
  );
}
