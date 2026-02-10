/**
 * Train Coach Finder - Array Search & Check
 *
 * You're building a train passenger lookup tool. You need to search,
 * validate, and filter passenger records based on name and booking status.
 *
 * Data format: passengers = [
 *   { name: "Rahul", coach: "S5", seat: 42, status: "confirmed" },
 *   { name: "Priya", coach: "S3", seat: 15, status: "waitlisted" },
 *   ...
 * ]
 *
 * Methods to explore: .find(), .findIndex(), .some(), .every(), .filter()
 *
 * Functions:
 *
 * 1. findPassenger(passengers, name)
 *    - Find and return passenger object by name (case-insensitive).
 *    - Use .find() with lowercase comparison.
 *    - If passengers is not an array or name is not a string, return undefined.
 *    - Example: findPassenger([{name:"Rahul"}], "rahul") => {name:"Rahul"}
 *
 * 2. getPassengerIndex(passengers, name)
 *    - Return index of passenger by name (case-insensitive).
 *    - Use .findIndex().
 *    - If passengers is not an array or name is not a string, return -1.
 *    - Example: getPassengerIndex([{name:"A"},{name:"B"}], "b") => 1
 *
 * 3. isAnyWaitlisted(passengers)
 *    - Return true if any passenger has status "waitlisted".
 *    - Use .some().
 *    - If passengers is not an array or is empty, return false.
 *
 * 4. areAllConfirmed(passengers)
 *    - Return true only if every passenger has status "confirmed".
 *    - Use .every().
 *    - If passengers is not an array or is empty, return false.
 *
 * 5. getWaitlistedPassengers(passengers)
 *    - Return a new array containing only waitlisted passengers.
 *    - Use .filter().
 *    - If passengers is not an array, return [].
 *
 * @example
 * findPassenger(passengers, "Rahul")     // => { name: "Rahul", ... }
 * isAnyWaitlisted(passengers)             // => true / false
 * getWaitlistedPassengers(passengers)     // => [ ...waitlisted passengers ]
 */

export function findPassenger(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== "string") {
    return undefined;
  }

  const normalizedName = name.toLowerCase();
  return passengers.find(
    (p) => typeof p?.name === "string" && p.name.toLowerCase() === normalizedName,
  );
}

export function getPassengerIndex(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== "string") {
    return -1;
  }

  const normalizedName = name.toLowerCase();
  return passengers.findIndex(
    (p) => typeof p?.name === "string" && p.name.toLowerCase() === normalizedName,
  );
}

export function isAnyWaitlisted(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) {
    return false;
  }

  return passengers.some((p) => p.status === "waitlisted");
}

export function areAllConfirmed(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) {
    return false;
  }

  return passengers.every((p) => p.status === "confirmed");
}

export function getWaitlistedPassengers(passengers) {
  if (!Array.isArray(passengers)) {
    return [];
  }

  return passengers.filter((p) => p.status === "waitlisted");
}
