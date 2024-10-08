import { getLatestVersion } from "@/api/npm";
import { useEffect, useState } from "react";

export const useVersion = (name: string) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await getLatestVersion(name);
        setValue(res);
      } catch {
        setError("Failed to fetch version.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVersion();
  }, [name]);

  return { value, isLoading, error };
};
