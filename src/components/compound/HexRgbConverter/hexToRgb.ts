export function hexToRgb(hex: string): number[] {
  let cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;

  if (cleanHex.length !== 3 && cleanHex.length !== 6) {
    return [];
  }

  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Parse red, green, and blue values
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  // Return RGB values
  return [r, g, b];
}
