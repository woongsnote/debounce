import { ChangeEvent } from "react";

type DebouncedInputProps = {
  inputValue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const DebouncedSearchInput = ({ inputValue, handleChange }: DebouncedInputProps) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      data-testid={`my-input`}
    />
  );
};

export default DebouncedSearchInput;
