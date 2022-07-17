import './App.css';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <header>
        <h1>Pousada e Apartamentos Águia Azul</h1>
        <nav>
          <Link className={ pathname === '/' ? "link active" : 'link' } to="/">
            Home
          </Link>
          <Link className={ pathname === '/about' ? "link active" : 'link' } to="/about">
            Sobre nós
          </Link>
          <Link className={ pathname === '/galery' ? "link active" : 'link' } to="/galery">
            Galeria
          </Link>
          <Link className={ pathname === '/prices' ? "link active" : 'link' } to="/prices">
            Valores e pacotes
          </Link>
          <Link className={ pathname === '/maps' ? "link active" : 'link' } to="/maps">
            Localização
          </Link>
          <Link className={ pathname === '/rules' ? "link active" : 'link' } to="/rules">
            Políticas da empresa
          </Link>
          <Link className={ pathname === '/reservations' ? "link active" : 'link' } to="/reservations">
            Faça sua reserva
          </Link>
        </nav>
      </header>
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route path="/about" element={ <AboutUs /> } />
        <Route path="/galery" element={ <Main /> } />
        <Route path="/prices" element={ <Main /> } />
        <Route path="/maps" element={ <Main /> } />
        <Route path="/rules" element={ <Main /> } />
        <Route path="/reservations" element={ <Main /> } />
      </Routes>
      <footer>
        <h3>Pousada e Apartamentos Águia Azul</h3>
        <p>E-mail: aguiaazulreservas@gmail.com</p>
        <p>Telefones</p>
        <p>(13) 9 8203 0438</p>
        <p>(13) 9 9669 7525</p>
      </footer>
    </div>
  );
}

export default App;
