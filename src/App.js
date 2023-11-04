import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/templates/Footer';
import Navbar from './components/templates/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
