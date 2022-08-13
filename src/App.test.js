import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text AshleyBeal", () => {
  render(<App />);
  const nameElement = screen.getByText(/Ashley Beal/i);
  expect(nameElement).toBeInTheDocument();
});
