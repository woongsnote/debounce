import "./App.css";
import { useDebouncedInput } from "./hooks/useDebouncedInput";
import { DELAY_IN_MS } from "./constants";
import MyInput from "./components/MyInput";
import MyContainer from "./components/MyContainer";
import MyResult from "./components/MyResult";

function App() {
  const { inputValue, debouncedValue, handleChange } =
    useDebouncedInput(DELAY_IN_MS);

  return (
    <MyContainer>
      <MyInput inputValue={inputValue} handleChange={handleChange} />
      <MyResult result={debouncedValue} />
    </MyContainer>
  );
}

export default App;
