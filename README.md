# mui-styles

[![npm version](https://img.shields.io/npm/v/mui-styles.svg)](https://www.npmjs.com/package/mui-styles)
[![license](https://img.shields.io/npm/l/mui-styles.svg)](./LICENSE)
[![node](https://img.shields.io/node/v/mui-styles.svg)](https://nodejs.org)

Type-safe JSS styling helpers for Material UI: `makeStyles`, `withStyles`, `styled`, theming, and SSR.

This package is a **compatibility layer**. It restores the classic JSS APIs on Material UI 5 and later. For new applications, prefer Emotion, `sx`, and MUI System. Use `mui-styles` when you already rely on the JSS styling API and need to keep it.

The package ships ESM and CommonJS builds with TypeScript declarations.

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Quick start](#quick-start)
- [API](#api)
  - [makeStyles](#makestylesstyles-options)
  - [createStyles](#createstylesstyles)
  - [withStyles](#withstylesstyles-optionscomponent)
  - [withTheme](#withthemecomponent)
  - [styled](#styledcomponentstyles-options)
  - [ThemeProvider](#themeprovider)
  - [useTheme](#usetheme)
  - [StylesProvider](#stylesprovider)
  - [ServerStyleSheets](#serverstylesheets)
  - [getThemeProps](#getthemepropstheme-name-props)
  - [useThemeVariants](#usethemevariantsprops-name)
  - [mergeClasses](#mergeclassesbaseclasses-newclasses-component)
  - [propsToClassKey](#propstoclasskeyprops)
  - [createGenerateClassName](#creategenerateclassnameoptions)
  - [createGenerateClassNameHash](#creategenerateclassnamehashoptions)
- [TypeScript](#typescript)
- [Troubleshooting](#troubleshooting)
- [Compatibility](#compatibility)
- [Development](#development)
- [Sponsor](#sponsor)
- [License](#license)

## Requirements

| Runtime | Versions |
| --- | --- |
| Node.js | `>= 18` |
| React | `>= 17` |
| Material UI | `>= 5` (`@mui/material` and `@mui/utils`) |

`react-dom` is required only for server rendering with `ServerStyleSheets`.

## Installation

```bash
pnpm add mui-styles
```

```bash
npm install mui-styles
```

```bash
yarn add mui-styles
```

Peer dependencies, if they are not already installed:

```bash
npm install react @mui/material @mui/utils
```

For SSR, also install `react-dom`.

## Quick start

```tsx
import { makeStyles } from 'mui-styles';

const useStyles = makeStyles({
  root: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  title: {
    margin: 0,
    fontWeight: 700,
  },
});

export function Page() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1 className={classes.title}>Overview</h1>
    </section>
  );
}
```

## API

### `makeStyles(styles, options?)`

Creates a hook that returns generated class names.

```tsx
import { makeStyles } from 'mui-styles';

const useStyles = makeStyles({
  card: {
    padding: 24,
    borderRadius: 16,
  },
});

function Card() {
  const classes = useStyles();
  return <div className={classes.card}>Card</div>;
}
```

#### Theme

```tsx
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, makeStyles } from 'mui-styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.primary.main,
    padding: theme.spacing(1.5, 2),
  },
}));

export function Example() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <button className={classes.button}>Save</button>
    </ThemeProvider>
  );
}
```

#### Props

```tsx
import { makeStyles } from 'mui-styles';

type StyleProps = {
  color: string;
  dense?: boolean;
};

const useStyles = makeStyles<unknown, StyleProps>({
  root: {
    color: (props) => props.color,
    padding: (props) => (props.dense ? 8 : 16),
  },
});

function Message() {
  const classes = useStyles({ color: '#16a34a', dense: true });
  return <p className={classes.root}>Ready</p>;
}
```

#### Class overrides

```tsx
const useStyles = makeStyles({
  root: { padding: 16 },
});

function Panel({ classes: classesProp }: { classes?: { root?: string } }) {
  const classes = useStyles({ classes: classesProp });
  return <div className={classes.root}>Panel</div>;
}
```

#### Options

```tsx
const useStyles = makeStyles(
  { root: { display: 'flex' } },
  {
    name: 'MyComponent',
    classNamePrefix: 'MyComponent',
    flip: false,
  },
);
```

| Option | Description |
| --- | --- |
| `name` | Component name used for theme overrides and variants. |
| `classNamePrefix` | Prefix used in development class names. |
| `defaultTheme` | Theme used when no theme exists in context. |
| `flip` | Enables or disables RTL flipping. |
| `Component` | Component reference used in development warnings. |

### `createStyles(styles)`

Identity helper that improves TypeScript inference for style objects.

```tsx
import { createStyles, makeStyles } from 'mui-styles';

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'grid',
      gap: 12,
    },
  }),
);
```

### `withStyles(styles, options?)(Component)`

Higher-order component that injects a `classes` prop.

```tsx
import { withStyles } from 'mui-styles';

const styles = {
  root: {
    padding: 16,
    borderRadius: 12,
  },
};

function View(props: { classes: Record<'root', string>; label: string }) {
  return <div className={props.classes.root}>{props.label}</div>;
}

export default withStyles(styles)(View);
```

#### Theme default props

```tsx
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, withStyles } from 'mui-styles';

const theme = createTheme({
  components: {
    MyBadge: {
      defaultProps: {
        label: 'Default label',
      },
    },
  },
});

const Badge = withStyles(
  { root: { fontWeight: 700 } },
  { name: 'MyBadge' },
)(({ classes, label }: { classes: { root: string }; label?: string }) => (
  <span className={classes.root}>{label}</span>
));

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Badge />
    </ThemeProvider>
  );
}
```

#### Inject theme

```tsx
const Enhanced = withStyles(
  { root: { padding: 8 } },
  { withTheme: true },
)(({ classes, theme }: { classes: { root: string }; theme: { palette: { mode: string } } }) => (
  <div className={classes.root}>{theme.palette.mode}</div>
));
```

### `withTheme(Component)`

Injects `theme` as a prop. Prefer `useTheme()` in function components.

```tsx
import { withTheme } from 'mui-styles';

function Palette({ theme }: { theme: { palette: { mode: string } } }) {
  return <span>{theme.palette.mode}</span>;
}

export default withTheme(Palette);
```

### `styled(Component)(styles, options?)`

JSS-based styled helper.

```tsx
import { Button } from '@mui/material';
import { styled } from 'mui-styles';

const PrimaryButton = styled(Button)({
  borderRadius: 999,
  padding: '10px 18px',
  textTransform: 'none',
});

export function Example() {
  return <PrimaryButton>Continue</PrimaryButton>;
}
```

#### Theme and props

```tsx
import type { Theme } from 'mui-styles';
import { styled } from 'mui-styles';

type Props = {
  danger?: boolean;
};

const AlertBox = styled<Theme, Props>('div')((props) => ({
  padding: 16,
  borderRadius: 12,
  color: props.danger ? '#991b1b' : props.theme.palette.text.primary,
  backgroundColor: props.danger ? '#fee2e2' : props.theme.palette.background.paper,
}));
```

#### `component`, `clone`, and render function

```tsx
const Box = styled('div')({ padding: 16 });

<Box component="section">Section</Box>;

<Box clone>
  <button type="button">Cloned button</button>
</Box>;

<Box>{({ className }) => <main className={className}>Content</main>}</Box>;
```

### `ThemeProvider`

Re-export of Material UI's `ThemeProvider` from `@mui/material/styles`.

```tsx
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'mui-styles';

const theme = createTheme();

export function Root({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
```

### `useTheme()`

Returns the current Material UI theme.

```tsx
import { useTheme } from 'mui-styles';

function Toolbar() {
  const theme = useTheme();
  return <div style={{ color: theme.palette.primary.main }}>Toolbar</div>;
}
```

### `StylesProvider`

Controls the JSS instance, class name generator, SSR sheet registry, and injection order.

```tsx
import { StylesProvider } from 'mui-styles';

export function App({ children }: { children: React.ReactNode }) {
  return <StylesProvider injectFirst>{children}</StylesProvider>;
}
```

#### Custom class name generator

```tsx
import { StylesProvider, createGenerateClassName } from 'mui-styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'app',
  seed: 'tenant-a',
});

export function App({ children }: { children: React.ReactNode }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      {children}
    </StylesProvider>
  );
}
```

### `ServerStyleSheets`

Collects generated JSS styles during server-side rendering. Requires `react-dom`.

```tsx
import { renderToString } from 'react-dom/server';
import { ServerStyleSheets } from 'mui-styles';
import App from './App';

export function render() {
  const sheets = new ServerStyleSheets();
  const html = renderToString(sheets.collect(<App />));
  const css = sheets.toString();

  return `<!doctype html>
<html>
  <head>
    <style id="jss-server-side">${css}</style>
  </head>
  <body>
    <div id="root">${html}</div>
  </body>
</html>`;
}
```

You can also render the style element:

```tsx
const styleElement = sheets.getStyleElement({ nonce: 'nonce-value' });
```

### `getThemeProps({ theme, name, props })`

Applies `theme.components[name].defaultProps` to a props object.

```tsx
import { getThemeProps, useTheme } from 'mui-styles';

function MyComponent(inProps: { size?: 'sm' | 'md' }) {
  const theme = useTheme();
  const props = getThemeProps({ theme, name: 'MyComponent', props: inProps });

  return <div>{props.size}</div>;
}
```

### `useThemeVariants(props, name)`

Returns matching variant class names from `theme.components[name].variants`.

```tsx
import { createTheme } from '@mui/material/styles';
import { makeStyles, useThemeVariants } from 'mui-styles';

const useStyles = makeStyles(
  {
    root: {},
    outlinedPrimary: {
      border: '1px solid currentColor',
    },
  },
  { name: 'MyButton' },
);

function MyButton(props: { variant?: string; color?: string }) {
  const classes = useStyles(props);
  const variantsClassName = useThemeVariants({ ...props, classes }, 'MyButton');

  return <button className={`${classes.root} ${variantsClassName}`}>Button</button>;
}

const theme = createTheme({
  components: {
    MyButton: {
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: { borderWidth: 2 },
        },
      ],
    },
  },
});
```

### `mergeClasses({ baseClasses, newClasses, Component? })`

Merges generated classes with user-provided overrides.

```tsx
import { mergeClasses } from 'mui-styles';

const classes = mergeClasses({
  baseClasses: { root: 'root-generated' },
  newClasses: { root: 'root-custom' },
});

// { root: 'root-generated root-custom' }
```

### `propsToClassKey(props)`

Builds deterministic class keys for variant props.

```tsx
import { propsToClassKey } from 'mui-styles';

propsToClassKey({ variant: 'outlined', color: 'primary' });
// outlinedPrimary

propsToClassKey({ size: 'small', color: 'secondary' });
// secondarySizeSmall
```

### `createGenerateClassName(options?)`

Creates the default class name generator.

```tsx
import { createGenerateClassName } from 'mui-styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'app',
  seed: 'admin',
  disableGlobal: false,
});
```

| Option | Description |
| --- | --- |
| `disableGlobal` | Disables global `Mui-*` class names. |
| `productionPrefix` | Prefix used in production class names. |
| `seed` | Prefix used to isolate multiple apps on the same page. |

### `createGenerateClassNameHash(options?)`

Creates a hash-based class name generator.

```tsx
import { StylesProvider, createGenerateClassNameHash } from 'mui-styles';

const generateClassName = createGenerateClassNameHash();

export function App({ children }: { children: React.ReactNode }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      {children}
    </StylesProvider>
  );
}
```

Global CSS mode (use only when you need stable global class names):

```tsx
const generateClassName = createGenerateClassNameHash({
  dangerouslyUseGlobalCSS: true,
});
```

## TypeScript

```tsx
import { makeStyles } from 'mui-styles';
import type { Theme } from 'mui-styles';

type ClassKey = 'root' | 'label';
type StyleProps = { active: boolean };

const useStyles = makeStyles<Theme, StyleProps, ClassKey>((theme) => ({
  root: {
    display: 'flex',
    opacity: (props) => (props.active ? 1 : 0.5),
  },
  label: {
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
}));

function Item() {
  const classes = useStyles({ active: true });
  return (
    <div className={classes.root}>
      <span className={classes.label}>Item</span>
    </div>
  );
}
```

`Theme` is an alias of Material UI's theme type. `makeStyles` overloads infer class keys from the style object when you do not pass explicit generics.

## Troubleshooting

### `makeStyles` returns empty classes

Ensure `StylesProvider` is not using `disableGeneration`. The component must render in the browser, or styles must be collected with `ServerStyleSheets` on the server.

### Theme is empty inside `makeStyles((theme) => …)`

Wrap the tree with `ThemeProvider`:

```tsx
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'mui-styles';

const theme = createTheme();

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```

### Styles are injected after MUI / Emotion styles

Use `injectFirst`:

```tsx
<StylesProvider injectFirst>
  <App />
</StylesProvider>
```

### Server-side styles are missing

Use `ServerStyleSheets` and inject the collected CSS into the server-rendered HTML.

### Duplicate styles in development

React Strict Mode may mount components more than once. Sheet cleanup is designed to avoid stale sheets. Keep custom JSS instances stable across renders.

## Compatibility

`mui-styles` preserves the JSS API on purpose. Material UI's current styling stack is Emotion, `sx`, and MUI System. This package reduces the cost of keeping existing JSS code while remaining type-safe and SSR-capable.

## Development

This repository uses [pnpm](https://pnpm.io) 10 (Node.js `>= 18.12`). Corepack can activate the version pinned in `package.json`.

```bash
pnpm install
pnpm test
pnpm build
```

## Sponsor

Sponsored by [MultiBase Studio](https://multibasestudio.com/), a desktop client for SQL, NoSQL, and cloud databases.

## License

MIT © [Blencm](https://github.com/blencm)
