export interface ThemeWithProps<Components> {
  components?: {
    [K in keyof Components]: { defaultProps?: Partial<Components[K]> };
  };
}
