import {
  ShieldCheck,
  AlertCircle,
  FileText,
  PenToolIcon as Tool,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty Information | Product Guarantees",
  description:
    "Learn about our product warranties, coverage details, and how to make a warranty claim.",
};

export default function WarrantyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Warranty Information
          </h1>
          <p className="text-neutral-600 mt-2 md:text-xl">
            We stand behind the quality of our furniture with comprehensive
            warranty coverage.
          </p>
        </div>

        <div className="prose max-w-none">
          <p>
            At LuxeHome, we&apos;re committed to providing furniture of
            exceptional quality and durability. Our warranties reflect our
            confidence in our products and our dedication to customer
            satisfaction. All LuxeHome furniture comes with warranty protection
            against manufacturing defects in materials and workmanship.
          </p>
        </div>

        <div className="bg-neutral-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            Warranty Coverage by Product Category
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md border border-neutral-200">
              <h3 className="font-medium">Upholstered Furniture</h3>
              <p className="text-sm text-neutral-600 mt-1">
                <strong>5-Year Limited Warranty:</strong> Covers frames,
                springs, and cushions against manufacturing defects. 1-year
                coverage on fabric and leather for seam separation, fabric
                tears, or leather splitting not resulting from improper use.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md border border-neutral-200">
              <h3 className="font-medium">Wood Furniture</h3>
              <p className="text-sm text-neutral-600 mt-1">
                <strong>5-Year Limited Warranty:</strong> Covers structural
                integrity and workmanship of all wood components. Includes
                protection against warping, cracking, and joint separation under
                normal use.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md border border-neutral-200">
              <h3 className="font-medium">Dining Tables and Chairs</h3>
              <p className="text-sm text-neutral-600 mt-1">
                <strong>5-Year Limited Warranty:</strong> Covers structural
                components against manufacturing defects. 1-year coverage on
                moving parts, hardware, and finish.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md border border-neutral-200">
              <h3 className="font-medium">Mattresses</h3>
              <p className="text-sm text-neutral-600 mt-1">
                <strong>10-Year Limited Warranty:</strong> Covers manufacturing
                defects, including sagging greater than 1.5 inches not caused by
                improper foundation or support.
              </p>
            </div>
            <div className="bg-white p-4 rounded-md border border-neutral-200">
              <h3 className="font-medium">Outdoor Furniture</h3>
              <p className="text-sm text-neutral-600 mt-1">
                <strong>3-Year Limited Warranty:</strong> Covers frames against
                structural failure. 1-year coverage on cushions, slings, and
                finishes against fading or deterioration beyond normal
                weathering.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <ShieldCheck className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">What&apos;s Covered</h3>
                <ul className="mt-2 space-y-2 text-neutral-600 list-disc pl-5">
                  <li>Manufacturing defects in materials and workmanship</li>
                  <li>Structural integrity issues</li>
                  <li>
                    Premature deterioration not resulting from normal wear
                  </li>
                  <li>Hardware failures under normal use</li>
                  <li>
                    Excessive finish fading or peeling not caused by
                    environmental factors
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <AlertCircle className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">What&apos;s Not Covered</h3>
                <ul className="mt-2 space-y-2 text-neutral-600 list-disc pl-5">
                  <li>Normal wear and tear</li>
                  <li>
                    Damage resulting from improper use, accidents, or abuse
                  </li>
                  <li>
                    Changes in wood color due to aging or exposure to light
                  </li>
                  <li>
                    Variations in natural materials (wood grain, leather
                    markings, etc.)
                  </li>
                  <li>Damage from improper cleaning or maintenance</li>
                  <li>Commercial use of residential furniture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h3 className="font-bold text-lg mb-4">
            How to Make a Warranty Claim
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-sm font-medium mr-3">
                1
              </div>
              <div>
                <strong className="block font-medium">
                  Gather Information
                </strong>
                <p className="text-neutral-600 mt-1">
                  Locate your order number, purchase date, and take clear photos
                  of the issue from multiple angles.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-sm font-medium mr-3">
                2
              </div>
              <div>
                <strong className="block font-medium">
                  Contact Customer Service
                </strong>
                <p className="text-neutral-600 mt-1">
                  Call (555) 123-4567 or email warranty@luxehome.com with your
                  order details and description of the issue.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-sm font-medium mr-3">
                3
              </div>
              <div>
                <strong className="block font-medium">
                  Submit Documentation
                </strong>
                <p className="text-neutral-600 mt-1">
                  Our team will provide instructions for submitting photos and
                  any additional information needed to evaluate your claim.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-neutral-50 text-sm font-medium mr-3">
                4
              </div>
              <div>
                <strong className="block font-medium">Claim Review</strong>
                <p className="text-neutral-600 mt-1">
                  Our warranty team will review your claim and respond within 5
                  business days with a resolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <FileText className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Warranty Registration</h3>
                <p className="mt-2 text-neutral-600">
                  Your warranty is automatically registered with your purchase.
                  Keep your order confirmation email for your records.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <Tool className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Repair or Replace</h3>
                <p className="mt-2 text-neutral-600">
                  At our discretion, we will repair, replace, or provide a store
                  credit for items with confirmed warranty issues.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-neutral-200">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-neutral-100 rounded-full">
                <Clock className="h-5 w-5 text-neutral-700" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Extended Protection</h3>
                <p className="mt-2 text-neutral-600">
                  For additional peace of mind, we offer optional extended
                  protection plans at the time of purchase.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Have Questions About Your Warranty?
          </h2>
          <p className="mb-6">
            Our customer service team is here to help with any questions about
            your warranty coverage.
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
