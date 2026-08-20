import { ThemeWithProps } from "./interface";

export default function getThemeProps<
  Theme,
  Props,
  Name extends keyof any
>(params: { props: Props; name: Name; theme?: Theme }) {
  const { theme, name, props } = params;
  const themed = theme as ThemeWithProps<Record<Name, Props>> | undefined;
  const defaultProps = themed?.components?.[name]?.defaultProps;

  if (!defaultProps) {
    return props;
  }

  const output: any = { ...props };

  for (const propName in defaultProps) {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}
