/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withState from './withState';
import UseUnmount from '../src/UseUnmount';

const { Fragment } = React;

function Example(props) {
  const { mounted, setMounted } = props;

  return (
    <div>
      {mounted && (
        <Fragment>
          <button onClick={() => setMounted(false)}>Unmount the component.</button>
          <p>Upon mounting, an action will fire.</p>
        </Fragment>
      )}

      {mounted && (
        <UseUnmount
          fn={() => {
            action('UseUnmount')('unmounted');
          }}
        />
      )}
    </div>
  );
}

const Demo = withState('mounted', 'setMounted', true)(Example);

storiesOf('Lifecycle|UseUnmount', module).add('Demo', () => <Demo />);
