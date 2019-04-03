import React from 'react';
import UseEffect from './UseEffect';
import { EqualityFn } from './utils';

interface Props {
  fn: () => void;
  time: number;
}

export default class UseTimeout extends React.Component<Props> {
  run = () => {
    this.props.fn();
  };

  render() {
    return (
      <UseEffect
        fn={() => {
          const t = setTimeout(this.run, this.props.time);
          return () => {
            clearTimeout(t);
          };
        }}
        inputs={[]}
      />
    );
  }
}
