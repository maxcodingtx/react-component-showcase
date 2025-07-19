export function testHex(str: string) {
  const hexRegex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  return hexRegex.test(str);
}
