import { DELAY_IN_MS } from "../constants";
import useDebouncedInput from "../hooks/useDebouncedInput";
import "./MyInput.css";

const MyInput = () => {
  const { inputValue, debouncedValue, handleChange } =
    useDebouncedInput(DELAY_IN_MS);
  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default MyInput;
