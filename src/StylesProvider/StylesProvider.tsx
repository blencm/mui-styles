import * as React from 'react';
import { create } from 'jss';

import createGenerateClassName from '../createGenerateClassName/createGenerateClassName';
import jssPreset from '../jssPreset';
import type { StylesProviderProps } from './interface';
import { isProduction } from '../env';

const createPresetOptions = () => {
  const preset = jssPreset();

  return {
    ...preset,
    plugins: (preset.plugins ?? []).filter(Boolean)
  };
};

const defaultJSS = create(createPresetOptions());
const defaultGenerateClassName = createGenerateClassName();

const defaultSheetsManager = new Map();

export { defaultSheetsManager as sheetsManager };

const defaultOptions = {
  disableGeneration: false,
  generateClassName: defaultGenerateClassName,
  jss: defaultJSS,
  sheetsCache: null,
  sheetsManager: defaultSheetsManager,
  sheetsRegistry: null,
  serverGenerateClassName: null
};

export const StylesContext = React.createContext<any>(defaultOptions);

let injectFirstNode: Comment | undefined = undefined;
let injectFirstJss: any = null;

function createInjectFirstJss() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return defaultJSS;
  }

  const nodeIsMounted =
    injectFirstNode != null && document.head.contains(injectFirstNode);

  if (!nodeIsMounted) {
    injectFirstNode = document.createComment('mui-inject-first');
    document.head.insertBefore(injectFirstNode, document.head.firstChild);

    // Si el documento cambió o el nodo anterior fue eliminado,
    // la instancia JSS anterior ya no debe reutilizarse.
    injectFirstJss = null;
  }

  if (!injectFirstJss) {
    injectFirstJss = create({
      ...createPresetOptions(),
      insertionPoint: injectFirstNode
    });
  }

  return injectFirstJss;
}

function assignIfDefined<T extends Record<string, any>>(
  target: T,
  key: string,
  value: any
) {
  if (value !== undefined) {
    target[key as keyof T] = value;
  }
}

function StylesProvider(props: StylesProviderProps) {
  const {
    children,
    injectFirst = false,
    disableGeneration,
    generateClassName,
    jss,
    sheetsCache,
    sheetsManager,
    sheetsRegistry,
    serverGenerateClassName
  } = props;

  const outerOptions = React.useContext(StylesContext);

  if (!isProduction()) {
    if (injectFirst && jss) {
      console.error(
        'MUI: You cannot use the jss and injectFirst props at the same time.'
      );
    }
  }

  const value = React.useMemo(() => {
    const context: any = {
      ...outerOptions
    };

    assignIfDefined(context, 'disableGeneration', disableGeneration);
    assignIfDefined(context, 'generateClassName', generateClassName);
    assignIfDefined(context, 'jss', jss);
    assignIfDefined(context, 'sheetsCache', sheetsCache);
    assignIfDefined(context, 'sheetsManager', sheetsManager);
    assignIfDefined(context, 'sheetsRegistry', sheetsRegistry);
    assignIfDefined(context, 'serverGenerateClassName', serverGenerateClassName);

    if (context.disableGeneration === undefined) {
      context.disableGeneration = false;
    }

    if (injectFirst && !jss) {
      context.jss = createInjectFirstJss();
    }

    if (!isProduction()) {
      if (typeof window === 'undefined' && !context.sheetsManager) {
        console.error(
          'MUI: You need to use the ServerStyleSheets API when rendering on the server.'
        );
      }
    }

    return context;
  }, [
    outerOptions,
    injectFirst,
    disableGeneration,
    generateClassName,
    jss,
    sheetsCache,
    sheetsManager,
    sheetsRegistry,
    serverGenerateClassName
  ]);

  return (
    <StylesContext.Provider value={value}>
      {children}
    </StylesContext.Provider>
  );
}

export default StylesProvider;