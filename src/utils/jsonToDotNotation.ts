/**
 * Parses different input formats into a JavaScript object
 * @param input - The input string (JSON or object literal)
 * @returns The parsed object
 */
export function parseInput(input: string): Record<string, any> {
  // Remove any leading/trailing whitespace
  input = input.trim();

  // Try parsing as JSON first
  try {
    return JSON.parse(input);
  } catch (error) {
    // If JSON parsing fails, try parsing as object literal
    try {
      // Handle export default {} as const
      if (input.startsWith('export default')) {
        input = input.replace('export default', '').trim();
      }

      // Remove 'as const' if present
      input = input.replace(/as\s+const\s*$/, '').trim();

      // If the input is just an object literal, evaluate it
      if (input.startsWith('{') && input.endsWith('}')) {
        // Use Function constructor to safely evaluate the object literal
        return new Function(`return ${input}`)();
      }

      throw new Error('Invalid input format');
    } catch (error) {
      throw new Error('Input must be valid JSON or object literal');
    }
  }
}

/**
 * Converts a nested object to dot notation format
 * @param obj - The input nested object
 * @param prefix - The current key prefix (used in recursion)
 * @returns The flattened object with dot notation keys
 */
export function jsonToDotNotation(
  obj: Record<string, any>,
  prefix = ''
): Record<string, any> {
  return Object.keys(obj).reduce((result: Record<string, any>, key: string) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (
      obj[key] !== null &&
      typeof obj[key] === 'object' &&
      !Array.isArray(obj[key])
    ) {
      // If the value is an object, recurse deeper
      Object.assign(result, jsonToDotNotation(obj[key], prefixedKey));
    } else {
      // For primitive values, arrays, and null, add the dot-notated key-value pair
      result[prefixedKey] = obj[key];
    }

    return result;
  }, {});
}

/**
 * Converts the flattened dot notation object to a formatted string
 * @param dotNotationObj - The flattened object with dot notation keys
 * @returns A string representation of the dot notation object
 */
export function formatDotNotation(dotNotationObj: Record<string, any>): string {
  const entries = Object.entries(dotNotationObj);

  if (entries.length === 0) {
    return '{}';
  }

  const formattedEntries = entries.map(([key, value]) => {
    // Format arrays and objects properly
    if (Array.isArray(value)) {
      return `"${key}": ${JSON.stringify(value)}`;
    } else if (typeof value === 'object' && value !== null) {
      return `"${key}": ${JSON.stringify(value)}`;
    } else {
      // Use backticks for primitive values
      return `"${key}": "${String(value)}"`;
    }
  });

  return `{\n  ${formattedEntries.join(',\n  ')}\n}`;
}

/**
 * Checks if a string is valid input (JSON or object literal)
 * @param input - The string to validate
 * @returns Whether the string is valid input
 */
export function isValidInput(input: string): boolean {
  try {
    parseInput(input);
    return true;
  } catch (error) {
    return false;
  }
}
