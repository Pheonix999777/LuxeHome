import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, MessageSquare, FileQuestion, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Customer Support",
  description:
    "Get help with your orders, products, and account. Find answers to frequently asked questions.",
};

export default function HelpCenterPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Help Center
          </h1>
          <p className="text-neutral-600 mt-2 md:text-xl">
            Find answers to your questions and get the support you need.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-neutral-100">
                <FileQuestion className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
              <p className="text-neutral-600">
                Find answers to common questions about our products and
                services.
              </p>
              <Button asChild>
                <Link href="/faq">View FAQs</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-neutral-100">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Email Support</h3>
              <p className="text-neutral-600">
                Send us an email and we&apos;ll get back to you within 24 hours.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-neutral-100">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Phone Support</h3>
              <p className="text-neutral-600">
                Call us directly for immediate assistance with your questions.
              </p>
              <Button asChild>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-neutral-100">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Live Chat</h3>
              <p className="text-neutral-600">
                Chat with our customer service team in real-time.
              </p>
              <Button>Start Chat</Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-neutral-100">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Support Hours</h3>
              <p className="text-neutral-600">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 4pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-neutral-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Popular Help Topics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/shipping"
              className="block p-4 bg-white rounded-md border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <h3 className="font-medium">Shipping & Delivery</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Learn about shipping options, times, and policies
              </p>
            </Link>
            <Link
              href="/returns"
              className="block p-4 bg-white rounded-md border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <h3 className="font-medium">Returns & Exchanges</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Our return policy and how to initiate a return
              </p>
            </Link>
            <Link
              href="/warranty"
              className="block p-4 bg-white rounded-md border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <h3 className="font-medium">Warranty Information</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Details about our product warranties
              </p>
            </Link>
            <Link
              href="/order-tracking"
              className="block p-4 bg-white rounded-md border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <h3 className="font-medium">Order Tracking</h3>
              <p className="text-sm text-neutral-600 mt-1">
                How to track your order status
              </p>
            </Link>
            <Link
              href="/assembly"
              className="block p-4 bg-white rounded-md border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <h3 className="font-medium">Assembly Instructions</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Guides for assembling your furniture
              </p>
            </Link>
            <Link
              href="/care"
              className="block p-4 bg-white rounded-md border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <h3 className="font-medium">Product Care</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Tips for maintaining your furniture
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
