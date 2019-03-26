export interface AnyFn {
  (...args: any[]): void;
}

export interface EqualityFn {
  (currentInputs: any[], nextInputs: any[]): boolean;
}

/**
 * Interface for setState
 */
export interface SetState {
  (value: unknown, callback?: () => void);
}

/**
 * Common Props for "Use*" components
 */
export type CommonProps = {
  fn: AnyFn;
  deps?: any[];
  comparator?: EqualityFn;
};

/**
 * Shallow compares 2 arrays using strict equals.
 *
 * @param a
 * @param b
 *
 * @returns boolean
 */
export const shallowEqualArrays: EqualityFn = (
  a: any[],
  b: any[]
): boolean => {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  return a.every((value, idx) => value === b[idx]);
};
