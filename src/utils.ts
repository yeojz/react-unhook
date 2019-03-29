import * as warning from 'warning';

const IS_DEV = process.env.NODE_ENV === 'development';

export interface AnyFn {
  (...args: Array<any>): void;
}

export interface InputsComparator {
  (nextDeps: Array<any>, prevDeps: Array<any> | null): boolean;
}

/**
 * Interface for setState
 */
export interface SetState {
  (value: Object | Function, callback?: Function): void;
}

/**
 * Common Props for "Use*" components
 */
export interface CommonProps {
  fn: AnyFn;
  inputs?: Array<any>;
  comparator?: InputsComparator;
}

export interface Noop {
  (): void;
}

/**
 * Object.is
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 *
 * @param x
 * @param y
 * @returns boolean
 */
export const objectIs = (x: any, y: any): boolean => {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

/**
 * Compares 2 arrays using Object.is comparison on their values
 * Adapted from react-dom/src/server/ReactPartialRendererHooks.js
 *
 * @param nextDeps
 * @param prevDeps
 *
 * @returns boolean
 */
export function areHookInputsEqual(
  nextDeps: Array<any>,
  prevDeps: Array<any> | null
) {
  if (prevDeps === null) {
    if (IS_DEV) {
      warning(
        false,
        '%s received an "inputs" props during this render, but ' +
          'not during the previous render. Even though "inputs" prop is optional, ' +
          'its type cannot change between renders.',
        'A react-unhook component'
      );
    }
    return false;
  }

  if (IS_DEV) {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      warning(
        false,
        'The "inputs" props passed to %s changed size between renders. The ' +
          'order and size of this array must remain constant.\n\n' +
          'Previous: %s\n' +
          'Incoming: %s',
        'a react-unhook component',
        `[${nextDeps.join(', ')}]`,
        `[${prevDeps.join(', ')}]`
      );
    }
  }

  return nextDeps.every((value, idx) => objectIs(value, prevDeps[idx]));
}
