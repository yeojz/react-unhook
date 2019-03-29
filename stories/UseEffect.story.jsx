import React from 'react';
import { storiesOf } from '@storybook/react';
import DemoComponent from './DemoComponent';
import UseEffect from '../src/UseEffect';

const fn = storiesOf('UseEffect', module).add('Demo', () => {
  return (
    <DemoComponent
      options={{
        disableOneBtn: true,
        disableTwo: true
      }}
      component={props => (
        <div>
          <pre>
            {`
function callback() {
  const interval = setInterval(() => props.increment('counterOne'), 1000);

  return () => {
    clearInterval(interval);
  }
}

<UseEffect fn={callback} />
`}
          </pre>
          <UseEffect
            fn={() => {
              const interval = setInterval(
                () => props.increment('counterOne'),
                1000
              );

              return () => {
                clearInterval(interval);
              };
            }}
          />
        </div>
      )}
    />
  );
});
