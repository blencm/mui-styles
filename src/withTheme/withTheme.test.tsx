import * as React from 'react';
import { describe, it, expect } from '@jest/globals';
import Input from '@mui/material/Input';
import { isMuiElement } from '@mui/material/utils';
import withTheme from './withTheme';
import ThemeProvider from '../ThemeProvider';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';


describe('withTheme', () => {

  it('should inject the theme', () => {
    const ref: any = React.createRef();
    const text = () => ref.current != undefined ? ref.current.textContent : null;
    function Test(props: any) {
      return <span ref={ref}>{}</span>;
    }

    const TestWithTheme = withTheme(Test);

    render(
      <ThemeProvider theme={{ }}>
        <TestWithTheme />
      </ThemeProvider>,
    );
  });

  it('hoists mui internals', () => {
    expect(isMuiElement(<Input />, ['Input'])).toEqual(true);

    const ThemedInput = withTheme(Input);

    expect(isMuiElement(<ThemedInput />, ['Input'])).toEqual(true);
  });

  describe('refs', () => {
    it('forwards ref to class components', () => {
      // eslint-disable-next-line react/prefer-stateless-function
      class TargetComponent extends React.Component {
        render() {
          return <div></div>;
        }
      }
      const ThemedTarget = withTheme(TargetComponent);

      const ref = React.createRef();
      render(<ThemedTarget ref={ref} />);
      expect(ref.current instanceof TargetComponent).toEqual(true);
    });

    it('forwards refs to React.forwardRef types', () => {
      const ThemedTarget = withTheme(
        React.forwardRef((props: any, ref: any) => <div {...props} ref={ref} />),
      );

      const ref: any = React.createRef();
      render(<ThemedTarget ref={ref} />);
    });
  });
});
