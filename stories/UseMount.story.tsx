/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withState from './withState';
import UseMount from '../src/UseMount';

const { Fragment } = React;

function Example(props) {
  const { mounted, setMounted } = props;

  return (
    <div>
      {!mounted && (
        <Fragment>
          <button onClick={() => setMounted(true)}>Mount the component.</button>
          <p>Upon mounting, an action will fire.</p>
        </Fragment>
      )}

      {mounted && (
        <UseMount
          fn={() => {
            action('UseMount')('mounted');
          }}
        />
      )}
    </div>
  );
}

const Demo = withState('mounted', 'setMounted', false)(Example);

storiesOf('2. Additional|UseMount', module).add('Demo', () => <Demo />);
