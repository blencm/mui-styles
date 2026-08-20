import type * as React from 'react';
import type { WithStylesOptions } from '../withStyles/interface';

export type OptionsProps<Theme> =
  | {
      name?: string;
    }
  | WithStylesOptions<Theme>;

export type Component = React.ElementType<any>;
