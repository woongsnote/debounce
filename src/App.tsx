import { useDebouncedInput } from "./hooks/useDebouncedInput";
import { DELAY_IN_MS } from "./constants";
import DebouncedSearchInput from "./components/DebouncedSearchInput";
import Container from "./components/Container";
import DebouncedResult from "./components/DebouncedResult";

function App() {
  const { inputValue, debouncedValue, handleChange, isLoading } =
    useDebouncedInput(DELAY_IN_MS);

  return (
    <Container>
      <DebouncedSearchInput
        inputValue={inputValue}
        handleChange={handleChange}
        isLoading={isLoading}
      />
      <DebouncedResult result={debouncedValue} />
    </Container>
  );
}

export default App;
