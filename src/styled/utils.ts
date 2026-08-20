import PropTypes from 'prop-types';
import type { Validator } from 'prop-types';
import { isProduction } from '../env';

export default function chainPropTypes<A, B>(
  propType1: Validator<A>,
  propType2: Validator<B>,
): Validator<A & B> {
  if (isProduction()) {
    return (() => null) as Validator<A & B>;
  }

  return ((...args: Parameters<Validator<any>>) =>
    propType1(...args) || propType2(...args)) as Validator<A & B>;
}
