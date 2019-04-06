/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withState from './withState';
import UseTimeout from '../src/UseTimeout';

function Example(props) {
  const { state, setState } = props;
  const time = 5000;

  return (
    <div>
      <p>{`Called: ${state}`}</p>
      <p>{`(updates to "yes" after ${time}ms)`}</p>

      <UseTimeout
        fn={() => {
          setState('yes');
        }}
        time={time}
      />
    </div>
  );
}

const Demo = withState('state', 'setState', 'no')(Example);

storiesOf('2. Additional|UseTimeout', module).add('Timer', () => <Demo />);
