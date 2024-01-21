"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ServerStyleSheets: () => ServerStyleSheets2,
  StylesProvider: () => StylesProvider2,
  createGenerateClassName: () => createGenerateClassName2,
  createStyles: () => createStyles,
  getThemeProps: () => getThemeProps,
  makeStyles: () => makeStyles,
  mergeClasses: () => mergeClasses2,
  propsToClassKey: () => propsToClassKey,
  styled: () => styled2,
  useTheme: () => useThemes,
  useThemeVariants: () => useThemeVariants_default,
  withStyles: () => withStyles_default,
  withTheme: () => withTheme_default,
  withThemeCreator: () => withThemeCreator
});
module.exports = __toCommonJS(src_exports);

// src/createGenerateClassName/nested.ts
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested_default = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";

// src/createGenerateClassName/createGenerateClassName.ts
var stateClasses = [
  "checked",
  "disabled",
  "error",
  "focused",
  "focusVisible",
  "required",
  "expanded",
  "selected"
];
function createGenerateClassName(options = {}) {
  const { disableGlobal = false, productionPrefix = "jss", seed = "" } = options;
  const seedPrefix = seed === "" ? "" : `${seed}-`;
  let ruleCounter = 0;
  const getNextCounterId = () => {
    ruleCounter += 1;
    if (process.env.NODE_ENV !== "production") {
      if (ruleCounter >= 1e10) {
        console.warn(
          [
            "MUI: You might have a memory leak.",
            "The ruleCounter is not supposed to grow that much."
          ].join("")
        );
      }
    }
    return ruleCounter;
  };
  return (rule = {}, styleSheet = {}) => {
    const name = styleSheet.options.name;
    if (name && name.indexOf("Mui") === 0 && !styleSheet.options.link && !disableGlobal) {
      if (stateClasses.indexOf(rule.key) !== -1) {
        return `Mui-${rule.key}`;
      }
      const prefix = `${seedPrefix}${name}-${rule.key}`;
      if (!styleSheet.options.theme[nested_default] || seed !== "") {
        return prefix;
      }
      return `${prefix}-${getNextCounterId()}`;
    }
    if (process.env.NODE_ENV === "production") {
      return `${seedPrefix}${productionPrefix}${getNextCounterId()}`;
    }
    const suffix = `${rule.key}-${getNextCounterId()}`;
    if (styleSheet.options.classNamePrefix) {
      return `${seedPrefix}${styleSheet.options.classNamePrefix}-${suffix}`;
    }
    return `${seedPrefix}${suffix}`;
  };
}

// src/createStyles/createStyles.ts
function createStyles(styles) {
  return styles;
}

// src/getThemeProps/getThemeProps.ts
function getThemeProps(params) {
  const { theme, name, props } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  const output = { ...props };
  const defaultProps = theme.components[name].defaultProps;
  let propName;
  for (propName in defaultProps) {
    if (output[propName] === void 0) {
      output[propName] = defaultProps[propName];
    }
  }
  return output;
}

// src/makeStyles/makeStyles.tsx
var React2 = __toESM(require("react"));

// src/jss/index.ts
function getDynamicStyles(styles) {
  var to = null;
  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;
    if (type === "function") {
      if (!to)
        to = {};
      to[key] = value;
    } else if (type === "object" && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to)
          to = {};
        to[key] = extracted;
      }
    }
  }
  return to;
}
var plainObjectConstrurctor = {}.constructor;

