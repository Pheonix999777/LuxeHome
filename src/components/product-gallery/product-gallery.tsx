"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  console.log("Images:", images);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg bg-neutral-100 ${
            isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={toggleZoom}
        >
          <Image
            src={
              images[currentImage] || "/placeholder.svg?height=600&width=600"
            }
            fill
            alt="Product"
            sizes="(max-width: 768px) 100vw, 600px"
            className={`object-cover object-center w-full h-full transition-transform duration-300 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
          />
          <button
            type="button"
            className="absolute top-2 right-2 rounded-full bg-white/80 p-1.5 text-neutral-600 backdrop-blur-sm transition-colors hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
          >
            <ZoomIn className="h-4 w-4" />
            <span className="sr-only">Zoom</span>
          </button>
        </div>

        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex space-x-2 overflow-auto pb-1">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className={`relative aspect-square w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-md ${
                currentImage === index
                  ? "ring-2 ring-neutral-900"
                  : "ring-1 ring-neutral-200"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={image || "/placeholder.svg?height=80&width=80"}
                fill
                alt={`Product thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
