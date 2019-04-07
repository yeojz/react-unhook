import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import UseMouseOut from './UseMouseOut';

test('event should call props.fn when target match', (): void => {
  const fn = jest.fn();

  const { baseElement } = render(
    <UseMouseOut fn={fn} target={(): HTMLElement => document.body} />
  );

  fireEvent.mouseOut(baseElement);
  expect(fn).toBeCalledTimes(1);
});

test('event should NOT call props.fn when target mismatch', (): void => {
  const fn = jest.fn();

  const { getByTestId } = render(
    <div>
      <UseMouseOut fn={fn} target={(): HTMLElement => document.body} />
      <div data-testid="div-element" />
    </div>
  );

  fireEvent.mouseOut(getByTestId('div-element'));
  expect(fn).toBeCalledTimes(0);
});
