/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withState from './withState';
import UseInterval from '../src/UseInterval';

function Example(props) {
  const { count, setCount } = props;
  const time = 1000;

  return (
    <div>
      <p>{`Count: ${count}`}</p>
      <p>{`(updates every ${time}ms)`}</p>

      <UseInterval
        fn={() => {
          setCount(count + 1);
        }}
        time={time}
      />
    </div>
  );
}

const Demo = withState('count', 'setCount', 0)(Example);

storiesOf('2. Additional|UseInterval', module).add('Demo', () => <Demo />);
