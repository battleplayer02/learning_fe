import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
