import type * as React from 'react';

export interface StylesOptions {
  disableGeneration?: boolean;
  generateClassName?: (rule?: any, sheet?: any) => string;
  serverGenerateClassName?: (rule?: any, sheet?: any) => string;
  injectFirst?: boolean;
  jss?: any;
  sheetsCache?: Map<any, any> | null;
  sheetsManager?: Map<any, any> | null;
  sheetsRegistry?: any;
}

export interface StylesProviderProps extends StylesOptions {
  children?: React.ReactNode;
}
