/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withDemoHelper from './withDemoHelper';
import UseEffectOnUpdate from '../src/UseEffectOnUpdate';

function Example(props) {
  const { count, setCount, called, setCalled } = props;

  return (
    <div>
      <p>Update: {count}</p>
      <p>Function Called: {called}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>

      <p>
        {`(Use "<UseEffect>" instead if you want "Function Called" to start from 1)`}
      </p>

      <UseEffectOnUpdate
        fn={() => {
          setCalled(called + 1);
        }}
        inputs={[count]}
      />
    </div>
  );
}

const Demo = withDemoHelper(Example);

storiesOf('2. Additional|UseEffectOnUpdate', module).add('Demo', () => (
  <Demo />
));
