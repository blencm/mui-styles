import type * as React from 'react';
import type { DefaultTheme } from '../defaultTheme';

export interface WithThemeCreatorOption<Theme = DefaultTheme> {
  defaultTheme?: Theme;
}

export type WithThemeOption<Theme = DefaultTheme> = WithThemeCreatorOption<Theme>;

export interface WithTheme<Theme = DefaultTheme> {
  theme: Theme;
}

export interface ThemedComponentProps<Theme = DefaultTheme> extends Partial<WithTheme<Theme>> {
  ref?: React.Ref<unknown>;
}
