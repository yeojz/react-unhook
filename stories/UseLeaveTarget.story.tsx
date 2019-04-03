import React from 'react';
import { storiesOf } from '@storybook/react';
import withState from './withState';
import UseLeaveTarget from '../src/UseLeaveTarget';

function Example(props: any) {
  const { count, setCount } = props;

  return (
    <div>
      <p>{`Leave count: ${count}`}</p>

      <UseLeaveTarget
        fn={() => {
          setCount(count + 1);
        }}
        target={document}
      />
    </div>
  );
}

const Demo = withState('count', 'setCount', 0)(Example);

storiesOf('2. Additional|UseLeaveTarget', module).add('Demo', () => <Demo />);
