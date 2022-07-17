import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  return (
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
      <Link className={ pathname === '/contact' ? "link active" : 'link' } to="/contact">
        Fale conosco
      </Link>
    </nav>
  )
}

export default Nav;
