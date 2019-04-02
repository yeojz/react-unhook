import React, { FunctionComponent } from 'react';
import { UseEffect } from '.';
import { CommonProps } from './utils';

interface Props extends CommonProps {
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
          const interval = setInterval(this.run, this.props.time);
          return () => {
            clearInterval(interval);
          };
        }}
        inputs={[]}
        comparator={this.props.comparator}
      />
    );
  }
}
