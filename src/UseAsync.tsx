import * as React from 'react';
import UseCallback from './UseCallback';
import { CommonProps, SetState } from './utils';

type Props = CommonProps & {
  updater: SetState;
};

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
        deps={this.props.deps}
        comparator={this.props.comparator}
      />
    );
  }
}
