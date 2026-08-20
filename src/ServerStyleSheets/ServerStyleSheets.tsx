import * as React from 'react';
import StylesProvider from '../StylesProvider';
import type { StylesProviderProps } from '../StylesProvider/interface';
import createGenerateClassName from '../createGenerateClassName/createGenerateClassName';
import SheetsRegistry from '../jss/SheetsRegistry';

export default class ServerStyleSheets {
  private options: Omit<StylesProviderProps, 'children'>;
  private sheetsRegistry?: SheetsRegistry;

  constructor(options: Omit<StylesProviderProps, 'children'> = {}) {
    this.options = options;
  }

  collect(children: React.ReactNode): React.ReactElement<StylesProviderProps> {
    const sheetsManager = new Map();
    this.sheetsRegistry = new SheetsRegistry();

    // A new class name generator
    const generateClassName = createGenerateClassName();

    return (
      <StylesProvider
        sheetsManager={sheetsManager}
        serverGenerateClassName={generateClassName}
        sheetsRegistry={this.sheetsRegistry}
        {...this.options}
      >
        {children}
      </StylesProvider>
    );
  }

  toString(): string {
    return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
  }

  getStyleElement(props?: object): React.ReactElement {
    return React.createElement('style', {
      id: 'jss-server-side',
      key: 'jss-server-side',
      dangerouslySetInnerHTML: { __html: this.toString() },
      ...props,
    });
  }
}