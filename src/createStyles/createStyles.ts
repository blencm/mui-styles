import { StyleRules } from "../withStyles/interface";

export default function createStyles<ClassKey extends string, Props extends {}>(
  styles: StyleRules<Props, ClassKey>
) {
  return styles;
}
