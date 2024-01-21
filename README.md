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
    width: "100vw",
    height: "100vh",
    padding: 0,
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
  container: {
    width: "100vw",
    height: "100vh",
    padding: 0,
  },
  [theme.breakpoints.down('md')]: {
    container: {
      width: 100
    },
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      width: 300
    },
  },
  [theme.breakpoints.down('xs')]: {
    container: {
      width: 500
    },
  }
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
  borderRadius: 5,
  padding: 15,
  textAlign: "center",
  maxWidth: 200,
});

export default function StyledComponents() {
  return <MuiCard>Styled with card</MuiCard>;
}
```

With styles component

```javascript
import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'mui-styles';

const useStyles = {
  container: {
    width: "100vw",
    height: "100vh",
    padding: 0,
  },
};

function WithStylesComponent(props) {
  const { classes } = props;
  return <div className={classes.container}>With styles component</div>;
}

WithStylesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(WithStylesComponent);
```

## Authors

- [@blencm](https://www.github.com/blencm)
