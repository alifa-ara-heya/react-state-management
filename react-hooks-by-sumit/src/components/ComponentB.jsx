import { useContext } from 'react';
import { counterContext } from '../App-alt';

const ComponentB = () => {
  const countContext = useContext(counterContext);

  return (
    <div>
      <p>Component B</p>
      <button
        type="button"
        onClick={() =>
          countContext.countDispatch('increment')
        }
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() =>
          countContext.countDispatch('decrement')
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default ComponentB;
