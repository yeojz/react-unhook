import * as React from 'react';
import { storiesOf } from '@storybook/react';
import UseAsync, { UseAsyncState } from '../UseAsync';
import { AnyFunction } from '../utils';

const fn = () =>
  new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('RESOLVED');
    }, 1000);
  });

class Demo extends React.Component<{}, UseAsyncState> {
  state = {
    loading: true,
    value: null
  };

  updateState = (state: any, fn: AnyFunction) => {
    this.setState(state, fn);
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div>Value: {this.state.value}</div>
        )}

        <UseAsync fn={fn} sync={this.updateState} />
      </div>
    );
  }
}

storiesOf('Side effects|useAsync', module).add('Demo', () => <Demo />);
