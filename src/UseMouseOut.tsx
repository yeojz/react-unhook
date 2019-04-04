import React from 'react';
import UseEffect from './UseEffect';

interface Props {
  fn: () => void;
  target: () => HTMLElement | Document | Window;
  capture?: boolean;
}

export default class UseMouseOut extends React.Component<Props> {
  handler = (evt: MouseEvent): void => {
    const target = this.props.target();

    if (
      target &&
      (target == evt.target || target === document || target === window)
    ) {
      this.props.fn();
    }
  };

  render() {
    return (
      <UseEffect
        fn={() => {
          const options: EventListenerOptions = {
            capture: this.props.capture
          };

          window.addEventListener('mouseout', this.handler, options);

          return () => {
            window.removeEventListener('mouseout', this.handler, options);
          };
        }}
        inputs={[]}
      />
    );
  }
}
