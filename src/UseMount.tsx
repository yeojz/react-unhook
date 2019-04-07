import * as React from 'react';
import UseEffectOnce from './UseEffectOnce';

interface Props {
  fn: () => void;
}

const UseMount: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  return <UseEffectOnce fn={props.fn} />;
};

export default UseMount;
