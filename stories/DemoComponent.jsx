import React from 'react';
import { compose, withState, withProps } from 'recompose';

const DemoBase = props => {
  const { options = {} } = props;

  return (
    <div className="demo">
      <table>
        <tbody>
          {!options.disableOne && (
            <tr>
              <th>Counter #1</th>
              <td>
                {!options.disableOneBtn && (
                  <button onClick={() => props.increment('counterOne')}>
                    Click
                  </button>
                )}{' '}
                {props.counterOne}
              </td>
            </tr>
          )}
          {!options.disableTwo && (
            <tr>
              <th>Counter #2</th>
              <td>
                {!options.disableTwoBtn && (
                  <button onClick={() => props.increment('counterTwo')}>Click</button>
                )}{' '}
                {props.counterTwo}
              </td>
            </tr>
          )}
          <tr>
            <th>Params</th>
            <td colSpan={2}>{props.component(props)}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{JSON.stringify(props.state, null, 2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default compose(
  withState('state', 'setState', {}),
  withState('counterOne', 'counterOneSet', 0),
  withState('counterTwo', 'counterTwoSet', 0),
  withProps(props => ({
    increment: key => {
      const counter = props[key] + 1;
      props[`${key}Set`](counter);
    }
  }))
)(DemoBase);
