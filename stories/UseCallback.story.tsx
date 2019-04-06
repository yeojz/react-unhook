import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withDemoHelper from './withDemoHelper';
import UseCallback from '../src/UseCallback';

function AlwaysExample(props: any) {
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
  const { count, setCount, called, setCalled } = props;

  return (
    <div>
      <p>Update: {count}</p>
      <p>Function called: {called}</p>

      <button onClick={() => setCount(count + 1)}>Update</button>

      <UseCallback
        fn={() => {
          setCalled(called + 1);
        }}
        inputs={[count]}
      />
    </div>
  );
}

function OnceOnceExample(props: any) {
  const { count, setCount, called, setCalled } = props;

  return (
    <div>
      <p>Update: {count}</p>
      <p>Function called: {called}</p>

      <button onClick={() => setCount(count + 1)}>Update</button>

      <UseCallback
        fn={() => {
          setCalled(called + 1);
        }}
        inputs={[]}
      />
    </div>
  );
}

const AlwaysDemo = withDemoHelper(AlwaysExample);
const ConditionalDemo = withDemoHelper(ConditionalExample);
const OnlyOnceDemo = withDemoHelper(OnceOnceExample);

storiesOf('1. Core|UseCallback', module)
  .add('Always Callback', () => <AlwaysDemo />)
  .add('Conditional Callback', () => <ConditionalDemo />)
  .add('Only Once Callback', () => <OnlyOnceDemo />);
