import * as React from 'react';
import { render } from 'react-testing-library';
import UseUnmount from './UseUnmount';

test('should call fn when unmounting', (): void => {
  const fn = jest.fn();
  const { unmount } = render(<UseUnmount fn={fn} />);

  unmount();

  expect(fn).toBeCalledTimes(1);
});
