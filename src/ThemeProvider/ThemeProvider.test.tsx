import * as React from "react";
import { describe, it } from "@jest/globals";
import makeStyles from "../makeStyles";

describe("ThemeProvider", () => {
  it("does not allow setting mui.nested manually", () => {
    const useStyles = makeStyles({ root: {} }, { name: "MuiTest" });
    function Component(props: any) {
      const classes = useStyles();

      return (
        <div {...props} className={classes.root}>
          Component
        </div>
      );
    }
  });
});
