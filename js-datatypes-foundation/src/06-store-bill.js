/**
 * Store Billing System - Array Transform
 *
 * A local store wants digital billing helpers for name lists,
 * affordability filters, totals, sorting, and printable invoice lines.
 *
 * Data format: items = [
 *   { name: "Flour", price: 40, qty: 2 },
 *   { name: "Lentils", price: 80, qty: 1 },
 *   ...
 * ]
 *
 * Methods to explore: .map(), .filter(), .reduce(), .sort(), .join()
 *
 * Functions:
 *
 * 1. getItemNames(items)
 *    - Return an array of item names using .map().
 *    - If items is not an array, return [].
 *
 * 2. getAffordableItems(items, maxPrice)
 *    - Return items where item.price <= maxPrice using .filter().
 *    - If items is not an array or maxPrice is not a number, return [].
 *
 * 3. calculateTotal(items)
 *    - Return total bill using .reduce() over (price * qty).
 *    - If items is not an array or empty, return 0.
 *
 * 4. sortByPrice(items, ascending)
 *    - Return a NEW sorted array (do not mutate original).
 *    - If ascending is true: low to high; else high to low.
 *    - If items is not an array, return [].
 *
 * 5. formatBill(items)
 *    - Convert each item to: "name x qty = Rs.total".
 *    - Join lines with "\n".
 *    - If items is not an array or empty, return "".
 *
 * @example
 * getItemNames([{name:"Flour",price:40,qty:2}])       // => ["Flour"]
 * calculateTotal([{price:40,qty:2},{price:80,qty:1}])  // => 160
 * formatBill([{name:"Flour",price:40,qty:2}])         // => "Flour x 2 = Rs.80"
 */

export function getItemNames(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item) => item?.name);
}

export function getAffordableItems(items, maxPrice) {
  if (!Array.isArray(items) || typeof maxPrice !== "number") {
    return [];
  }

  return items.filter((item) => item?.price <= maxPrice);
}

export function calculateTotal(items) {
  if (!Array.isArray(items)) {
    return 0;
  }

  return items.reduce(
    (total, item) => total + (item?.price || 0) * (item?.qty || 0),
    0,
  );
}

export function sortByPrice(items, ascending) {
  if (!Array.isArray(items)) {
    return [];
  }

  const sorted = [...items].sort((a, b) => (a?.price || 0) - (b?.price || 0));
  return ascending ? sorted : sorted.reverse();
}

export function formatBill(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return items
    .map((item) => {
      const total = (item?.price || 0) * (item?.qty || 0);
      return `${item?.name || "Unknown"} x ${item?.qty || 0} = Rs.${total}`;
    })
    .join("\n");
}
