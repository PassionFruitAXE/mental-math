import { getItem, setItem } from "@/utils/storage";
import { useState } from "react";

export default function useLocalStorage<T = undefined>(key: string) {
  const [value, setValue] = useState<T>(getItem<T>(key));
  const dispatch = (newValue: T) => {
    setValue(newValue);
    setItem(key, newValue);
  };
  return [value, dispatch];
}
