import { useEffect, useState } from "react";
import { loadJSON, saveJSON } from "./api/localStorage";

export const useInput = (initialValue, key = null) => {
  const [value, setValue] = useState(key ? loadJSON(key) : initialValue);

  useEffect(() => {
    if (key) saveJSON(key, value);
  }, [value]);

  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};
