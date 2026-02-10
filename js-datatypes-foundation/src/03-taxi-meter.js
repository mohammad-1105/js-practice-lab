/**
 * Taxi Fare Calculator - Number & Math
 *
 * A taxi app needs robust fare calculations from user input, surge rules,
 * and distance values. Use Number and Math methods to implement each rule.
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 * Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 * 1. parseFare(fareString)
 *    - Parse a numeric string using parseFloat().
 *    - If fareString is not a string, or parsed value is NaN, return -1.
 *    - Example: parseFare("152.50") => 152.5
 *
 * 2. roundFare(amount, decimalPlaces)
 *    - Round using amount.toFixed(decimalPlaces).
 *    - Return type must be STRING.
 *    - If amount is not number, or decimalPlaces is not a non-negative integer,
 *      return "".
 *    - Example: roundFare(152.567, 2) => "152.57"
 *
 * 3. calculateSurge(baseFare, surgeMultiplier)
 *    - Compute baseFare * surgeMultiplier, then round UP with Math.ceil().
 *    - If baseFare or surgeMultiplier is not a positive number, return 0.
 *    - Example: calculateSurge(73, 1.8) => 132
 *
 * 4. findCheapestAndCostliest(...fares)
 *    - Filter out invalid/non-number values.
 *    - Return cheapest and costliest using Math.min/Math.max.
 *    - If no valid numbers remain, return null.
 *    - Return shape: { cheapest, costliest }.
 *
 * 5. getDistanceDifference(from, to)
 *    - Parse both values using parseInt().
 *    - Return absolute difference using Math.abs().
 *    - If either parsed value is NaN, return -1.
 *
 * @example
 * parseFare("100")                         // => 100
 * findCheapestAndCostliest(150, 80, 200)   // => { cheapest: 80, costliest: 200 }
 * getDistanceDifference("15", "8")       // => 7
 */

export function parseFare(fareString) {
  if (typeof fareString !== "string") {
    return -1;
  }

  const parsed = parseFloat(fareString);
  return Number.isNaN(parsed) ? -1 : parsed;
}

export function roundFare(amount, decimalPlaces) {
  if (
    typeof amount !== "number" ||
    !Number.isInteger(decimalPlaces) ||
    decimalPlaces < 0
  ) {
    return "";
  }

  return amount.toFixed(decimalPlaces);
}

export function calculateSurge(baseFare, surgeMultiplier) {
  if (
    typeof baseFare !== "number" ||
    typeof surgeMultiplier !== "number" ||
    baseFare <= 0 ||
    surgeMultiplier <= 0
  ) {
    return 0;
  }

  return Math.ceil(baseFare * surgeMultiplier);
}

export function findCheapestAndCostliest(...fares) {
  const validFares = fares.filter(
    (fare) => typeof fare === "number" && !Number.isNaN(fare),
  );

  if (validFares.length === 0) {
    return null;
  }

  return {
    cheapest: Math.min(...validFares),
    costliest: Math.max(...validFares),
  };
}

export function getDistanceDifference(from, to) {
  const parsedFrom = parseInt(from, 10);
  const parsedTo = parseInt(to, 10);

  if (Number.isNaN(parsedFrom) || Number.isNaN(parsedTo)) {
    return -1;
  }

  return Math.abs(parsedFrom - parsedTo);
}
