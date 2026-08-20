import useTheme from '../useTheme';
import { getThemeVariants, themeVariantMatches } from '../themeVariants';

const useThemeVariants = (props: any = {}, name: string) => {
  const { classes = {} } = props;
  const theme: any = useTheme();
  const variants = getThemeVariants(theme?.components?.[name]);

  if (variants.length === 0) {
    return '';
  }

  return variants
    .filter((themeVariant) => themeVariantMatches(themeVariant, props))
    .map((themeVariant) => classes[themeVariant.classKey])
    .filter(Boolean)
    .join(' ');
};

export default useThemeVariants;
