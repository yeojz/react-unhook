import React, { FunctionComponent } from 'react';
import UseEffect from './UseEffect';

interface Props {
  fn: () => void;
}

const UseEffectOnce: FunctionComponent<Props> = props => {
  return <UseEffect fn={props.fn} inputs={[]} />;
};

export default UseEffectOnce;
