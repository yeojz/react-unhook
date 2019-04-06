import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withState from './withState';
import UseGeolocation from '../src/UseGeolocation';
import compose from './compose';

const { Fragment } = React;

function Example(props: any) {
  const { mounted, setMounted, state, setState } = props;

  return (
    <div>
      <p>Result:</p>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      {!mounted && (
        <Fragment>
          <button onClick={() => setMounted(true)}>Mount the component.</button>
          <p>Upon mounting, the browser will ask for geolocation permissions</p>
        </Fragment>
      )}

      {mounted && (
        <UseGeolocation
          fn={(error, data) => {
            setState({
              data,
              error
            });
          }}
          watch={props.watch}
        />
      )}
    </div>
  );
}

const Demo = compose(
  withState('mounted', 'setMounted', false),
  withState('state', 'setState', {})
)(Example);

storiesOf('2. Additional|UseGeolocation', module)
  .add('No Watcher', () => <Demo />)
  .add('With Watcher', () => (
    <Fragment>
      <Demo watch />
      <p>
        <strong>Note:</strong> You'll need to use your browser devtools sensors
        to simulate location changes.
      </p>
    </Fragment>
  ));
