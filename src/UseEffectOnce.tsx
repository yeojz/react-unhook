import * as React from 'react';
import UseEffect from './UseEffect';

interface Props {
  fn: () => void;
}

const UseEffectOnce: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  return <UseEffect fn={props.fn} inputs={[]} />;
};

export default UseEffectOnce;
