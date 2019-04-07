import * as React from 'react';
import UseEffectOnce from './UseEffectOnce';
import { VoidFn } from './utils';

interface Props {
  fn: () => void;
}

const UseUnmount: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  return <UseEffectOnce fn={(): VoidFn => props.fn} />;
};

export default UseUnmount;
