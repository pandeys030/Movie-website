// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">CineFlix</h1>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Movies</li>
        <li>My List</li>
        <li>Join Now</li>
      </ul>
    </div>
  );
};

export default Navbar;
