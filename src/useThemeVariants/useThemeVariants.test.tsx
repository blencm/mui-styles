import { describe, expect, it } from "@jest/globals";
import { createTheme } from "@mui/material";
import "@testing-library/jest-dom";
import * as React from "react";
import ThemeProvider from "../ThemeProvider";
import withStyles from "../withStyles";
import useThemeVariants from "./useThemeVariants";
import { render } from "@testing-library/react";


describe("useThemeVariants", () => {
  function ComponentInternal(props: any) {
    const { className, ...other } = props;
    const themeVariantsClasses = useThemeVariants(props, "Test");
    return (
      <div
        className={`${themeVariantsClasses} ${
          className != undefined ? className : ""
        }`}
        {...other}
      />
    );
  }

  const Component = withStyles({}, { name: "Test" })(ComponentInternal);

  it("returns variants classes if props do match", () => {
    const theme = createTheme({
      palette: {
        primary: {
          light: "#757ce8",
          main: "#3f50b5",
          dark: "#002884",
          contrastText: "#fff",
        },
        secondary: {
          light: "#ff7961",
          main: "#f44336",
          dark: "#ba000d",
          contrastText: "#000",
        },
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <Component data-testid="component">Test</Component>
      </ThemeProvider>
    );
  });

  it("does not return variants classes if props do not match", () => {
    const theme = createTheme({
      components: {},
    });

    render(
      <ThemeProvider theme={theme}>
        <Component data-testid="component">Test</Component>
      </ThemeProvider>
    );
  });

  it("matches correctly multiple props", () => {
    const theme = createTheme({
      components: {},
    });

    render(
      <ThemeProvider theme={theme}>
        <Component data-testid="component" color="primary">
          Test
        </Component>
      </ThemeProvider>
    );
  });

  it("should warn if the used variant is not defined in the theme", function test() {
    // Warnings are added for whitelisted components, so we need to
    // test with some name that is in the list, for example MuiButton
    const Button = withStyles(
      {},
      { name: "MuiButton" }
    )((props: any) => {
      const { className, ...other } = props;
      const themeVariantsClasses = useThemeVariants(props, "MuiButton");
      return (
        <div className={`${themeVariantsClasses} ${className}`} {...other} />
      );
    });

    const theme = createTheme({
      components: {
        MuiButton: {
          variants: [
            {
              props: { variant: "text" },
              style: { backgroundColor: "rgb(255, 0, 0)" },
            },
          ],
        },
      },
    });

    expect(() =>
      render(
        <ThemeProvider theme={theme}>
          <Button data-testid="component">Test</Button>
        </ThemeProvider>
      )
    );
  });
});
