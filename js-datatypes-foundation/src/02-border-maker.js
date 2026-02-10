/**
 * Decorative Border Maker - String Transform
 *
 * A design tool needs string-based border transformations for festival cards.
 * Use string transform methods to generate and edit patterns.
 *
 * Methods to explore: .slice(), .split(), .join(), .replaceAll(), .repeat()
 *
 * Functions:
 *
 * 1. repeatPattern(pattern, times)
 *    - Repeat pattern exactly times times.
 *    - If pattern is not a string, or times is not a positive integer, return "".
 *    - Example: repeatPattern("*-", 4) => "*-*-*-*-"
 *
 * 2. extractBorderCenter(design, start, end)
 *    - Return design.slice(start, end).
 *    - If design is not a string, return "".
 *    - If start/end are not numbers, return "".
 *    - Example: extractBorderCenter("***LOTUS***", 3, 8) => "LOTUS"
 *
 * 3. splitAndJoinBorder(colorString, oldSep, newSep)
 *    - Split using oldSep and join using newSep.
 *    - If colorString is not a string, return "".
 *    - Example: splitAndJoinBorder("red,blue,green", ",", " | ")
 *      => "red | blue | green"
 *
 * 4. replaceBorderColor(design, oldColor, newColor)
 *    - Replace all oldColor occurrences with newColor using .replaceAll().
 *    - If any input is not a string, return "".
 *    - Example: replaceBorderColor("red-blue-red", "red", "pink") => "pink-blue-pink"
 *
 * 5. makeBorder(char, length)
 *    - Build a border by repeating char and slicing to exact length.
 *    - If char is not a string, or length is not a positive integer, return "".
 *    - Example: makeBorder("=-", 7) => "=-=-=-="
 *
 * @example
 * repeatPattern("*", 5)                 // => "*****"
 * extractBorderCenter("--HELLO--", 2, 7) // => "HELLO"
 * makeBorder("abc", 5)                  // => "abcab"
 */

export function repeatPattern(pattern, times) {
  if (typeof pattern !== "string" || !Number.isInteger(times) || times <= 0) {
    return "";
  }

  return pattern.repeat(times);
}

export function extractBorderCenter(design, start, end) {
  if (
    typeof design !== "string" ||
    typeof start !== "number" ||
    typeof end !== "number"
  ) {
    return "";
  }

  return design.slice(start, end);
}

export function splitAndJoinBorder(colorString, oldSep, newSep) {
  if (typeof colorString !== "string") {
    return "";
  }

  return colorString.split(oldSep).join(newSep);
}

export function replaceBorderColor(design, oldColor, newColor) {
  if (
    typeof design !== "string" ||
    typeof oldColor !== "string" ||
    typeof newColor !== "string"
  ) {
    return "";
  }

  return design.replaceAll(oldColor, newColor);
}

export function makeBorder(char, length) {
  if (typeof char !== "string" || !Number.isInteger(length) || length <= 0) {
    return "";
  }

  return char.repeat(length).slice(0, length);
}
