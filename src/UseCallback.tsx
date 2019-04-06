import * as React from 'react';
import { EqualityFn, areHookInputsEqual } from './utils';

interface Props {
  fn: () => void;
  inputs?: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  comparator?: EqualityFn;
}

export default class UseCallback extends React.Component<Props> {
  componentDidMount(): void {
    this.props.fn();
  }

  shouldComponentUpdate(nextProps: Props): boolean {
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

  componentDidUpdate(): void {
    this.props.fn();
  }

  render(): null {
    return null;
  }
}
