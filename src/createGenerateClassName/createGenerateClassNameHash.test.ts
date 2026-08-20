import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import createGenerateClassNameHash from "./createGenerateClassNameHash";

describe("createGenerateClassNameHash", () => {
  const generateClassName = createGenerateClassNameHash();
  const generateClassNameGlobal = createGenerateClassNameHash({
    dangerouslyUseGlobalCSS: true,
  });

  describe("dangerouslyUseGlobalCSS", () => {
    it("should have a stable classname", () => {
      expect(
        generateClassNameGlobal(
          {
            key: "key",
          },
          {
            options: {
              name: "MuiGrid",
            },
          }
        )
      ).toEqual("MuiGrid-key");
      expect(
        generateClassNameGlobal(
          {
            key: "key",
          },
          {
            rules: {
              raw: {
                key: () => ({}),
              },
            },
            options: {
              link: true,
              classNamePrefix: "classNamePrefix",
            },
          }
        )
      ).toEqual("classNamePrefix-key-1");
    });
  });


  it("keeps dangerouslyUseGlobalCSS counters isolated per generator", () => {
    const first = createGenerateClassNameHash({ dangerouslyUseGlobalCSS: true });
    const second = createGenerateClassNameHash({ dangerouslyUseGlobalCSS: true });
    const rule = { key: "key" };
    const sheet = {
      rules: { raw: { key: () => ({}) } },
      options: { link: true, classNamePrefix: "Scoped" },
    };

    expect(first(rule, sheet)).toEqual("Scoped-key-1");
    expect(first(rule, sheet)).toEqual("Scoped-key-2");
    expect(second(rule, sheet)).toEqual("Scoped-key-1");
  });

  it("should generate a class name", () => {
    expect(
      generateClassName(
        {
          key: "key",
        },
        {
          rules: {
            raw: {
              key: {
                flex: 1,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key-1d632rn");
  });

  it("should increase the counter only when needed", () => {
    expect(
      generateClassName(
        {
          key: "key",
        },
        {
          rules: {
            raw: {
              key: {
                flex: 1,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key-1d632rn");
    expect(
      generateClassName(
        {
          key: "key",
        },
        {
          rules: {
            raw: {
              key: () => ({}),
            },
          },
          options: {
            link: true,
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key-34fuze");
    expect(
      generateClassName(
        {
          key: "key",
        },
        {
          rules: {
            raw: {
              key: () => ({}),
            },
          },
          options: {
            link: true,
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key-34fuze");
  });

  it("should use the theme object, rule key and the style raw", () => {
    expect(
      generateClassName(
        {
          key: "key1",
        },
        {
          rules: {
            raw: {
              key1: {
                flex: 1,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key1-1glc14a");
    expect(
      generateClassName(
        {
          key: "key2",
        },
        {
          rules: {
            raw: {
              key2: {
                flex: 1,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key2-1hlyk2q");
    expect(
      generateClassName(
        {
          key: "key2",
        },
        {
          rules: {
            raw: {
              key2: {
                flex: 2,
              },
            },
          },
          options: {
            theme: {},
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key2-n30m4l");
    expect(
      generateClassName(
        {
          key: "key2",
        },
        {
          rules: {
            raw: {
              key2: {
                flex: 2,
              },
            },
          },
          options: {
            theme: {
              spacing: 4,
            },
            classNamePrefix: "classNamePrefix",
          },
        }
      )
    ).toEqual("classNamePrefix-key2-1hjjzse");
  });

  describe("classNamePrefix", () => {
    it("should work without a classNamePrefix", () => {
      const rule = { key: "root" };
      const styleSheet = {
        rules: { raw: {} },
        options: {},
      };
      const generateClassName2 = createGenerateClassNameHash();
      expect(generateClassName2(rule, styleSheet)).toEqual("root-toofm5");
    });
  });

  describe("production", () => {
    // Only run the test on node.
    if (!/jsdom/.test(window.navigator.userAgent)) {
      return;
    }

    let nodeEnv: string | undefined;
    const env = process.env;

    beforeAll(() => {
      nodeEnv = env.NODE_ENV;
      env.NODE_ENV = "production";
    });

    afterAll(() => {
      env.NODE_ENV = nodeEnv;
    });

    it("should output a short representation", () => {
      const rule = { key: "root" };
      const styleSheet = {
        rules: { raw: {} },
        options: {},
      };
      const generateClassName2 = createGenerateClassNameHash();
      expect(generateClassName2(rule, styleSheet)).toEqual("root-toofm5");
    });
  });
});
