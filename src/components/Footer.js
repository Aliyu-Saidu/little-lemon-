import React from "react";
import Nav from "./Nav";
import Logo from '../assets/Logo.svg';

const Footer = () => {
 return (
  <footer className="footer">
   <img src = {Logo} alt = 'logo of the site' />
   <Nav />
  </footer>
 );
}

export default Footer;