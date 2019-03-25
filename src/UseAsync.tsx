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
  sync: AnyFunction;
};

export type UseAsyncState = {
  loading: boolean;
  value: any;
};

export default class UseAsync extends Component<Props> {
  static defaultProps = {
    inputs: [],
    isEqual: shallowEqualArrays
  };

  static async runner(props) {
    const { sync } = props;

    const fn = async () => {
      const value = await props.fn();
      sync({
        loading: false,
        value
      });
    };

    sync({ loading: true }, fn);
  }

  componentDidMount() {
    UseAsync.runner(this.props);
  }

  shouldComponentUpdate(nextProps: Props) {
    return shouldUpdate(this.props.inputs, nextProps.inputs, nextProps.isEqual);
  }

  componentDidUpdate() {
    UseAsync.runner(this.props);
  }

  render() {
    return null;
  }
}
