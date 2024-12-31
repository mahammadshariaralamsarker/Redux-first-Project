import { decreement, increment } from "./redux/feature/Counter/CounterSlice";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { Count } = useAppSelector((state: RootState) => state.Counter);
  const hadleIncrement = (amount:number) => {
    dispatch(increment(amount));
  };
  
  const hadleDecrement = () => {
    dispatch(decreement());
  };
  return (
    <>
      <h1>This is First Redux Project</h1>
      <p>Counter With Redux</p>
      <div>
        <button onClick={()=>hadleIncrement(1)}>Increement</button>
        <button onClick={()=>hadleIncrement(5)}>Increement by 5</button>
        <h5>Count:{Count}</h5>
        <button onClick={hadleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
