import type React from "react";
import "@/app/globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { CartProvider } from "@/lib/context/cart-context";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "LuxeHome Furniture",
    template: "%s | LuxeHome Furniture",
  },
  description:
    "Premium furniture for modern living. Discover our curated collection of high-quality furniture for every room in your home.",
  keywords: [
    "furniture",
    "home decor",
    "modern furniture",
    "luxury furniture",
    "interior design",
  ],
  authors: [{ name: "LuxeHome" }],
  creator: "LuxeHome",
  publisher: "LuxeHome",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://luxehome-furniture.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${montserrat.variable} font-sans min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </CartProvider>

        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LuxeHome Furniture",
              "url": "https://luxehome-furniture.com",
              "logo": "https://luxehome-furniture.com/logo.png",
              "sameAs": [
                "https://facebook.com/luxehomefurniture",
                "https://instagram.com/luxehomefurniture",
                "https://pinterest.com/luxehomefurniture"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
