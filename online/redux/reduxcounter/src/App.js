import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  useSelector((ele)=>console.log(ele))
  return (
    <>
      <button>+</button>
        0
      <button>-</button>
    </>
  );
}

export default App;
