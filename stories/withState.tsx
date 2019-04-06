import * as React from 'react';

const withState = (
  stateName: string,
  stateUpdaterName: string,
  initialState: any
) => (BaseComponent: React.ComponentType<any>) => {
  return class HOCWithState extends React.Component<any> {
    state = {
      stateValue: initialState
    };

    updateStateValue = (value: any, callback?: () => void) => {
      this.setState(() => ({ stateValue: value }), callback);
    };

    render() {
      const props = {
        ...this.props,
        [stateName]: this.state.stateValue,
        [stateUpdaterName]: this.updateStateValue
      };

      return <BaseComponent {...props} />;
    }
  };
};

export default withState;
