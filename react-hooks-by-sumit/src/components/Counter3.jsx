import { useReducer } from 'react';

const initialState = 0;
const initialState2 = 5;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const Counter3 = () => {
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [count2, dispatch2] = useReducer(
    reducer,
    initialState2
  );
  return (
    <div>
      <div>
        <div>Counter 3: {count}</div>
        <button
          type="button"
          onClick={() => dispatch('increment')}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch('decrement')}
        >
          Decrement
        </button>
      </div>

      <div>
        <div>Counter 4: {count2}</div>
        <button
          type="button"
          onClick={() => dispatch2('increment')}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch2('decrement')}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter3;
