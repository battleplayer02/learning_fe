import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import './App.css';
import Signup from './components/Signup';
import ContextWrapper from './context/ContextWrapper';
function App() {
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
  );
}
export default App;
