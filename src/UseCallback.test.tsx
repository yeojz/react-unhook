import * as React from 'react';
import { render } from 'react-testing-library';
import UseCallback from './UseCallback';

test('should call props.fn on mounting', (): void => {
  const fn = jest.fn();
  render(<UseCallback fn={fn} />);
  expect(fn).toBeCalledTimes(1);
});

test('should call props.fn only if inputs change', (): void => {
  const fn = jest.fn();
  const { rerender } = render(<UseCallback fn={fn} inputs={[1]} />);
  expect(fn).toBeCalledTimes(1);

  rerender(<UseCallback fn={fn} inputs={[1]} />);
  expect(fn).toBeCalledTimes(1);

  rerender(<UseCallback fn={fn} inputs={[2]} />);
  expect(fn).toBeCalledTimes(2);
});

test('should call props.fn again even if props get omitted or added', (): void => {
  const fn = jest.fn();
  const { rerender } = render(<UseCallback fn={fn} />);
  expect(fn).toBeCalledTimes(1);

  rerender(<UseCallback fn={fn} inputs={[1]} />);
  expect(fn).toBeCalledTimes(2);

  rerender(<UseCallback fn={fn} />);
  expect(fn).toBeCalledTimes(3);
});
