/**
 * Grocery Shopping Cart - Array Basics
 *
 * A grocery app needs helper functions to manage cart items.
 * Use core array methods for insert, remove, search, and merge operations.
 *
 * Methods to explore: .push(), .pop(), .unshift(), .includes(),
 * .concat(), Array.isArray()
 *
 * Functions:
 *
 * 1. addToCart(cart, item)
 *    - Add item to end using .push().
 *    - Return updated cart length.
 *    - If cart is not an array, return -1.
 *    - If item is not a non-empty string, return cart.length unchanged.
 *
 * 2. addUrgentItem(cart, item)
 *    - Add item to beginning using .unshift().
 *    - Return updated cart array.
 *    - If cart is not an array, return [].
 *    - If item is invalid, return cart unchanged.
 *
 * 3. removeLastItem(cart)
 *    - Remove and return last item using .pop().
 *    - If cart is not an array or is empty, return undefined.
 *
 * 4. isInCart(cart, item)
 *    - Return whether item exists in cart using .includes().
 *    - If cart is not an array, return false.
 *
 * 5. mergeCarts(cart1, cart2)
 *    - Merge using .concat() and return new array.
 *    - Treat invalid inputs as empty arrays.
 *
 * @example
 * addToCart(["tomato", "onion"], "chili")      // => 3
 * addUrgentItem(["milk"], "bread")              // => ["bread", "milk"]
 * mergeCarts(["apple"], ["banana", "grape"])  // => ["apple", "banana", "grape"]
 */

export function addToCart(cart, item) {
  if (!Array.isArray(cart)) {
    return -1;
  }

  if (typeof item !== "string" || item.length === 0) {
    return cart.length;
  }

  return cart.push(item);
}

export function addUrgentItem(cart, item) {
  if (!Array.isArray(cart)) {
    return [];
  }

  if (typeof item !== "string" || item.length === 0) {
    return cart;
  }

  cart.unshift(item);
  return cart;
}

export function removeLastItem(cart) {
  if (!Array.isArray(cart) || cart.length === 0) {
    return undefined;
  }

  return cart.pop();
}

export function isInCart(cart, item) {
  if (!Array.isArray(cart)) {
    return false;
  }

  return cart.includes(item);
}

export function mergeCarts(cart1, cart2) {
  const firstCart = Array.isArray(cart1) ? cart1 : [];
  const secondCart = Array.isArray(cart2) ? cart2 : [];

  return firstCart.concat(secondCart);
}
