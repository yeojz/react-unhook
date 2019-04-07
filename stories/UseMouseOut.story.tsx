/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import withState from './withState';
import UseMouseOut from '../src/UseMouseOut';

function Example(props) {
  const { count, setCount } = props;

  return (
    <div>
      <p>{`Leave count: ${count}`}</p>

      <UseMouseOut
        fn={() => {
          setCount(count + 1);
        }}
        target={() => document}
      />
    </div>
  );
}

const PageExample = withState('count', 'setCount', 0)(Example);

class ElementExample extends React.Component {
  state = {
    count: 0
  };

  elem = void 0;

  constructor(props) {
    super(props);

    this.elem = React.createRef();
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{`Leave count: ${this.state.count}`}</p>

        <div
          ref={this.elem}
          style={{
            background: '#333',
            color: '#fff',
            height: '100px',
            padding: '1em',
            width: '100px'
          }}
        >
          Move in an out of this box.
        </div>

        <UseMouseOut
          fn={() => {
            this.increment();
          }}
          target={() => this.elem.current}
        />
      </div>
    );
  }
}

storiesOf('UI|UseMouseOut', module)
  .add('Full page', () => <PageExample />)
  .add('Specifc element', () => <ElementExample />);
