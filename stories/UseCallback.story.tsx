import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withState from './withState';
import UseCallback from '../src/UseCallback';

function Example(props: any) {
  const { count, setCount } = props;

  return (
    <div>
      <p>Update {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Prop</button>

      <UseCallback
        fn={() => {
          action('AlwaysCallback')(`You clicked ${count} times`);
        }}
      />
    </div>
  );
}

function ConditionalExample(props: any) {
  const { count, setCount } = props;

  return (
    <div>
      <p>Update {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Prop</button>

      <p>Action log should only fire once</p>

      <UseCallback
        fn={() => {
          action('ConditionalCallback')(`You clicked ${count} times`);
        }}
        inputs={[]}
      />
    </div>
  );
}

const AlwaysCallbackDemo = withState('count', 'setCount', 0)(Example);
const ConditionalCallbackDemo = withState('count', 'setCount', 0)(
  ConditionalExample
);

storiesOf('1. Core|UseCallback', module)
  .add('Always Callback', () => <AlwaysCallbackDemo />)
  .add('Conditional Callback', () => <ConditionalCallbackDemo />);
