export interface AnyFn {
  (...args: Array<any>): void;
}

export interface EqualityFn {
  (currentInputs: Array<any>, nextInputs: Array<any>): boolean;
}

/**
 * Interface for setState
 */
export interface SetState {
  (value: unknown, callback?: () => void): void;
}

/**
 * Common Props for "Use*" components
 */
export interface CommonProps {
  fn: AnyFn;
  deps?: Array<any>;
  comparator?: EqualityFn;
}

export interface Noop {
  (): void;
}

/**
 * Shallow compares 2 arrays using strict equals.
 *
 * @param a
 * @param b
 *
 * @returns boolean
 */
export const shallowEqualArrays: EqualityFn = (a: Array<any>, b: Array<any>): boolean => {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  return a.every((value, idx) => value === b[idx]);
};

export function objectIsPonyfill(x: any, y: any) => {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

export const objectIs = typeof Object.is === 'function' 
  ? Object.is
  : ObjectIsPonyFill

function areHookInputsEqual(
  nextDeps: Array<any>,
  prevDeps: Array<any> | null,
) {
   if (nextDeps.length !== prevDeps.length) {
    return false;
  }
    
  return nextDeps.every((value, idx) => objectIs(value, prevDeps[idx]))
}
