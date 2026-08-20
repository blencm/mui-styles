import { getDisplayName } from "@mui/utils";
import hoistNonReactStatics from "hoist-non-react-statics";
import * as React from "react";
import getThemeProps from "../getThemeProps";
import makeStyles from "../makeStyles";
import useTheme from "../useTheme";
import { WithStylesOptions } from "./interface";
import { isProduction } from "../env";

const withStyles =
  <P extends object>(stylesOrCreator: any, options: WithStylesOptions = {}) =>
  (Component: React.ComponentType<P>) => {
    const { defaultTheme, withTheme = false, name } = options;
    const stylesOptions = { ...options };

    if (!isProduction()) {
      if (Component === undefined) {
        throw new Error(
          [
            "You are calling withStyles(styles)(Component) with an undefined component.",
            "You may have forgotten to import it.",
          ].join("\n")
        );
      }
    }

    let classNamePrefix = name;

    if (!isProduction()) {
      if (!name) {
        const displayName = getDisplayName(Component);
        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    const useStyles = makeStyles(stylesOrCreator, {
      defaultTheme,
      Component,
      name: name || Component.displayName,
      classNamePrefix,
      ...stylesOptions,
    });

    const WithStyles1 = React.forwardRef(function WithStyles(
      props: any,
      ref: React.Ref<any>
    ) {
      const classes = useStyles({
        ...("defaultProps" in Component ? Component.defaultProps : {}),
        ...props,
      });
      let more = props;

      if (typeof name === "string" || withTheme) {
        const theme = useTheme() || defaultTheme;

        if (name) {
          more = getThemeProps({
            theme,
            name,
            props,
          });
        }

        if (withTheme && !more.theme) {
          more = { ...more, theme };
        }
      }

      return <Component ref={ref} classes={classes} {...more} />;
    });

    if (!isProduction()) {
      WithStyles1.displayName = `WithStyles(${getDisplayName(Component)})`;
    }

    hoistNonReactStatics(WithStyles1, Component);

    return WithStyles1;
  };

export default withStyles;
