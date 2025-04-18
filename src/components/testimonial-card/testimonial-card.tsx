import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export function TestimonialCard({
  quote,
  name,
  location,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-neutral-600 mb-4">&quot;{quote}&quot;</p>

      <div className="flex items-center">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-neutral-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
