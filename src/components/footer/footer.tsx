import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold">LuxeHome</span>
            </Link>
            <p className="text-neutral-600 mb-4 max-w-xs">
              Premium furniture for modern living. Crafted with care, designed
              for life.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-600 hover:text-neutral-900"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/collections/living-room"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Living Room
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/bedroom"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Bedroom
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/dining"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/office"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Office
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/outdoor"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Outdoor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-neutral-600 hover:text-neutral-900"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-sm text-neutral-600">
              &copy; {new Date().getFullYear()} LuxeHome Furniture. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
