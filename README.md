# react-unhook

> React hooks without hooks. Collection of hook-like components.

<!-- TOC depthFrom:2 -->

- [Motivation](#motivation)
- [Caveat Emptor](#caveat-emptor)
- [Usage](#usage)
- [Example](#example)
  - [Effects Without Cleanup](#effects-without-cleanup)
  - [Effects With Cleanup](#effects-with-cleanup)
- [API Reference](#api-reference)
  - [UseCallback](#usecallback)
  - [UseEffect](#useeffect)
- [Notes](#notes)
  - [Optimizing Performance by Skipping Effects / Callbacks](#optimizing-performance-by-skipping-effects--callbacks)
- [License](#license)

<!-- /TOC -->

## Motivation

[React Hooks](https://reactjs.org/docs/hooks-intro.html) are a new addition to React 16.8 and it
changes the way we have been approaching React components. It addresses many of the reasons why we might
need to choose a `class` component over `functional` component.

`react-unhook` attempts to emulate some of the functionality and stylistic aspect of react hooks,
packaging it into a standalone component **without** the use of react-hook under-the-hook.

**Use Case**: In the event the project you're on is not ready to adopt hooks, this library provides
a possible middle-ground for a hook-like structure.

## Caveat Emptor

This library provides an alternative idea based on `hooks` but does not aim to replace it.
I would still suggest adopting hooks instead where possible.

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

The unhook examples makes use of `withState` HOC to keep
the code style closer to the `hooks` examples. You can easily manage your state
using a normal class.

Examples are also available at [http://yeojz.github.io/react-unhook](http://yeojz.github.io/react-unhook)

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

const Component = withState('count', 'setCount', 0)(Example);
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
  const { isOnline } = props;

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

const Component = withState('isOnline', 'setIsOnline', null)(FriendStatus);
```

## API Reference

### UseCallback

```jsx
<UseCallback fn={FUNCTION} />
<UseCallback fn={FUNCTION} inputs={[]} /> // Conditionally firing an callback
```

### UseEffect

The difference between `UseEffect` and `UseCallback` is that the function
passed into `UseEffect` may return a "clean-up" function which will be executed on unmount.

```jsx
<UseEffect fn={FUNCTION} />
<UseEffect fn={FUNCTION} inputs={[]} /> // Conditionally firing an effect
```

## Notes

### Optimizing Performance by Skipping Effects / Callbacks

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

## License

`react-unhook` is [MIT licensed](./LICENSE)
