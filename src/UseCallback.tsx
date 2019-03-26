import * as React from 'react';
import { CommonProps, shallowEqualArrays } from './utils';

type Props = CommonProps;

export default class UseCallback extends React.Component<Props> {
  componentDidMount() {
    this.props.fn();
  }

  shouldComponentUpdate(nextProps: Props) {
    const { deps = [] } = this.props;

    if (deps.length < 1) {
      return false;
    }

    const { comparator = shallowEqualArrays, deps: nextDeps = [] } = nextProps;
    return !comparator(deps, nextDeps);
  }

  componentDidUpdate() {
    this.props.fn();
  }

  render() {
    return null;
  }
}
