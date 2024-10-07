import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number = 250): T {
  const [debouceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouceValue;
}

export default useDebounce;
