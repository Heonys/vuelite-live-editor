export function typeOf(value: any): string {
  return Object.prototype.toString //
    .call(value)
    .slice(8, -1)
    .toLowerCase();
}

export function isPrimitive(value: any) {
  return value !== Object(value);
}

export function isFuction(value: any): value is (...args: any[]) => void {
  return typeOf(value) === "function";
}
