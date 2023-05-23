import { ChangeEvent } from "react";

type MyInputProps = {
  inputValue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MyInput = ({ inputValue, handleChange }: MyInputProps) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      data-testid={`my-input`}
    />
  );
};

export default MyInput;
