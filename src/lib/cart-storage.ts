import type { Product } from "@/data/products";

export type CartItem = { product: Product; quantity: number };
type CartStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;
type StorageProvider = () => CartStorage | null;

export const CART_STORAGE_KEY = "tj-importados-sacola";
export const MAX_CART_QUANTITY = 99;
const MAX_STORAGE_LENGTH = 1_000_000;

function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function quantity(value: unknown): number | null {
  return typeof value === "number" && Number.isSafeInteger(value) && value > 0
    ? Math.min(value, MAX_CART_QUANTITY)
    : null;
}

function findProduct(catalog: readonly Product[], id: unknown) {
  return typeof id === "string" ? catalog.find(product => product.id === id) : undefined;
}

// Never trust product details or prices restored from browser storage.
// Legacy entries containing an entire product are migrated by their ID only.
export function parseCart(saved: string | null, catalog: readonly Product[]): CartItem[] {
  if (!saved || saved.length > MAX_STORAGE_LENGTH) return [];
  const parsed: unknown = JSON.parse(saved);
  if (!Array.isArray(parsed)) return [];
  const seen = new Set<string>();
  const items: CartItem[] = [];
  for (const entry of parsed) {
    if (!record(entry)) continue;
    const id = typeof entry.id === "string" ? entry.id : record(entry.product) ? entry.product.id : undefined;
    const product = findProduct(catalog, id);
    const count = quantity(entry.quantity);
    if (!product || count === null || seen.has(product.id)) continue;
    seen.add(product.id);
    items.push({ product, quantity: count });
    if (items.length >= catalog.length) break;
  }
  return items;
}

export function loadCart(getStorage: StorageProvider, catalog: readonly Product[]): CartItem[] {
  try {
    const storage = getStorage();
    if (!storage) return [];
    try {
      return parseCart(storage.getItem(CART_STORAGE_KEY), catalog);
    } catch {
      // A storage getter, read or cleanup may all be denied by the browser.
      try { storage.removeItem(CART_STORAGE_KEY); } catch { /* Use an in-memory cart. */ }
      return [];
    }
  } catch {
    return [];
  }
}

export function saveCart(getStorage: StorageProvider, items: readonly CartItem[]) {
  try {
    getStorage()?.setItem(CART_STORAGE_KEY, JSON.stringify(items.map(item => ({
      id: item.product.id,
      quantity: item.quantity,
    }))));
  } catch {
    // Quota or privacy settings must not interrupt shopping in this tab.
  }
}

export function addCartItem(items: CartItem[], catalog: readonly Product[], id: unknown): CartItem[] {
  const product = findProduct(catalog, id);
  if (!product) return items;
  const existing = items.find(item => item.product.id === product.id);
  if (existing) return items.map(item => item.product.id === product.id
    ? { product, quantity: Math.min(item.quantity + 1, MAX_CART_QUANTITY) }
    : item);
  return [...items, { product, quantity: 1 }];
}

export function updateCartQuantity(items: CartItem[], catalog: readonly Product[], id: unknown, value: unknown): CartItem[] {
  const product = findProduct(catalog, id);
  if (!product) return items;
  if (value === 0) return items.filter(item => item.product.id !== product.id);
  const count = quantity(value);
  if (count === null) return items;
  return items.map(item => item.product.id === product.id ? { product, quantity: count } : item);
}
