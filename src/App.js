import React, { useReducer } from 'react';
import './style.css';

const initialState = { x: 0 };

function reducer(state = initialState, action) {
  console.log(action);
  if (action.type === '+') return { x: state.x + 1 };
  if (action.type === '-') return { x: state.x - 1 };
  if (action.type === '0') return { x: 0 };
  if (action.type === '1000') return { x: 1000 };
  if (action.type === '2000') return { x: 2000 };
  return state;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //  console.log(state)

  const p1 = () => {
    dispatch({ type: '+' });
  };
  const p2 = () => {
    dispatch({ type: '-' });
  };
  const p3 = () => {
    dispatch({ type: '0' });
  };
  const p4 = () => {
    dispatch({ type: '1000' });
  };
  const p5 = () => {
    dispatch({ type: '2000' });
  };

  return (
    <div>
      <h1>counter : {state.x}</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
      <button onClick={p4}>1000</button>
      <button onClick={p5}>2000</button>
    </div>
  );
}
