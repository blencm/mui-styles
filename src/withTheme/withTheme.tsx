import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import useTheme from '../useTheme';
import type { DefaultTheme } from '../defaultTheme';
import type { WithTheme, WithThemeCreatorOption } from './interface';
import { isProduction } from '../env';

type WithoutTheme<P> = Omit<P, keyof WithTheme<any>>;

type WithThemeProps<Theme, P extends object> = WithoutTheme<P> &
  Partial<WithTheme<Theme>>;

type ThemedComponent<Theme, P extends object> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<WithThemeProps<Theme, P>> & React.RefAttributes<any>
>;

export default function withTheme<Theme = DefaultTheme, P extends object = {}>(
  Component: React.JSXElementConstructor<P>,
  option: WithThemeCreatorOption<Theme> = {}
): ThemedComponent<Theme, P> {
  const { defaultTheme } = option;

  const WithThemeComponent = React.forwardRef<any, WithThemeProps<Theme, P>>(
    function WithThemeComponent(props, ref) {
      const propsWithTheme = props as WithThemeProps<Theme, P> & {
        theme?: Theme;
      };

      const contextTheme = useTheme<Theme>();

      const theme = propsWithTheme.theme ?? contextTheme ?? defaultTheme;

      const { theme: _theme, ...otherProps } = propsWithTheme as any;

      const componentProps = {
        ...otherProps,
        theme
      } as P;

      return React.createElement(Component as any, {
        ...componentProps,
        ref
      });
    }
  );

  if (!isProduction()) {
    const displayName =
      (Component as any).displayName || (Component as any).name || 'Component';

    WithThemeComponent.displayName = `WithTheme(${displayName})`;
  }

  hoistNonReactStatics(WithThemeComponent as any, Component as any);

  return WithThemeComponent as ThemedComponent<Theme, P>;
}