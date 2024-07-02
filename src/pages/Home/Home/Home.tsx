import { decrement, increment } from "../../../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

const Home = () => {
    const { count } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
      <div >
        <div >
          <button
            onClick={() => dispatch(decrement(2))}
            
          >
            Decrement
          </button>
          <h1>{count}</h1>
          <button
            onClick={() => dispatch(increment({ value: 2 }))}
            
          >
            Increment
          </button>
        </div>
      </div>
    );
};

export default Home;