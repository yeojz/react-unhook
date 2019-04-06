import * as React from 'react';
import { render, wait } from 'react-testing-library';
import UseTimeout from './UseTimeout';

test('should call props.fn after timeout', async (): Promise<void> => {
  const fn = jest.fn();
  render(<UseTimeout fn={fn} time={50} />);

  expect(fn).toHaveBeenCalledTimes(0);

  await wait(
    (): void => {
      expect(fn).toHaveBeenCalledTimes(1);
    }
  );
});
