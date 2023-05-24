import { useCallback, useRef } from "react";

type DebounceCallback = (...args: any[]) => void;

export const useDebounce = (
  callback: DebounceCallback,
  delay: number
): DebounceCallback => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debounceCallback = useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debounceCallback;
};
