import { defineConfig } from 'tsup';

const bundledJssPlugins = [
  'jss-plugin-camel-case',
  'jss-plugin-default-unit',
  'jss-plugin-global',
  'jss-plugin-nested',
  'jss-plugin-props-sort',
  'jss-plugin-rule-value-function',
  'jss-plugin-vendor-prefixer'
];

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  outDir: 'lib',
  tsconfig: 'tsconfig.build.json',
  treeshake: true,
  splitting: false,
  minify: true,
  target: 'es2020',
  noExternal: bundledJssPlugins
});
