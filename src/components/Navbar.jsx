// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Climate Action</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tips">Tips</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/events">Upcoming Events</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
