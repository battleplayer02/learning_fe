import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Signin from './components/Signin';
import Signup from './components/Signup';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        {/* Routing  */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}