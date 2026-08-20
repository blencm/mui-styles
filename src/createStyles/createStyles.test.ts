import { describe, it, expect } from "@jest/globals";
import createStyles from './createStyles';

describe('createStyles', () => {
  it('is the identity function', () => {
    const styles = {};
    expect(createStyles(styles)).toEqual(styles);
  });
});
