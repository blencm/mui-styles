## mui-styles 

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)


Material UI v5 and later versions

## Install

Using npm:

```sh
npm install mui-styles
```

### Usage Example

```javascript
import * as React from "react";
import { makeStyles } from "mui-styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20
  },
});

export default function App() {
  const classes = useStyles();
  return <div className={classes.container}>Hello world</div>;
}
```
MakeStyles with theme

```javascript
import * as React from "react";
import { makeStyles, Theme } from "mui-styles";

const useStyles = makeStyles((theme: Theme) => ({
    width: "100%",
    height: 100,
    padding: 10,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 20,
}));

export default function App() {
  const classes = useStyles();
  return <div className={classes.container}>Hello world</div>;
}
```

Styled components

```javascript
import * as React from "react";
import { styled } from "mui-styles";
import { Card } from "@mui/material";

const MuiCard = styled(Card)({
  maxWidth: 300,
  borderRadius: 20,
  padding: 15,
  margin: 20,
  textAlign: "center"
});

export default function StyledComponents() {
  return <MuiCard>Styled with card</MuiCard>;
}
```

## Authors

- [@blencm](https://www.github.com/blencm)
