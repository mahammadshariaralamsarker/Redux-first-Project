import { useDispatch } from "react-redux";
import { decreement, increment } from "./redux/feature/Counter/CounterSlice";

function App() {
  const dispatch = useDispatch();
  const hadleIncrement = () => {
    dispatch(increment())
  };
  const hadleDecrement = () => {
    dispatch(decreement())
  };
  return (
    <>
      <h1>This is First Redux Project</h1>
      <p>Counter With Redux</p>
      <div>
        <button onClick={hadleIncrement}>Increement</button>
        <h5>Count:0</h5>
        <button onClick={hadleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
