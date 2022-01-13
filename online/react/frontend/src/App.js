import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';


export default function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}