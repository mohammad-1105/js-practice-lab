/**
 * Restaurant Combo Platter - Mixed Methods Capstone
 *
 * This capstone combines String, Number, Array, and Object logic to
 * build combo descriptions, stats, search, and printable receipts.
 *
 * Data format: combo = {
 *   name: "Family Veg Combo",
 *   items: ["paneer tikka", "naan", "dal fry"],
 *   price: 450,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 * 1. createComboDescription(combo)
 *    - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *    - name should be uppercase; price should use 2 decimals.
 *    - If combo is invalid or required fields missing, return "".
 *    - Required: name(string), items(array), price(number), isVeg(boolean).
 *
 * 2. getComboStats(combos)
 *    - Return stats object:
 *      { totalCombos, vegCount, nonVegCount, avgPrice, cheapest, costliest, names }
 *    - Use filter/reduce/min/max/map style logic.
 *    - avgPrice must be a 2-decimal string.
 *    - If combos is not array or empty, return null.
 *
 * 3. searchComboMenu(combos, query)
 *    - Return combos where query exists in combo name or any combo item.
 *    - Search must be case-insensitive.
 *    - If combos is invalid or query not string, return [].
 *
 * 4. generateComboReceipt(customerName, combos)
 *    - Return receipt in this shape:
 *      "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *    - Line format: "- {combo name} x Rs.{price}"
 *    - customerName should be uppercase.
 *    - If customerName invalid or combos invalid/empty, return "".
 *
 * @example
 * createComboDescription({name:"Family Veg Combo",items:["dal"],price:450,isVeg:true})
 * // => "FAMILY VEG COMBO (Veg) - Items: dal - Rs.450.00"
 */

export function createComboDescription(combo) {
  if (!combo || typeof combo !== "object") {
    return "";
  }

  const { name, items, price, isVeg } = combo;
  if (
    typeof name !== "string" ||
    !Array.isArray(items) ||
    typeof price !== "number" ||
    typeof isVeg !== "boolean"
  ) {
    return "";
  }

  return `${name.toUpperCase()} (${isVeg ? "Veg" : "Non-Veg"}) - Items: ${items.join(", ")} - Rs.${price.toFixed(2)}`;
}

export function getComboStats(combos) {
  if (!Array.isArray(combos) || combos.length === 0) {
    return null;
  }

  const totalCombos = combos.length;
  const vegCount = combos.filter((combo) => combo.isVeg).length;
  const nonVegCount = totalCombos - vegCount;

  const prices = combos.map((combo) => combo.price);
  const cheapest = Math.min(...prices);
  const costliest = Math.max(...prices);
  const avgPrice = (
    prices.reduce((sum, price) => sum + price, 0) / totalCombos
  ).toFixed(2);

  const names = combos.map((combo) => combo.name);

  return {
    totalCombos,
    vegCount,
    nonVegCount,
    avgPrice,
    cheapest,
    costliest,
    names,
  };
}

export function searchComboMenu(combos, query) {
  if (!Array.isArray(combos) || typeof query !== "string") {
    return [];
  }

  const lowerQuery = query.toLowerCase();

  return combos.filter((combo) => {
    const nameMatch = combo.name.toLowerCase().includes(lowerQuery);
    const itemsMatch = combo.items.some((item) =>
      item.toLowerCase().includes(lowerQuery),
    );

    return nameMatch || itemsMatch;
  });
}

export function generateComboReceipt(customerName, combos) {
  if (
    typeof customerName !== "string" ||
    !Array.isArray(combos) ||
    combos.length === 0
  ) {
    return "";
  }

  const receiptLines = [
    "THALI RECEIPT",
    "---",
    `Customer: ${customerName.toUpperCase()}`,
  ];

  combos.forEach((combo) => {
    receiptLines.push(`- ${combo.name} x Rs.${combo.price}`);
  });

  const total = combos.reduce((sum, combo) => sum + combo.price, 0);
  receiptLines.push("---");
  receiptLines.push(`Total: Rs.${total}`);
  receiptLines.push(`Items: ${combos.length}`);

  return receiptLines.join("\n");
}
