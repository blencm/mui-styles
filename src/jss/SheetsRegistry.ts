import getWhitespaceSymbols from './utils/getWhitespaceSymbols';

/**
 * Registry used by ServerStyleSheets to collect and serialize JSS sheets.
 */
export default class SheetsRegistry {
  registry: any[] = [];

  get index(): number {
    return this.registry.length === 0
      ? 0
      : Number(this.registry[this.registry.length - 1]?.options?.index ?? 0);
  }

  add(sheet: any): void {
    if (!sheet?.options) return;

    const { registry } = this;
    const index = Number(sheet.options.index ?? 0);

    if (registry.includes(sheet)) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    }

    for (let i = 0; i < registry.length; i += 1) {
      if (Number(registry[i]?.options?.index ?? 0) > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }

    registry.push(sheet);
  }

  reset(): void {
    this.registry = [];
  }

  remove(sheet: any): void {
    const index = this.registry.indexOf(sheet);
    if (index === -1) return;
    this.registry.splice(index, 1);
  }

  toString({ attached, ...options }: any = {}): string {
    const { linebreak } = getWhitespaceSymbols(options);
    let css = '';

    for (let i = 0; i < this.registry.length; i += 1) {
      const sheet = this.registry[i];
      if (attached != null && sheet.attached !== attached) continue;
      if (css) css += linebreak;
      css += sheet.toString(options);
    }

    return css;
  }
}
