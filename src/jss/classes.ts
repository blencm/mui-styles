import { RuleListOptions, RuleOptions, ToCssOptions, StyleSheet } from "./interface";
import { JssStyle, Rule } from "./types";

export declare class RuleList {
  constructor(options: RuleListOptions);
  add(name: string, decl: JssStyle, options?: RuleOptions): Rule | null;
  replace(name: string, decl: JssStyle, options?: RuleOptions): Rule | null;
  get(nameOrSelector: string): Rule;
  remove(rule: Rule): void;
  indexOf(rule: Rule): number;
  process(): void;
  register(rule: Rule, className?: string): void;
  unregister(rule: Rule): void;
  update(name: string, data: {}): void;
  update(data: {}): void;
  toString(options?: ToCssOptions): string;
}

export declare class SheetsRegistry {
  registry: StyleSheet[];
  readonly index: number;
  add<RuleName extends string | number | symbol>(
    sheet: StyleSheet<RuleName>
  ): void;
  reset(): void;
  remove<RuleName extends string | number | symbol>(
    sheet: StyleSheet<RuleName>
  ): void;
  toString(options?: ToCssOptions): string;
}

export declare class SheetsManager {
  readonly size: number;
  get(key: object): StyleSheet | null;
  add(key: object, sheet: StyleSheet): void;
  manage(key: object): StyleSheet | null;
  unmanage(key: object): void;
}
