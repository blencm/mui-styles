export interface ThemeWithProps<Components> {
  components?: {
    [K in keyof Components]: { defaultProps?: Partial<Components[K]> };
  };
}

export type ThemedProps<Theme, Name extends keyof any> = Theme extends {
  components: Record<Name, { defaultProps: infer Props }>;
}
  ? Props
  : {};
