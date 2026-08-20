import { describe, it, expect } from '@jest/globals';
import propsToClassKey from './propsToClassKey';

describe('propsToClassKey', () => {
  it('should return the variant value as string', () => {
    expect(propsToClassKey({ variant: 'custom' })).toEqual('custom');
  });

  it('should combine the variant with other props', () => {
    expect(propsToClassKey({ variant: 'custom', size: 'large' })).toEqual('customSizeLarge');
  });

  it('should append the props after the variant in alphabetical order', () => {
    expect(propsToClassKey({ variant: 'custom', size: 'large', mode: 'static' })).toEqual(
      'customModeStaticSizeLarge',
    );
  });

  it('should not prefix the color prop', () => {
    expect(propsToClassKey({ variant: 'custom', color: 'primary' })).toEqual('customPrimary');
  });

  it('should work without variant in props', () => {
    expect(propsToClassKey({ color: 'primary', size: 'large', mode: 'static' })).toEqual(
      'primaryModeStaticSizeLarge',
    );
  });

  it('should not capitalize the first prop', () => {
    expect(propsToClassKey({ size: 'large', zIndex: 'toolbar' })).toEqual(
      'sizeLargeZIndexToolbar',
    );
  });

  it('should work with non string properties', () => {
    expect(propsToClassKey({ disabled: true, valid: false })).toEqual('disabledTrueValidFalse');
  });
});
