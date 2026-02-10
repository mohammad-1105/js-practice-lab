/**
 * Coffee Shop Order System - String Basics
 *
 * The cafe is busy and incoming orders are messy. You need to process
 * order text safely using basic string methods.
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 * .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 * 1. getCoffeeOrderLength(order)
 *    - Trim the order first, then return its length.
 *    - If order is not a string, return -1.
 *    - Example: getCoffeeOrderLength("  cappuccino  ") => 10
 *
 * 2. shoutCoffeeOrder(order)
 *    - Convert a valid order to uppercase after trimming.
 *    - If order is not a string or is empty after trim, return "".
 *    - Example: shoutCoffeeOrder(" iced mocha ") => "ICED MOCHA"
 *
 * 3. whisperCoffeeOrder(order)
 *    - Convert a valid order to lowercase after trimming.
 *    - If order is not a string or is empty after trim, return "".
 *    - Example: whisperCoffeeOrder("FLAT WHITE") => "flat white"
 *
 * 4. hasSpecialIngredient(order, ingredient)
 *    - Check if order contains ingredient (case-insensitive).
 *    - Convert both to lowercase before checking .includes().
 *    - If either input is not a string, return false.
 *    - Example: hasSpecialIngredient("Hazelnut Latte", "hazelnut") => true
 *
 * 5. getFirstAndLastChar(order)
 *    - Trim first, then return first and last character.
 *    - Use .charAt(0) for first and .at(-1) for last.
 *    - Return object shape: { first, last }.
 *    - If order is not a string or is empty after trim, return null.
 *    - Example: getFirstAndLastChar("espresso") => { first: "e", last: "o" }
 *
 * @example
 * getCoffeeOrderLength("  latte  ")           // => 5
 * shoutCoffeeOrder("cold brew")               // => "COLD BREW"
 * hasSpecialIngredient("Vanilla Latte", "VANILLA") // => true
 */

export function getCoffeeOrderLength(order) {
  if (typeof order !== "string") {
    return -1;
  }

  return order.trim().length;
}

export function shoutCoffeeOrder(order) {
  if (typeof order !== "string") {
    return "";
  }

  const trimmedOrder = order.trim();
  if (trimmedOrder.length === 0) {
    return "";
  }

  return trimmedOrder.toUpperCase();
}

export function whisperCoffeeOrder(order) {
  if (typeof order !== "string") {
    return "";
  }

  const trimmedOrder = order.trim();
  if (trimmedOrder.length === 0) {
    return "";
  }

  return trimmedOrder.toLowerCase();
}

export function hasSpecialIngredient(order, ingredient) {
  if (typeof order !== "string" || typeof ingredient !== "string") {
    return false;
  }

  return order.toLowerCase().includes(ingredient.toLowerCase());
}

export function getFirstAndLastChar(order) {
  if (typeof order !== "string") {
    return null;
  }

  const trimmedOrder = order.trim();
  if (trimmedOrder.length === 0) {
    return null;
  }

  return {
    first: trimmedOrder.charAt(0),
    last: trimmedOrder.at(-1),
  };
}
