import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
 return (
   <nav className="nav">
    <ul className="nav-links">
     <li><Link to = "/" className="link">Home</Link></li>
     <li><Link to = "/about" className="link">About</Link></li>
     <li><Link to = "/menu" className="link">Menu</Link></li>
     <li><Link to = "/bookingpage" className="link">Reservations</Link></li>
     <li><Link to = "/order-online" className="link">Order Online</Link></li>
     <li><Link to = "/login" className="link">Login</Link></li>
   </ul>
   </nav>
 );
}

export default Nav;