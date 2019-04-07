import * as React from 'react';
import { render } from 'react-testing-library';
import UseMount from './UseMount';

test('should call fn when mounting', (): void => {
  const fn = jest.fn();
  render(<UseMount fn={fn} />);

  expect(fn).toBeCalledTimes(1);
});
