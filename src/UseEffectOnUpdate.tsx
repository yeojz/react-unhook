import * as React from 'react';
import UseEffect from './UseEffect';
import { EqualityFn, VoidFn } from './utils';

interface Props {
  fn: () => void | VoidFn;
  inputs: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  comparator?: EqualityFn;
}

interface State {
  mounted: boolean;
}

export default class UseEffectOnUpdate extends React.Component<Props, State> {
  state = {
    mounted: false
  };

  callback = (): void => {
    if (this.state.mounted) {
      this.props.fn();
      return;
    }

    this.setState({ mounted: true });
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
