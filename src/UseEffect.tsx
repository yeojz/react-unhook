import * as React from 'react';
import UseCallback from './UseCallback';
import { EqualityFn, VoidFn, noop } from './utils';

interface Props {
  fn: () => void | VoidFn;
  inputs?: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  comparator?: EqualityFn;
}

export default class UseEffect extends React.Component<Props> {
  unsub: VoidFn = noop;

  componentWillUnmount(): void {
    this.unsub();
  }

  callback = (): void => {
    this.unsub();
    this.unsub = this.props.fn() || noop;
  };

  render(): JSX.Element {
    return (
      <UseCallback
        fn={this.callback}
        inputs={this.props.inputs}
        comparator={this.props.comparator}
      />
    );
  }
}
