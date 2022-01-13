import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import './App.css';
import Signup from './components/Signup';
import ContextWrapper from './context/ContextWrapper';
import { useLocalStorageState } from './UseLocalStorageHook';
function App() {
  // const [count, setCount] = useLocalStorageState('key', 0);
  // console.log(count);
  return (
    <ContextWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ContextWrapper>
    // <div>
    //   <button onClick={() => setCount(count + 1)}>+</button>
    //   {count}
    //   <button onClick={() => setCount(count - 1)}>-</button>
    // </div>
  );
}
export default App;
