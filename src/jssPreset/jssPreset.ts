import functionsModule from 'jss-plugin-rule-value-function';
import globalModule from 'jss-plugin-global';
import nestedModule from 'jss-plugin-nested';
import camelCaseModule from 'jss-plugin-camel-case';
import defaultUnitModule from 'jss-plugin-default-unit';
import vendorPrefixerModule from 'jss-plugin-vendor-prefixer';
import propsSortModule from 'jss-plugin-props-sort';
import type { Plugin } from 'jss';

type PluginFactory = () => Plugin;

/**
 * The JSS plugin packages are CommonJS packages transpiled with a nested
 * `default` export. Babel/Jest and native Node ESM expose them differently, so
 * normalize the factory once to keep both package entry points working.
 */
function resolvePluginFactory(moduleValue: unknown): PluginFactory {
  let current: unknown = moduleValue;

  while (
    typeof current === 'object' &&
    current !== null &&
    'default' in current &&
    (current as { default?: unknown }).default !== current
  ) {
    current = (current as { default: unknown }).default;
  }

  if (typeof current !== 'function') {
    throw new TypeError('Expected a JSS plugin factory function.');
  }

  return current as PluginFactory;
}

const functions = resolvePluginFactory(functionsModule);
const global = resolvePluginFactory(globalModule);
const nested = resolvePluginFactory(nestedModule);
const camelCase = resolvePluginFactory(camelCaseModule);
const defaultUnit = resolvePluginFactory(defaultUnitModule);
const vendorPrefixer = resolvePluginFactory(vendorPrefixerModule);
const propsSort = resolvePluginFactory(propsSortModule);

const sharedPlugins: Plugin[] = [
  functions(),
  global(),
  nested(),
  camelCase(),
  defaultUnit(),
  propsSort()
];

let vendorPrefixerPlugin: Plugin | null | undefined;

function getVendorPrefixerPlugin(): Plugin | null {
  if (typeof window === 'undefined') {
    return null;
  }

  if (vendorPrefixerPlugin === undefined) {
    vendorPrefixerPlugin = vendorPrefixer();
  }

  return vendorPrefixerPlugin;
}

export default function jssPreset() {
  const prefixer = getVendorPrefixerPlugin();

  return {
    plugins: prefixer
      ? [...sharedPlugins.slice(0, 5), prefixer, sharedPlugins[5]]
      : sharedPlugins
  };
}
