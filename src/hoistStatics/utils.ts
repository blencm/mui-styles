const REACT_ELEMENT_TYPE: symbol = Symbol.for("react.element");
const REACT_PORTAL_TYPE: symbol = Symbol.for("react.portal");
const REACT_FRAGMENT_TYPE: symbol = Symbol.for("react.fragment");
const REACT_STRICT_MODE_TYPE: symbol = Symbol.for("react.strict_mode");
const REACT_PROFILER_TYPE: symbol = Symbol.for("react.profiler");
const REACT_PROVIDER_TYPE: symbol = Symbol.for("react.provider");
const REACT_CONTEXT_TYPE: symbol = Symbol.for("react.context");
const REACT_SERVER_CONTEXT_TYPE: symbol = Symbol.for(
  "react.server_context"
);
const REACT_FORWARD_REF_TYPE: symbol = Symbol.for("react.forward_ref");
const REACT_SUSPENSE_TYPE: symbol = Symbol.for("react.suspense");
const REACT_SUSPENSE_LIST_TYPE: symbol = Symbol.for(
  "react.suspense_list"
);
const REACT_MEMO_TYPE: symbol = Symbol.for("react.memo");
const REACT_LAZY_TYPE: symbol = Symbol.for("react.lazy");


export function typeOf(object: any): any {
  if (typeof object === "object" && object !== null) {
    const $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        const type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;
          default:
            const $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

export function isMemo(object: any): boolean {
  return typeOf(object) === REACT_MEMO_TYPE;
}
export const ForwardRef = REACT_FORWARD_REF_TYPE;

export const Memo = REACT_MEMO_TYPE;