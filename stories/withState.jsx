import { createFactory, Component } from 'react';

const withState = (
  stateName,
  stateUpdaterName,
  initialState
) => BaseComponent => {
  const factory = createFactory(BaseComponent);

  class WithState extends Component {
    state = {
      stateValue: initialState
    };

    updateStateValue = (value, callback) => {
      this.setState(
        () => ({
          stateValue: value
        }),
        callback
      );
    };

    render() {
      return factory({
        ...this.props,
        [stateName]: this.state.stateValue,
        [stateUpdaterName]: this.updateStateValue
      });
    }
  }

  return WithState;
};

export default withState;
