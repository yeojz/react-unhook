import * as React from 'react';
import { render } from 'react-testing-library';
import UseEffect from './UseEffect';

test('should call unsub when unmounting', (): void => {
  const unsub = jest.fn();
  const fn = jest.fn((): jest.Mock<unknown> => unsub);
  const { unmount } = render(<UseEffect fn={fn} />);

  unmount();

  expect(unsub).toBeCalledTimes(1);
});

test('should unsub from prev and re-sub when new inputs', (): void => {
  const unsub = jest.fn();
  const fn = jest.fn((): jest.Mock<unknown> => unsub);

  const { rerender } = render(<UseEffect fn={fn} inputs={[1]} />);
  expect(unsub).not.toBeCalled();

  rerender(<UseEffect fn={fn} inputs={[2]} />);
  expect(unsub).toBeCalledTimes(1);
});

test('should not fail unsub if props.fn does not return a function', (): void => {
  const fn = jest.fn();

  const test = (): void => {
    const { rerender } = render(<UseEffect fn={fn} inputs={[1]} />);
    rerender(<UseEffect fn={fn} inputs={[2]} />);
  };

  expect(test).not.toThrow();
});
