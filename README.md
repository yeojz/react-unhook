<!-- markdownlint-disable MD033 -->
<p align="center"><img src="./assets/react-unhook-logo.png" /></p>
<!-- markdownlint-enable MD033 -->

# react-unhook

> React hooks without hooks - a collection of hook-like Null Components

[![npm][npm-badge]][npm-link]
[![Build Status][circle-badge]][circle-link]
[![Coverage Status][codecov-badge]][codecov-link]
[![TypeScript Support][type-ts-badge]][type-ts-link]

<!-- TOC depthFrom:2 -->

- [About](#about)
- [Motivation](#motivation)
- [Limitations](#limitations)
- [Use Case](#use-case)
- [Usage](#usage)
- [Example](#example)
  - [Demo / Storybook](#demo--storybook)
  - [Effects Without Cleanup](#effects-without-cleanup)
  - [Effects With Cleanup](#effects-with-cleanup)
  - [Optimizing Performance](#optimizing-performance)
- [API Reference](#api-reference)
  - [Core](#core)
    - [UseEffect](#useeffect)
    - [UseCallback](#usecallback)
  - [Lifecycle](#lifecycle)
    - [UseEffectOnUpdate](#useeffectonupdate)
    - [UseEffectOnce](#useeffectonce)
    - [UseMount](#usemount)
    - [UseUnmount](#useunmount)
  - [Timing](#timing)
    - [UseInterval](#useinterval)
    - [UseTimeout](#usetimeout)
  - [Sensors](#sensors)
    - [UseGeolocation](#usegeolocation)
  - [UI](#ui)
    - [UseMouseOut](#usemouseout)
- [License](#license)

<!-- /TOC -->

## About

`react-unhook` attempts to emulate some of the functionality and segmentation aspect of react hooks,
packaging it into a standalone "Null Components" (components that render `null`) **without** the
use of React hooks under-the-hood.

(Note: This is not about avoiding hooks. Just an alternative to some of it).

## Motivation

[React Hooks](https://reactjs.org/docs/hooks-intro.html) are a new addition to React 16.8 and it
changes the way we have been approaching React components, formalising new ways of encapsulating logic
in our components.

Taking inspiration of that, we can make use of the existing lifecycle methods to achive some
behaviours of React hooks via Null Components. This allows us to achieve similar code style
and logic encapsulation of React hooks, aside from low-level / library optimization of hooks.

## Limitations

With that said, there are some limitations to this Null Component pattern. **Stateful hooks (eg: "useReducer")
cannot be emulated easily** as we are not able to expose functions of the component without resorting
to anti-patterns (eg: using `React.createRef` to access component methods).

However, this Null Component pattern works well for "listeners", "workers" or
"value-change triggers" (triggering of a function after a change in value).
eg: geolocation, timeouts, data fetching etc.

## Use Case

```jsx
// Imagine that you have a signup form that on certain value change,
// we want to fetch things or asynchronously set values
// Using "Null Components" we can declaratively define those effects.

function SignupForm(props) {
  return (
    <Fragment>
      <Input name="input-one" />
      <Input name="input-two" />
      <Input name="input-three" />

      <FetchWhenInputOneIsFilled name="action-one" />
      <ValidateWhenTwoIsDirty name="action-two" />
      <UpdateInputThreeWhenTwoIsValid name="action-three" />
    </Fragment>
  );
}
```

## Usage

```bash
npm install react-unhook --save
```

```js
import { UseCallback, UseEffect } from 'react-unhook';
```

## Example

These examples are adopted from React's official docs on hooks.
i.e. [https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html)

The unhook examples makes use of `withState` HOC ([1][with-state-local], [2][with-state-recompose]) to
keep the code style closer to the `hooks` examples. You can also manage your state
using a normal class.

### Demo / Storybook

Examples are also available at [http://yeojz.github.io/react-unhook][project-docs-link]

### Effects Without Cleanup

Using Hooks:

```jsx
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Using Unhook:

```jsx
function Example(props) {
  // assumes you're using withState HOC.
  // eg: withState('count', 'setCount', 0)(Example);
  const { count, setCount } = props;

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <UseEffect
        fn={() => {
          document.title = `You clicked ${count} times`;
        }}
      />
    </div>
  );
}
```

### Effects With Cleanup

Using Hooks:

```jsx
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

Using Unhook:

```jsx
function FriendStatus(props) {
  // withState('isOnline', 'setIsOnline', null)(FriendStatus);
  const { isOnline, setIsOnline } = props;

  return (
    <Fragment>
      {isOnline === null ? 'Loading' : isOnline ? 'Online' : 'Offline'}

      <UseEffect
        fn={() => {
          function handleStatusChange(status) {
            setIsOnline(status.isOnline);
          }

          ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
          // Specify how to clean up after this effect:
          return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(
              props.friend.id,
              handleStatusChange
            );
          };
        }}
      />
    </Fragment>
  );
}
```

### Optimizing Performance

Using Hook:

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

Using Unhook:

```jsx
<UseEffect
  fn={() => {
    document.title = `You clicked ${count} times`;
  }}
  inputs={[count]}
/>
```

## API Reference

**Note:** The comparator function, by default, follows React Hook's `areHookInputsEqual` method,
which uses `Object.is` to compare the values in the array.

All unhook components make use of `UseCallback` and `UseEffect` at their core.

Many of the components are inspired by hooks from [react-use](https://github.com/streamich/react-use),
but re-implmented using react-unhook's `<UseEffect />` instead of actual React Hooks.

### Core

#### UseEffect

Component which emulates `useEffect` hook.

```ts
interface Props {
  fn: () => void | Noop;
  inputs?: Array<any>;
  comparator?: EqualityFn;
}
```

#### UseCallback

The difference between `UseEffect` and `UseCallback` is that the function passed
into `UseEffect` may return a "clean-up" function which will be executed when unmounting
the component. In most cases, you can just utilise `UseEffect`.

```ts
interface Props {
  fn: () => void;
  inputs?: Array<any>;
  comparator?: EqualityFn;
}
```

### Lifecycle

#### UseEffectOnUpdate

Only runs the callback when inputs change and not during mounting.

```ts
interface Props {
  fn: () => void | VoidFn;
  inputs: any[]; // unlike UseEffect, this is required.
  comparator?: EqualityFn;
}
```

#### UseEffectOnce

Alias method using `UseEffect` with `prop.inputs` preset to `[]`

```ts
interface Props {
  fn: () => void;
}
```

#### UseMount

Calls a function when the component is mounted

```ts
interface Props {
  fn: () => void;
}
```

#### UseUnmount

Calls a function when the component will unmount.

```ts
interface Props {
  fn: () => void;
}
```

### Timing

#### UseInterval

Calls the function at every specified interval (in milliseconds),
eg: Polling.

```ts
interface Props {
  fn: () => void;
  time: number;
}
```

#### UseTimeout

Calls the function after the specified wait time (in milliseconds)

```ts
interface Props {
  fn: () => void;
  time: number;
}
```

### Sensors

#### UseGeolocation

Tracks user's geographic location.

```ts
interface Props {
  fn: (
    error: GeolocationPositionError | null,
    data: GeolocationPosition | null
  ) => void;
  watch?: boolean;
  options?: PositionOptions;
}
```

### UI

#### UseMouseOut

Fires a callback when mouse leaves target element.

```ts
interface Props {
  fn: () => void;
  target: () => HTMLElement | Document | Window;
  capture?: boolean;
}
```

## License

`react-unhook` is [MIT licensed](./LICENSE)

[npm-badge]: https://img.shields.io/npm/v/react-unhook.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/react-unhook
[circle-badge]: https://img.shields.io/circleci/project/github/yeojz/react-unhook/master.svg?style=flat-square
[circle-link]: https://circleci.com/gh/yeojz/react-unhook
[type-ts-badge]: https://img.shields.io/badge/typedef-.d.ts-blue.svg?style=flat-square&longCache=true
[type-ts-link]: https://github.com/yeojz/react-unhook/tree/master/src/index.ts
[codecov-badge]: https://img.shields.io/codecov/c/github/yeojz/react-unhook/master.svg?style=flat-square
[codecov-link]: https://codecov.io/gh/yeojz/react-unhook
[project-docs-link]: https://yeojz.github.io/react-unhook
[with-state-local]: https://github.com/yeojz/react-unhook/blob/master/stories/withState.tsx
[with-state-recompose]: https://github.com/acdlite/recompose/blob/master/docs/API.md#withstate
