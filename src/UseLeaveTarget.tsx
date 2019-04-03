import React from 'react';
import UseEffect from './UseEffect';

interface Props {
  fn: () => void;
  target: HTMLElement | Window | Document;
}

export default class UseLeaveTarget extends React.Component<Props> {
  handler: EventListener = () => {
    this.props.fn();
  };

  render() {
    return (
      <UseEffect
        fn={() => {
          const { target } = this.props;
          target.addEventListener('mouseout', this.handler);

          return () => {
            target.removeEventListener('mouseout', this.handler);
          };
        }}
        inputs={[]}
      />
    );
  }
}
