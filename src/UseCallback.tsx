import * as React from 'react';
import { CommonProps, areHookInputsEqual } from './utils';

type Props = CommonProps;

export default class UseCallback extends React.Component<Props> {
  componentDidMount() {
    this.props.fn();
  }

  shouldComponentUpdate(nextProps: Props) {
    const { inputs: prevDeps = null } = this.props;
    const {
      comparator = areHookInputsEqual,
      inputs: nextDeps = null
    } = nextProps;

    if (nextDeps === null) {
      return true;
    }

    return !comparator(nextDeps, prevDeps);
  }

  componentDidUpdate() {
    this.props.fn();
  }

  render() {
    return null;
  }
}
