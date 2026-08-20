// src/styled/styled.test.tsx
import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import createGenerateClassName from "../createGenerateClassName/createGenerateClassName";
import styled from "./styled";
import StylesProvider from "../StylesProvider";

const StyledButton = styled("button")({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
});

const generateClassName = createGenerateClassName();

function StyledComponent() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <StyledButton>Styled Components</StyledButton>
    </StylesProvider>
  );
}

test("renders StyledComponent", () => {
  render(<StyledComponent />);
  expect(screen.getByRole("button", { name: /styled components/i })).toBeInTheDocument();
});
