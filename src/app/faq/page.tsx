"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

// FAQ categories and questions
const faqData = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How do I track my order?",
        answer:
          "You can track your order by logging into your account and viewing your order history. Alternatively, you can use the tracking number provided in your shipping confirmation email.",
      },
      {
        question: "How long will it take to receive my furniture?",
        answer:
          "Delivery times vary depending on the item and your location. In-stock items typically ship within 1-2 business days and arrive within 5-10 business days. Made-to-order items may take 4-6 weeks plus shipping time. You'll receive an estimated delivery date at checkout.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Currently, we only ship to the contiguous United States. For Alaska, Hawaii, and international shipping inquiries, please contact our customer service team.",
      },
      {
        question: "Can I change or cancel my order?",
        answer:
          "Orders can be changed or canceled within 24 hours of placement. After this window, our production process begins and changes may not be possible. Please contact customer service immediately if you need to modify your order.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for most items. Products must be in their original condition, unused, unassembled, and in the original packaging. Custom and made-to-order items cannot be returned unless defective.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "To initiate a return, log into your account, go to your order history, select the order containing the item(s) you wish to return, and click 'Return Items'. Follow the prompts to complete the return process.",
      },
      {
        question: "Who pays for return shipping?",
        answer:
          "Return shipping fees are the responsibility of the customer unless the item is defective or was shipped incorrectly. In those cases, we'll provide a prepaid return shipping label.",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Once we receive your returned item, it typically takes 3-5 business days to inspect and process. Refunds are issued to the original payment method and may take an additional 7-10 business days to appear on your statement, depending on your financial institution.",
      },
    ],
  },
  {
    category: "Product Information",
    questions: [
      {
        question: "Are your furniture dimensions exact?",
        answer:
          "We provide precise measurements for all our furniture, but please note that handcrafted items may have slight variations of up to 1 inch. We recommend measuring your space carefully before purchasing.",
      },
      {
        question: "Do your products require assembly?",
        answer:
          "Assembly requirements vary by product. Product descriptions indicate whether assembly is required and the estimated assembly time. For larger items like beds and dining tables, some assembly is typically needed. Detailed assembly instructions are included with each product.",
      },
      {
        question: "How do I care for my furniture?",
        answer:
          "Care instructions are specific to each piece and the materials used. General guidelines are included with your purchase, and you can find detailed care information on each product page. For specific questions about caring for your furniture, please contact our customer service team.",
      },
      {
        question: "Can I order fabric swatches before purchasing?",
        answer:
          "Yes, we offer complimentary fabric and leather swatches for most upholstered items. You can request swatches on the product page or by contacting customer service. Swatches typically arrive within 3-5 business days.",
      },
    ],
  },
  {
    category: "Warranty & Repairs",
    questions: [
      {
        question: "What warranty do you offer on your furniture?",
        answer:
          "Most of our furniture comes with a 5-year limited warranty against manufacturing defects. Mattresses have a 10-year warranty, and outdoor furniture has a 3-year warranty. Please visit our Warranty Information page for complete details on coverage by product category.",
      },
      {
        question: "How do I make a warranty claim?",
        answer:
          "To make a warranty claim, contact our customer service team with your order number, purchase date, and photos of the issue. Our warranty team will review your claim and respond within 5 business days with a resolution.",
      },
      {
        question: "Do you offer repairs for damaged furniture?",
        answer:
          "For items under warranty, we offer repairs for manufacturing defects at no cost. For damage not covered by warranty, we can recommend authorized repair services in your area. In some cases, we may be able to provide replacement parts for purchase.",
      },
      {
        question: "Can I purchase an extended warranty?",
        answer:
          "Yes, we offer optional extended protection plans at the time of purchase for most furniture items. These plans provide additional coverage beyond our standard warranty, including protection against accidental damage.",
      },
    ],
  },
  {
    category: "Account & Payment",
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "You can create an account by clicking 'Sign Up' in the top right corner of our website. You'll need to provide your email address and create a password. You can also create an account during the checkout process.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and LuxeHome store credit. We also offer financing options through Affirm for qualifying customers.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes, we use industry-standard encryption and security protocols to protect your payment information. We are PCI compliant and never store your full credit card details on our servers.",
      },
      {
        question: "Do you offer financing options?",
        answer:
          "Yes, we partner with Affirm to offer flexible financing options. You can select Affirm at checkout to see if you qualify. Depending on your credit, you may be eligible for 0% APR financing for 6-12 months on qualifying purchases.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFAQs = faqData
    .filter(
      (category) =>
        activeCategory === "all" || category.category === activeCategory
    )
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-600 mt-2 md:text-xl">
            Find answers to common questions about our products and services.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <Input
            type="search"
            placeholder="Search for answers..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
          >
            All
          </Button>
          {faqData.map((category) => (
            <Button
              key={category.category}
              variant={
                activeCategory === category.category ? "default" : "outline"
              }
              size="sm"
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </Button>
          ))}
        </div>

        {/* FAQ Accordion */}
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((category) => (
            <div key={category.category} className="space-y-4">
              {activeCategory === "all" && (
                <h2 className="text-xl font-bold">{category.category}</h2>
              )}
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.category}-${index}`}
                  >
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-neutral-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-neutral-50 rounded-lg">
            <p className="text-lg font-medium">No results found</p>
            <p className="text-neutral-600 mt-2">
              Try a different search term or browse all categories
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="bg-neutral-900 text-white p-8 rounded-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">
            If you couldn&apos;t find the answer you were looking for, our
            customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-200"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/help">Visit Help Center</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
