import type { Properties as CSSProperties } from 'csstype';
import { BaseRule, ContainerRule, MinimalObservable } from "./interface";

export type Func<P, T, R> = T extends undefined
  ? (data: P) => R
  : (data: P & { theme: T }) => R;

export type NormalCssProperties = CSSProperties<string | number>;
export type NormalCssValues<K> = K extends keyof NormalCssProperties
  ? NormalCssProperties[K]
  : JssValue;

export type JssValue =
  | (string & {})
  | (number & {})
  | Array<string | number | Array<string | number> | "!important">
  | null
  | false;

export type JssStyle<Props = any, Theme = undefined> =
  | {
      [K in keyof NormalCssProperties]:
        | NormalCssValues<K>
        | JssStyle<Props, Theme>
        | Func<
            Props,
            Theme,
            NormalCssValues<K> | JssStyle<undefined, undefined> | undefined
          >
        | MinimalObservable<NormalCssValues<K> | JssStyle | undefined>;
    }
  | {
      [K: string]:
        | JssValue
        | JssStyle<Props, Theme>
        | Func<
            Props,
            Theme,
            JssValue | JssStyle<undefined, undefined> | undefined
          >
        | MinimalObservable<JssValue | JssStyle | undefined>;
    };

export type Styles<
  Name extends string | number | symbol = string,
  Props = unknown,
  Theme = undefined
> = Record<
  Name,
  | JssStyle<Props, Theme>
  | Array<JssStyle<Props, Theme>>
  | string
  | Func<
      Props,
      Theme,
      JssStyle<undefined, undefined> | string | null | undefined
    >
  | MinimalObservable<JssStyle | string | null | undefined>
>;

export type Classes<Name extends string | number | symbol = string> = Record<
  Name,
  string
>;
export type Keyframes<Name extends string = string> = Record<Name, string>;

export type Rule = BaseRule | ContainerRule;
