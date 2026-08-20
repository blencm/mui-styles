/**
 * Extracts style rules that contain functions so JSS can update them per render.
 */
export function getDynamicStyles(styles: Record<string, any>) {
  let extracted: Record<string, any> | null = null;

  for (const key in styles) {
    const value = styles[key];
    const type = typeof value;

    if (type === 'function') {
      if (!extracted) extracted = {};
      extracted[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      const nested = getDynamicStyles(value);
      if (nested) {
        if (!extracted) extracted = {};
        extracted[key] = nested;
      }
    }
  }

  return extracted;
}
