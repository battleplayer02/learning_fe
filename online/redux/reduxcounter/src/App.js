import logo from './logo.svg';
import './App.css';
import { incNumber } from './actions/action';
import {useDispatch,useSelector} from "react-redux"


function App() {
  let count = useSelector((state) => state.ChangeNum)
  const dispatch = useDispatch();
  function handleInc() {
    console.log("increment call");
    dispatch(incNumber())
  }
  return (
    <>
      <button onClick={handleInc}>+</button>
        {count}
      <button>-</button>
    </>
  );
}

export default App;
