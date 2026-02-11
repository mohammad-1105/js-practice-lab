/**
 * Food Delivery Order Builder
 *
 * You are building a delivery-checkout service with add-ons, coupons, tax, and fees.
 *
 * Rules:
 *   - cart format:
 *     [{ name: "Burger", price: 12, qty: 2, addons: ["Extra Sauce:2", "Fries:4"] }, ...]
 *   - Add-on format: "AddonName:Price"
 *   - itemTotal = (price + addonPricePerUnit) * qty
 *   - Build:
 *     - items: [{ name, qty, basePrice, addonTotal, itemTotal }]
 *     - subtotal: sum of itemTotal
 *     - deliveryFee: 30 if subtotal < 500, 15 if 500-999, else 0
 *     - salesTax: 5% of subtotal, rounded to 2 decimals
 *     - discount:
 *       - FIRST50: 50% off subtotal, max 150
 *       - FLAT100: 100 off
 *       - FREESHIP: deliveryFee becomes 0 (discount equals original delivery fee)
 *       - invalid/no coupon: 0
 *     - grandTotal = subtotal + deliveryFee + salesTax - discount
 *     - grandTotal must not go below 0
 *   - Skip items with qty <= 0
 *
 * Validation:
 *   - If cart is not an array or is empty, return null
 *
 * @param {Array<{ name: string, price: number, qty: number, addons?: string[] }>} cart
 * @param {string} [coupon]
 * @returns {{ items: Array<{ name: string, qty: number, basePrice: number, addonTotal: number, itemTotal: number }>, subtotal: number, deliveryFee: number, salesTax: number, discount: number, grandTotal: number } | null}
 */
export function buildDeliveryOrder(cart, coupon) {
  // TODO: implement
}
