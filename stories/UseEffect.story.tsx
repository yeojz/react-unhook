/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withState from './withState';
import UseEffect from '../src/UseEffect';
import withDemoHelper from './withDemoHelper';

const { Fragment } = React;

function Example(props) {
  const { count, setCount, called, setCalled } = props;

  return (
    <div>
      <p>Update: {count}</p>
      <p>Function Called: {called}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>

      <p>
        {`(Use "<UseEffectOnUpdate>" instead if you want "Function Called" to start from 0)`}
      </p>

      <UseEffect
        fn={() => {
          setCalled(called + 1);
        }}
        inputs={[count]}
      />
    </div>
  );
}

const Demo = withDemoHelper(Example);

function WithoutCleanup(props) {
  const { count, setCount } = props;

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <UseEffect
        fn={() => {
          action('EffectsWithoutCleanup')(`You clicked ${count} times`);
        }}
      />
    </div>
  );
}

const EffectsWithoutCleanupDemo = withState('count', 'setCount', 0)(
  WithoutCleanup
);

const ChatAPI = {
  subscribeToFriendStatus: (id: number, handleStatusChange: Function) => {
    action('EffectsWithCleanup')(`Subscribed ${id}`);
    handleStatusChange({ isOnline: true });
  },
  unsubscribeFromFriendStatus: (id: number, handleStatusChange: Function) => {
    action('EffectsWithCleanup')(`Unsubscribed ${id}`);
    handleStatusChange({ isOnline: false });
  }
};

function FriendStatus(props) {
  const { isOnline, setIsOnline } = props;
  return (
    <Fragment>
      {isOnline === null ? 'Loading' : isOnline ? 'Online' : 'Offline'}

      <UseEffect
        fn={() => {
          function handleStatusChange(status) {
            setIsOnline(status.isOnline);
          }

          ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
          // Specify how to clean up after this effect:
          return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(
              props.friend.id,
              handleStatusChange
            );
          };
        }}
        inputs={[props.friend.id]}
      />
    </Fragment>
  );
}

const EffectsWithCleanup = withState('isOnline', 'setIsOnline', null)(
  FriendStatus
);

const EffectsWithCleanupDemo = withState('friendID', 'setFriendID', 1)(
  props => {
    return (
      <Fragment>
        <EffectsWithCleanup friend={{ id: props.friendID }} />
        <label>Friend ID</label>
        <br />
        <input
          value={props.friendID}
          onChange={evt => props.setFriendID(evt.target.value)}
          type="number"
        />
      </Fragment>
    );
  }
);

storiesOf('Core|UseEffect', module)
  .add('Demo', () => <Demo />)
  .add('Effects Without Cleanup', () => <EffectsWithoutCleanupDemo />)
  .add('Effects With Cleanup', () => <EffectsWithCleanupDemo />);
