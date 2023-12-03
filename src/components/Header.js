import React from 'react';
import Logo from '../assets/Logo.svg';
import Nav from './Nav';

const Header = () => {
 return (
  <header className='header'>
   <section className = 'header-section'>
    <img src = {Logo} alt = 'logo of the site' />
    <Nav />
   </section>
  </header>
 )
}
export default Header;