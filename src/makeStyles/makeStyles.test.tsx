// makeStyles.rtl.test.tsx
import * as React from "react";
import { describe, it, beforeAll, beforeEach, expect } from "@jest/globals";
import { createTheme, Paper, Theme } from "@mui/material";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import createGenerateClassName from "../createGenerateClassName/createGenerateClassName";
import makeStyles from "./makeStyles";
import useTheme from "../useTheme";
import StylesProvider from "../StylesProvider";
import ThemeProvider from "../ThemeProvider";
import { GenerateId } from "../jss/interface";
import SheetsRegistry from "../jss/SheetsRegistry";

type RenderWithProvidersOpts = {
  theme?: any | null;
  withTheme?: boolean; // false => no ThemeProvider
  sheetsRegistry?: SheetsRegistry;
  sheetsCache?: Map<any, any>;
  generateClassName?: GenerateId;
  disableGeneration?: boolean;
};

function renderWithProviders(
  ui: React.ReactElement,
  opts: RenderWithProvidersOpts = {},
) {
  const {
    theme = createTheme(),
    withTheme = true,
    sheetsRegistry = new SheetsRegistry(),
    sheetsCache = new Map(),
    generateClassName,
    disableGeneration = false,
  } = opts;

  let current = {
    theme,
    withTheme,
    sheetsRegistry,
    sheetsCache,
    generateClassName,
    disableGeneration,
  };

  const wrap = (node: React.ReactElement) => {
    const core = (
      <StylesProvider
        sheetsRegistry={current.sheetsRegistry}
        sheetsCache={current.sheetsCache}
        generateClassName={current.generateClassName}
        disableGeneration={current.disableGeneration}
      >
        {node}
      </StylesProvider>
    );

    if (current.withTheme === false) return core;

    return <ThemeProvider theme={current.theme}>{core}</ThemeProvider>;
  };

  const rendered = render(wrap(ui));

  function rerenderProviders(
    nextUi: React.ReactElement = ui,
    nextOpts: Partial<RenderWithProvidersOpts> = {},
  ) {
    current = { ...current, ...nextOpts };
    rendered.rerender(wrap(nextUi));
  }

  return {
    ...rendered,
    rerenderProviders,
    sheetsRegistry: current.sheetsRegistry,
  };
}

// Replica de tu factory con RTL
function createGetClassesRTL(styles?: any) {
  const useStyles = makeStyles(styles as any);
  const output: { classes?: Record<string, string> } = {};

  function TestComponent(props: any) {
    output.classes = useStyles(props);
    return <Paper />;
  }

  return function mountWithPropsRTL(
    props?: any,
    options?: RenderWithProvidersOpts,
  ) {
    const utils = renderWithProviders(<TestComponent {...props} />, options);
    return {
      ...utils,
      getClasses: () => output.classes as Record<string, string>,
      rerenderWith: (
        nextProps: any,
        nextOpts?: Partial<RenderWithProvidersOpts>,
      ) => utils.rerenderProviders(<TestComponent {...nextProps} />, nextOpts),
    };
  };
}

// -----------------------------
// Tests
// -----------------------------

