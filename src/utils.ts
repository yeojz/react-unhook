export const noop = (): void => void 0;

export interface EqualityFn {
  (
    nextDeps: any[], // eslint-disable-line @typescript-eslint/no-explicit-any
    prevDeps: any[] | null // eslint-disable-line @typescript-eslint/no-explicit-any
  ): boolean;
}

/**
 * Function that returns void
 */
export type VoidFn = () => void;

/**
 * Object.is
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 *
 * @param x
 * @param y
 * @returns boolean
 */
export const objectIs = (
  x: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  y: any // eslint-disable-line @typescript-eslint/no-explicit-any
): boolean => {
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
