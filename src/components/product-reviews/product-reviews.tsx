"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

interface ProductReviewsProps {
  productId: string;
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      id: "1",
      author: "Sarah Johnson",
      date: "2023-05-15",
      rating: 5,
      content:
        "Absolutely love this piece! The quality is exceptional and it looks even better in person than in the photos. Delivery was prompt and the assembly was straightforward.",
    },
    {
      id: "2",
      author: "Michael Chen",
      date: "2023-04-22",
      rating: 4,
      content:
        "Great furniture, very comfortable and well-made. The only reason I'm giving 4 stars instead of 5 is that it took a bit longer to arrive than expected.",
    },
    {
      id: "3",
      author: "Emma Williams",
      date: "2023-03-10",
      rating: 5,
      content:
        "This is my second purchase from LuxeHome and I'm once again impressed with the quality and craftsmanship. Will definitely be a returning customer!",
    },
  ];

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleRatingHover = (value: number) => {
    setHoveredRating(value);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="flex mr-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < 4.5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="font-medium">4.5 out of 5</span>
          <span className="text-neutral-600 ml-2">
            ({reviews.length} reviews)
          </span>
        </div>
        <Button onClick={() => setShowReviewForm(!showReviewForm)}>
          {showReviewForm ? "Cancel" : "Write a Review"}
        </Button>
      </div>

      {showReviewForm && (
        <div className="bg-neutral-50 p-6 rounded-lg mb-8">
          <h3 className="font-medium mb-4">Write Your Review</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rating</label>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className="p-1"
                  onClick={() => handleRatingClick(i + 1)}
                  onMouseEnter={() => handleRatingHover(i + 1)}
                  onMouseLeave={handleRatingLeave}
                >
                  <Star
                    className={`h-6 w-6 ${
                      i < (hoveredRating || rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="review-title"
                className="block text-sm font-medium mb-1"
              >
                Review Title
              </label>
              <input
                id="review-title"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Summarize your experience"
              />
            </div>
            <div>
              <label
                htmlFor="review-content"
                className="block text-sm font-medium mb-1"
              >
                Review
              </label>
              <Textarea
                id="review-content"
                placeholder="Share your experience with this product"
                className="min-h-[100px]"
              />
            </div>
            <div>
              <label
                htmlFor="review-name"
                className="block text-sm font-medium mb-1"
              >
                Name
              </label>
              <input
                id="review-name"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="review-email"
                className="block text-sm font-medium mb-1"
              >
                Email
              </label>
              <input
                id="review-email"
                type="email"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Your email (will not be published)"
              />
            </div>
            <Button>Submit Review</Button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-neutral-200 pb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{review.author}</span>
              </div>
              <span className="text-sm text-neutral-600">
                {formatDate(review.date)}
              </span>
            </div>
            <p className="text-neutral-600">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
