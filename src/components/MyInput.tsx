import useDebouncedInput from "../hooks/useDebouncedInput";

const DELAY_IN_MS = 500;

const MyInput = () => {

  const { inputValue, debouncedValue, handleChange } =
    useDebouncedInput(DELAY_IN_MS);
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default MyInput;
