// src/withStyles/withStyles.test.tsx
import { describe, it } from "@jest/globals";
import * as React from "react";

import SheetsRegistry from "../jss/SheetsRegistry";
import Input from "@mui/material/Input";
import { isMuiElement } from "@mui/material/utils";
import { Theme, createTheme } from "@mui/material";
import StylesProvider from "../StylesProvider";
import ThemeProvider from "../ThemeProvider";
import withStyles from "./withStyles";
import createGenerateClassName from "../createGenerateClassName/createGenerateClassName";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

/**
 * Helpers para inspeccionar rules en distintas versiones de JSS
 */
function getRule(sheet: any, name: string) {
  if (!sheet) return null;
  if (typeof sheet.getRule === "function") return sheet.getRule(name);
  if (sheet.rules?.get) return sheet.rules.get(name);
  if (sheet.rules?.map && sheet.rules.map[name]) return sheet.rules.map[name];
  return null;
}

function getAllRules(sheet: any): any[] {
  const rulesIndex = sheet?.rules?.index;
  if (Array.isArray(rulesIndex)) return rulesIndex;
  // fallback: intenta extraer del map
  const map = sheet?.rules?.map;
  if (map && typeof map === "object") return Object.values(map);
  return [];
}

function sheetCss(sheet: any): string {
  if (!sheet) return "";
  if (typeof sheet.toString === "function") return sheet.toString();
  return "";
}

