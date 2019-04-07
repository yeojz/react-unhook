import * as React from 'react';
import { render } from 'react-testing-library';
import UseEffectOnUpdate from './UseEffectOnUpdate';

test('should call props.fn only when  inputs change', (): void => {
  const fn = jest.fn();
  const { rerender } = render(<UseEffectOnUpdate fn={fn} inputs={[1]} />);
  expect(fn).toHaveBeenCalledTimes(0);

  rerender(<UseEffectOnUpdate fn={fn} inputs={[1]} />);
  expect(fn).toHaveBeenCalledTimes(0);

  rerender(<UseEffectOnUpdate fn={fn} inputs={[2]} />);
  expect(fn).toHaveBeenCalledTimes(1);
});
