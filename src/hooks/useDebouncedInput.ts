import { useState, ChangeEvent } from "react";
import { useDebounce } from "./useDebounce";

const useDebouncedInput = (delay: number) => {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, delay);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return {
        inputValue, debouncedValue, handleChange
    }
}

export default useDebouncedInput