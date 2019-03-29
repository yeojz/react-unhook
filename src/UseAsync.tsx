import * as React from 'react';
import UseCallback from './UseCallback';
import { CommonProps, SetState } from './utils';

interface Props extends CommonProps {
  updater: SetState;
}

export default class UseAsync extends React.Component<Props> {
  callback = () => {
    this.props.updater({ loading: true }, this.fetch);
  };

  fetch = async () => {
    const value = await this.props.fn();

    this.props.updater({
      loading: false,
      value
    });
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
