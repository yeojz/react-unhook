import * as React from 'react';
import UseEffect from './UseEffect';

export interface GeolocationPosition {
  coords: {
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
  };
  timestamp: number | null;
}

export interface GeolocationPositionError {
  code: number;
  message: string;
  type: 'PERMISSION_DENIED' | 'POSITION_UNAVAILABLE' | 'TIMEOUT' | void;
}

interface Props {
  fn: (
    error: GeolocationPositionError | null,
    data: GeolocationPosition | null
  ) => void;
  watch?: boolean;
  options?: PositionOptions;
}

export default class UseGeolocation extends React.Component<Props> {
  static ERROR_CODES = {
    1: 'PERMISSION_DENIED',
    2: 'POSITION_UNAVAILABLE',
    3: 'TIMEOUT'
  };

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
    this.props.fn(
      {
        code: err.code,
        message: err.message,
        type: UseGeolocation.ERROR_CODES[err.code]
      },
      null
    );
  };

  render() {
    return (
      <UseEffect
        fn={() => {
          let watchID: number;

          const { watch = false, options = {} } = this.props;

          if (watch) {
            watchID = navigator.geolocation.watchPosition(
              this.handleSuccess,
              this.handleError,
              options
            );
          } else {
            navigator.geolocation.getCurrentPosition(
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
      />
    );
  }
}
