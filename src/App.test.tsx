import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders my Input", () => {
  render(<App />);
  const myInputElement = screen.getByTestId("my-input");
  expect(myInputElement).toBeInTheDocument();
});
