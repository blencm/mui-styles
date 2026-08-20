import { ClassOptions } from "./interface";
import nested from "./nested";
import { isProduction } from "../env";

/**
 * List of style rule names used as replacements for built-in pseudo-classes
 * (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist?
 * - They are applied with a specificity of 2, ensuring that they override
 *   previously defined styles and are resistant to simple user overrides.
 */
const stateClasses = new Set([
  "checked",
  "disabled",
  "error",
  "focused",
  "focusVisible",
  "required",
  "expanded",
  "selected",
]);

/**
 * Function to generate CSS class names.
 * Provides unique class names with support for development and production environments.
 * 
 * @param options - Configuration options for class name generation.
 * @returns A function that generates class names for given rules and stylesheets.
 */
export default function createGenerateClassName(options: ClassOptions = {}) {
  const {
    disableGlobal = false,
    productionPrefix = "jss",
    seed = "",
  } = options;

  const seedPrefix = seed ? `${seed}-` : "";
  let ruleCounter = 0;

  /**
   * Increments and returns a unique rule counter.
   * Warns in development if the counter grows unexpectedly high.
   */
  const getNextCounterId = (): number => {
    ruleCounter += 1;

    if (!isProduction() && ruleCounter >= 1e10) {
      console.warn(
        "MUI: You might have a memory leak. The ruleCounter is not supposed to grow this large."
      );
    }

    return ruleCounter;
  };

  /**
   * Main class name generation logic.
   * 
   * @param rule - The rule object containing metadata for the class.
   * @param styleSheet - The stylesheet object containing configuration options.
   * @returns A generated class name.
   */
  return (rule: any = {}, styleSheet: any = {}) => {
    const { name, link, theme, classNamePrefix } = styleSheet.options || {};
    const ruleKey = rule.key || "";

    // Handle global MUI styles with "Mui-" prefix.
    if (typeof name === "string" && name.startsWith("Mui") && !link && !disableGlobal) {
      if (stateClasses.has(ruleKey)) {
        return `Mui-${ruleKey}`;
      }

      const prefix = `${seedPrefix}${name}-${ruleKey}`;

      if (!theme?.[nested] || seed) {
        return prefix;
      }

      return `${prefix}-${getNextCounterId()}`;
    }

    // Handle production-specific class name generation.
    if (isProduction()) {
      return `${seedPrefix}${productionPrefix}${getNextCounterId()}`;
    }

    // Generate a class name with additional debugging context in development.
    const suffix = `${ruleKey}-${getNextCounterId()}`;
    if (classNamePrefix) {
      return `${seedPrefix}${classNamePrefix}-${suffix}`;
    }

    return `${seedPrefix}${suffix}`;
  };
}
