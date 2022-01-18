import logo from 'img/gerbera.png';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header id="headBox">
      <h1><Link to="/"><img src={logo} alt="사이트이름" /></Link></h1>
      <nav className='gnb'>
        <NavLink to="/">home</NavLink> 
          { ' | ' }    
        <NavLink to="about">about</NavLink>
      </nav>
    </header>
  )
}

export default Header;
