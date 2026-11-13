import test from "node:test";
import assert from "node:assert/strict";
import { demoProducts } from "../src/data/products.ts";
import { addCartItem, CART_STORAGE_KEY, loadCart, MAX_CART_QUANTITY, parseCart, saveCart, updateCartQuantity } from "../src/lib/cart-storage.ts";

const product = demoProducts[0];
const second = demoProducts[1];
function memoryStorage(initial = null) {
  let saved = initial;
  return { getItem: () => saved, setItem: (_key, value) => { saved = value; }, removeItem: () => { saved = null; } };
}

// Call loadCart as the UI does: parse errors are recovered at the storage boundary.
test("malformed JSON and structurally invalid storage do not reach the UI", () => {
  for (const saved of ["{", "null", "{}", '"text"', "42", '[null,{},[],{"quantity":1}]']) {
    assert.deepEqual(loadCart(() => memoryStorage(saved), demoProducts), []);
  }
});

test("legacy carts retain IDs and quantities but discard altered product details", () => {
  const legacy = JSON.stringify([{ product: { id: product.id, name: "Alterado", priceCents: 1, image: "https://example.invalid/tracker.png" }, quantity: 3 }]);
  const restored = parseCart(legacy, demoProducts);
  assert.equal(restored[0].product, product);
  assert.equal(restored[0].quantity, 3);
  assert.equal(restored[0].product.priceCents, product.priceCents);
});

test("only compact IDs and quantities are persisted and round-trip to current catalog", () => {
  const storage = memoryStorage();
  const items = [{ product, quantity: 2 }];
  saveCart(() => storage, items);
  assert.equal(storage.getItem(CART_STORAGE_KEY), JSON.stringify([{ id: product.id, quantity: 2 }]));
  const updatedProduct = { ...product, priceCents: product.priceCents + 100 };
  assert.deepEqual(loadCart(() => storage, [updatedProduct]), [{ product: updatedProduct, quantity: 2 }]);
});

test("unknown IDs, invalid quantities and duplicates are ignored; quantities are capped", () => {
  const saved = JSON.stringify([
    { id: "unknown", quantity: 1 },
    { id: product.id, quantity: 0 },
    { id: product.id, quantity: "2" },
    { id: product.id, quantity: 1.5 },
    { id: product.id, quantity: -3 },
    { id: product.id, quantity: 4 },
    { id: product.id, quantity: 80 },
    { product: { id: product.id }, quantity: 9 },
    { id: second.id, quantity: 1000 },
  ]);
  assert.deepEqual(parseCart(saved, demoProducts), [{ product, quantity: 4 }, { product: second, quantity: MAX_CART_QUANTITY }]);
  assert.deepEqual(parseCart(" ".repeat(1_000_001), demoProducts), []);
});

test("storage getter, read, remove and quota errors fall back to in-memory shopping", () => {
  const denied = () => { throw new Error("Storage denied"); };
  assert.deepEqual(loadCart(denied, demoProducts), []);
  assert.deepEqual(loadCart(() => ({ getItem: denied, removeItem: denied }), demoProducts), []);
  assert.deepEqual(loadCart(() => ({ getItem: () => "{", removeItem: denied }), demoProducts), []);
  assert.doesNotThrow(() => saveCart(denied, [{ product, quantity: 1 }]));
  assert.doesNotThrow(() => saveCart(() => ({ setItem: denied }), [{ product, quantity: 1 }]));
});

test("add and update actions accept catalog IDs and bounded whole quantities only", () => {
  assert.deepEqual(addCartItem([], demoProducts, "unknown"), []);
  assert.deepEqual(addCartItem([], demoProducts, { id: product.id }), []);
  let items = addCartItem([], demoProducts, product.id);
  assert.equal(items[0].product, product);
  for (let i = 0; i < 110; i++) items = addCartItem(items, demoProducts, product.id);
  assert.equal(items.length, 1);
  assert.equal(items[0].quantity, MAX_CART_QUANTITY);
  for (const invalid of [NaN, Infinity, -1, 1.5, "2", null, undefined]) {
    assert.equal(updateCartQuantity(items, demoProducts, product.id, invalid), items);
  }
  assert.equal(updateCartQuantity(items, demoProducts, "unknown", 0), items);
  assert.equal(updateCartQuantity(items, demoProducts, product.id, 200)[0].quantity, MAX_CART_QUANTITY);
  assert.deepEqual(updateCartQuantity(items, demoProducts, product.id, 0), []);
});
