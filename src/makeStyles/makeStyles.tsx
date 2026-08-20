import * as React from "react";
import { getDynamicStyles } from "../jss/getDynamicStyles";
import mergeClasses from "../mergeClasses";
import multiKeyStore from "./multiKeyStore";
import useTheme from "../useTheme";
import { StylesContext } from "../StylesProvider";
import { increment } from "./indexCounter";
import getStylesCreator from "../getStylesCreator";
import noopTheme from "../getStylesCreator/noopTheme";

import type { Classes, ClassesOptions, StylesProps } from "./interface";
import type {
  ClassNameMap,
  Styles,
  WithStylesOptions,
} from "../withStyles/interface";
import type { DefaultTheme } from "../defaultTheme";

type ClassesOverride<ClassKey extends string> = Partial<
  Record<ClassKey, string>
>;
type PropsWithClasses<Props extends object, ClassKey extends string> = Props & {
  classes?: ClassesOverride<ClassKey>;
};

type MakeStylesOptions<Theme> = Omit<WithStylesOptions<Theme>, "withTheme"> & {
  Component?: any;
  defaultTheme?: Theme;
};

/** -----------------------------
 * Helpers
 * ------------------------------ */
function getClasses(
  { state, stylesOptions }: ClassesOptions,
  classes?: Classes | null,
  Component?: any,
) {
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {},
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
      Component,
    });
  }

  return state.cacheClasses.value;
}

function attach(
  { state, theme, stylesOptions, stylesCreator, name }: StylesProps,
  props?: any,
) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  const sheetsManager = stylesOptions.sheetsManager ?? new Map();
  stylesOptions.sheetsManager = sheetsManager;

  let sheetManager = multiKeyStore.get(
    sheetsManager,
    stylesCreator,
    theme,
  );

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null,
    };
    multiKeyStore.set(
      sheetsManager,
      stylesCreator,
      theme,
      sheetManager,
    );
  }

  const options = {
    ...stylesCreator.options,
    ...stylesOptions,
    theme,
    flip:
      typeof stylesOptions.flip === "boolean"
        ? stylesOptions.flip
        : (theme as any)?.direction === "rtl",
  };
  options.generateId =
    options.serverGenerateClassName || options.generateClassName;

  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    let staticSheet: any;

    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore.get(
        stylesOptions.sheetsCache,
        stylesCreator,
        theme,
      );
    }

    const styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss?.createStyleSheet(styles, {
        link: false,
        ...options,
      });
      staticSheet?.attach();

      if (stylesOptions.sheetsCache) {
        multiKeyStore.set(
          stylesOptions.sheetsCache,
          stylesCreator,
          theme,
          staticSheet,
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
        ...options,
      },
    );

    dynamicSheet?.update(props);
    dynamicSheet?.attach();

    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet?.classes ?? {},
      newClasses: dynamicSheet?.classes,
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet?.classes ?? {};
  }

  sheetManager.refs += 1;
}

function update({ state }: any, props?: any) {
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach({ state, theme, stylesOptions, stylesCreator }: StylesProps) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  const sheetManager = multiKeyStore.get(
    stylesOptions.sheetsManager,
    stylesCreator,
    theme,
  );
  if (!sheetManager) {
    return;
  }
  sheetManager.refs -= 1;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    if (sheetManager.staticSheet) {
      stylesOptions.jss?.removeStyleSheet(sheetManager.staticSheet);
    }
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

function useSynchronousEffect(func: any, values: any) {
  const key = React.useRef({});
  let output: any;

  const currentKey = React.useMemo(() => ({}), values);
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  React.useEffect(
    () => () => {
      if (output) output();
    },
    [currentKey],
  );
}

export default function makeStyles<
  Theme = DefaultTheme,
  ClassKey extends string = string,
>(
  stylesOrCreator: Styles<Theme, {}, ClassKey>,
  options?: MakeStylesOptions<Theme>,
): (props?: PropsWithClasses<{}, ClassKey>) => ClassNameMap<ClassKey>;

export default function makeStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string,
>(
  stylesOrCreator: Styles<Theme, Props, ClassKey>,
  options?: MakeStylesOptions<Theme>,
): (props: PropsWithClasses<Props, ClassKey>) => ClassNameMap<ClassKey>;

export default function makeStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string,
>(
  stylesOrCreator: Styles<Theme, Props, ClassKey>,
  options: MakeStylesOptions<Theme> = {},
) {
  const {
    name,
    classNamePrefix: classNamePrefixOption,
    Component,
    defaultTheme = noopTheme,
    ...stylesOptions2
  } = options;

  const stylesCreator = getStylesCreator(stylesOrCreator);

  const classNamePrefix = name || classNamePrefixOption || "makeStyles";
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix,
  };

  const useStyles = (props: any = {}) => {
    const theme = useTheme() || defaultTheme;
    const stylesContext = React.useContext(StylesContext);
    const stylesOptions = React.useMemo(
      () => ({
        ...stylesContext,
        ...stylesOptions2,
      }),
      [stylesContext],
    );

    const instance = React.useRef<StylesProps | null>(null);
    const shouldUpdate = React.useRef(false);

    useSynchronousEffect(() => {
      const current: StylesProps = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme,
      };

      attach(current, props);

      shouldUpdate.current = false;
      instance.current = current;

      return () => {
        detach(current);
      };
    }, [theme, stylesCreator, stylesOptions]);

    React.useEffect(() => {
      if (instance.current && shouldUpdate.current) {
        update(instance.current, props);
      }
      shouldUpdate.current = true;
    });

    const getClass = props?.classes ?? null;

    const instanceOptions: ClassesOptions = {
      state: instance.current?.state ?? {},
      stylesOptions: instance.current?.stylesOptions ?? stylesOptions,
    };

    const classes = getClasses(instanceOptions, getClass, Component);
    return classes;
  };

  return useStyles as any;
}
