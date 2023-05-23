import { ChangeEvent, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const DELAY_IN_MS = 500;

const MyInput = () => {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, DELAY_IN_MS);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default MyInput;
