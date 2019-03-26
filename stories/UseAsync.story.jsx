import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { compose, withState, withProps } from 'recompose';
import UseAsync from '../src/UseAsync';

const createFn = num => {
  let count = 0;

  return () =>
    new Promise(resolve => {
      setTimeout(() => {
        count = count + 1;
        resolve(`Call ${num} Resolved #${count}`);
      }, 1000);
    });
};

const fn1 = createFn(1);
const fn2 = createFn(2);

const DemoBase = props => {
  return (
    <div style={{ padding: '1em' }}>
      <div>
        {props.state.loading ? 'Loading' : `Value: ${props.state.value}`}
      </div>

      <div style={{ padding: '1em 0' }}>
        <button onClick={props.handleClick}>Increment Counter</button>
      </div>

      <UseAsync fn={props.fn} deps={props.deps} updater={props.setState} />
    </div>
  );
};

const Demo1 = compose(
  withState('state', 'setState', {}),
  withState('counter', 'setCounter', 0),
  withProps(props => ({
    fn: fn1,
    deps: [props.counter],
    handleClick: () => {
      const counter = props.counter + 1;
      action('setCounter')(counter);
      props.setCounter(counter);
    }
  }))
)(DemoBase);

const Demo2 = compose(
  withState('state', 'setState', {}),
  withState('counter', 'setCounter', 0),
  withProps(props => ({
    fn: fn2,
    deps: [],
    handleClick: () => {
      const counter = props.counter + 1;
      action('setCounter')(counter);
      props.setCounter(counter);
    }
  }))
)(DemoBase);

storiesOf('UseAsync', module)
  .add('with deps', () => {
    return <Demo1 />;
  })
  .add('without deps', () => {
    return <Demo2 />;
  });
