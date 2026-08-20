import * as React from "react";
import clsx from "clsx";
import PropTypes, { InferProps } from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";
import makeStyles from "../makeStyles";
import chainPropTypes from "./utils";
import { CreateCSSProperties } from "../withStyles/interface";
import { DefaultTheme } from "../defaultTheme";
import { OptionsProps, Component } from "./interface";
import { isProduction } from "../env";

function omit(input: any, fields: any) {
  const output: any = {};

  Object.keys(input).forEach((prop) => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });

  return output;
}
// Using components as a low-level styling construct can be simpler.
export default function styled<
  Theme = DefaultTheme,
  Props extends {} = React.ComponentPropsWithoutRef<Component>
>(Component: Component) {
  const componentCreator = (
    style:
      | CreateCSSProperties<Props>
      | ((props: { theme: Theme } & Props) => CreateCSSProperties<Props>),
    options: OptionsProps<Theme> = {}
  ) => {
    const { name, ...stylesOptions } = options;
    const { displayName }: any = Component;
    let { filterProps, propTypes }: any = style;

    let classNamePrefix = name;

    const stylesOrCreator =
      typeof style === "function"
        ? (theme: any) => ({ root: (props: any) => style({ theme, ...props }) })
        : { root: style };

    const useStyles = makeStyles(stylesOrCreator, {
      Component,
      name: name || displayName,
      classNamePrefix,
      ...stylesOptions,
    });

    let styleFilterProps: string[] | undefined;
    let stylePropTypes: InferProps<object> = {};

    if (filterProps) {
      styleFilterProps = filterProps;
      filterProps = undefined;
    }
    if (propTypes) {
      stylePropTypes = propTypes;
      propTypes = undefined;
    }

    const StyledComponent = React.forwardRef(function StyledComponent(
      props: any,
      ref: React.Ref<any>
    ): React.ReactElement {
      const {
        children,
        className: classNameProp,
        clone,
        component: ComponentProp,
        ...other
      } = props;
      const classes = useStyles(props);
      const className = clsx(classes.root, classNameProp);

      let spread = other;
      if (styleFilterProps) {
        spread = omit(spread, styleFilterProps);
      }

      if (clone) {
        return React.cloneElement(children, {
          className: clsx(children.props.className, className),
          ...spread,
        });
      }

      if (typeof children === "function") {
        return children({ className, ...spread });
      }

      const FinalComponent = ComponentProp || Component;

      return (
        <FinalComponent ref={ref} className={className} {...spread}>
          {children}
        </FinalComponent>
      );
    });

    hoistNonReactStatics(StyledComponent, Component as React.ComponentType<any>);

    if (!isProduction()) {
      StyledComponent.propTypes = {
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        className: PropTypes.string,
        clone: chainPropTypes(PropTypes.bool, (props: any) => {
          if (props.clone && props.component) {
            return Error(
              "You can not use the clone and component prop at the same time."
            );
          }
          return null;
        }),
        component: PropTypes.elementType,
        ...stylePropTypes,
      };
    }

    return StyledComponent;
  };
  return componentCreator;
}
