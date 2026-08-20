export interface ClassOptions {
  disableGlobal?: boolean;
  productionPrefix?: string;
  seed?: string;
  dangerouslyUseGlobalCSS?: boolean;
}

export type GenerateId = (rule?: any, sheet?: any) => string;

export interface ClassRule {
  key?: string | number;
}

export interface ClassStyleSheet {
  options?: {
    link?: boolean;
    name?: any;
    theme?: any;
    classNamePrefix?: string;
  };
  theme?: any;
  rules?: {
    raw?: Record<string | number, any>;
  };
}