// src/mergeClasses/mergeClasses.ts
var import_utils = require("@mui/utils");
function mergeClasses(options) {
  const { baseClasses, newClasses, Component } = options;
  if (!newClasses) {
    return baseClasses;
  }
  const nextClasses = { ...baseClasses };
  if (process.env.NODE_ENV !== "production") {
    if (typeof newClasses === "string") {
      console.error(
        [
          `MUI: The value \`${newClasses}\` provided to the classes prop of ${(0, import_utils.getDisplayName)(Component)} is incorrect.`,
          "You might want to use the className prop instead."
        ].join("\n")
      );
      return baseClasses;
    }
  }
  Object.keys(newClasses).forEach((key) => {
    if (process.env.NODE_ENV !== "production") {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(
          [
            `MUI: The key \`${key}\` provided to the classes prop is not implemented in ${(0, import_utils.getDisplayName)(Component)}.`,
            `You can only override one of the following: ${Object.keys(baseClasses).join(",")}.`
          ].join("\n")
        );
      }
      if (newClasses[key] && typeof newClasses[key] !== "string") {
        console.error(
          [
            `MUI: The key \`${key}\` provided to the classes prop is not valid for ${(0, import_utils.getDisplayName)(Component)}.`,
            `You need to provide a non empty string instead of: ${newClasses[key]}.`
          ].join("\n")
        );
      }
    }
    if (newClasses[key]) {
      nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
    }
  });
  return nextClasses;
}

// src/makeStyles/multiKeyStore.ts
var multiKeyStore = {
  set: (cache, key1, key2, value) => {
    let subCache = cache.get(key1);
    if (!subCache) {
      subCache = /* @__PURE__ */ new Map();
      cache.set(key1, subCache);
    }
    subCache.set(key2, value);
  },
  get: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : void 0;
  },
  delete: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
var multiKeyStore_default = multiKeyStore;

// src/useTheme/index.tsx
var import_styles = require("@mui/material/styles");
function useThemes() {
  return (0, import_styles.useTheme)();
}

// src/StylesProvider/StylesProvider.tsx
var React = __toESM(require("react"));
var import_jss = require("jss");

// src/jssPreset/jssPreset.ts
var import_jss_plugin_rule_value_function = __toESM(require("jss-plugin-rule-value-function"));
var import_jss_plugin_global = __toESM(require("jss-plugin-global"));
var import_jss_plugin_nested = __toESM(require("jss-plugin-nested"));
var import_jss_plugin_camel_case = __toESM(require("jss-plugin-camel-case"));
var import_jss_plugin_default_unit = __toESM(require("jss-plugin-default-unit"));
var import_jss_plugin_vendor_prefixer = __toESM(require("jss-plugin-vendor-prefixer"));
var import_jss_plugin_props_sort = __toESM(require("jss-plugin-props-sort"));
var plugins = [
  (0, import_jss_plugin_rule_value_function.default)(),
  (0, import_jss_plugin_global.default)(),
  (0, import_jss_plugin_nested.default)(),
  (0, import_jss_plugin_camel_case.default)(),
  (0, import_jss_plugin_default_unit.default)(),
  typeof window === "undefined" ? null : (0, import_jss_plugin_vendor_prefixer.default)(),
  (0, import_jss_plugin_props_sort.default)()
];
function jssPreset() {
  return {
    plugins
  };
}

// src/StylesProvider/StylesProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var defaultJSS = (0, import_jss.create)(jssPreset());
var defaultGenerateClassName = createGenerateClassName();
var defaultSheetsManager = /* @__PURE__ */ new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: defaultGenerateClassName,
  jss: defaultJSS,
  sheetsCache: null,
  sheetsManager: defaultSheetsManager,
  sheetsRegistry: null
};
var StylesContext = React.createContext(defaultOptions);
var injectFirstNode;
function StylesProvider(props) {
  const {
    children,
    injectFirst = false,
    disableGeneration = false,
    ...localOptions
  } = props;
  const outerOptions = React.useContext(StylesContext);
  const {
    generateClassName,
    jss,
    serverGenerateClassName,
    sheetsCache,
    sheetsManager,
    sheetsRegistry
  } = { ...outerOptions, ...localOptions };
  if (process.env.NODE_ENV !== "production") {
    if (injectFirst && localOptions.jss) {
      console.error(
        "MUI: You cannot use the jss and injectFirst props at the same time."
      );
    }
  }
  const value = React.useMemo(() => {
    const context = {
      disableGeneration,
      generateClassName,
      jss,
      serverGenerateClassName,
      sheetsCache,
      sheetsManager,
      sheetsRegistry
    };
    if (process.env.NODE_ENV !== "production") {
      if (typeof window === "undefined" && !context.sheetsManager) {
        console.error(
          "MUI: You need to use the ServerStyleSheets API when rendering on the server."
        );
      }
    }
    if (!context.jss && injectFirst && typeof window !== "undefined") {
      if (!injectFirstNode) {
        const head = document.head;
        injectFirstNode = document.createComment("mui-inject-first");
        head.insertBefore(injectFirstNode, head.firstChild);
      }
      context.jss = (0, import_jss.create)({
        plugins: jssPreset().plugins,
        insertionPoint: injectFirstNode
      });
    }
    return context;
  }, [
    injectFirst,
    disableGeneration,
    generateClassName,
    jss,
    serverGenerateClassName,
    sheetsCache,
    sheetsManager,
    sheetsRegistry
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StylesContext.Provider, { value, children });
}
var StylesProvider_default = StylesProvider;

// src/makeStyles/indexCounter.ts
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;
  if (process.env.NODE_ENV !== "production") {
    if (indexCounter >= 0) {
      console.warn(
        [
          "MUI: You might have a memory leak.",
          "The indexCounter is not supposed to grow that much."
        ].join("\n")
      );
    }
  }
  return indexCounter;
}

