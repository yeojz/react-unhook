/**
 * Any function that returns undefined.
 */
export type VoidFn = () => void;

/**
 * Function that returns undefined
 */
export const noop = (): void => undefined;

/**
 * Object.is
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 *
 * @param x
 * @param y
 */
export const objectIs = (
  x?: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  y?: any // eslint-disable-line @typescript-eslint/no-explicit-any
): boolean => {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

/**
 * Interface for the comparator function
 */
export interface EqualityFn {
  (
    nextDeps: any[], // eslint-disable-line @typescript-eslint/no-explicit-any
    prevDeps: any[] | null // eslint-disable-line @typescript-eslint/no-explicit-any
  ): boolean;
}

/**
 * Compares 2 arrays using Object.is comparison on their values
 * Adapted from react-dom/src/server/ReactPartialRendererHooks.js
 *
 * @param nextDeps
 * @param prevDeps
 */
export function areHookInputsEqual(
  nextDeps: any[], // eslint-disable-line @typescript-eslint/no-explicit-any
  prevDeps: any[] | null // eslint-disable-line @typescript-eslint/no-explicit-any
): boolean {
  if (prevDeps === null) {
    return false;
  }

  return nextDeps.every(
    (value, idx): boolean => objectIs(value, prevDeps[idx])
  );
}
