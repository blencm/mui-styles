import * as React from 'react';

export interface Classes {
    [k: string]: string | undefined | null
}

export interface MergeClassesOption {
    baseClasses: Classes
    newClasses?: Classes | null
    Component?: React.ElementType | null | any;
}