import * as React from 'react';
import { render } from 'react-testing-library';
import UseEffectOnce from './UseEffectOnce';

test('should call props.fn once even when rerendering', (): void => {
  const fn = jest.fn();
  const { rerender } = render(<UseEffectOnce fn={fn} />);

  rerender(<UseEffectOnce fn={fn} />);
  expect(fn).toHaveBeenCalledTimes(1);
});
