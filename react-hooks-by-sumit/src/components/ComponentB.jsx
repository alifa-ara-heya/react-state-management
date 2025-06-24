import { useContext } from 'react';
import { counterContext } from '../App';

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
      ></button>
      <button
        type="button"
        onClick={() =>
          countContext.countDispatch('decrement')
        }
      ></button>
    </div>
  );
};

export default ComponentB;
