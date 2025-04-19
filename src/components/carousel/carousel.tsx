"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Advocating for a Better Tomorrow",
    description:
      "Join our movement to create positive change in communities across the nation.",
    image: "/placeholder.svg?height=800&width=1600",
    ctaText: "Get Involved",
    ctaLink: "#",
  },
  {
    id: 2,
    title: "Empowering Voices for Change",
    description:
      "We amplify the voices of those who have been historically marginalized.",
    image: "/placeholder.svg?height=800&width=1600",
    ctaText: "Join Our Cause",
    ctaLink: "#",
  },
  {
    id: 3,
    title: "Building Sustainable Communities",
    description:
      "Working together to create equitable and sustainable solutions for all.",
    image: "/placeholder.svg?height=800&width=1600",
    ctaText: "Learn More",
    ctaLink: "#",
  },
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center text-white">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-4">
                {slide.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl mb-8">
                {slide.description}
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href={slide.ctaLink}>{slide.ctaText}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
