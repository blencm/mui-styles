import * as React from "react";
import { WithStylesOptions } from "../withStyles/interface";

export type OptionsProps<Theme> =
  | {
      name?: string;
    }
  | WithStylesOptions<Theme>;

export interface StyledProps {
  className: string;
}

export type Component = React.ElementType<any>;
