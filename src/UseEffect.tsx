import * as React from 'react';
import UseCallback from './UseCallback';
import { CommonProps, Noop, noop } from './utils';

interface Props extends CommonProps {
  fn: () => Noop | void;
}

export default class UseEffect extends React.Component<Props> {
  unsub: Noop = noop;

  componentWillUnmount() {
    this.unsub();
  }

  callback = () => {
    this.unsub();
    this.unsub = this.props.fn() || noop;
  };

  render() {
    return (
      <UseCallback
        fn={this.callback}
        inputs={this.props.inputs}
        comparator={this.props.comparator}
      />
    );
  }
}
