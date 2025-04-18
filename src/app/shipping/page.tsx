import {
  Truck,
  Clock,
  Globe,
  CreditCard,
  AlertCircle,
  Phone,
  Mail,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Delivery | Delivery Information",
  description:
    "Learn about our shipping options, delivery times, and policies for furniture delivery.",
};

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Shipping & Delivery
          </h1>
          <p className="text-neutral-600 mt-2 md:text-xl">
            Everything you need to know about how we deliver your furniture.
          </p>
        </div>

        <div className="prose max-w-none">
          <p>
            At LuxeHome, we understand that receiving your new furniture is an
            exciting moment. We work with trusted delivery partners to ensure
            your items arrive safely and on time. Below you&apos;ll find
            information about our shipping options, delivery times, and
            policies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <Truck className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Shipping Options</h3>
                <ul className="mt-2 space-y-2 text-neutral-600">
                  <li>
                    <strong>Standard Delivery:</strong> Free on orders over
                    $1,000 (5-10 business days)
                  </li>
                  <li>
                    <strong>Express Delivery:</strong> $99 (3-5 business days)
                  </li>
                  <li>
                    <strong>White Glove Service:</strong> $199 (Includes in-home
                    delivery, assembly, and packaging removal)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <Clock className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Delivery Timeframes</h3>
                <ul className="mt-2 space-y-2 text-neutral-600">
                  <li>
                    <strong>In-Stock Items:</strong> Ships within 1-2 business
                    days
                  </li>
                  <li>
                    <strong>Made-to-Order Items:</strong> 4-6 weeks production
                    time plus shipping
                  </li>
                  <li>
                    <strong>Custom Orders:</strong> 8-12 weeks production time
                    plus shipping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Delivery Process</h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-medium">
                1
              </span>
              <span className="ml-3">
                <strong className="block font-medium">
                  Order Confirmation
                </strong>
                <span className="text-neutral-600">
                  You&apos;ll receive an email confirmation with your order
                  details and estimated delivery date.
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-medium">
                2
              </span>
              <span className="ml-3">
                <strong className="block font-medium">Processing</strong>
                <span className="text-neutral-600">
                  Your order is prepared for shipping. For in-stock items, this
                  typically takes 1-2 business days.
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-medium">
                3
              </span>
              <span className="ml-3">
                <strong className="block font-medium">
                  Shipping Confirmation
                </strong>
                <span className="text-neutral-600">
                  Once your order ships, you&apos;ll receive an email with
                  tracking information.
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-medium">
                4
              </span>
              <span className="ml-3">
                <strong className="block font-medium">
                  Delivery Scheduling
                </strong>
                <span className="text-neutral-600">
                  For large items, our delivery partner will contact you to
                  schedule a delivery window.
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-medium">
                5
              </span>
              <span className="ml-3">
                <strong className="block font-medium">Delivery</strong>
                <span className="text-neutral-600">
                  Your furniture is delivered to your home. With White Glove
                  service, items are brought inside, assembled, and packaging is
                  removed.
                </span>
              </span>
            </li>
          </ol>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <Globe className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Shipping Areas</h3>
                <p className="mt-2 text-neutral-600">
                  We currently ship to the contiguous United States. For Alaska,
                  Hawaii, and international shipping, please contact our
                  customer service team.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <CreditCard className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Shipping Costs</h3>
                <p className="mt-2 text-neutral-600">
                  Shipping costs are calculated based on the items in your
                  order, delivery location, and selected shipping method. Free
                  standard shipping is available for orders over $1,000.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <AlertCircle className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Delivery Inspection</h3>
                <p className="mt-2 text-neutral-600">
                  We recommend inspecting all items at the time of delivery. Any
                  visible damage should be noted on the delivery receipt and
                  reported to our customer service team immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Have Questions About Your Delivery?
          </h2>
          <p className="mb-6">
            Our customer service team is here to help with any questions about
            your order or delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              <Phone className="mr-2 h-4 w-4" />
              (555) 123-4567
            </a>
            <a
              href="mailto:support@luxehome.com"
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
            >
              <Mail className="mr-2 h-4 w-4" />
              support@luxehome.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
