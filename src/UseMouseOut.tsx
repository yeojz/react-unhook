import * as React from 'react';
import UseEffect from './UseEffect';
import { VoidFn } from './utils';

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
      (target === evt.target || target === document || target === window)
    ) {
      this.props.fn();
    }
  };

  render(): JSX.Element {
    return (
      <UseEffect
        fn={(): VoidFn => {
          const options: EventListenerOptions = {
            capture: this.props.capture
          };

          window.addEventListener('mouseout', this.handler, options);

          return (): void => {
            window.removeEventListener('mouseout', this.handler, options);
          };
        }}
        inputs={[]}
      />
    );
  }
}
