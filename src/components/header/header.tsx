"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { CartDrawer } from "@/components/cart-drawer/cart-drawer";
import { SearchDialog } from "@/components/search-dialog/search-dialog";
import { AuthDialog } from "@/components/auth-dialog/auth-dialog";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const pathname = usePathname();
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  const handleSignInClick = () => {
    setAuthMode("signin");
    setIsAuthOpen(true);
  };

  const handleSignUpClick = () => {
    setAuthMode("signup");
    setIsAuthOpen(true);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">LuxeHome</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-neutral-900 ${
                  pathname === item.href
                    ? "text-neutral-900"
                    : "text-neutral-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              aria-label="Search"
              className="rounded-full p-2 text-neutral-600 transition-colors hover:bg-neutral-100"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </button>

            <CartDrawer />

            <Button
              className="hidden md:flex"
              variant="outline"
              size="sm"
              onClick={handleSignInClick}
            >
              Sign In
            </Button>
            <Button
              className="hidden md:flex"
              size="sm"
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-full p-2 text-neutral-600 transition-colors hover:bg-neutral-100"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && isMobile && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === item.href
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-neutral-200">
              <div className="flex items-center px-3">
                <Button
                  className="w-full"
                  variant="outline"
                  size="sm"
                  onClick={handleSignInClick}
                >
                  Sign In
                </Button>
              </div>
              <div className="mt-3 px-3">
                <Button
                  className="w-full"
                  size="sm"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Dialog */}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Auth Dialog */}
      <AuthDialog
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
}
