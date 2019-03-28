import * as React from 'react';
import UseCallback from './UseCallback';
import { CommonProps, Noop } from './utils';

interface Props extends CommonProps {
  fn: () => Noop;
}

type State = {
  unsub: Noop;
};

export default class UseEffect extends React.Component<Props, State> {
  state = {
    unsub: () => void 0
  };

  componentWillUnmount() {
    this.state.unsub();
  }

  callback = () => {
    this.state.unsub();
    this.setState({ unsub: this.props.fn() });
  };

  render() {
    return (
      <UseCallback
        fn={this.callback}
        deps={this.props.deps}
        comparator={this.props.comparator}
      />
    );
  }
}
