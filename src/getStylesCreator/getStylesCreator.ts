import { deepmerge } from '@mui/utils';
import {
  getThemeVariants,
  stripRootVariantsFromStyleOverrides
} from '../themeVariants';
import noopTheme from './noopTheme';
import type { StyleRules, Styles } from '../withStyles/interface';
import { isProduction } from '../env';

export interface StylesCreator<
  Theme,
  Props extends object,
  ClassKey extends string = string,
> {
  create: (theme: Theme, name?: string) => StyleRules<Props, ClassKey>;
  options: Record<string, any>;
  themingEnabled?: boolean;
}

export default function getStylesCreator<S extends Styles<any, any>>(
  stylesOrCreator: S | any,
): StylesCreator<any, any> {
  const themingEnabled = typeof stylesOrCreator === 'function';

  if (!isProduction()) {
    if (!stylesOrCreator || (typeof stylesOrCreator !== 'object' && !themingEnabled)) {
      console.error(
        [
          'MUI: The `styles` argument provided is invalid.',
          'You need to provide a function generating the styles or a styles object.',
        ].join('\n'),
      );
    }
  }

  return {
    create: (theme: any, name?: string) => {
      let styles: any;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (!isProduction()) {
          if (themingEnabled && theme === noopTheme) {
            console.error(
              [
                'MUI: The `styles` argument provided is invalid.',
                'You are providing a function without a theme in the context.',
                'One of the parent elements needs to use a ThemeProvider.',
              ].join('\n'),
            );
          }
        }
        throw err;
      }

      const componentConfig = name ? theme?.components?.[name] : undefined;
      if (!componentConfig?.styleOverrides && !componentConfig?.variants) {
        return styles;
      }

      const overrides = stripRootVariantsFromStyleOverrides(componentConfig.styleOverrides);
      const variants = getThemeVariants(componentConfig);
      const stylesWithOverrides = { ...styles };

      Object.keys(overrides).forEach((key) => {
        if (!isProduction() && !stylesWithOverrides[key]) {
          console.warn(
            [
              'MUI: You are trying to override a style that does not exist.',
              `Fix the \`${key}\` key of \`theme.components.${name}.styleOverrides\`.`,
              '',
              `If you intentionally wanted to add a new key, please use theme.components.${name}.variants.`,
            ].join('\n'),
          );
        }

        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key] || {}, overrides[key]);
      });

      variants.forEach((definition) => {
        stylesWithOverrides[definition.classKey] = deepmerge(
          stylesWithOverrides[definition.classKey] || {},
          definition.style || {}
        );
      });

      return stylesWithOverrides;
    },
    options: {},
    themingEnabled,
  };
}
