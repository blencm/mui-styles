import type { DefaultTheme } from '../defaultTheme';

interface CacheClasses {
  value?: null | any;
  lastProp?: null | any;
  lastJSS?: object | any;
}

export interface States {
  cacheClasses?: CacheClasses | null;
  classes?: any;
  dynamicSheet?: any;
}

export type StylesOptions = {
  link?: boolean;
  meta?: string;
  media?: string;
  flip?: boolean;
  element?: HTMLStyleElement;
  index?: number;
  generateId?: (rule?: any, sheet?: any) => string;
  generateClassName?: (rule?: any, sheet?: any) => string;
  serverGenerateClassName?: (rule?: any, sheet?: any) => string;
  displayName?: string;
  sheetsManager?: Map<any, any>;
  disableGeneration?: boolean;
  sheetsRegistry?: any;
  jss?: any;
  sheetsCache?: Map<any, any>;
  [key: string]: any;
};

export type StylesProps<Theme = DefaultTheme> = {
  state: States;
  theme: Theme;
  stylesOptions: StylesOptions;
  stylesCreator?: any;
  name?: string | null;
};

export type ClassesOptions = {
  state: States;
  stylesOptions: StylesOptions;
};

export interface Classes {
  [k: string]: string | undefined | null;
}
