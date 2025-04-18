import {
  RotateCcw,
  Package,
  CreditCard,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Exchanges | Return Policy",
  description:
    "Learn about our 30-day return policy, how to initiate a return, and our exchange process.",
};

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Returns & Exchanges
          </h1>
          <p className="text-neutral-600 mt-2 md:text-xl">
            We want you to be completely satisfied with your purchase.
          </p>
        </div>

        <div className="prose max-w-none">
          <p>
            At LuxeHome, we stand behind the quality of our products and want
            you to be completely satisfied with your purchase. If for any reason
            you&apos;re not happy with your furniture, we offer a
            straightforward return and exchange policy.
          </p>
        </div>

        <div className="bg-neutral-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Return Policy Overview</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="p-2 bg-white rounded-full border border-neutral-200 mr-3">
                <Clock className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <strong className="block font-medium">
                  30-Day Return Window
                </strong>
                <span className="text-neutral-600">
                  You have 30 days from the date of delivery to initiate a
                  return for most items.
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="p-2 bg-white rounded-full border border-neutral-200 mr-3">
                <Package className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <strong className="block font-medium">
                  Original Condition
                </strong>
                <span className="text-neutral-600">
                  Items must be in their original condition, unused,
                  unassembled, and in the original packaging.
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="p-2 bg-white rounded-full border border-neutral-200 mr-3">
                <CreditCard className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <strong className="block font-medium">Refund Method</strong>
                <span className="text-neutral-600">
                  Refunds will be issued to the original payment method within
                  10-14 business days after we receive the returned item.
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="p-2 bg-white rounded-full border border-neutral-200 mr-3">
                <RotateCcw className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <strong className="block font-medium">Return Shipping</strong>
                <span className="text-neutral-600">
                  Return shipping fees are the responsibility of the customer
                  unless the item is defective or was shipped incorrectly.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="font-bold text-lg mb-4">How to Initiate a Return</h3>
            <ol className="space-y-3 text-neutral-600 list-decimal pl-5">
              <li>
                Log in to your account and navigate to your order history.
              </li>
              <li>
                Select the order containing the item(s) you wish to return.
              </li>
              <li>Click on &quot;Return Items&quot; and follow the prompts.</li>
              <li>Print the return shipping label (if applicable).</li>
              <li>Package the item securely in its original packaging.</li>
              <li>
                Attach the return shipping label and drop off at the specified
                carrier.
              </li>
            </ol>
            <p className="mt-4 text-sm">
              Don&apos;t have an account? Contact our customer service team at
              (555) 123-4567 for assistance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <h3 className="font-bold text-lg mb-4">Exchanges</h3>
            <p className="text-neutral-600 mb-4">
              If you&apos;d like to exchange an item for a different color,
              size, or model, please follow these steps:
            </p>
            <ol className="space-y-3 text-neutral-600 list-decimal pl-5">
              <li>
                Initiate a return for the original item following the return
                process.
              </li>
              <li>Place a new order for the desired item.</li>
            </ol>
            <p className="mt-4 text-neutral-600">
              This two-step process ensures the fastest way to get your new
              item, as waiting for us to receive your return before processing
              an exchange could cause delays.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-neutral-100 rounded-full">
              <AlertCircle className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Non-Returnable Items</h3>
              <p className="mt-2 text-neutral-600 mb-4">
                The following items cannot be returned unless they are
                defective:
              </p>
              <ul className="list-disc pl-5 text-neutral-600 space-y-1">
                <li>Custom or made-to-order furniture</li>
                <li>Items marked as final sale or clearance</li>
                <li>Items that have been assembled, used, or altered</li>
                <li>Mattresses that have been unboxed or used</li>
                <li>Gift cards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Need Help with a Return?</h2>
          <p className="mb-6">
            Our customer service team is here to assist you with any questions
            about returns or exchanges.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-200"
          >
            <Link href="/contact">Contact Customer Service</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
