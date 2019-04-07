import * as React from 'react';
import UseEffect from './UseEffect';
import { EqualityFn, VoidFn } from './utils';

interface Props {
  fn: () => void | VoidFn;
  inputs: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  comparator?: EqualityFn;
}

export default class UseEffectOnUpdate extends React.Component<Props> {
  mounted: boolean = false;

  callback = (): void | VoidFn => {
    if (this.mounted) {
      return this.props.fn();
    }

    this.mounted = true;
  };

  render(): JSX.Element {
    return (
      <UseEffect
        fn={this.callback}
        inputs={this.props.inputs}
        comparator={this.props.comparator}
      />
    );
  }
}
