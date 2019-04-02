import React from 'react';
import UseEffect from './UseEffect';
import { CommonProps } from './utils';

interface Props extends CommonProps {
  fn: (error: PositionError | null, data: Position | null) => void;
  watch?: boolean;
  options?: PositionOptions;
}

export default class UseGeolocation extends React.Component<Props> {
  handleSuccess: PositionCallback = (evt: Position) => {
    this.props.fn(null, {
      coords: {
        accuracy: evt.coords.accuracy,
        altitude: evt.coords.altitude,
        altitudeAccuracy: evt.coords.altitudeAccuracy,
        heading: evt.coords.heading,
        latitude: evt.coords.latitude,
        longitude: evt.coords.longitude,
        speed: evt.coords.speed
      },
      timestamp: evt.timestamp
    });
  };

  handleError: PositionErrorCallback = (err: PositionError) => {
    this.props.fn(err, null);
  };

  render() {
    return (
      <UseEffect
        fn={() => {
          let watchID: number;

          const { watch = false, options = {} } = this.props;

          navigator.geolocation.getCurrentPosition(
            this.handleSuccess,
            this.handleError,
            options
          );

          if (watch) {
            watchID = navigator.geolocation.watchPosition(
              this.handleSuccess,
              this.handleError,
              options
            );
          }

          return () => {
            navigator.geolocation.clearWatch(watchID);
          };
        }}
        inputs={[]}
        comparator={this.props.comparator}
      />
    );
  }
}