// src/getStylesCreator/getStylesCreator.js
var import_utils3 = require("@mui/utils");

// src/propsToClassKey/propsToClassKey.ts
var import_utils2 = require("@mui/utils");
function isEmpty(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const { variant, ...other } = props;
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty(classKey) ? props[key] : (0, import_utils2.unstable_capitalize)(props[key]);
    } else {
      classKey += `${isEmpty(classKey) ? key : (0, import_utils2.unstable_capitalize)(key)}${(0, import_utils2.unstable_capitalize)(
        props[key].toString()
      )}`;
    }
  });
  return classKey;
}

// src/getStylesCreator/noopTheme.ts
var noopTheme = {};
var noopTheme_default = noopTheme;

// src/getStylesCreator/getStylesCreator.js
function getStylesCreator(stylesOrCreator) {
  const themingEnabled = typeof stylesOrCreator === "function";
  if (process.env.NODE_ENV !== "production") {
    if (typeof stylesOrCreator !== "object" && !themingEnabled) {
      console.error(
        [
          "MUI: The `styles` argument provided is invalid.",
          "You need to provide a function generating the styles or a styles object."
        ].join("\n")
      );
    }
  }
  return {
    create: (theme, name) => {
      let styles;
      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (process.env.NODE_ENV !== "production") {
          if (themingEnabled === true && theme === noopTheme_default) {
            console.error(
              [
                "MUI: The `styles` argument provided is invalid.",
                "You are providing a function without a theme in the context.",
                "One of the parent elements needs to use a ThemeProvider."
              ].join("\n")
            );
          }
        }
        throw err;
      }
      if (!name || !theme.components || !theme.components[name] || !theme.components[name].styleOverrides && !theme.components[name].variants) {
        return styles;
      }
      const overrides = theme.components[name].styleOverrides || {};
      const variants = theme.components[name].variants || [];
      const stylesWithOverrides = { ...styles };
      Object.keys(overrides).forEach((key) => {
        if (process.env.NODE_ENV !== "production") {
          if (!stylesWithOverrides[key]) {
            console.warn(
              [
                "MUI: You are trying to override a style that does not exist.",
                `Fix the \`${key}\` key of \`theme.components.${name}.styleOverrides\`.`,
                "",
                `If you intentionally wanted to add a new key, please use the theme.components[${name}].variants option.`
              ].join("\n")
            );
          }
        }
        stylesWithOverrides[key] = (0, import_utils3.deepmerge)(stylesWithOverrides[key] || {}, overrides[key]);
      });
      variants.forEach((definition) => {
        const classKey = propsToClassKey(definition.props);
        stylesWithOverrides[classKey] = (0, import_utils3.deepmerge)(
          stylesWithOverrides[classKey] || {},
          definition.style
        );
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

// src/makeStyles/makeStyles.tsx
function getClasses({ state, stylesOptions }, classes, Component) {
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }
  if (!state.cacheClasses) {
    state.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {}
    };
  }
  let generate = false;
  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }
  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }
  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }
  return state.cacheClasses.value;
}
function attach({ state, theme, stylesOptions, stylesCreator, name }, props) {
  if (stylesOptions.disableGeneration) {
    return;
  }
  let sheetManager = multiKeyStore_default.get(
    stylesOptions.sheetsManager,
    stylesCreator,
    theme
  );
  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore_default.set(
      stylesOptions.sheetsManager,
      stylesCreator,
      theme,
      sheetManager
    );
  }
  const options = {
    ...stylesCreator.options,
    ...stylesOptions,
    theme,
    flip: typeof stylesOptions.flip === "boolean" ? stylesOptions.flip : theme.direction === "rtl"
  };
  options.generateId = options.serverGenerateClassName || options.generateClassName;
  const sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    let staticSheet;
    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore_default.get(
        stylesOptions.sheetsCache,
        stylesCreator,
        theme
      );
    }
    const styles = stylesCreator.create(theme, name);
    if (!staticSheet) {
      staticSheet = stylesOptions.jss?.createStyleSheet(styles, {
        link: false,
        ...options
      });
      staticSheet.attach();
      if (stylesOptions.sheetsCache) {
        multiKeyStore_default.set(
          stylesOptions.sheetsCache,
          stylesCreator,
          theme,
          staticSheet
        );
      }
    }
    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }
    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles);
  }
  if (sheetManager.dynamicStyles) {
    const dynamicSheet = stylesOptions.jss?.createStyleSheet(
      sheetManager.dynamicStyles,
      {
        link: true,
        ...options
      }
    );
    dynamicSheet?.update(props);
    dynamicSheet?.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet?.classes
    });
    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }
  sheetManager.refs += 1;
}
function update({ state }, props) {
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}
function detach({ state, theme, stylesOptions, stylesCreator }) {
  if (stylesOptions.disableGeneration) {
    return;
  }
  const sheetManager = multiKeyStore_default.get(
    stylesOptions.sheetsManager,
    stylesCreator,
    theme
  );
  sheetManager.refs -= 1;
  const sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    multiKeyStore_default.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss?.removeStyleSheet(sheetManager.staticSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }
  if (state.dynamicSheet) {
    stylesOptions.jss?.removeStyleSheet(state.dynamicSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}
function useSynchronousEffect(func, values) {
  const key = React2.useRef({});
  let output;
  const currentKey = React2.useMemo(() => ({}), values);
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }
  React2.useEffect(
    () => () => {
      if (output) {
        output();
      }
    },
    [currentKey]
  );
}
function makeStylesmakeStyles(stylesOrCreator, options = {}) {
  const {
    name,
    classNamePrefix: classNamePrefixOption,
    Component,
    defaultTheme = noopTheme_default,
    ...stylesOptions2
  } = options;
  const stylesCreator = getStylesCreator(stylesOrCreator);
  const classNamePrefix = name || classNamePrefixOption || "makeStyles";
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };
  const useStyles = (props = {}) => {
    const theme = useThemes() || defaultTheme;
    const stylesOptions = {
      ...React2.useContext(StylesContext),
      ...stylesOptions2
    };
    const instance = React2.useRef({
      state: {},
      stylesOptions
    });
    const shouldUpdate = React2.useRef(false);
    useSynchronousEffect(() => {
      const current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return () => {
        detach(current);
      };
    }, [theme, stylesCreator]);
    React2.useEffect(() => {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }
      shouldUpdate.current = true;
    });
    const getClass = props != void 0 ? props.classes : null;
    const instanceOptions = {
      state: instance.current.state,
      stylesOptions: instance.current.stylesOptions
    };
    const classes = getClasses(
      instanceOptions,
      getClass,
      Component
    );
    return classes;
  };
  return useStyles;
}

