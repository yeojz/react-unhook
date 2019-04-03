import * as React from 'react';
import UseCallback from './UseCallback';
import { EqualityFn, Noop, noop } from './utils';

interface Props {
  fn: () => void | Noop;
  inputs?: Array<any>;
  comparator?: EqualityFn;
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
