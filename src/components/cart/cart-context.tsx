"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

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
const STORAGE_KEY = "tj-importados-sacola";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved) as CartItem[]);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
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
      setItems(current => {
        const existing = current.find(item => item.product.id === product.id);
        if (existing) return current.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        return [...current, { product, quantity: 1 }];
      });
    },
    removeItem(productId) {
      setItems(current => current.filter(item => item.product.id !== productId));
    },
    updateQuantity(productId, quantity) {
      if (quantity < 1) {
        setItems(current => current.filter(item => item.product.id !== productId));
        return;
      }
      setItems(current => current.map(item => item.product.id === productId ? { ...item, quantity } : item));
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
