"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart, type CartItem } from "@/lib/context/cart-context";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, itemCount, subtotal } = useCart();

  // Close cart when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isOpen &&
        !target.closest("[data-cart-drawer]") &&
        !target.closest("[data-cart-toggle]")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        type="button"
        aria-label="Shopping cart"
        className="rounded-full p-2 text-neutral-600 transition-colors hover:bg-neutral-100 relative"
        onClick={toggleCart}
        data-cart-toggle
      >
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-neutral-900 text-[10px] font-medium text-white flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true">
          <div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ease-in-out"
            data-cart-drawer
          >
            <div className="flex h-full flex-col">
              {/* Cart Header */}
              <div className="flex items-center justify-between border-b px-4 py-3">
                <h2 className="text-lg font-medium">
                  Shopping Cart ({itemCount})
                </h2>
                <button
                  onClick={toggleCart}
                  className="rounded-full p-1 text-neutral-600 hover:bg-neutral-100"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                    <ShoppingBag className="h-12 w-12 text-neutral-300" />
                    <div>
                      <p className="text-lg font-medium">Your cart is empty</p>
                      <p className="text-sm text-neutral-500">
                        Add items to your cart to see them here.
                      </p>
                    </div>
                    <Button onClick={toggleCart}>Continue Shopping</Button>
                  </div>
                ) : (
                  <ul className="divide-y">
                    {items.map((item) => (
                      <CartItemComponent
                        key={`${item.id}-${item.color || "default"}`}
                        item={item}
                        onRemove={removeItem}
                        onUpdateQuantity={updateQuantity}
                      />
                    ))}
                  </ul>
                )}
              </div>

              {/* Cart Footer */}
              {items.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex items-center justify-between font-medium">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-sm text-neutral-500">
                    Shipping and taxes calculated at checkout
                  </p>
                  <div className="grid gap-2">
                    <Button size="lg" className="w-full">
                      Checkout
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={toggleCart}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CartItemComponent({
  item,
  onRemove,
  onUpdateQuantity,
}: {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}) {
  return (
    <li className="py-4 flex">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium">
            <h3>
              <Link href={`/product/${item.id}`} className="hover:underline">
                {item.name}
              </Link>
            </h3>
            <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
          </div>
          {item.color && (
            <p className="mt-1 text-sm text-neutral-500">Color: {item.color}</p>
          )}
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border rounded-md">
            <button
              type="button"
              className="p-1"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease quantity</span>
            </button>
            <span className="px-2 text-center w-8">{item.quantity}</span>
            <button
              type="button"
              className="p-1"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase quantity</span>
            </button>
          </div>
          <button
            type="button"
            className="text-neutral-600 hover:text-neutral-900"
            onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