describe("makeStyles", () => {
  let generateClassName: GenerateId | undefined;

  beforeEach(() => {
    generateClassName = createGenerateClassName();
  });

  it("should accept a classes prop", () => {
    const mountWithProps = createGetClassesRTL({ root: {} });
    const { getClasses, rerenderWith } = mountWithProps(undefined, {
      generateClassName,
    });

    const baseClasses = getClasses();
    rerenderWith({ classes: { root: "h1" } });
    const extendedClasses = getClasses();
    expect(extendedClasses.root).toEqual(`${baseClasses.root} h1`);
  });

  it("should ignore undefined prop", () => {
    const mountWithProps = createGetClassesRTL({ root: {} });
    const { getClasses, rerenderWith } = mountWithProps(undefined, {
      generateClassName,
    });

    const baseClasses = getClasses();
    rerenderWith({ classes: { root: undefined } });
    const extended = getClasses();
    expect(extended.root).toEqual(baseClasses.root);
  });

  describe("warnings", () => {
    const mountWithProps = createGetClassesRTL({ root: {} });

    let errorSpy: jest.SpyInstance;
    let warnSpy: jest.SpyInstance;

    beforeEach(() => {
      errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
      warnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    });

    afterEach(() => {
      errorSpy.mockRestore();
      warnSpy.mockRestore();
    });

    it("should warn if providing a unknown key", () => {
      const { getClasses, rerenderWith } = mountWithProps(undefined, {
        generateClassName,
      });

      const baseClasses = getClasses();

      rerenderWith({ classes: { bar: "foo" } });

      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy.mock.calls[0][0]).toMatchInlineSnapshot(`
"MUI: The key \`bar\` provided to the classes prop is not implemented in undefined.
You can only override one of the following: root."
`);

      const extendedClasses = getClasses();
      expect(extendedClasses).toEqual({
        root: baseClasses.root,
        bar: "undefined foo",
      });
    });

    it("should warn if providing a string", () => {
      const { rerenderWith } = mountWithProps(undefined, { generateClassName });

      rerenderWith({ classes: "foo" as any });

      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy.mock.calls[0][0]).toMatchInlineSnapshot(`
"MUI: The value \`foo\` provided to the classes prop of undefined is incorrect.
You might want to use the className prop instead."
`);
    });

    it("should warn if providing a non string", () => {
      const { getClasses, rerenderWith } = mountWithProps(undefined, {
        generateClassName,
      });
      const base = getClasses();

      rerenderWith({ classes: { root: {} as any } });

      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy.mock.calls[0][0]).toMatchInlineSnapshot(`
"MUI: The key \`root\` provided to the classes prop is not valid for undefined.
You need to provide a non empty string instead of: [object Object]."
`);

      const extended = getClasses();
      expect(extended).toEqual({
        root: `${base.root} [object Object]`,
      });
    });

    it("should warn if missing theme", () => {
      const styles = (theme: any) => ({ root: { padding: theme.spacing(2) } });
      const mountWithProps2 = createGetClassesRTL(styles);
    });

    it("should warn but not throw if providing an invalid styles type", () => {
      // Esto NO debería lanzar, solo loguear.
      expect(() => {
        createGetClassesRTL(undefined);
      }).not.toThrow();

      expect(errorSpy).toHaveBeenCalledTimes(1);
      expect(errorSpy.mock.calls[0][0]).toMatchInlineSnapshot(`
"MUI: The \`styles\` argument provided is invalid.
You need to provide a function generating the styles or a styles object."
`);

      // render después no debe tirar
      expect(() => {
        const ok = createGetClassesRTL({}) as any;
        ok({});
      }).not.toThrow();
    });

    it("should warn if the key is not available", () => {
      const theme = {
        components: {
          Test: {
            styleOverrides: {
              foo: { margin: "1px" },
            },
          },
        },
      };

      const useStyles = makeStyles(
        { root: { margin: 5, padding: 3, paddingTop: 10 } },
        { name: "Test" },
      );

      function TestComp() {
        const classes = useStyles();
        return <div className={classes.root} />;
      }

      renderWithProviders(<TestComp />, { theme, generateClassName });

      expect(warnSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("classes memoization", () => {
    let mountWithProps: ReturnType<typeof createGetClassesRTL>;

    beforeAll(() => {
      const styles = { root: {} };
      mountWithProps = createGetClassesRTL(styles);
    });

    it("should recycle with no classes prop", () => {
      const { getClasses, rerenderWith } = mountWithProps(undefined, {
        generateClassName,
      });
      const classes1 = getClasses();
      rerenderWith({});
      const classes2 = getClasses();
      expect(classes1).toEqual(classes2);
    });

    it("should recycle even when a classes prop is provided", () => {
      const inputClasses = { root: "foo" };
      const { getClasses, rerenderWith } = mountWithProps(
        { classes: inputClasses },
        { generateClassName },
      );
      const classes1 = getClasses();
      rerenderWith({ classes: inputClasses });
      const classes2 = getClasses();
      expect(classes1).toEqual(classes2);
    });

    it("should invalidate the cache", () => {
      const { getClasses, rerenderWith } = mountWithProps(undefined, {
        generateClassName,
      });
      const base = getClasses();

      rerenderWith({ classes: { root: "foo" } });
      const c1 = getClasses();
      expect(c1).toEqual({ root: `${base.root} foo` });

      rerenderWith({ classes: { root: "bar" } });
      const c2 = getClasses();
      expect(c1).not.toEqual(c2);
      expect(c2).toEqual({ root: `${base.root} bar` });
    });
  });

  describe("integration", () => {
    let sheetsRegistry: SheetsRegistry;

    beforeEach(() => {
      sheetsRegistry = new SheetsRegistry();
    });

    it("should run lifecycles with no theme", () => {
      const useStyles = makeStyles({ root: { display: "flex" } });
      function StyledComponent() {
        useStyles();
        return <div />;
      }

      const {
        sheetsRegistry: reg,
        rerenderProviders,
        unmount,
      } = renderWithProviders(<StyledComponent />, {
        sheetsRegistry,
        generateClassName,
      });

      expect(reg.registry.length).toEqual(1);
      expect(reg.registry[0].classes).toEqual({ root: "makeStyles-root-1" });

      // equivalente a wrapper.update()
      rerenderProviders(<StyledComponent />);
      expect(reg.registry.length).toEqual(1);
      expect(reg.registry[0].classes).toEqual({ root: "makeStyles-root-1" });

      // equivalente a wrapper.setProps({ theme: createTheme() })
      rerenderProviders(<StyledComponent />, { theme: createTheme() });
      expect(reg.registry.length).toEqual(1);
      expect(reg.registry[0].classes).toEqual({ root: "makeStyles-root-2" });

      unmount();
      expect(reg.registry.length).toEqual(0);
    });

    it("should work when depending on a theme", () => {
      const useStyles = makeStyles(
        (theme: any) => ({ root: { padding: theme.spacing(1) } }),
        { name: "MuiTextField" },
      );

      function StyledComponent() {
        useStyles();
        return <div />;
      }

      const { sheetsRegistry: reg, rerenderProviders } = renderWithProviders(
        <StyledComponent />,
        { sheetsRegistry, generateClassName, theme: createTheme() },
      );

      expect(reg.registry.length).toEqual(1);
      expect(reg.registry[0].classes).toEqual({ root: "MuiTextField-root" });

      rerenderProviders(<StyledComponent />, { theme: createTheme({}) });
      expect(reg.registry.length).toEqual(1);
      expect(reg.registry[0].classes).toEqual({ root: "MuiTextField-root" });
    });

    describe("styleOverrides", () => {
      it("should support the styleOverrides key inside components", () => {
        const useStyles = makeStyles(
          {
            root: {
              padding: 8,
              margin: 1,
            },
          },
          { name: "MuiTextField" },
        );
        function StyledComponent() {
          useStyles();
          return <div />;
        }

        renderWithProviders(<StyledComponent />, {
          sheetsRegistry,
          theme: createTheme({
            components: {
              MuiTextField: {
                styleOverrides: {
                  root: {
                    padding: 9,
                    margin: [2, 2, 3],
                  },
                },
              },
            },
          }),
        });

        expect(sheetsRegistry.registry.length).toEqual(1);
        expect((sheetsRegistry.registry[0] as any).rules.raw).toEqual({
          root: { padding: 9, margin: [2, 2, 3] },
        });
      });

      it("can be used to remove styles", () => {
        const theme = {
          components: {
            Test: {
              styleOverrides: {
                root: { margin: null as any },
              },
            },
          },
        };

        const useStyles = makeStyles(
          (theme: Theme) => ({
            root: { margin: 5, padding: 3 },
            "[theme.breakpoints.down(md)]": {
              paper: { width: 475 },
              paperLeft: { display: "none" },
              paperRight: { padding: "56px 50px", borderRadius: 15 },
            },
            container: { padding: 1 },
          }),
          { name: "Test" },
        );

        function TestComp() {
          const classes = useStyles();
          return <div className={classes.root} />;
        }

        renderWithProviders(<TestComp />, { sheetsRegistry, theme });

        expect(sheetsRegistry.registry.length).toEqual(1);
      });
    });

    it("should handle dynamic props", () => {
      const useStyles = makeStyles({
        root: (props: any) => ({ margin: 8, padding: props.padding || 8 }),
      });

      function StyledComponent(props: any) {
        const classes = useStyles(props);
        return <div className={classes.root} />;
      }

      function Test(props: any) {
        return (
          <StylesProvider
            sheetsRegistry={sheetsRegistry}
            sheetsCache={new Map()}
            generateClassName={generateClassName}
          >
            <StyledComponent {...props} />
          </StylesProvider>
        );
      }

      const { rerender } = render(<Test />);
      expect(sheetsRegistry.registry.length).toEqual(2);
      expect(sheetsRegistry.registry[0].classes).toEqual({
        root: "makeStyles-root-1",
      });
      expect(sheetsRegistry.registry[1].classes).toEqual({
        root: "makeStyles-root-2",
      });
      expect((sheetsRegistry.registry[1] as any).rules.map.root.style).toEqual({
        margin: "8px",
        padding: "8px",
      });

      rerender(<Test padding={4} />);
      expect(sheetsRegistry.registry.length).toEqual(2);
      expect((sheetsRegistry.registry[1] as any).rules.map.root.style).toEqual({
        margin: "8px",
        padding: "4px",
      });
    });
  });

  describe("options: disableGeneration", () => {
    it("should not generate the styles", () => {
      const sheetsRegistry = new SheetsRegistry();

      function Empty({ classes }: any) {
        return (
          <div
            data-testid="empty"
            data-classes={JSON.stringify(classes ?? {})}
          />
        );
      }

      const useStyles = makeStyles({ root: { padding: 8 } });
      function StyledComponent() {
        const classes = useStyles();
        return <Empty classes={classes} />;
      }

      const { unmount } = render(
        <StylesProvider
          sheetsRegistry={sheetsRegistry}
          disableGeneration
          sheetsCache={new Map()}
        >
          <StyledComponent />
        </StylesProvider>,
      );

      expect(sheetsRegistry.registry.length).toEqual(0);

      const node = screen.getByTestId("empty");
      const parsed = JSON.parse(node.getAttribute("data-classes") || "{}");
      expect(parsed).toEqual({});

      unmount();
      expect(sheetsRegistry.registry.length).toEqual(0);
    });
  });

  describe("classname quality", () => {
    let sheetsRegistry: SheetsRegistry;

    beforeEach(() => {
      sheetsRegistry = new SheetsRegistry();
    });

    it("should use the displayName", () => {
      const useStyles1 = makeStyles({ root: { padding: 8 } });
      function StyledComponent1() {
        useStyles1();
        return <div />;
      }

      const useStyles2 = makeStyles({ root: { padding: 8 } }, { name: "Fooo" });
      function StyledComponent2() {
        useStyles2();
        return <div />;
      }

      renderWithProviders(
        <>
          <StyledComponent1 />
          <StyledComponent2 />
        </>,
        { sheetsRegistry, generateClassName },
      );

      expect(
        (sheetsRegistry.registry[0] as any).options.classNamePrefix,
      ).toEqual("makeStyles");
      expect((sheetsRegistry.registry[0] as any).options.name).toEqual(
        undefined,
      );
      expect(
        (sheetsRegistry.registry[1] as any).options.classNamePrefix,
      ).toEqual("Fooo");
      expect((sheetsRegistry.registry[1] as any).options.name).toEqual("Fooo");
    });
  });

  describe("stress test", () => {
    let StressTest: React.FC;

    beforeAll(() => {
      const useStyles = makeStyles((theme: any) => ({
        root: (props: any) => ({
          backgroundColor: props.backgroundColor,
          color: theme.color,
        }),
      }));

      const Component = React.memo((props: any) => {
        const classes = useStyles(props);
        const theme = useTheme();

        const rendered = React.useRef(1);
        React.useEffect(() => {
          rendered.current += 1;
        }, []);

        return (
          <div className={classes.root}>
            rendered {rendered.current} times
            <br />
            backgroundColor: {props.backgroundColor}
            <br />
          </div>
        );
      });

      StressTest = function StressTestComponent() {
        const [backgroundColor, setBackgroundColor] = React.useState("black");
        const handleBackgroundColorChange = (event: any) => {
          setBackgroundColor(event.target.value);
        };

        const [color, setColor] = React.useState("white");
        const handleColorChange = (event: any) => {
          setColor(event.target.value);
        };

        const theme = React.useMemo(() => ({ color }), [color]);

        return (
          <ThemeProvider theme={theme}>
            <fieldset>
              <div>Color in theme, background-color in props</div>
              <label htmlFor="background-color">background-color</label>
              <input
                id="background-color"
                onChange={handleBackgroundColorChange}
                value={backgroundColor}
              />
              <label htmlFor="color">color</label>
              <input id="color" onChange={handleColorChange} value={color} />
            </fieldset>
            <Component backgroundColor={backgroundColor} />
          </ThemeProvider>
        );
      };
    });

    it("should update like expected", async () => {
      const sheetsRegistry = new SheetsRegistry();

      render(
        <StylesProvider
          sheetsRegistry={sheetsRegistry}
          sheetsCache={new Map()}
          generateClassName={generateClassName}
        >
          <StressTest />
        </StylesProvider>,
      );

      // Estado inicial
      expect(sheetsRegistry.registry.length).toEqual(2);
      expect(sheetsRegistry.toString()).toEqual(`.makeStyles-root-2 {
  color: white;
  background-color: black;
}`);

      // Cambiar color del tema a "blue"
      const colorInput = screen.getByLabelText("color") as HTMLInputElement;
      await userEvent.clear(colorInput);
      await userEvent.type(colorInput, "blue");

      // Cambiar backgroundColor (prop) a "green"
      const bgInput = screen.getByLabelText(
        "background-color",
      ) as HTMLInputElement;
      await userEvent.clear(bgInput);
      await userEvent.type(bgInput, "green");
    });
  });
});
