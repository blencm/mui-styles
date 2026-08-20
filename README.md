# mui-styles

Type-safe legacy JSS styling helpers for Material UI.

`mui-styles` restores the classic JSS APIs (`makeStyles`, `withStyles`, `styled`, `StylesProvider`, SSR helpers) on Material UI 5 and later.

For new MUI apps, prefer Emotion, `sx`, and MUI System. Use this package when you already depend on the JSS styling API and want to keep it.

It provides:

- `makeStyles`
- `withStyles`
- `styled`
- `StylesProvider`
- `ThemeProvider`
- `ServerStyleSheets`
- `useTheme`
- `useThemeVariants`
- `getThemeProps`
- `mergeClasses`
- `propsToClassKey`
- `createStyles`
- `createGenerateClassName`
- `createGenerateClassNameHash`
- `withTheme`

## Requirements

- Node.js `>=18`
- React `>=17`
- Material UI 5, 6, 7, 9, or 10 (`@mui/material` and `@mui/utils`)

## Installation

```bash
npm install mui-styles
```

pnpm:

```bash
pnpm add mui-styles
```

Yarn:

```bash
yarn add mui-styles
```

Also install the peer dependencies if they are not already in the project:

```bash
npm install react react-dom @mui/material @mui/utils
```

`react-dom` is optional unless you use server-side rendering with `ServerStyleSheets`.

## Quick start

```tsx
import * as React from 'react';
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

export function App() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1 className={classes.title}>Hello mui-styles</h1>
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

#### With theme

```tsx
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, makeStyles } from 'mui-styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
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

#### With props

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

#### Override classes from props

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
  {
    root: { display: 'flex' },
  },
  {
    name: 'MyComponent',
    classNamePrefix: 'MyComponent',
    flip: false,
  },
);
```

Common options:

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

Higher-order component API. It injects a `classes` prop into the wrapped component.

```tsx
import * as React from 'react';
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

#### `withStyles` with theme default props

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
  {
    root: { fontWeight: 700 },
  },
  { name: 'MyBadge' },
)(({ classes, label }: any) => <span className={classes.root}>{label}</span>);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Badge />
    </ThemeProvider>
  );
}
```

#### `withStyles` with `withTheme`

```tsx
const Enhanced = withStyles(
  { root: { padding: 8 } },
  { withTheme: true },
)(({ classes, theme }: any) => (
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

Small JSS-based styled helper.

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

#### `styled` with theme and props

```tsx
import type { Theme } from 'mui-styles';

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

#### `styled` with `component`, `clone`, and render function

```tsx
const Box = styled('div')({ padding: 16 });

<Box component="section">Section</Box>;

<Box clone>
  <button type="button">Cloned button</button>
</Box>;

<Box>{({ className }) => <main className={className}>Render function</main>}</Box>;
```

### `ThemeProvider`

Re-export of Material UI's `ThemeProvider` from `@mui/material/styles`.

```tsx
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'mui-styles';

const theme = createTheme();

export function Root() {
  return <ThemeProvider theme={theme}>...</ThemeProvider>;
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

export function App() {
  return (
    <StylesProvider injectFirst>
      <YourApp />
    </StylesProvider>
  );
}
```

#### Custom class name generator

```tsx
import { StylesProvider, createGenerateClassName } from 'mui-styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'app',
  seed: 'tenant-a',
});

export function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <YourApp />
    </StylesProvider>
  );
}
```

### `ServerStyleSheets`

Collects generated JSS styles during server-side rendering.

```tsx
import * as React from 'react';
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

You can also render the style element directly:

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

Returns matching variant class names based on `theme.components[name].variants`.

```tsx
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
```

Theme example:

```tsx
const theme = createTheme({
  components: {
    MyButton: {
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderWidth: 2,
          },
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

Options:

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

export function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <YourApp />
    </StylesProvider>
  );
}
```

Global CSS mode:

```tsx
const generateClassName = createGenerateClassNameHash({
  dangerouslyUseGlobalCSS: true,
});
```

Use `dangerouslyUseGlobalCSS` only when you intentionally want predictable global class names.

## TypeScript examples

### Strongly typed class keys

```tsx
import { makeStyles } from 'mui-styles';

type ClassKey = 'root' | 'label';

const useStyles = makeStyles<unknown, {}, ClassKey>({
  root: { display: 'flex' },
  label: { fontWeight: 600 },
});

const classes = useStyles();
classes.root;
classes.label;
```

### Strongly typed props

```tsx
type StyleProps = {
  active: boolean;
};

const useStyles = makeStyles<unknown, StyleProps>({
  root: {
    opacity: (props) => (props.active ? 1 : 0.5),
  },
});

function Item() {
  const classes = useStyles({ active: true });
  return <div className={classes.root}>Item</div>;
}
```

### Theme type

```tsx
import type { Theme } from 'mui-styles';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
}));
```

## Troubleshooting

### `makeStyles` returns empty classes

Check that `StylesProvider` is not using `disableGeneration` and that your component is rendered in the browser or collected with `ServerStyleSheets` on the server.

### Theme is empty inside `makeStyles((theme) => ...)`

Wrap your app with `ThemeProvider`:

```tsx
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'mui-styles';

const theme = createTheme();

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>;
```

### Styles are injected after MUI/Emotion styles

Use `injectFirst`:

```tsx
<StylesProvider injectFirst>
  <App />
</StylesProvider>
```

### Server-side styles are missing

Use `ServerStyleSheets` and inject the collected CSS in the server-rendered HTML.

### Unexpected duplicate styles in development

React development mode may mount components more than once. The registry and sheet cleanup are designed to avoid stale sheets, but custom JSS instances should still be stable between renders.

## Notes

This library keeps a JSS API for compatibility. Material UI's current styling stack is Emotion, `sx`, and MUI System. For existing JSS code, `mui-styles` reduces migration cost while keeping TypeScript types and SSR helpers.

## Sponsor

Sponsored by [MultiBase Studio](https://multibasestudio.com/), a desktop client for SQL, NoSQL, and cloud databases. Connect PostgreSQL, MySQL, MongoDB, Redis, SQLite, and 40+ engines from one Windows, macOS, or Linux app.

## Development

This repository uses [pnpm](https://pnpm.io) 10 (Node.js `>=18.12`). Corepack can activate the version pinned in `package.json`.

```bash
pnpm install
pnpm test
pnpm build
```

## License

MIT
