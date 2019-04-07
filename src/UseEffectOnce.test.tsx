import * as React from 'react';
import { render } from 'react-testing-library';
import UseEffectOnce from './UseEffectOnce';

test('should call props.fn only once', (): void => {
  const fn = jest.fn();
  const { rerender } = render(<UseEffectOnce fn={fn} />);

  rerender(<UseEffectOnce fn={fn} />);
  expect(fn).toBeCalledTimes(1);
});
