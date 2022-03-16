import { useState, useEffect } from "react";

export default function useLocalStorage(initialValue: any, key: string) {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
}