// src/ServerStyleSheets/ServerStyleSheets.tsx
var React3 = __toESM(require("react"));

// src/jss/utils/getWhitespaceSymbols.ts
function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: "",
      space: ""
    };
  }
  return {
    linebreak: "\n",
    space: " "
  };
}

// src/jss/SheetsRegistry.ts
var SheetsRegistry = class {
  registry = [];
  /**
   * Current highest index number.
   */
  get index() {
    return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
  }
  /**
   * Register a Style Sheet.
   */
  add(sheet) {
    const { registry } = this;
    const { index } = sheet.options;
    if (registry.indexOf(sheet) !== -1)
      return;
    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    }
    for (let i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  remove(sheet) {
    const index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  toString({ attached, ...options } = {}) {
    const { linebreak } = getWhitespaceSymbols(options);
    let css = "";
    for (let i = 0; i < this.registry.length; i++) {
      const sheet = this.registry[i];
      if (attached != null && sheet.attached !== attached) {
        continue;
      }
      if (css)
        css += linebreak;
      css += sheet.toString(options);
    }
    return css;
  }
};

// src/ServerStyleSheets/ServerStyleSheets.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ServerStyleSheets = class {
  options;
  sheetsRegistry;
  constructor(options = {}) {
    this.options = options;
  }
  collect(children) {
    const sheetsManager = /* @__PURE__ */ new Map();
    this.sheetsRegistry = new SheetsRegistry();
    const generateClassName = createGenerateClassName();
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      StylesProvider_default,
      {
        sheetsManager,
        serverGenerateClassName: generateClassName,
        sheetsRegistry: this.sheetsRegistry,
        ...this.options,
        children
      }
    );
  }
  toString() {
    return this.sheetsRegistry ? this.sheetsRegistry.toString() : "";
  }
  getStyleElement(props) {
    return React3.createElement("style", {
      id: "jss-server-side",
      key: "jss-server-side",
      dangerouslySetInnerHTML: { __html: this.toString() },
      ...props
    });
  }
};

