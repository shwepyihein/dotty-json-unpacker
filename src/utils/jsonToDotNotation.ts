
/**
 * Converts a nested JSON object to dot notation format
 * @param obj - The input nested JSON object
 * @param prefix - The current key prefix (used in recursion)
 * @returns The flattened object with dot notation keys
 */
export function jsonToDotNotation(obj: Record<string, any>, prefix = ''): Record<string, any> {
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
    // Format value based on its type
    const formattedValue = formatValue(value);
    return `"${key}": ${formattedValue}`;
  });
  
  return `{\n  ${formattedEntries.join(',\n  ')}\n}`;
}

/**
 * Format a value for display, handling different types appropriately
 * @param value - The value to format
 * @returns A properly formatted string representation of the value
 */
function formatValue(value: any): string {
  if (typeof value === 'string') {
    // Escape double quotes in the string value
    const escapedValue = value.replace(/"/g, '\\"');
    return `"${escapedValue}"`;
  } else if (value === null) {
    return 'null';
  } else if (typeof value === 'undefined') {
    return 'undefined';
  } else if (Array.isArray(value)) {
    const items = value.map(formatValue).join(', ');
    return `[${items}]`;
  } else if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  
  return String(value);
}

/**
 * Checks if a string is valid JSON
 * @param jsonString - The string to validate
 * @returns Whether the string is valid JSON
 */
export function isValidJson(jsonString: string): boolean {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    return false;
  }
}
