import "./DebouncedSearchInput.css";
import { ChangeEvent } from "react";
import { ImSpinner8 } from "react-icons/im";
type DebouncedInputProps = {
  inputValue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
};

const DebouncedSearchInput = ({
  inputValue,
  handleChange,
  isLoading,
}: DebouncedInputProps) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        data-testid={`my-input`}
      />
      {isLoading && <ImSpinner8 className="spinner" />}
    </div>
  );
};

export default DebouncedSearchInput;
