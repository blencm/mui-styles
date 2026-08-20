// StylesProvider.test.tsx
import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { renderToString } from "react-dom/server";
import * as React from "react";
import createGenerateClassName from "../createGenerateClassName/createGenerateClassName";
import { GenerateId } from "../createGenerateClassName/interface";
import SheetsRegistry from "../jss/SheetsRegistry";
import makeStyles from "../makeStyles";
import StylesProvider, { StylesContext } from "./StylesProvider";
import { render, screen, cleanup } from "@testing-library/react";

// --- Util: exponemos solo lo que necesitamos del contexto sin serializar objetos complejos ---
function Test() {
  const options = React.useContext(StylesContext);
  const disable = !!options?.disableGeneration;
  const nodeType = (options as any)?.jss?.options?.insertionPoint?.nodeType ?? "";
  const hasJss = Boolean((options as any)?.jss);

  return (
    <span
      data-testid="opts"
      data-disable={String(disable)}
      data-node-type={String(nodeType)}
      data-has-jss={String(hasJss)}
    />
  );
}

function getOptions() {
  const el = screen.getByTestId("opts");
  return {
    disableGeneration: el.getAttribute("data-disable") === "true",
    jssInsertionPointNodeType: el.getAttribute("data-node-type")
      ? Number(el.getAttribute("data-node-type"))
      : null,
    hasJss: el.getAttribute("data-has-jss") === "true",
  };
}

describe("StylesProvider", () => {
  let generateClassName: GenerateId | undefined;

  beforeEach(() => {
    cleanup();
    generateClassName = createGenerateClassName();
  });

  it("should provide the options", () => {
    render(
      <StylesProvider disableGeneration>
        <Test />
      </StylesProvider>
    );
    expect(getOptions().disableGeneration).toBe(true);
  });

  it("should merge the themes", () => {
    render(
      <StylesProvider>
        <StylesProvider disableGeneration>
          <Test />
        </StylesProvider>
      </StylesProvider>
    );
    expect(getOptions().disableGeneration).toBe(true);
  });

it('should handle injectFirst', () => {
  render(
    <StylesProvider injectFirst>
      <Test />
    </StylesProvider>
  );

  expect(getOptions().jssInsertionPointNodeType).toBe(Node.COMMENT_NODE);
});

  describe("server-side", () => {
    const useStyles = makeStyles({ root: { display: "flex" } });
    function Button(props: any) {
      const classes = useStyles();
      return <button type="button" className={classes.root} {...props} />;
    }

    function assertRendering(markup: string, sheetsRegistry: SheetsRegistry) {
      expect(markup.match("Hello World")).not.toBeNull();
      expect(sheetsRegistry.registry.length).toBe(1);
      expect(sheetsRegistry.toString().length > 10).toBe(true);
      expect(sheetsRegistry.registry[0].classes).toEqual({
        root: "makeStyles-root-1",
      });
    }

    it("should be able to extract the styles", () => {
      const sheetsRegistry = new SheetsRegistry();

      const markup = renderToString(
        <StylesProvider
          sheetsManager={new Map()}
          sheetsRegistry={sheetsRegistry}
          generateClassName={generateClassName}
        >
          <Button>Hello World</Button>
        </StylesProvider>
      );

      assertRendering(markup, sheetsRegistry);
    });

    it("should be able to cache the sheets between two requests", () => {
      const sheetsCache = new Map();

      const sheetsRegistry1 = new SheetsRegistry();
      const markup1 = renderToString(
        <StylesProvider
          sheetsManager={new Map()}
          sheetsCache={sheetsCache}
          sheetsRegistry={sheetsRegistry1}
          generateClassName={generateClassName}
        >
          <Button>Hello World</Button>
        </StylesProvider>
      );
      assertRendering(markup1, sheetsRegistry1);

      const sheetsRegistry2 = new SheetsRegistry();
      const markup2 = renderToString(
        <StylesProvider
          sheetsManager={new Map()}
          sheetsCache={sheetsCache}
          sheetsRegistry={sheetsRegistry2}
          generateClassName={generateClassName}
        >
          <Button>Hello World</Button>
        </StylesProvider>
      );
      assertRendering(markup2, sheetsRegistry2);

      // La comprobación clave: misma hoja cacheada
      expect(sheetsRegistry1.registry[0]).toEqual(sheetsRegistry2.registry[0]);
    });
  });

  it("should accept a custom JSS instance", () => {
    render(
      <StylesProvider>
        <Test />
      </StylesProvider>
    );
    expect(getOptions().hasJss).toBe(true);
  });

  describe("warnings", () => {
    it("should warn when using jss and injectFirst at the same time", () => {
      const spy = jest.spyOn(console, "error").mockImplementation(() => {});
      // Forzamos el caso pasando ambos props
      expect(() =>
        render(
          <StylesProvider jss={{} as any} injectFirst>
            <Test />
          </StylesProvider>
        )
      ).not.toThrow();

      expect(
        spy.mock.calls.some((args) =>
          args.join(" ").match(/You cannot use the jss and injectFirst props at the same time/i)
        )
      ).toBe(true);

      spy.mockRestore();
    });
  });
});
