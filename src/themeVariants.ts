import propsToClassKey from './propsToClassKey';

export type ThemeVariantProps =
  | Record<string, unknown>
  | ((props: Record<string, unknown>) => boolean);

export type ThemeVariantDefinition = {
  props?: ThemeVariantProps;
  style?: Record<string, unknown>;
};

export type NormalizedThemeVariant = ThemeVariantDefinition & {
  classKey: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function asVariants(value: unknown): ThemeVariantDefinition[] {
  return Array.isArray(value) ? (value as ThemeVariantDefinition[]) : [];
}

/**
 * Supports both the legacy top-level `components[name].variants` shape and the
 * current Material UI root-slot shape: `styleOverrides.root.variants`.
 */
export function getThemeVariants(componentConfig: any): NormalizedThemeVariant[] {
  const legacyVariants = asVariants(componentConfig?.variants);
  const rootVariants = asVariants(componentConfig?.styleOverrides?.root?.variants);

  return [...legacyVariants, ...rootVariants]
    .filter((variant) => isRecord(variant?.style))
    .map((variant, index) => ({
      ...variant,
      classKey:
        typeof variant.props === 'function'
          ? `variant${index}`
          : propsToClassKey(isRecord(variant.props) ? variant.props : {}) ||
            `variant${index}`
    }));
}

export function themeVariantMatches(
  variant: ThemeVariantDefinition,
  props: Record<string, unknown>
): boolean {
  if (typeof variant.props === 'function') {
    return Boolean(variant.props(props));
  }

  const variantProps = isRecord(variant.props) ? variant.props : {};
  return Object.keys(variantProps).every((key) => props[key] === variantProps[key]);
}

/**
 * The modern Material UI shape keeps variants inside `styleOverrides.root`.
 * JSS does not understand a `variants` CSS property, so it must be removed
 * before the slot overrides are merged into the style sheet.
 */
export function stripRootVariantsFromStyleOverrides(styleOverrides: any) {
  if (!isRecord(styleOverrides)) {
    return {};
  }

  const output: Record<string, unknown> = { ...styleOverrides };
  const root = styleOverrides.root;

  if (isRecord(root) && 'variants' in root) {
    const { variants: _variants, ...rootWithoutVariants } = root;
    output.root = rootWithoutVariants;
  }

  return output;
}
