import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ContextWrapper from './context/ContextWrapper';

export default function App() {
  return (
    <ContextWrapper>
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
    </ContextWrapper>
  );
}