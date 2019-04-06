export const noop = () => void 0;

export interface EqualityFn {
  (nextDeps: Array<any>, prevDeps: Array<any> | null): boolean;
}

/**
 * Noop function
 */
export type Noop = () => void;

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
    return false;
  }

  return nextDeps.every((value, idx) => objectIs(value, prevDeps[idx]));
}
