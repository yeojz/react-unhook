import { objectIs } from './utils';

describe('objectIs', (): void => {
  test('works with primitives', (): void => {
    expect(objectIs()).toBeTruthy();
    expect(objectIs(undefined)).toBeTruthy();
    expect(objectIs(undefined, undefined)).toBeTruthy();
    expect(objectIs(null, null)).toBeTruthy();
    expect(objectIs(true, true)).toBeTruthy();
    expect(objectIs(false, false)).toBeTruthy();

    expect(objectIs(true, false)).toBeFalsy();
  });

  test('works with NaN', (): void => {
    expect(objectIs(NaN, NaN)).toBeTruthy();
  });

  test('differentiates zeroes', (): void => {
    expect(objectIs(0, 0)).toBeTruthy();
    expect(objectIs(-0, -0)).toBeTruthy();

    expect(objectIs(0, -0)).toBeFalsy();
  });

  test('nonzero numbers', (): void => {
    expect(objectIs(Infinity, Infinity)).toBeTruthy();
    expect(objectIs(-Infinity, -Infinity)).toBeTruthy();
    expect(objectIs(42, 42)).toBeTruthy();

    expect(objectIs(42, -42)).toBeFalsy();
  });

  test('strings', (): void => {
    expect(objectIs('', '')).toBeTruthy();
    expect(objectIs('foo', 'foo')).toBeTruthy();

    expect(objectIs('foo', 'bar')).toBeFalsy();
  });

  test('objects', (): void => {
    var obj = {};
    expect(objectIs(obj, obj)).toBeTruthy();

    expect(objectIs(obj, {})).toBeFalsy();
  });

  test('Symbols', (): void => {
    expect(objectIs(Symbol.iterator, Symbol.iterator)).toBeTruthy();

    expect(objectIs(Symbol(), Symbol())).toBeFalsy();
    expect(objectIs(Symbol.iterator, Object(Symbol.iterator))).toBeFalsy();
  });
});
