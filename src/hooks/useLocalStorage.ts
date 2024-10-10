import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { isFuction } from "@/utils";

const PREFIX = "vuelite-editor-";

const useLocalStorage = <T>(
  key: string,
  initValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] => {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState<T>(() => {
    const json = localStorage.getItem(prefixedKey);
    if (json) return JSON.parse(json);
    return isFuction(initValue) ? initValue() : initValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