// src/styled/styled.tsx
var React4 = __toESM(require("react"));
var import_clsx = __toESM(require("clsx"));
var import_prop_types = __toESM(require("prop-types"));

// src/hoistStatics/utils.ts
var REACT_ELEMENT_TYPE = Symbol.for("react.element");
var REACT_PORTAL_TYPE = Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
var REACT_CONTEXT_TYPE = Symbol.for("react.context");
var REACT_SERVER_CONTEXT_TYPE = Symbol.for(
  "react.server_context"
);
var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = Symbol.for(
  "react.suspense_list"
);
var REACT_MEMO_TYPE = Symbol.for("react.memo");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function typeOf(object) {
  if (typeof object === "object" && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        const type = object.type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;
          default:
            const $$typeofType = type && type.$$typeof;
            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }
  return void 0;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;

// src/hoistStatics/index.ts
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[Memo] = MEMO_STATICS;
function getStatics(component) {
  if (isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistStatics(targetComponent, sourceComponent, excludelist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      const inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistStatics(targetComponent, inheritedComponent, excludelist);
      }
    }
    let keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat([]);
      keys = keys.concat(String(getOwnPropertySymbols(sourceComponent)));
    }
    const targetStatics = getStatics(targetComponent);
    const sourceStatics = getStatics(sourceComponent);
    for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];
      if (!KNOWN_STATICS[key] && !(excludelist && excludelist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {
        }
      }
    }
  }
  return targetComponent;
}

