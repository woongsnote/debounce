import { ChangeEvent, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useDebouncedInput = (delay: number) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearch = useDebounce((value: string) => {
    setIsLoading(true);

    setTimeout(() => {
      console.log("Search for", value);
      setDebouncedValue(value);
      setIsLoading(false);
    }, delay);
  }, delay);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    debouncedSearch(value);
  };

  return {
    inputValue,
    handleChange,
    debouncedValue,
    isLoading,
  };
};
