import * as React from 'react';
import UseEffect from './UseEffect';
import { VoidFn } from './utils';

interface Props {
  fn: () => void;
  time: number;
}

export default class UseInterval extends React.Component<Props> {
  run = (): void => {
    this.props.fn();
  };

  render(): JSX.Element {
    return (
      <UseEffect
        fn={(): VoidFn => {
          const t = setInterval(this.run, this.props.time);

          return (): void => {
            clearInterval(t);
          };
        }}
        inputs={[]}
      />
    );
  }
}
