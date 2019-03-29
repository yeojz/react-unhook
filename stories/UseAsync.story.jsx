import React from 'react';
import { storiesOf } from '@storybook/react';
import DemoComponent from './DemoComponent';
import UseAsync from '../src/UseAsync';
const createPromiseFn = () => {
  let count = 0;

  return () =>
    new Promise(resolve => {
      setTimeout(() => {
        count = count + 1;
        resolve(`Resolved #${count}`);
      }, 1000);
    });
};

storiesOf('UseAsync', module).add('Demo', () => {
  const promiseFn = createPromiseFn();

  return (
    <DemoComponent
      component={props => (
        <div>
          <pre>
            {`
<UseAsync
  fn={promiseFn}
  inputs={[props.counterOne]}
  updater={props.setState}
/>
`}
          </pre>

          <UseAsync
            fn={promiseFn}
            inputs={[props.counterOne]}
            updater={props.setState}
          />
        </div>
      )}
    />
  );
});
