import { useTheme as useMuiTheme } from '@mui/material/styles';
import type { DefaultTheme } from '../defaultTheme';

export default function useTheme<Theme = DefaultTheme>(): Theme {
  return useMuiTheme() as Theme;
}