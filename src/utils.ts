export interface AnyFunction {
  (...args: any[]): void;
}

export interface ArrayComparator {
  (a: Array<any>, b: Array<any>): boolean;
}

export interface SetState {
  (value: any, callback?: () => void);
}

/**
 * Shallow compares 2 arrays using strict equals.
 *
 * @param a
 * @param b
 *
 * @returns boolean
 */
export const shallowEqualArrays: ArrayComparator = (
  a: Array<any>,
  b: Array<any>
): boolean => {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  return a.every((value, idx) => value === b[idx]);
};

/**
 * Compares current inputs and next inputs and determine if
 * component should update.
 *
 * @param currentInputs
 * @param nextInputs
 * @param isEqual
 *
 * @returns boolean
 */
export const shouldUpdate = (
  currentInputs: Array<any>,
  nextInputs: Array<any>,
  isEqual: ArrayComparator
): boolean => {
  if (currentInputs.length < 1) {
    return false;
  }

  return isEqual(currentInputs, nextInputs);
};
