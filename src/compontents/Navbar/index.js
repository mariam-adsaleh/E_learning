import React from 'react';
import './index.css'; // Import the CSS file for styling
// import { Button } from 'react-bootstrap';
import Button from '../Button/index.js';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_basic_html">Home</a></li>
        <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_basic_html">About</a></li>
        <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_basic_html">Courses</a></li>
        <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_basic_html">Contact Us</a></li>
      </ul>
      <Button label="Login" onClick={() => { /* Handle login button click */ }} />

    </nav>
  );
}

export default Navbar;