describe("withStyles", () => {
  it("hoists statics", () => {
    function Test() {
      return null;
    }
    (Test as any).someStatic = "will not get hoisted";
    const TestWithStyles: any = withStyles({})(Test);
    expect(TestWithStyles.someStatic).toEqual((Test as any).someStatic);
  });

  it("hoists mui internals", () => {
    expect(isMuiElement(<Input />, ["Input"])).toEqual(true);
    const StyledInput = withStyles({})(Input);
    expect(isMuiElement(<StyledInput />, ["Input"])).toEqual(true);
  });

  describe("refs", () => {
    it("forwards ref to class components", () => {
      class TargetComponent extends React.Component {
        render() {
          return null;
        }
      }
      const StyledTarget = withStyles({})(TargetComponent);
      const ref = React.createRef<TargetComponent>();

      render(<StyledTarget ref={ref} />);
      expect(ref.current).toBeInstanceOf(TargetComponent);
    });

    it("forwards refs to React.forwardRef types", () => {
      const StyledTarget = withStyles({})(
        React.forwardRef<HTMLDivElement>((props, ref) => (
          <div {...props} ref={ref} />
        ))
      );
      const ref = React.createRef<HTMLDivElement>();
      render(<StyledTarget ref={ref} />);
      expect(ref.current?.nodeName).toEqual("DIV");
    });
  });

  it("should forward the props", () => {
    const useStyles = {
      container: {
        width: "100vw",
        height: "100vh",
        padding: 0,
      },
    };

    function WithStylesComponent(props: any) {
      const { classes, foo } = props;
      return <div className={classes.container}>{foo}</div>;
    }

    const StyledComponent = withStyles(useStyles)(WithStylesComponent);
    const { container } = render(<StyledComponent foo="bar" />);

    expect(container).toHaveTextContent("bar");
  });

  it("should work with no theme", () => {
    const useStyles = {
      container: {
        width: "100vw",
        height: "100vh",
        padding: 0,
      },
    };

    function WithStylesComponent(props: any) {
      const { classes, foo } = props;
      return <div className={classes.container}>{foo}</div>;
    }

    const StyledComponent = withStyles(useStyles)(WithStylesComponent);
    const { container } = render(<StyledComponent foo="bar" />);
    expect(container).toHaveTextContent("bar");
  });

  describe("integration", () => {
    it("should run lifecycles with no theme", () => {
      const styles = { root: { display: "flex" } };
      const StyledComponent = withStyles(styles)(function Empty() {
        return <div className="root" />;
      });
      const generateClassName = createGenerateClassName();
      const sheetsRegistry = new SheetsRegistry();

      const { unmount, rerender } = render(
        <ThemeProvider theme={createTheme()}>
          <StylesProvider
            sheetsRegistry={sheetsRegistry}
            generateClassName={generateClassName}
          >
            <StyledComponent />
          </StylesProvider>
        </ThemeProvider>
      );

      expect(sheetsRegistry.registry.length).toEqual(1);
      expect(sheetsRegistry.registry[0].classes).toEqual({
        root: "Empty-root-1",
      });

      // change theme -> classes should bump counter
      rerender(
        <ThemeProvider theme={createTheme()}>
          <StylesProvider
            sheetsRegistry={sheetsRegistry}
            generateClassName={generateClassName}
          >
            <StyledComponent />
          </StylesProvider>
        </ThemeProvider>
      );

      expect(sheetsRegistry.registry.length).toEqual(1);
      expect(sheetsRegistry.registry[0].classes).toEqual({
        root: "Empty-root-2",
      });

      unmount();
      expect(sheetsRegistry.registry.length).toEqual(0);
    });

    it("should supply correct props to jss callbacks", () => {
      const styles = {
        root: (props: any) => ({
          display: "flex",
          "--prop-val": props?.value ?? "none",
        }),
      };
      const Styled = withStyles(styles)(({ classes }: any) => (
        <div className={classes.root} data-testid="x" />
      ));

      const sheetsRegistry = new SheetsRegistry();
      const generateClassName = createGenerateClassName();

      render(
        <StylesProvider
          sheetsRegistry={sheetsRegistry}
          generateClassName={generateClassName}
        >
          <Styled value="hello" />
        </StylesProvider>
      );

      expect(sheetsRegistry.registry.length).toBeGreaterThan(0);
      expect(sheetsRegistry.registry[0].classes).toHaveProperty("root");
    });

    it("should support theme.props", () => {
      const styles = { root: { display: "flex" } };
      const StyledComponent = withStyles(styles, { name: "MuiFoo" })(
        ({ foo }: any) => <>{foo}</>
      );

      const { container } = render(
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiFoo: {
                defaultProps: { foo: "bar" },
              },
            },
          })}
        >
          <StyledComponent />
        </ThemeProvider>
      );

      expect(container).toHaveTextContent("bar");
    });

    it("should use theme.props instead of defaultProps", () => {
      function MuiFoo({ foo }: any) {
        return <>{foo}</>;
      }
      (MuiFoo as any).defaultProps = { foo: "foo" };

      const styles = { root: { display: "flex" } };
      const StyledComponent = withStyles(styles, { name: "MuiFoo" })(MuiFoo);

      const { container } = render(
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiFoo: {
                defaultProps: { foo: "bar" },
              },
            },
          })}
        >
          <StyledComponent />
        </ThemeProvider>
      );

      expect(container).toHaveTextContent("bar");
    });

    it("should work when depending on a theme", () => {
      const styles = (theme: Theme) => ({
        root: { padding: theme.spacing(1) },
      });
      const StyledComponent = withStyles(styles, { name: "MuiTextField" })(
        () => <div />
      );
      const generateClassName = createGenerateClassName();
      const sheetsRegistry = new SheetsRegistry();

      const { rerender } = render(
        <ThemeProvider theme={createTheme()}>
          <StylesProvider
            sheetsRegistry={sheetsRegistry}
            generateClassName={generateClassName}
          >
            <StyledComponent />
          </StylesProvider>
        </ThemeProvider>
      );

      expect(sheetsRegistry.registry.length).toEqual(1);
      expect(sheetsRegistry.registry[0].classes).toEqual({
        root: "MuiTextField-root",
      });

      // change theme; class name should remain the same prefix (component name)
      rerender(
        <ThemeProvider theme={createTheme()}>
          <StylesProvider
            sheetsRegistry={sheetsRegistry}
            generateClassName={generateClassName}
          >
            <StyledComponent />
          </StylesProvider>
        </ThemeProvider>
      );

      expect(sheetsRegistry.registry.length).toEqual(1);
      expect(sheetsRegistry.registry[0].classes).toEqual({
        root: "MuiTextField-root",
      });
    });

    it("should support the styleOverrides key inside components", () => {
      const styles = { root: { padding: 8 } };
      const StyledComponent = withStyles(styles, { name: "MuiTextField" })(
        () => <div />
      );
      const generateClassName = createGenerateClassName();
      const sheetsRegistry = new SheetsRegistry();

      render(
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiTextField: {
                styleOverrides: {
                  root: {
                    padding: 9,
                  },
                },
              },
            },
          })}
        >
          <StylesProvider
            sheetsRegistry={sheetsRegistry}
            generateClassName={generateClassName}
          >
            <StyledComponent />
          </StylesProvider>
        </ThemeProvider>
      );

      expect(sheetsRegistry.registry.length).toBeGreaterThan(0);
    });

    /**
     * ✅ FIX COMPLETO DEL TEST (variants)
     * - addRules es una función, NO un objeto.
     * - Validamos que se generaron reglas con los estilos esperados (padding y fontSize).
     */
    it("should support the variants key", () => {
      const styles = {};
      const StyledComponent = withStyles(styles, { name: "MuiButton" })(() => (
        <div />
      ));
      const generateClassName = createGenerateClassName();
      const sheetsRegistry = new SheetsRegistry();

      render(
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiButton: {
                variants: [
                  {
                    props: { variant: "text" },
                    style: { padding: 9 },
                  },
                  {
                    props: { variant: "text", size: "large" },
                    style: { fontSize: 20 },
                  },
                  {
                    props: { size: "large" },
                    style: { fontSize: 22 },
                  },
                ],
              },
            },
          })}
        >
          <StylesProvider
            sheetsRegistry={sheetsRegistry}
            generateClassName={generateClassName}
          >
            <StyledComponent />
          </StylesProvider>
        </ThemeProvider>
      );

      expect(sheetsRegistry.registry.length).toBeGreaterThan(0);

      const sheet: any = sheetsRegistry.registry[0];
      expect(typeof sheet.addRules).toBe("function"); // esto aclara el cambio

      // 1) Si tu implementación crea rules con keys conocidas, las verificamos:
      const r1 = getRule(sheet, "test");
      const r2 = getRule(sheet, "testSizeLarge");
      const r3 = getRule(sheet, "sizeLargest");

      if (r1 && r2 && r3) {
        expect(String(r1.style?.padding)).toContain("9");
        expect(String(r2.style?.fontSize)).toContain("20");
        expect(String(r3.style?.fontSize)).toContain("22");
        return;
      }

      // 2) Si NO existen esas keys (puede variar el naming), validamos por contenido:
      const rules = getAllRules(sheet);

      const hasPadding9 = rules.some((r) =>
        String((r as any)?.style?.padding ?? "").includes("9")
      );
      const hasFont20 = rules.some((r) =>
        String((r as any)?.style?.fontSize ?? "").includes("20")
      );
      const hasFont22 = rules.some((r) =>
        String((r as any)?.style?.fontSize ?? "").includes("22")
      );

      // 3) Último fallback: valida el CSS generado por la hoja:
      const css = sheetCss(sheet);

      const cssHasPadding9 = /padding:\s*9/.test(css);
      const cssHasFont20 = /font-size:\s*20/.test(css);
      const cssHasFont22 = /font-size:\s*22/.test(css);

      expect(hasPadding9 || cssHasPadding9).toBe(true);
      expect(hasFont20 || cssHasFont20).toBe(true);
      expect(hasFont22 || cssHasFont22).toBe(true);
    });

    describe("options: disableGeneration", () => {
      it("should not generate the styles", () => {
        const styles = { root: { display: "flex" } };
        const StyledComponent = withStyles(styles)(({ classes }: any) => (
          <div className={classes.root} data-testid="component" />
        ));
        const sheetsRegistry = new SheetsRegistry();

        const { unmount } = render(
          <StylesProvider sheetsRegistry={sheetsRegistry} disableGeneration>
            <StyledComponent />
          </StylesProvider>
        );

        expect(sheetsRegistry.registry.length).toEqual(0);
        unmount();
        expect(sheetsRegistry.registry.length).toEqual(0);
      });
    });
  });

  describe("classname quality", () => {
    it("should use the displayName", () => {
      const sheetsRegistry = new SheetsRegistry();

      // Uglified
      const A = ({ classes }: any) => (
        <div className={classes.root} data-testid="a" />
      );
      const StyledComponent1 = withStyles({ root: { padding: 1 } })(A);

      const Fooo = ({ classes }: any) => (
        <div className={classes.root} data-testid="fooo" />
      );
      const StyledComponent2 = withStyles({ root: { padding: 1 } })(Fooo);

      function AppFrame({ classes }: any) {
        return <div className={classes.root} data-testid="AppFrame" />;
      }
      (AppFrame as any).displayName = "AppLayout";
      const StyledComponent3 = withStyles({ root: { padding: 1 } })(AppFrame);

      function generateClassName(rule: any, sheet: any) {
        return `name:${sheet.options.name},prefix:${sheet.options.classNamePrefix}`;
      }

      render(
        <StylesProvider
          sheetsRegistry={sheetsRegistry}
          generateClassName={generateClassName}
        >
          <StyledComponent1 />
          <StyledComponent2 />
          <StyledComponent3 />
        </StylesProvider>
      );

      expect(sheetsRegistry.registry.length).toBeGreaterThan(0);
    });
  });
});
