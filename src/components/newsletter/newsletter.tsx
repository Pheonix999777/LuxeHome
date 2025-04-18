"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormPersistence } from "@/hooks/use-form-persistence";

export function Newsletter() {
  const { formState, updateFormState, clearFormState } = useFormPersistence(
    "newsletter-form",
    {
      email: "",
    }
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      clearFormState();
    } catch (error) {
      console.error("Newsletter submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormState({ email: e.target.value });
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Newsletter
          </h2>
          <p className="text-neutral-600 md:text-xl">
            Subscribe to get special offers, free giveaways, and design
            inspiration.
          </p>
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md w-full max-w-md">
              Thank you for subscribing to our newsletter!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                value={formState.email}
                onChange={handleChange}
                required
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
          <p className="text-xs text-neutral-500">
            By subscribing, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
