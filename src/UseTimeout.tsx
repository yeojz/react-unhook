import React, { FunctionComponent } from 'react';
import { UseEffect } from '.';
import { CommonProps } from './utils';

interface Props extends CommonProps {
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
        comparator={this.props.comparator}
      />
    );
  }
}
