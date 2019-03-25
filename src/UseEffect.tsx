import { Component } from 'react';
import {
  ArrayComparator,
  shallowEqualArrays,
  shouldUpdate,
  AnyFunction
} from './utils';

type Props = {
  fn: AnyFunction;
  inputs: Array<any>;
  isEqual: ArrayComparator;
};

export default class UseCallback extends Component<Props> {
  static defaultProps = {
    inputs: [],
    isEqual: shallowEqualArrays
  };

  static runner(props) {
    props.fn();
  }

  componentDidMount() {
    UseCallback.runner(this.props);
  }

  shouldComponentUpdate(nextProps: Props) {
    return shouldUpdate(this.props.inputs, nextProps.inputs, nextProps.isEqual);
  }

  componentDidUpdate() {
    UseCallback.runner(this.props);
  }

  render() {
    return null;
  }
}
