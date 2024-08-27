import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './style.css'; // This file will contain the CSS for styling the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/selling-camera">Selling Camera</Link></li>
        <li><Link to="/buy-camera">Buy Camera</Link></li>
        <li><Link to="/services">Services</Link></li> 
      </ul>
      <div className="login-button">
        <Link to="/login">LOGIN</Link>
      </div>
    </nav>
  );
}

export default Navbar;
