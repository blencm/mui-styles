import { describe, it, expect } from '@jest/globals';
import mergeClasses from './mergeClasses';

describe('mergeClasses', () => {
  it('should mergeClasses', () => {
    const output = mergeClasses({
      baseClasses: {
        root: 'foo',
      },
      newClasses: {
        root: 'bar',
      },
    });
    expect(output).toEqual({
      root: 'foo bar',
    });
  });

  it('should allow newClasses to be partial', () => {
    const output = mergeClasses({
      baseClasses: {
        root: 'foo',
        child: 'baz',
      },
      newClasses: {
        root: 'bar',
      },
    });
    expect(output).toEqual({
      root: 'foo bar',
      child: 'baz',
    });
  });

  it('should allow newClasses to be optional', () => {
    const baseClasses = {
      root: 'foo',
    };
    expect(mergeClasses({ baseClasses })).toEqual(baseClasses);
    expect(mergeClasses({ baseClasses, newClasses: undefined })).toEqual(baseClasses);
  });
});
