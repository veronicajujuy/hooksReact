import useCounter from "./hooks/useCounter";

const HooksApp = ({ initialValue }) => {
  const { counter, increment, reset, decrement } = useCounter(initialValue);

  return (
    <>
      <h1>Aplicación de Hooks</h1>
      <h2>Contador: {counter}</h2>
      <button onClick={() => increment()} className="btn btn-primary">
        +
      </button>
      <button onClick={() => reset()} className="btn btn-danger">
        Reset
      </button>
      <button onClick={() => decrement()} className="btn btn-primary">
        -
      </button>
    </>
  );
};

export default HooksApp;
