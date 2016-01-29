import React, { PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import * as _actions from '../actions';

const Counter = ({
  value,
  actions,
}) => {
  return (
    <div>
      <button onClick={() => { actions.decrement() }}>{'-'}</button>
      <div>{value}</div>
      <button onClick={() => { actions.increment() }}>{'+'}</button>
    </div>
  );
};
Counter.propTypes = { counter: PropTypes.number };

export default branch(Counter, {
  cursors: {
    value: ['counter']
  },
  actions: {
    increment: _actions.increment,
    decrement: _actions.decrement,
  }
});
