import { unstable_capitalize as capitalize } from '@mui/utils';

function isEmpty(value: string) {
  return value.length === 0;
}

function propValueToString(value: unknown) {
  if (value == null) return '';
  return String(value);
}

/**
 * Generates a class key from props. The variant is used first, and remaining
 * props are appended alphabetically to keep the output deterministic.
 */
export default function propsToClassKey(props: Record<string, any> = {}) {
  const { variant, ...other } = props;
  let classKey = propValueToString(variant);

  Object.keys(other)
    .sort()
    .forEach((key) => {
      const value = other[key];
      if (value == null) return;

      if (key === 'color') {
        const color = propValueToString(value);
        classKey += isEmpty(classKey) ? color : capitalize(color);
        return;
      }

      const normalizedKey = isEmpty(classKey) ? key : capitalize(key);
      classKey += `${normalizedKey}${capitalize(propValueToString(value))}`;
    });

  return classKey;
}
