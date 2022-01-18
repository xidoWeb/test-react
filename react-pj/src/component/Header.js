import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header id="headBox">
      <h1>header</h1>
      <nav className='gnb'>
        <NavLink to="/">home</NavLink> 
          { ' | ' }    
        <NavLink to="about">about</NavLink>
      </nav>
    </header>
  )
}

export default Header;
