import { FeatureNames, featureNames } from "@/types";

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

export const writeClipboardText = async (text: string) => {
  try {
    const { origin, pathname } = window.location;
    await navigator.clipboard.writeText(`${origin}${pathname}#${text}`);
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

export const isFeatures = (param: any): param is FeatureNames => {
  return featureNames.includes(param);
};
