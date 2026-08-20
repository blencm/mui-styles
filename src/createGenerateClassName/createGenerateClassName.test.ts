import { describe, expect, it } from "@jest/globals";
import createGenerateClassName from "./createGenerateClassName";
import nested from "./nested";

describe("createGenerateClassName", () => {
  it("should generate a class name", () => {
    const generateClassName = createGenerateClassName({
      productionPrefix: "key-",
    });
    expect(
      generateClassName(
        {
          key: "key",
        },
        {
          options: {
            theme: {},
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key-1");
  });

  it("should increase the counter", () => {
    const generateClassName = createGenerateClassName({
      productionPrefix: "key-",
    });
    expect(
      generateClassName(
        {
          key: "key",
        },
        {
          options: {
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key-1");
    expect(
      generateClassName(
        {
          key: "key",
        },
        {
          options: {
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key-2");
  });

  it("should work without a classNamePrefix", () => {
    const generateClassName = createGenerateClassName({
      productionPrefix: "",
    });
    expect(
      generateClassName(
        { key: "root" },
        {
          options: {},
        }
      )
    ).toEqual("root-1");
  });

  it("should generate global class names", () => {
    const generateClassName = createGenerateClassName();
    expect(
      generateClassName(
        { key: "root" },
        {
          options: {
            name: "MuiButton",
            theme: {},
          },
        }
      )
    ).toEqual("MuiButton-root");
    expect(
      generateClassName(
        { key: "root" },
        {
          options: {
            name: "MuiButton",
            theme: {
              [nested]: true,
            },
          },
        }
      )
    ).toEqual("MuiButton-root-1");
    expect(
      generateClassName(
        { key: "root" },
        {
          options: {
            name: "MuiButton",
            theme: {
              [nested]: true,
            },
          },
        }
      )
    ).toEqual("MuiButton-root-2");
    expect(
      generateClassName(
        { key: "disabled" },
        {
          options: {
            name: "MuiButton",
            theme: {},
          },
        }
      )
    ).toEqual("Mui-disabled");
  });

  describe("production", () => {
    it("should output a short representation", () => {
      const previousNodeEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "production";

      try {
        const generateClassName = createGenerateClassName({
          seed: "root",
          productionPrefix: "",
        });
        expect(
          generateClassName(
            { key: "root" },
            {
              options: {},
            }
          )
        ).toEqual("root-1");
      } finally {
        process.env.NODE_ENV = previousNodeEnv;
      }
    });

    it("should use the seed", () => {
      const previousNodeEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "production";

      try {
        const generateClassName = createGenerateClassName({
          seed: "dark",
          productionPrefix: "root-",
        });
        expect(
          generateClassName(
            { key: "root" },
            {
              options: {},
            }
          )
        ).toEqual("dark-root-1");
      } finally {
        process.env.NODE_ENV = previousNodeEnv;
      }
    });
  });
});
