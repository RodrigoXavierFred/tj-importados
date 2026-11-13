"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { demoProducts, type Product } from "@/data/products";
import { addCartItem, loadCart, saveCart, updateCartQuantity, type CartItem } from "@/lib/cart-storage";

export type { CartItem } from "@/lib/cart-storage";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  totalCents: number;
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setItems(loadCart(() => window.localStorage, demoProducts));
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hydrated) saveCart(() => window.localStorage, items);
  }, [hydrated, items]);

  useEffect(() => {
    document.body.classList.toggle("cart-open", isOpen);
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("cart-open");
    };
  }, [isOpen]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    totalCents: items.reduce((total, item) => total + item.product.priceCents * item.quantity, 0),
    isOpen,
    addItem(product) {
      setItems(current => addCartItem(current, demoProducts, product.id));
    },
    removeItem(productId) {
      setItems(current => current.filter(item => item.product.id !== productId));
    },
    updateQuantity(productId, quantity) {
      setItems(current => updateCartQuantity(current, demoProducts, productId, quantity));
    },
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  }), [isOpen, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart precisa estar dentro de CartProvider");
  return context;
}
