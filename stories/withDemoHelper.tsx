import withState from './withState';
import compose from './compose';

export default compose(
  withState('count', 'setCount', 0),
  withState('called', 'setCalled', 0)
);
