import { decreement, increment } from "./redux/feature/Counter/CounterSlice";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";

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
        <Button onClick={()=>hadleIncrement(1)}>Increement</Button>
        <Button onClick={()=>hadleIncrement(5)}>Increement by 5</Button>
        <h5>Count:{Count}</h5>
        <Button onClick={hadleDecrement}>Decrement</Button>
      </div>
    </>
  );
}

export default App;
