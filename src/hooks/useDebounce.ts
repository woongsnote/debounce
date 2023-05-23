import { useState, useEffect, useRef } from 'react';
import { debounce } from '../utils';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const debouncedFn = debounce(() => {
      setDebouncedValue(value);
    }, delay);

    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(debouncedFn, delay);

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
}
