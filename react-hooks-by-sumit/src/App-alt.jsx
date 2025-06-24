import React, { useReducer } from 'react';
import ComplexCounter from './components/ComplexCounter';
import Counter from './components/Counter1';
import Counter3 from './components/Counter3';
import ComponentA from './components/ComponentA';

export const counterContext =
  React.createContext();

const initialState = 0;
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
function App() {
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <>
      {/* <Counter />
      <ComplexCounter />
      <Counter3 /> */}

      <div>Count: {count}</div>
      <counterContext.Provider
        value={{ countDispatch: dispatch }}
      >
        <ComponentA />
      </counterContext.Provider>
    </>
  );
}

export default App;