// src/styled/utils.ts
function chainPropTypes(propType1, propType2) {
  if (process.env.NODE_ENV === "production") {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// src/styled/styled.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function omit(input, fields) {
  const output = {};
  Object.keys(input).forEach((prop) => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}
function styled(Component) {
  const componentCreator = (style, options = {}) => {
    const { name, ...stylesOptions } = options;
    let classNamePrefix = name;
    const stylesOrCreator = typeof style === "function" ? (theme) => ({ root: (props) => style({ theme, ...props }) }) : { root: style };
    const useStyles = makeStylesmakeStyles(stylesOrCreator, {
      Component,
      name: name || Component.displayName,
      classNamePrefix,
      ...stylesOptions
    });
    let filterProps;
    let propTypes = {};
    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    const StyledComponent = React4.forwardRef(function StyledComponent2(props, ref) {
      const {
        children,
        className: classNameProp,
        clone,
        component: ComponentProp,
        ...other
      } = props;
      const classes = useStyles(props);
      const className = (0, import_clsx.default)(classes.root, classNameProp);
      let spread = other;
      if (filterProps) {
        spread = omit(spread, filterProps);
      }
      if (clone) {
        return React4.cloneElement(children, {
          className: (0, import_clsx.default)(children.props.className, className),
          ...spread
        });
      }
      if (typeof children === "function") {
        return children({ className, ...spread });
      }
      const FinalComponent = ComponentProp || Component;
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FinalComponent, { ref, className, ...spread, children });
    });
    StyledComponent.propTypes = {
      children: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.func]),
      className: import_prop_types.default.string,
      clone: chainPropTypes(import_prop_types.default.bool, (props) => {
        if (props.clone && props.component) {
          return Error("You can not use the clone and component prop at the same time.");
        }
        return null;
      }),
      component: import_prop_types.default.elementType,
      ...propTypes
    };
    hoistStatics(StyledComponent, Component);
    return StyledComponent;
  };
  return componentCreator;
}

// src/useThemeVariants/useThemeVariants.ts
var useThemeVariants = (props, name) => {
  const { classes = {} } = props;
  const theme = useThemes();
  let variantsClasses = "";
  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    const themeVariants = theme.components[name].variants;
    themeVariants.forEach((themeVariant) => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach((key) => {
        if (props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });
      if (isMatch) {
        variantsClasses = `${variantsClasses}${classes[propsToClassKey(themeVariant.props)]} `;
      }
    });
  }
  return variantsClasses;
};
var useThemeVariants_default = useThemeVariants;

// src/withStyles/withStyles.jsx
var React5 = __toESM(require("react"));
var import_prop_types2 = __toESM(require("prop-types"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var withStyles = (stylesOrCreator, options = {}) => (Component) => {
  const { defaultTheme, withTheme: withTheme2 = false, name, ...stylesOptions } = options;
  let classNamePrefix = name;
  const useStyles = makeStylesmakeStyles(stylesOrCreator, {
    defaultTheme,
    Component,
    name: name || Component.displayName,
    classNamePrefix,
    ...stylesOptions
  });
  const WithStyles = React5.forwardRef(function WithStyles2(props, ref) {
    const { classes: classesProp, ...other } = props;
    const classes = useStyles({ ...Component.defaultProps, ...props });
    let theme;
    let more = other;
    if (typeof name === "string" || withTheme2) {
      theme = useThemes() || defaultTheme;
      if (name) {
        more = getThemeProps({ theme, name, props: other });
      }
      if (withTheme2 && !more.theme) {
        more.theme = theme;
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Component, { ref, classes, ...more });
  });
  WithStyles.propTypes = {
    classes: import_prop_types2.default.object
  };
  hoistStatics(WithStyles, Component);
  return WithStyles;
};
var withStyles_default = withStyles;

// src/withTheme/withTheme.tsx
var React6 = __toESM(require("react"));
var import_jsx_runtime5 = require("react/jsx-runtime");
function withThemeCreator(options = {}) {
  const { defaultTheme } = options;
  const withTheme2 = (Component) => {
    const WithTheme = React6.forwardRef(function WithTheme2(props, ref) {
      const theme = useThemes() || defaultTheme;
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Component, { theme, ref, ...props });
    });
    hoistStatics(WithTheme, Component);
    return WithTheme;
  };
  return withTheme2;
}
var withTheme = withThemeCreator();
var withTheme_default = withTheme;

// src/index.ts
var createGenerateClassName2 = createGenerateClassName;
var makeStyles = makeStylesmakeStyles;
var mergeClasses2 = mergeClasses;
var ServerStyleSheets2 = ServerStyleSheets;
var styled2 = styled;
var StylesProvider2 = StylesProvider_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ServerStyleSheets,
  StylesProvider,
  createGenerateClassName,
  createStyles,
  getThemeProps,
  makeStyles,
  mergeClasses,
  propsToClassKey,
  styled,
  useTheme,
  useThemeVariants,
  withStyles,
  withTheme,
  withThemeCreator
});
