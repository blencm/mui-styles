import hash from "@emotion/hash";
import { ClassOptions, ClassRule, ClassStyleSheet } from "./interface";
import { isProduction } from "../env";

const themeJsonCache = new WeakMap();

function stringifyTheme(theme: unknown): string {
  const value = theme ?? {};

  if (value !== null && typeof value === "object") {
    const cached = themeJsonCache.get(value);
    if (cached !== undefined) {
      return cached;
    }

    const serialized = JSON.stringify(value);
    themeJsonCache.set(value, serialized);
    return serialized;
  }

  return JSON.stringify(value);
}

/**
 * Same string as JSON.stringify({ t, k, r }), but with a cached theme payload.
 * Function values are omitted the same way JSON.stringify omits them.
 */
function stringifyHashInput(theme: unknown, ruleKey: unknown, raw: unknown): string {
  const themeJson = stringifyTheme(theme);
  const keyJson = JSON.stringify(ruleKey);
  const rawJson = JSON.stringify(raw);

  if (rawJson === undefined) {
    return `{"t":${themeJson},"k":${keyJson}}`;
  }

  return `{"t":${themeJson},"k":${keyJson},"r":${rawJson}}`;
}

function safePrefix(classNamePrefix: any) {
  const prefix = String(classNamePrefix);
  if (!isProduction()) {
    if (prefix.length >= 256) {
      console.error(`MUI: The class name prefix is too long: ${prefix}.`);
    }
  }
  return prefix;
}

export default function createGenerateClassNameHash(options: ClassOptions = {}) {
  const counters = new Map<string, number>();
  const { dangerouslyUseGlobalCSS = false } = options;

  return (rule: ClassRule, styleSheet: ClassStyleSheet) => {
    const opts = styleSheet?.options ?? {};
    const ruleKey = rule?.key ?? "rule";
    const classNamePrefix = opts.classNamePrefix;
    const sheetRaw = styleSheet?.rules?.raw ?? {};
    const theme = opts.theme;

    if (dangerouslyUseGlobalCSS) {
      if (!opts.link && opts.name) {
        return `${safePrefix(opts.name)}-${ruleKey}`;
      }
      if (opts.link) {
        const scope = classNamePrefix ?? "classNamePrefix";
        const next = (counters.get(scope) || 0) + 1;
        counters.set(scope, next);
        return `${safePrefix(scope)}-${ruleKey}-${next}`;
      }
      return `${safePrefix(classNamePrefix ?? "classNamePrefix")}-${ruleKey}`;
    }

    if (!classNamePrefix) {
      const h = hash(JSON.stringify({ key: ruleKey }));
      return `${ruleKey}-${h}`;
    }

    const raw = sheetRaw[ruleKey] ?? {};
    const h = hash(stringifyHashInput(theme ?? {}, ruleKey, raw));
    return `${safePrefix(classNamePrefix)}-${ruleKey}-${h}`;
  };
}
