import * as React from 'react';
import { render, wait } from 'react-testing-library';
import UseInterval from './UseInterval';

test('should call props.fn at every interval', async (): Promise<void> => {
  const fn = jest.fn();
  const { unmount } = render(<UseInterval fn={fn} time={50} />);

  const next = async (count: number): Promise<void> =>
    await wait(
      (): void => {
        expect(fn).toBeCalledTimes(count);
      }
    );

  await next(1);
  await next(2);
  unmount();

  await next(2);
});
