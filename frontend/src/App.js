import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import Maps from './pages/Maps';
import Rules from './pages/Rules';
import Nav from './components/Nav';
import Prices from './pages/Prices';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pousada e Apartamentos Águia Azul</h1>
        <Nav />
      </header>
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route path="/about" element={ <AboutUs /> } />
        <Route path="/galery" element={ <Main /> } />
        <Route path="/prices" element={ <Prices /> } />
        <Route path="/maps" element={ <Maps /> } />
        <Route path="/rules" element={ <Rules /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
      <footer>
        <h3>Pousada e Apartamentos Águia Azul</h3>
        <p>E-mail: aguiaazulreservas@gmail.com</p>
        <p>Telefones</p>
        <p>(13) 9 8203 0438</p>
        <p>(13) 9 9669 7525</p>
        <p>CNPJ: 17457952/0001-31</p>
        <Link className="link" to="/contact">Fale conosco</Link>
      </footer>
    </div>
  );
}

export default App;
