import type { DefaultTheme } from '../defaultTheme';

export interface WithThemeCreatorOption<Theme = DefaultTheme> {
  defaultTheme?: Theme;
}

export interface WithTheme<Theme = DefaultTheme> {
  theme: Theme;
}
