import { describe, expect, it } from '@jest/globals';
import {
  getThemeVariants,
  stripRootVariantsFromStyleOverrides,
  themeVariantMatches
} from './themeVariants';

describe('themeVariants', () => {
  it('supports legacy variants and current root-slot variants', () => {
    const variants = getThemeVariants({
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: { borderWidth: 2 }
        }
      ],
      styleOverrides: {
        root: {
          variants: [
            {
              props: { size: 'small' },
              style: { minHeight: 28 }
            }
          ]
        }
      }
    });

    expect(variants.map((variant) => variant.classKey)).toEqual([
      'outlinedPrimary',
      'sizeSmall'
    ]);
  });

  it('creates deterministic internal keys for callback variants', () => {
    const variants = getThemeVariants({
      styleOverrides: {
        root: {
          variants: [
            {
              props: (props: Record<string, unknown>) => props.disabled === true,
              style: { opacity: 0.5 }
            }
          ]
        }
      }
    });

    expect(variants[0]?.classKey).toEqual('variant0');
    expect(themeVariantMatches(variants[0], { disabled: true })).toBe(true);
    expect(themeVariantMatches(variants[0], { disabled: false })).toBe(false);
  });

  it('removes root variants before style overrides are merged into JSS', () => {
    expect(
      stripRootVariantsFromStyleOverrides({
        root: {
          color: 'red',
          variants: [{ props: { color: 'primary' }, style: { color: 'blue' } }]
        },
        label: { fontWeight: 700 }
      })
    ).toEqual({
      root: { color: 'red' },
      label: { fontWeight: 700 }
    });
  });
});
