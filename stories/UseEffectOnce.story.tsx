/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withDemoHelper from './withDemoHelper';
import UseEffectOnce from '../src/UseEffectOnce';

function Example(props) {
  const { count, setCount, called, setCalled } = props;

  return (
    <div>
      <p>Update: {count}</p>
      <p>Function Called: {called}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>

      <UseEffectOnce
        fn={() => {
          setCalled(called + 1);
        }}
      />
    </div>
  );
}

const Demo = withDemoHelper(Example);

storiesOf('Lifecycle|UseEffectOnce', module).add('Demo', () => <Demo />);
