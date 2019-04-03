import React from 'react';
import UseEffect from './UseEffect';
import { EqualityFn } from './utils';

interface Props {
  fn: () => void;
  time: number;
}

export default class UseInterval extends React.Component<Props> {
  run = () => {
    this.props.fn();
  };

  render() {
    return (
      <UseEffect
        fn={() => {
          const t = setInterval(this.run, this.props.time);

          return () => {
            clearInterval(t);
          };
        }}
        inputs={[]}
      />
    );
  }
}
