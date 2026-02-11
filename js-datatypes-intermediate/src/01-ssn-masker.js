/**
 * SSN Masker
 *
 * You are building a fintech dashboard that displays sensitive identifiers.
 * Only the last 4 digits should be visible; the rest must be masked.
 *
 * Rules:
 *   - Input must be a string of exactly 12 digits
 *   - Mask the first 8 digits with "X"
 *   - Preserve the last 4 digits
 *   - Output format: "XXXX-XXXX-1234"
 *
 * Validation:
 *   - If input is not a string, return "INVALID"
 *   - If length is not exactly 12, return "INVALID"
 *   - If input contains non-digit characters, return "INVALID"
 *
 * @param {string} id
 * @returns {string}
 */
export function maskSSN(id) {
  if (typeof id !== "string" || id.length !== 12) {
    return "INVALID";
  }

  if (!/^\d+$/.test(id)) {
    return "INVALID";
  }

  const lastFourDigits = id.slice(-4);
  const maskedPart1 = "X".repeat(4);
  const maskedPart2 = "X".repeat(4);

  return `${maskedPart1}-${maskedPart2}-${lastFourDigits}`;
}
