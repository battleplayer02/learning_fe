import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Signin from './components/Signin';
export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        {/* Routing  */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}