import * as React from 'react';
import { render } from 'react-testing-library';
import UseGeolocation from './UseGeolocation';

const mockPosition: Position = {
  get coords(): Coordinates {
    return {
      get accuracy(): number {
        return 1;
      },
      get altitude(): number {
        return 2;
      },
      get altitudeAccuracy(): number {
        return 3;
      },
      get heading(): number {
        return 4;
      },
      get latitude(): number {
        return 5;
      },
      get longitude(): number {
        return 6;
      },
      get speed(): number {
        return 7;
      }
    };
  },
  get timestamp(): number {
    return 1554615056899;
  }
};

const mockError: PositionError = {
  get code(): number {
    return 1;
  },
  get message(): string {
    return 'something went wrong';
  },
  get PERMISSION_DENIED(): number {
    return 1;
  },
  get POSITION_UNAVAILABLE(): number {
    return 2;
  },
  get TIMEOUT(): number {
    return 3;
  }
};

beforeEach(
  (): void => {
    // @ts-ignore
    navigator.geolocation = {
      clearWatch: jest.fn(),
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };
  }
);

test('should use getCurrentPosition correctly', (): void => {
  const fn = jest.fn();
  render(<UseGeolocation fn={fn} />);

  const { getCurrentPosition } = navigator.geolocation;
  expect(getCurrentPosition).toHaveBeenCalled();
});

test('should use watchPosition correctly', (): void => {
  const fn = jest.fn();
  render(<UseGeolocation fn={fn} watch />);

  const { watchPosition } = navigator.geolocation;
  expect(watchPosition).toHaveBeenCalled();
});

test('should clearWatch on unmount', (): void => {
  const fn = jest.fn();
  const { unmount } = render(<UseGeolocation fn={fn} watch />);

  unmount();

  const { clearWatch } = navigator.geolocation;
  expect(clearWatch).toHaveBeenCalled();
});

test('should call props.fn with expected success / failure', (): void => {
  const fn = jest.fn();
  render(<UseGeolocation fn={fn} />);

  expect(fn).toHaveBeenCalledTimes(0);
  const { getCurrentPosition } = navigator.geolocation;

  // @ts-ignore
  const [handleSuccess, handleError] = getCurrentPosition.mock.calls[0];

  handleSuccess(mockPosition);
  expect(fn).toHaveBeenCalledTimes(1);

  expect(fn).lastCalledWith(null, {
    coords: {
      accuracy: mockPosition.coords.accuracy,
      altitude: mockPosition.coords.altitude,
      altitudeAccuracy: mockPosition.coords.altitudeAccuracy,
      heading: mockPosition.coords.heading,
      latitude: mockPosition.coords.latitude,
      longitude: mockPosition.coords.longitude,
      speed: mockPosition.coords.speed
    },
    timestamp: mockPosition.timestamp
  });

  handleError(mockError);
  expect(fn).toHaveBeenCalledTimes(2);

  expect(fn).lastCalledWith(
    {
      code: mockError.code,
      message: mockError.message,
      type: UseGeolocation.ERROR_CODES[mockError.code]
    },
    null
  );
});
