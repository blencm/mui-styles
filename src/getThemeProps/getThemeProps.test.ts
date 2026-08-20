import { describe, it, expect } from "@jest/globals"
import getThemeProps from './getThemeProps';

describe('getThemeProps', () => {
  it('should ignore empty theme', () => {
    const props = getThemeProps({
      theme: {},
      name: 'MuiFoo',
      props: {},
    });
    expect(props).toEqual({});
  });

  it('should ignore different component', () => {
    const props = getThemeProps({
      theme: {
        components: {
          MuiBar: {
            defaultProps: {
              disableRipple: true,
            },
          },
        },
      },
      name: 'MuiFoo',
      props: {},
    });
    expect(props).toEqual({});
  });

  it('should return the props', () => {
    const props = getThemeProps({
      theme: {
        components: {
          MuiFoo: {
            defaultProps: {
              disableRipple: true,
            },
          },
        },
      },
      name: 'MuiFoo',
      props: {},
    });
    expect(props).toEqual({
      disableRipple: true,
    });
  });
});
