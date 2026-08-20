import type * as React from 'react';
import type { Properties } from 'csstype';
import type { DefaultTheme } from '../defaultTheme';

/**
 * Known CSS properties plus an open index signature.
 * `[key: string]: any` is required so nested JSS (`&:hover`, `$rule`) does not
 * turn every CSS field into a recursive union (that makes editor suggestions stall).
 */
export type CSSProperties = Properties<number | string> & {
  [key: string]: any;
};

export type PropsFunc<Props extends object, T> = (props: Props) => T;

export type CreateCSSProperties<_Props extends object = {}> = CSSProperties;

export type StyleRules<
  Props extends object = {},
  ClassKey extends string = string,
> = Record<ClassKey, CSSProperties | PropsFunc<Props, CSSProperties>>;

export type StyleRulesCallback<
  ThemeType,
  Props extends object,
  ClassKey extends string = string,
> = (theme: ThemeType) => StyleRules<Props, ClassKey>;

export type Styles<
  ThemeType,
  Props extends object,
  ClassKey extends string = string,
> = StyleRules<Props, ClassKey> | StyleRulesCallback<ThemeType, Props, ClassKey>;

export interface MakeStylesOptions<ThemeType = DefaultTheme> {
  defaultTheme?: ThemeType;
  flip?: boolean;
  name?: string;
  classNamePrefix?: string;
  Component?: React.ElementType<any>;
  meta?: string;
  index?: number;
  generateId?: (rule: any, sheet?: any) => string;
}

export interface WithStylesOptions<ThemeType = DefaultTheme>
  extends MakeStylesOptions<ThemeType> {
  withTheme?: boolean;
}

export type ClassNameMap<ClassKey extends string = string> = Record<
  ClassKey,
  string
>;

export type ClassKeyInferable<ThemeType, Props extends object> =
  | string
  | Styles<ThemeType, Props>;

export type ClassKeyOfStyles<StylesOrClassKey> = StylesOrClassKey extends string
  ? StylesOrClassKey
  : StylesOrClassKey extends StyleRulesCallback<any, any, infer ClassKey>
    ? ClassKey
    : StylesOrClassKey extends StyleRules<any, infer ClassKey>
      ? ClassKey
      : never;

export type PropsOfStyles<StylesType> =
  StylesType extends Styles<any, infer Props> ? Props : {};

export type ThemeOfStyles<StylesType> =
  StylesType extends Styles<infer ThemeType, any> ? ThemeType : {};

export type WithStyles<
  StylesType extends ClassKeyInferable<any, any>,
  IncludeTheme extends boolean | undefined = false,
> = (IncludeTheme extends true ? { theme: ThemeOfStyles<StylesType> } : {}) & {
  classes: ClassNameMap<ClassKeyOfStyles<StylesType>>;
} & PropsOfStyles<StylesType>;

export interface StyledComponentProps<ClassKey extends string = string> {
  classes?: Partial<ClassNameMap<ClassKey>>;
}
